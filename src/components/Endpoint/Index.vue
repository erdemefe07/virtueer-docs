<template>
  <div class="endpoint-item">
    <div class="start">
      <div class="routes-length">{{ endpoint.routes.length }}</div>
      <div class="details">
        <p>{{ endpoint.name }}</p>
        <p>{{ endpoint.route }}</p>
      </div>
    </div>
    <i class="fas fa-caret-down" :class="{ extended }" @click="extended = !extended"></i>

    <div v-if="extended" class="routes">
      <EndpointRoutes
        v-for="(route, index) in endpoint.routes"
        :key="index"
        :route="route"
        :index="$.vnode.key"
        class="column-span"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Endpoint",
  props: ["endpoint"],
  data() {
    return {
      extended: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.endpoint-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid red;
  align-items: center;

  .start {
    display: flex;
    align-items: center;

    .routes-length {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      padding: 5px;
      border-radius: 50%;
      border: 1px solid black;
      margin: 20px;
      margin-left: 40px;
    }

    .details {
      display: flex;
    }
  }

  .fa-caret-down {
    font-size: 1.8rem;
    cursor: pointer;
    justify-self: end;
    margin-right: 40px;
    transition: all 0.5s;
  }

  .extended {
    transform: rotate(180deg);
  }

  .column-span {
    grid-column: 1/ 3;
  }

  .routes {
    display: contents;
  }
}
</style>