<template>
  <div :class="$style.modal">
    <div :class="$style.modalBackground"/>
    <span :class="$style.modalCloseButton"/>
    <div :class="$style.modalContent">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="postcss" module>
:root {
  --overlay: {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
}

.modal {
  @apply --overlay;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modalBackground {
  @apply --overlay;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
}

.modalContent {
  position: relative;
  width: calc(100% - 40px);
  margin: 0 20px;
}

.modalCloseButton {
  cursor: pointer;
  display: block;
  height: 40px;
  position: fixed;
  right: 10px;
  top: 10px;
  width: 40px;
  &:before,
  &:after {
    background-color: white;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    transform-origin: center center;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }
  &:before {
    height: 2px;
    width: 50%;
  }
  &:after {
    height: 50%;
    width: 2px;
  }
}
</style>
