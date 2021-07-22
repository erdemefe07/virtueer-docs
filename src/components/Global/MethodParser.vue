<template>
  <div class="method" :class="method">{{ method }}</div>
</template>

<script>
export default {
  props: {
    method: {
      type: String,
      required: true,
      validator(value) {
        return ["GET", "POST", "PUT", "DELETE"].includes(value.toUpperCase());
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.method {
  border: 1px solid black;
  padding: 5px;
  color: white;
  font-weight: bold;
}

.GET {
  background-color: royalblue;
}

.POST {
  background-color: seagreen;
}

.PUT {
  background-color: olive;
}

.DELETE {
  background-color: crimson;
}
</style>