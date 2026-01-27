<template>
  <div class="p-6 font-sans">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">แบบฟอร์มการประเมิน</h1>
      <button
        @click="openModal"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow transition-colors"
      >
        + เพิ่มหัวข้อการประเมิน
      </button>
    </div>

    <!-- แสดงรายการที่เพิ่ม -->
    <div class="space-y-4">
      <div
        v-if="items.length === 0"
        class="text-center text-gray-500 py-10 border-2 border-dashed rounded-lg"
      >
        ยังไม่มีหัวข้อการประเมิน
      </div>

      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white p-4 rounded-lg shadow border border-gray-100 relative"
      >
        <button
          @click="deleteItem(index)"
          class="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
          ลบ
        </button>
        <div class="mb-2">
          <span
            class="inline-block bg-gray-200 rounded px-2 py-1 text-xs font-bold mr-2 text-gray-700"
            >ตอนที่ {{ item.section }}</span
          >
          <h3 class="inline font-bold text-lg text-gray-800">
            {{ item.topic }}
          </h3>
        </div>
        <p class="text-gray-600 mb-3 whitespace-pre-wrap">{{ item.detail }}</p>

        <div class="text-sm bg-blue-50 text-blue-800 p-2 rounded inline-block">
          <span class="font-semibold">เกณฑ์คะแนน:</span>
          {{ item.hasScore ? `มี (${item.scoreLevel} ระดับ)` : "ไม่มี" }}
        </div>
      </div>
    </div>

    <!-- Modal เพิ่มข้อมูล -->
    <div
      v-if="addform"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="addform = false"
    >
      <div
        class="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden"
      >
        <div class="bg-gray-50 px-6 py-4 border-b">
          <h2 class="text-xl font-bold text-gray-800">
            เพิ่มรายละเอียดการประเมิน
          </h2>
        </div>

        <div class="p-6 space-y-4">
          <!-- (ลบช่องกรอกตอนที่ออก เพราะนับให้อัตโนมัติแล้ว) -->

          <!-- หัวข้อ -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >หัวข้อการประเมิน</label
            >
            <input
              v-model="form.topic"
              list="topic-options"
              type="text"
              placeholder="ระบุหัวข้อ หรือเลือกจากรายการเดิม..."
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <!-- ตัวเลือกหัวข้อเดิม -->
            <datalist id="topic-options">
              <option
                v-for="topic in existingTopics"
                :key="topic"
                :value="topic"
              ></option>
            </datalist>
          </div>

          <!-- รายละเอียด -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >รายละเอียด</label
            >
            <textarea
              v-model="form.detail"
              rows="3"
              placeholder="รายละเอียดเพิ่มเติม..."
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <!-- การให้คะแนน -->
          <div class="bg-gray-50 p-3 rounded-md border border-gray-200">
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >การให้คะแนน</label
            >
            <div class="flex gap-4 mb-3">
              <label class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  :value="true"
                  v-model="form.hasScore"
                  class="mr-2 text-blue-600"
                />
                มี
              </label>
              <label class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  :value="false"
                  v-model="form.hasScore"
                  class="mr-2 text-blue-600"
                />
                ไม่มี
              </label>
            </div>

            <div v-if="form.hasScore">
              <label class="block text-xs text-gray-500 mb-1">ระดับคะแนน</label>
              <select
                v-model="form.scoreLevel"
                class="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
              >
                <option value="4">4 ระดับ</option>
                <option value="5">5 ระดับ</option>
              </select>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 px-6 py-4 border-t flex justify-end gap-3">
          <button
            @click="addform = false"
            class="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors"
          >
            ยกเลิก
          </button>
          <button
            @click="saveItem"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition-colors"
          >
            บันทึก
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const addform = ref(false);
const items = ref([
  // ตัวอย่างข้อมูล
  {
    section: "1",
    topic: "ความตรงต่อเวลา",
    detail: "การเข้างานตรงเวลาและการส่งงานตามกำหนด",
    hasScore: true,
    scoreLevel: "5",
  },
]);

// ดึงรายชื่อหัวข้อที่มีอยู่แล้วมาแสดงในตัวเลือก (ไม่ซ้ำ)
const existingTopics = computed(() => {
  const topics = items.value.map((item) => item.topic);
  return [...new Set(topics)];
});

const form = ref({
  topic: "",
  detail: "",
  hasScore: true,
  scoreLevel: "5",
});

const openModal = () => {
  // Reset form
  form.value = {
    topic: "",
    detail: "",
    hasScore: true,
    scoreLevel: "5",
  };
  addform.value = true;
};

const saveItem = () => {
  if (!form.value.topic) {
    alert("กรุณาระบุหัวข้อ");
    return;
  }

  // นับเลขตอนที่ให้อัตโนมัติ (จำนวนรายการปัจจุบัน + 1)
  const nextSection = items.value.length + 1;

  items.value.push({
    section: nextSection.toString(),
    ...form.value,
  });

  addform.value = false;
};

const deleteItem = (index) => {
  if (confirm("ต้องการลบรายการนี้?")) {
    items.value.splice(index, 1);
    // อัพเดทเลขตอนที่ใหม่หลังจากลบ (ถ้าต้องการให้เรียงใหม่เสมอ)
    items.value.forEach((item, idx) => {
      item.section = (idx + 1).toString();
    });
  }
};
</script>

<style scoped>
/* Add any specific customs if needed */
</style>
