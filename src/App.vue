<template>
  <div>
    <button @click="showChild = !showChild">Toggle Child Component</button>
    <Suspense>
      <template #default>
        <AsyncChildComponent v-if="showChild" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';

// Carregando o componente de forma preguiçosa
export default {
  name: 'App',
  components: {
    AsyncChildComponent: defineAsyncComponent(() =>
      import('@/components/HelloWorld.vue') // Certifique-se de que o caminho está correto
    ),
  },
  setup() {
    const showChild = ref(false);
    return { showChild };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>