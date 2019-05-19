<template>
  <div id="app">
    <ComponentModal>
      <ComponentCard>
        <template #header>Card Title</template>
        The quick brown fox jumps over the lazy dog
      </ComponentCard>
    </ComponentModal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ComponentCard from './components/ComponentCard.vue';
import ComponentModal from './components/ComponentModal.vue';

@Component({
  components: {
    ComponentCard,
    ComponentModal,
  },
})
export default class App extends Vue {}
</script>

<style lang="postcss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
