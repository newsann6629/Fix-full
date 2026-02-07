<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <h1
        class="text-2xl font-bold mb-6 text-red-900 border-l-4 border-red-800 pl-4"
      >
        ดูผลสรุปคแนน
      </h1>
      <div class="card">
        <div>
          <select name="" id="" class="input-field">
            <option value="" v-for="u in userscore" :key="u.user_id" @change="load">{{ u.username }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Formservice } from "../../../composables/form";
import { ref } from "vue";
const { adminresult } = Formservice();

const userscore = ref("");
const boardscore = ref("");
const nonscore = ref("");
const cscore = ref({});

const ld = async () => {
  try {
    const res = await adminresult();
    userscore.value = res[0];
    boardscore.value = res[1];
    nonscore.value = res[3];
    cscore.value = map(res[0], res[1]);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const map = (uscore, bsocre) => {
  const epMap = {};

  uscore.forEach((us) => {
    epMap[us.user_id] = { ...us, boardscores: [] };
  });
  bsocre.forEach((bs) => {
    epMap[bs.user_id]?.boardscores.push({ ...bs });
  });
  console.log(epMap);
  return Object.values(epMap);
};

onMounted(() => {
  ld();
});
</script>

<style lang="scss" scoped></style>
