<template>
  <div class="bg-gray-50 min-h-screen font-sans">
    <!-- Header Section -->
    <div
      class="h-64 bg-gradient-to-r from-red-950 to-red-800 text-white shadow-md"
    >
      <div class="container mx-auto px-6 h-full flex items-center gap-6">
        <div class="bg-white/10 p-2 rounded-full backdrop-blur-sm">
          <img
            src="../assets/ตราสำนักงานคณะกรรมการการอาชีวศึกษา.svg"
            alt="Logo"
            class="w-32 h-32 rounded-full shadow-lg object-contain bg-white"
          />
        </div>
        <div class="flex flex-col">
          <h1 class="text-4xl font-bold tracking-wide text-shadow-sm">
            ระบบประเมินบุคลากรออนไลน์
          </h1>
          <p class="text-red-100 text-lg mt-1">
            สำนักงานคณะกรรมการการอาชีวศึกษา
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6 -mt-10 pb-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- News Section (Left 2/3) -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2
              class="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-red-800 pl-3"
            >
              ข่าวสารและประกาศ
            </h2>

            <div class="space-y-4">
              <!-- News Item 1 -->
              <div
                class="group flex items-center bg-gray-50 hover:bg-red-50 p-4 rounded-lg border border-gray-100 hover:border-red-200 transition-all duration-300 cursor-pointer"
              >
                <div
                  class="w-24 h-24 bg-red-100 rounded-lg flex-shrink-0 flex items-center justify-center text-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.43.816 1.035.816 1.73 0 .695-.32 1.3-.816 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3
                    class="font-semibold text-lg text-gray-800 group-hover:text-red-800 transition-colors"
                  >
                    เปิดประเมินรอบที่ 1
                  </h3>
                  <p class="text-gray-500 text-sm mt-1">วันที่ XX/XX/XXXX</p>
                </div>
                <div
                  class="ml-auto text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>

              <!-- News Item 2 -->
              <div
                class="group flex items-center bg-gray-50 hover:bg-red-50 p-4 rounded-lg border border-gray-100 hover:border-red-200 transition-all duration-300 cursor-pointer"
              >
                <div
                  class="w-24 h-24 bg-red-100 rounded-lg flex-shrink-0 flex items-center justify-center text-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3
                    class="font-semibold text-lg text-gray-800 group-hover:text-red-800 transition-colors"
                  >
                    เปิดประเมินรอบที่ 2
                  </h3>
                  <p class="text-gray-500 text-sm mt-1">วันที่ XX/XX/XXXX</p>
                </div>
                <div
                  class="ml-auto text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Login Form (Right 1/3) -->
        <div>
          <div
            class="bg-white rounded-xl shadow-xl border border-gray-100 p-8 sticky top-10"
          >
            <div class="text-center mb-6">
              <h2 class="text-2xl font-bold text-gray-800">เข้าสู่ระบบ</h2>
              <p class="text-gray-500 text-sm mt-1">
                กรุณากรอกข้อมูลเพื่อเข้าใช้งาน
              </p>
            </div>

            <form @submit.prevent>
              <div class="mb-5">
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Username</label
                >
                <input
                  v-model="Username"
                  type="text"
                  id="username"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-all"
                  placeholder="กรอกชื่อผู้ใช้งาน"
                />
              </div>

              <div class="mb-6">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Password</label
                >
                <input
                  v-model="Password"
                  type="password"
                  id="password"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-all"
                  placeholder="กรอกรหัสผ่าน"
                />
              </div>

              <button
                type="submit"
                class="w-full bg-red-800 hover:bg-red-900 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95"
                @click="login(Username,Password)"
              >
                เข้าสู่ระบบ
              </button>
            </form>

            <div class="mt-6 text-center">
              <span class="text-gray-500 text-sm"
                >ยังไม่มีบัญชีผู้ใช้งาน?
              </span>
              <nuxt-link
                to="register"
                class="text-red-700 font-semibold hover:text-red-900 hover:underline transition-colors"
              >
                ลงทะเบียน
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
/* Add any custom styles here if needed, most are handled by Tailwind */
</style>
