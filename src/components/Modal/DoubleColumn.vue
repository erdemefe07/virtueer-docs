<template>
  <h2>{{ referance }}</h2>
  <div class="grid">
    <div class="header">
      <p>Key</p>
      <p>Value</p>
    </div>

    <template v-for="key in keys" :key="key">
      <p>{{ key }}</p>
      <p>{{ values(key) }}</p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    referance: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    keys() {
      return Object.keys(this.$store.state[this.type][this.referance]);
    },

    values() {
      return (key) => this.$store.state[this.type][this.referance][key];
    },
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;

  p {
    margin: 0px;
  }

  .header {
    display: contents;

    p {
      font-weight: bold;
      margin: 10px 0px;
    }
  }
}
</style>