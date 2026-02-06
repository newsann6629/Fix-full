<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <h1
        class="text-2xl font-bold mb-6 text-red-900 border-l-4 border-red-800 pl-4"
      >
        จัดกลุ่มกรรมการ
      </h1>
      <div
        class="bg-white p-6 rounded-lg shadow-md mb-8 border-t-4 border-red-800"
      >
        <h2 class="text-xl font-semibold mb-4 text-red-800">
          เพิ่มกรรมการ
        </h2>

        <div class="space-y-3">
            <div class="grid grid-cols-2 gap-4">
            <div>
              <select name="" id="" class="input-field" v-model="board">
                <option v-for="u in user" :key="u.id" :value="u.id">
                  {{ u.username }}
                </option>
              </select>
            </div>
            <div>
              <select name="" id="" class="input-field" v-model="role">
                <option  v-for="r in roles" :key="r.role_id" :value="r.role_id">
                  {{ r.role }}
                </option>
              </select>
            </div>
          </div>

          <nuxt-link to="register" class="text-red-800 font-medium"> <i class="mdi mdi-plus-circle "></i> เพิ่มกรรมการ</nuxt-link>

          <button
            @click="addgroup(board,role)"
            class="w-full mt-4 bg-red-800 text-white font-bold py-2 rounded hover:bg-red-900 shadow-lg transition"
          >
            บันทึก
          </button>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="g in ball" :key="g.board_id" class="card-t-blue" @click="delgroup(g.board_id)">
            <div>
              <label for="" class="label">{{ g.username }}</label>
            </div>
            <div>
              <label for="">{{ g.role }}</label>
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

const { delgroup,brole,addgroup,getalluser,allb } = useService()

const roles = ref([])
const user = ref("")
const role = ref("")
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
  const r = await brole()
  const b = await allb()
  // group.value = map(g[0],g[1])
  user.value = u
  roles.value = r
  ball.value = b
  console.log(ball.value)
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
