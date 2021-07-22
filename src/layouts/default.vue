<template>
  <div class="container">
    <Sidebar />
    <SidebarChild v-if="endpoint !== null" :endpoint="endpoint" :routes="routes" />

    <div class="wrapper">
      <Header />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>

  <modal-watcher />
</template>

<script>
export default {
  data() {
    return {
      endpoint: null,
      routes: null,
    };
  },
  created() {
    this.$bus.on("sidebar", ({ endpoint = null, routes = null }) => {
      this.routes = routes;
      this.endpoint = endpoint;
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: Flex;
}

.wrapper {
  width: 100%;

  .content {
    padding: 20px;
  }
}
</style>