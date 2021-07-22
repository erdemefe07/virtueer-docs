<template>
  <p
    class="type"
    :class="{ clickable: model.type == 'Custom', array: model.array }"
    @click="
      openModal({ type: model.referance_type, referance: model.referance })
    "
  >
    {{ getType }}
  </p>
</template>

<script>
export default {
  props: {
    model: Object,
  },
  computed: {
    getType() {
      return this.model.type == "Custom"
        ? this.model.referance
        : this.model.type;
    },
  },
};
</script>

<style lang="scss" scoped>
.type {
  pointer-events: none;
}

.clickable {
  pointer-events: auto;
  color: red;
  cursor: pointer;
  font-weight: bold;
}

.array {
  &::before {
    color: aquamarine;
    content: "[";
  }

  &::after {
    color: aquamarine;
    content: "]";
  }
}
</style>