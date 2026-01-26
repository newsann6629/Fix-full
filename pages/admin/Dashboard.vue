<template>
    <div class="flex">
        <div v-if="menuui" class="bg-gradient-to-r from-red-950 to-red-800 h-screen px-2.5 py-3">
            <div>
                <div class="mb-10">
                    <div class="flex gap-10">
                        <label for="" class="text-white text-3xl flex justify-start">ระบบประเมินบุคลากร</label>
                        <i class="mdi mdi-menu-close flex justify-end text-white text-3xl" @click="menuui = !menuui"></i>
                    </div>
                </div>
                <div class="flex justify-center">
                    <img src="../../assets/ตราสำนักงานคณะกรรมการการอาชีวศึกษา.svg" alt="" srcset="" class="w-20 h-20">
                </div>
                <div class="flex justify-center">
                    <label for="" class="text-white">Username</label>
                </div>
                <div class="flex justify-center">
                    <label for="" class="text-white">Email@a.com</label>
                </div>
                <div class="flex justify-center">
                    <label for="" class="text-white">093-123-1324</label>
                </div>
                <div class="flex justify-center">
                    <button type="submit" class="text-white border rounded-lg px-2.5 py-1.5"> <i class="mdi mdi-logout"></i> ออกจากระบบ</button>
                </div>
            </div>
            <div class="mt-10">
                <div class="flex justify-start">
                    <i class="mdi mdi-account text-white"></i>
                    <nuxt-link to="" class=" text-white px-3 w-full">แก้ไขโปรไฟล์ส่วนตัว</nuxt-link>
                    <i class="mdi mdi-menu-right text-white w-full flex justify-end"></i>
                </div>
            </div>
            <div class="mt-3">
                <div class="flex justify-start">
                    <i class="mdi mdi-form-select text-white"></i>
                    <nuxt-link to="" class=" text-white px-3 w-full">แบบประเมินบุคลากร</nuxt-link>
                    <i class="mdi mdi-menu-right text-white w-full flex justify-end"></i>
                </div>
            </div>
            <div class="mt-3">
                <div class="flex justify-start">
                    <i class="mdi mdi-form-select text-white"></i>
                    <nuxt-link to="" class=" text-white px-3 w-full">ผลการประเมิน</nuxt-link>
                    <i class="mdi mdi-menu-right text-white w-full flex justify-end"></i>
                </div>
            </div>
        </div>

        <div v-if="!menuui" class="">
            <i class="mdi mdi-menu-open flex justify-end text-3xl bg-red-950 rounded-md p-2 text-white" @click="menuui = !menuui"></i>
        </div>
        <div>
            <NuxtPage />
        </div>
        <!-- <div>
            <label for="" @click="menuui = !menuui" :class="{'bg-red-950':menuui, 'bg-green-500':!menuui}" >test</label>
        </div> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';

const menuui = ref(false)
</script>

<style lang="scss" scoped>

</style>