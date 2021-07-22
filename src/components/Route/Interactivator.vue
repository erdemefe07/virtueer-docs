<template>
  <h3 v-if="isArray">Array</h3>
  <div class="grid">
    <div v-for="(value, key, index) in object" :key="index">
      <p>{{ key }}</p>
      <input v-if="type == 'requests'" />
      <GlobalReferanceResolver :model="value" v-else />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: v => ['requests', 'responses'].includes(v),
    },
    referance: {
      type: String,
      required: true,
    },
  },
  computed: {
    object() {
      return this.$store.state[this.type][this.refer];
    },

    refer() {
      // prettier-ignore
      if (this.isArray == false)
        return this.referance;

      return this.referance.substring(0, this.referance.length - 2);
    },

    isArray() {
      return this.referance.slice(-2) == '[]';
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  border-left: 1px solid black;
  padding-left: 10px;
}

.grid {
  width: fit-content;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;

  div {
    display: contents;

    p {
      margin: 0px;
    }
  }
}
</style>