<template>
  <div :class="$style.card">
    <div v-if="$slots.header" :class="$style.cardHeader">
      <slot name="header"/>
    </div>
    <div :class="$style.cardContent">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="postcss" module>
.card {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);
  position: relative;
}

.cardHeader {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  display: flex;
  padding: 0.75rem;
  justify-content: center;
}

.cardContent {
  padding: 0.75rem;
}
</style>
