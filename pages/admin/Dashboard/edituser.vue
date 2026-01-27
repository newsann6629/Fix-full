<template>
  <div>
    <div class="">
      <div class="flex justify-center">
        <label for="" class="text-3xl px-2.5 py-2.5">จัดการข้อมูลผู้ประเมิน</label>
      </div>

      <div v-if="userdata.length == 0" class="text-center border-2 border-dashed text-gray-500 py-10 rounded-md">
          ไม่มีผู้ไช้
      </div>

      <div v-if="userdata.length >= 1" class="">
        <div class="bg-white border mb-3 shadow-lg p-6" v-for="u in userdata" :key="index">
          <div class="flex w-full h-full">
            <div class="flex justify-start">
              {{ u }}
            </div>
            <div class="flex justify-end w-full">
              <button type="submit"><i class="mdi mdi-delete text-red-500"></i></button>
            </div>
          </div>
        </div>
      </div>

    </div> 
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Index from './index.vue';


const userdata = ref([
  "teerapat",
  "phumrapee"
])

</script>

<style lang="scss" scoped>

</style>
