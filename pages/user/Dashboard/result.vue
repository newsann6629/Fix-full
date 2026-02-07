<template>
  <div class="p-6">
    <div class="card-t-blue">

      <h1 class="text-2xl font-bold mb-6 text-center">
        ผลการประเมิน
      </h1>

      <table class="min-w-full border border-gray-300">
        <thead class="bg-gray-200">
          <tr>
            <th class="border px-4 py-2 text-left w-12">#</th>
            <th class="border px-4 py-2 text-left">ชื่อผู้เข้าประเมิน</th>
            <th class="border px-4 py-2 text-center">คะแนนตัวเอง</th>
            <th class="border px-4 py-2 text-center">รอบการประเมิน</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(u,i) in userscore"
            :key="u.user_id"
            class="hover:bg-gray-50"
          >
            <td class="border px-4 py-2">
              {{ i + 1  }}
            </td>

            <td class="border px-4 py-2">
              {{ u.username }}
            </td>

            <td class="border px-4 py-2 text-center">
              {{ u.selfsum ?? 'ยังไม่ประเมิน' }}
            </td>

            <td class="border px-4 py-2">
              รอบที่ {{ u.time_id}}
            </td>

          </tr>

          <tr v-if="!userscore">
            <td colspan="6" class="text-center py-6 text-gray-500">
              ไม่มีข้อมูลการประเมิน
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="card-t-blue mt-3">

      <h1 class="text-2xl font-bold mb-6 text-center">
        ผลการประเมินจากกรรมการ
      </h1>

      <table class="min-w-full border border-gray-300">
        <thead class="bg-gray-200">
          <tr>
            <th class="border px-4 py-2 text-left w-12">#</th>
            <th class="border px-4 py-2 text-left">ชื่อกรรมการผู้ประเมิน</th>
            <th class="border px-4 py-2 text-center">สถานะของผู้ประเมิน</th>
            <th class="border px-4 py-2 text-center">Comment จากกรรมการ</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(b,i) in boardscore"
            :key="b.board_id"
            class="hover:bg-gray-50"
          >
            <td class="border px-4 py-2">
              {{ i + 1 }}
            </td>


            <td class="border px-4 py-2">
              {{ b.username ?? 'ยังไม่ระบุกรรมการ' }}
            </td>

            
            <td class="border px-4 py-2">
              {{ b.role }}
            </td>


            <td class="border px-4 py-2 text-center">
              {{ b.comment_board ?? 'ยังไม่ประเมิน' }}
            </td>
          </tr>

          <tr v-if="!userscore">
            <td colspan="6" class="text-center py-6 text-gray-500">
              ไม่มีข้อมูลการประเมิน
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup>
import { Formservice } from '../../../composables/form';
import { ref } from 'vue';
const {userresult} = Formservice()

const userscore = ref("")
const boardscore = ref("")

const ld = async() => {
  try {
    const res = await userresult()
    userscore.value = res[0]
    boardscore.value = res[1]
    console.log(res)
  }catch(err){
    console.log(err)
  }
}

onMounted(() => {
  ld()
})
</script>
