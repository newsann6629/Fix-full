<template>
  <div class="bg-gray-50 min-h-screen font-sans flex flex-col">
    <!-- Header Section (Consistent with Index) -->
    <div
      class="h-48 bg-gradient-to-r from-red-900 to-red-800 text-white shadow-md flex-shrink-0"
    >
      <div class="container mx-auto px-6 h-full flex items-center gap-6">
        <div class="bg-white/10 p-2 rounded-full backdrop-blur-sm">
          <img
            src="../assets/image/ตราสำนักงานคณะกรรมการการอาชีวศึกษา.svg"
            alt="Logo"
            class="w-24 h-24 rounded-full shadow-lg object-contain bg-white"
          />
        </div>
        <div>
          <h1 class="text-3xl font-bold tracking-wide text-shadow-sm">
            ลงทะเบียนบุคลากร
          </h1>
          <p class="text-red-100 mt-1">
            กรอกข้อมูลเพื่อลงทะเบียนเข้าใช้งานระบบ
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="flex-grow container mx-auto px-4 -mt-10 pb-10">
      <div
        class="max-w-4xl mx-auto bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
      >
        <div class="p-8">
          <h2
            class="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-800 pl-3"
          >
            ข้อมูลผู้ใช้งาน
          </h2>

          <form action="" ref="formref" @submit.prevent="regis">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Username -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >ชื่อผู้ใช้งาน (Username)</label
                >
                <input
                  type="text"
                  v-model="Username"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-all"
                  required
                  placeholder="ตั้งชื่อผู้ใช้งาน"
                />
              </div>

              <!-- Password -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >รหัสผ่าน (Password)</label
                >
                <input
                  type="password"
                  v-model="Password"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-all"
                  required
                  placeholder="ตั้งรหัสผ่าน"
                />
              </div>

              <!-- Email -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >อีเมล</label
                >
                <input
                  type="email"
                  v-model="Email"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-all"
                  required
                  placeholder="example@email.com"
                />
              </div>

              <!-- Phone -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >เบอร์โทรศัพท์</label
                >
                <input
                  type="text"
                  v-model="Phone"
                  pattern="[0-9]{10}"
                  maxlength="10"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-all"
                  required
                  placeholder="0XXXXXXXXX"
                />
              </div>

              <!-- ID Card -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >เลขบัตรประชาชน</label
                >
                <input
                  type="text"
                  v-model="Czid"
                  pattern="[0-9]{13}"
                  maxlength="13"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-all"
                  required
                  placeholder="เลข 13 หลัก"
                />
              </div>

              <!-- Birthdate -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >วันเกิด</label
                >
                <input
                  type="date"
                  v-model="Bdate"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-all"
                />
              </div>

              <!-- Salary -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >เงินเดือน</label
                >
                <input
                  type="number"
                  v-model="Sal"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-all"
                  required
                  placeholder="ระบุเงินเดือน"
                />
              </div>

              <!-- Department -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >แผนก</label
                >
                <select
                  v-model="newdepartment"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-all appearance-none bg-white"
                >
                  <option value="" disabled selected>เลือกแผนก</option>
                  <option
                    v-for="de in Department"
                    :key="de.department_id"
                    :value="de.department_id"
                  >
                    {{ de.department }}
                  </option>
                </select>
              </div>

              <!-- Position -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >ตำแหน่ง</label
                >
                <select
                  v-model="newposition"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-all appearance-none bg-white"
                >
                  <option value="" disabled selected>เลือกตำแหน่ง</option>
                  <option
                    v-for="po in Position"
                    :key="po.position_id"
                    :value="po.position_id"
                  >
                    {{ po.position }}
                  </option>
                </select>
              </div>

              <!-- Level -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >วิทยะฐานะ</label
                >
                <select
                  v-model="newlevel"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-all appearance-none bg-white"
                >
                  <option value="" disabled selected>เลือกวิทยะฐานะ</option>
                  <option
                    v-for="le in Level"
                    :key="le.level_id"
                    :value="le.level_id"
                  >
                    {{ le.level }}
                  </option>
                </select>
              </div>
            </div>

            <div
              class="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between"
            >
              <nuxt-link
                to="/"
                class="text-gray-500 hover:text-red-700 transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                กลับหน้าเข้าสู่ระบบ
              </nuxt-link>

              <button
                type="submit"
                class="bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-10 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95"
              >
                บันทึกข้อมูล
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
