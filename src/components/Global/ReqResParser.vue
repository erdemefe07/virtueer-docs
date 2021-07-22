<template>
  <div
    class="Block"
    @click="openModal({ type, referance: getReferance })"
    :class="type"
  >
    {{ referance }}
  </div>
</template>

<script>
export default {
  props: ["type", "referance"],
  computed: {
    getReferance() {
      return this.referance.slice(-2) == "[]"
        ? this.referance.slice(0, -2)
        : this.referance;
    },
  },
};
</script>

<style lang="scss" scoped>
.Block {
  cursor: pointer;
  padding: 5px;
  font-weight: bold;
  color: white;
  border: 1px solid black;
}

.Request {
  background-color: darkslategrey;
}

.Response {
  background-color: dimgray;
}
</style>