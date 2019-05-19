<template>
  <div id="app">
    <div style="width: 300px;">
      <ComponentCard>
        <template #header>Card Title</template>
        The quick brown fox jumps over the lazy dog
      </ComponentCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import ComponentCard from "./components/ComponentCard.vue";

@Component({
  components: {
    ComponentCard
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
