<template>
  <div class="item" @click="$bus.emit('sidebar', { endpoint: $.vnode.key, routes: data.routes })">
    <p>{{ data.name }}</p>
    <p>{{ data.route }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  padding: 0px 20px;
  border-bottom: 1px solid black;
  background-color: wheat;
  cursor: pointer;
}
</style>