<template>
  <div class="flex flex-col gap-4 p-8 m-4 border-t-4 rounded-md shadow-xl bg-very-light-gray xl:w-80">
        <h3 class="text-xl font-bold text-very-dark-blue xl:text-lg">{{title}}</h3>
        <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    title: String,
  }
}
</script>