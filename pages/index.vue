<template>
    <div class="bg-gray-200 w-screen h-screen">
        <div class="flex bg-red-800 h-60 w-screen">
            <div>
                <img class="flex w-20 h-20 rounded-full px-2 py-2 " src="" alt="">
            </div>
            <div class="flex justify-center text-center items-center w-full h-full text-white font-semibold text-3xl">
                <label for="">ระบบประเมินบุคลากรออนไลน์</label>
            </div>
        </div>
        <div class="grid grid-cols-2">
            <div class="px-2 py-2">
                <label class="font-bold text-2xl" for="">ข่าวสารและประกาศ</label>
                <div class="bg-white p-6 mt-2 mb-2 rounded-md shadow-lg" v-for="time in t" :key="time.time_id">
                    <div>
                        {{ time.time }}
                    </div>
                    <div>
                        <label for="">เริ่มการประเมิน {{ time.start }}</label>
                    </div>
                    <div>
                        <label for="">ปิดการประเมิน {{ time.expire }}</label>
                    </div>
                </div>
            </div>
            <div class="flex justify-end px-2 py-2 ">
                <div>
                    <div class="bg-white p-6 mt-2 mb-2 rounded-md">
                        <div class="text-center">
                            <label class="font-bold text-2xl" for="">Login</label>
                        </div>
                        <div class="mt-2">
                            <label for="">Username</label>
                            <input class="border w-full py-2.5 px-3 rounded-md" type="text" name="" id="" v-model="u">
                        </div>
                         <div class="mt-2">
                            <label for="">Password</label>
                            <input class="border w-full py-2.5 px-3 rounded-md" type="password" name="" id="" v-model="p">
                        </div>
                        <div>
                            <button class="bg-red-800 hover:br-red-950 w-full text-white px-2 py-1 rounded-md mt-1" @click="login(u,p)">เข้าสู่ระบบ</button>
                        </div>
                        <div class="mt-1">
                            <nuxt-link class="text-blue-500" to="register">ลงทะเบียน</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useService } from '../composables/services';
import { ref } from 'vue';

const {login,time} = useService()

const u = ref("")
const p = ref("")
const t = ref([""])


const loadtime = async() => {
    const res = await time()
    t.value = res.data
    console.log(t.value)
}

onMounted(() => {
    loadtime()
})

</script>

<style lang="scss" scoped>

</style>