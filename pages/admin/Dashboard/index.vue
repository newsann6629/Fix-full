<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <h1
        class="text-2xl font-bold mb-6 text-red-900 border-l-4 border-red-800 pl-4"
      >
        มอบหมายการประเมิน
      </h1>
      <div
        class="bg-white p-6 rounded-lg shadow-md mb-8 border-t-4 border-red-800"
      >
        <h2 class="text-xl font-semibold mb-4 text-red-800">
          ผู้รับการประเมิน
        </h2>

        <div class="space-y-3">
            <div class="">
            <div>
              <select name="" id="" class="input-field" v-model="board">
                <option v-for="u in user" :key="u.id" :value="u.id">
                  {{ u.username }}
                </option>
              </select>
            </div>
          </div>

          <button
            @click="usersign(board)"
            class="w-full mt-4 bg-red-800 text-white font-bold py-2 rounded hover:bg-red-900 shadow-lg transition"
          >
            มอบหมายการประเมิน
          </button>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="g in users" :key="g.user_id" class="card-t-blue" @click="usersigndel(g.user_id)">
            <div>
              <label for="" class="label">{{ g.username }}</label>
            </div>
            <div>
              <label for="" class="bg-gray-500 rounded-md text-white">ผู้รับการประเมิน</label>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(g, i) in group.value"
          :key="g.group_id"
          class="bg-white p-4 rounded-lg shadow border-l-4 border-red-800"
        >
          <div class="flex justify-between items-center mb-3">
            <h3 class="text-lg font-bold text-red-900">
              กลุ่มที่ {{ i + 1 }}
            </h3>
            <button
              @click="delgroup(g.group_id)"
              class="text-gray-400 hover:text-red-600"
            >
              <span class="mdi mdi-close-circle text-xl"></span>
            </button>
          </div>
          <div v-for="t in g.datas" :key="t.group_id">
            <div class="grid grid-cols-2">
              <div>
                {{ t.username }}
              </div>
              <div>
                {{ t.group_role }}
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useService } from "../../../composables/services";

const { usersign,usersigndel,usersignget,getalluser } = useService()

const users = ref({})
const user = ref("")
const board = ref("")
const ball = ref([])

function test(){
  console.log(group.value)
}

// const saveGroup = () => {
//   const hasEmptyName = newMembers.value.some((m) => !m.name);
//   if (hasEmptyName) return alert("กรุณากรอกชื่อเข้คระ");



//   savedGroups.value.push([...newMembers.value]);


//   newMembers.value = [{ name: "", role: "กรรมการ" }];
// };

// const map = (id,d) => {
//   const mapdata = {}

//   id.forEach(idg => {
//     mapdata[idg.group_id] = {...idg,datas:[]}
//   });
//   d.forEach(da => {
//     mapdata[da.group_id]?.datas.push({...da})
//   });
//   return Object.values(mapdata)
// }


const loaduser = async() => {
  const u = await getalluser()
  const au = await usersignget()
  // group.value = map(g[0],g[1])
  users.value = au
  user.value = u
}

onMounted(() => {
  loaduser()
})

</script>

<style scoped>
.mdi {
  vertical-align: middle;
}
</style>
