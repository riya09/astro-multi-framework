<template>
  <div>
    <button
      class="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full
      hover:text-gray-400 focus:outline-none"
      aria-label="Cart"
      @click="toggleList"
    >
      <svg
        class="h-6 w-6"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        ></path>
      </svg>
      <span v-if="total > 0" class="absolute inset-0 object-right-top -mr-6">
        <span
          class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs
          font-semibold leading-4 bg-red-500 text-white"
        >
          {{ total }}
        </span>
      </span>
    </button>
    <div v-if="showList" class="border-2 border-gray-200 bg-red p-1 rounded-md w-72">
      <template v-for="(item, i) in cartItems" :key="i">
        <div class="flex items-center justify-between mb-1">
          <h5 class="font-manrope font-bold text-md leading-9 text-gray-900">
             {{ item.name }}
          </h5>
          <button
            @click="deleteItem(item)"
            class="rounded-full group flex items-center justify-center focus-within:outline-red-500">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle class="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                      cx="17" cy="17" r="17" fill="" />
                <path class="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                    d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                    stroke="#EF4444" stroke-width="1.6" stroke-linecap="round" />
              </svg>
          </button>
        </div>
        <h6 class="text-indigo-600 font-manrope font-bold text-md leading-9 text-right">
          ${{ item.price }}
        </h6>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@nanostores/vue";
import { ref } from "vue";
import { totalItem, items, deleteItem } from "../../store";

const total = useStore(totalItem);
const cartItems = useStore(items);
const showList = ref(false);

const toggleList = () => {
  showList.value = !showList.value;
};
</script>

<style>
</style>
