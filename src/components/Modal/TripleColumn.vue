<template>
  <h2>{{ referance }}</h2>
  <div class="grid" :class="{ hideDescription: times == 0 }">
    <div class="header">
      <p>Key</p>
      <p>Value</p>
      <p>{{ times == false ? "" : "Description" }}</p>
    </div>

    <template v-for="key in keys" :key="key">
      <p>{{ key }}</p>
      <GlobalReferanceResolver :model="values(key)" />
      <p>{{ hideable(values(key).description) }}</p>
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
  data() {
    return {
      times: false,
    };
  },
  methods: {
    hideable(desc) {
      if (desc) {
        this.times = true;
      }

      return desc || "";
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
.hideDescription {
  .header {
    p:nth-child(3) {
      visibility: hidden;
    }
  }
}

.grid {
  display: grid;
  grid-template-columns: auto auto auto;
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