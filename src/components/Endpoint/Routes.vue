<template>
  <div class="route-item">
    <GlobalMethodParser :method="route.method" />

    <div class="details">
      <p>{{ route.route }}</p>
      <p>{{ route.title }}</p>
    </div>

    <div class="Request-Response">
      <GlobalReqResParser v-if="route.req" type="Request" :referance="route.req" />
      <GlobalReqResParser v-if="route.res" type="Response" :referance="route.res" />
    </div>

    <i class="fas fa-caret-right fa-2x" @click="$router.push(`/endpoint/${index}/routes/${$.vnode.key}`)" />
  </div>
</template>

<script>
export default {
  name: "Endpoint-Route",
  props: ["route", "index"],
};
</script>

<style lang="scss" scoped>
.route-item {
  border-top: 1px solid black;
  padding: 20px;
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr auto 50px;

  .details {
    display: flex;
    padding-left: 10px;
    gap: 10px;

    p {
      font-weight: bold;
      margin: 0px;
    }
  }

  .description {
    justify-self: start;
  }

  .Request-Response {
    justify-self: end;
    gap: 20px;
    display: flex;
  }

  .fa-caret-right {
    font-size: 1.5rem;
    cursor: pointer;
    justify-self: end;
  }
}
</style>