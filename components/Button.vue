<template>
  <button
    class="bg-purple text-white font-medium py-2 px-4 rounded-lg text-lg font-spartan"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
