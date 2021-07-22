<template>
  <input
    type="text"
    @input="setWidth"
    v-model="input"
    :class="{ error }"
    :title="type.description"
    :placeholder="'{:' + param.param + '}'"
    :style="{ width: param.param.length + 3 + 'ch' }"
  />
</template>

<script>
export default {
  props: ["param"],
  data() {
    return {
      input: "",
    };
  },
  computed: {
    error() {
      if (!this.type) return false;
      if (!this.input) return false;

      const regex = new RegExp(this.type.regex.slice(1, -1));

      return !regex.test(this.input);
    },

    type() {
      if (this.param.details.type !== "Custom") return false;
      if (this.param.details.referance_type !== "Type") return false;

      return this.$store.state.types[this.param.details.referance];
    },
  },
  methods: {
    setWidth(e) {
      const input = e.target;
      const length = input.value.length;
      const min = this.param.param.length + 3; // {:id}

      if (length == 0) return (input.style.width = min + "ch");
      input.style.width = length + "ch";
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  min-width: 1ch;
  width: 1ch;
  font-family: monospace;
  outline: none;
}

.error {
  border-color: red;
}
</style>