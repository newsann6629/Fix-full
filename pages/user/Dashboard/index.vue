<template>
    <div class="bg-gray-200 w-full min-h-full">
        <div class="flex justify-center">
            <div class="bg-white p-6 mt-3 rounded-md">
                <div class="border-l-blue font-bold text-3xl mb-3">
                    ระบบประเมินบุคลากรออนไลน์
                </div>
                <div v-if="open" class="">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div v-for="f in form" :key="f.indicator_id" class="card">
                        <div class="">
                            <label for="" class="font-bold text-3xl">{{ f.indicator }}</label>
                            <div>
                                {{ f.section }}
                            </div>
                            <div class="label">
                                {{ f.detail }}
                                <div v-if="f.file" class="mb-2">
                                    <label for=""></label>
                                    <input type="file" name="" id="" class="input-field">
                                    <label for="" class="text-red-500">*ต้องแนบหลักฐาน</label>
                                </div>
                                <div v-if="!f.file">
                                    <input type="file" name="" id="" class="input-field">
                                    <label for="" class="text-green-500">*แนบหลักฐานได้ถ้ามี</label>
                                </div>
                                <div v-if="f.type == 1234">
                                    <div>
                                        <select name="" id="" class="input-field">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                        </select>
                                    </div>
                                </div>
                                <div v-if="f.type == 'yesno'" class="mt-3">
                                    <div class="grid grid-cols-2">
                                        <div>
                                            <label for="">ใช่ : </label>
                                            <input type="checkbox" name="" id="">
                                        </div>
                                        <div>
                                            <label for="">ไม่ใช่ : </label>
                                            <input type="checkbox" name="" id="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div @click="sent(score,file,totalscore)" class="mt-3">
                        <button type="submit" class="btn-blue">
                            บันทึก
                        </button>
                    </div>
                </div>

                <div v-if="!open">
                    <div class="broder border-2 border-dashed rounded-md py-2.5 px-2.5 text-center text-gray-600">
                        <label for="">ไม่มีแบบฟอร์มในขณะนี้</label>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { useService } from '#imports'
import { ref,computed } from 'vue'

const { userform,sent,checktime } = useService()

const score = ref({})
const episode = ref([])
const file = ref("")
const open = ref(false)
const time = ref({})
const form = ref([])


function onchange(e){
    file.value = e.target.files[0]
}

const totalscore = computed(() => {
    let sum = 0
    if(!Array.isArray(episode.value)) return 0

    episode.value.forEach(ep => {
        ep.indicators?.forEach(ind => {
            ind.subs?.forEach(subs => {
                const s = Number(score.value[subs.form_id] || 0)
                sum += s * ep.weight
            });
        });
    });

    return sum
})


const loadform = async() =>{
    const res = await checktime()
    time.value = res[0]
    if(res.length >= 1){
        form.value = await userform(time.value.time_id)
        open.value = true
        console.log(form.value)
    }
}

onMounted(() => {
    loadform()
})
// const mapdata = (ep,indicators,forms) => {
//    const epMap = {}

//    ep.forEach(e => {
//         epMap[e.ep_id] = {...e,indicators:[]}
//    });
//    indicators.forEach(ind => {
//         epMap[ind.ep_id]?.indicators.push({...ind,subs:[]})
//    });
//    forms.forEach(f => {
//         Object.values(epMap).forEach(ep => {
//             ep.indicators.find(i => (i.indicator_id == f.indicator_id))
//             ?.subs.push({...f})
//         });
//     });
//     return Object.values(epMap)
// }
</script>

<style lang="scss" scoped>

</style>