<template>
  <div class="{{ vueLabel componentName 'class' }}"></div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: '{{ vueLabel componentName null }}',
  props: {},
  setup(props, ctx) {}
})
</script>