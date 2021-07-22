<template>
  <div class="item" @click="$router.push(`/endpoint/${endpoint}/routes/${index}`)">
    <h3>{{ route.title }}</h3>
    <div class="body">
      <GlobalMethodParser :method="route.method" />
      <p>{{ route.route }}</p>
    </div>
    <div class="footer">
      <GlobalReqResParser class="request" v-if="route.req" type="Request" :referance="route.req" />

      <GlobalReqResParser class="response" v-if="route.res" type="Response" :referance="route.res" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["route", "endpoint", "index"],
};
</script>

<style lang="scss" scoped>
.item {
  padding: 10px;
  border-bottom: 1px solid black;
  cursor: pointer;

  h3 {
    margin: 0px;
  }

  .body {
    display: flex;
    align-items: center;
    padding: 10px 0px;

    p {
      margin: 0px;
      padding-left: 5px;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .footer {
    display: grid;
    grid-template-columns: 1fr auto;

    .request {
      justify-self: start;
    }

    .response {
      justify-self: end;
    }
  }
}
</style>