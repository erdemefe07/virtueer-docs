<template>
  <aside class="sidebar">
    <header>
      <h2>Endpoints</h2>
      <i class="fas fa-bars fa-2x" />
    </header>

    <SidebarBasicItem
      v-for="(endpoint, index) in $store.state.endpoints.datas"
      :key="index"
      :data="endpoint"
    />
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>
.sidebar {
  min-height: 100vh;
  width: 300px;
  background-color: violet;

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    background-color: blueviolet;

    border-bottom: 2px solid red;

    i {
      cursor: pointer;
    }
  }
}
</style>