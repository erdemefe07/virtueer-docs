<template>
  <aside class="sidebar">
    <header>
      <h2>Routes</h2>
      <i class="fas fa-times fa-2x" @click="$bus.emit('sidebar', {})" />
    </header>

    <div v-for="(route, index) in routes" :key="index">
      <SidebarChildItem :route="route" :endpoint="endpoint" :index="index" />
    </div>
  </aside>
</template>

<script>
export default {
  name: "Child",
  props: ["endpoint", "routes"],
};
</script>

<style lang="scss" scoped>
.sidebar {
  min-height: 100vh;
  width: 500px;
  background-color: rgb(196, 83, 196);

  header {
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    align-items: center;
    height: 60px;
    background-color: purple;

    border-bottom: 2px solid red;

    i {
      cursor: pointer;
    }
  }
}
</style>