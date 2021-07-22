<template>
  <h2>{{ route.title }}</h2>

  <p>{{ route.description }}</p>

  <div class="routing">
    <GlobalMethodParser :method="route.method" />

    <p class="url">{{ base + route.route }}</p>
  </div>

  <div class="params">
    <p>Url: {{ $store.state.project.baseUrl }}</p>
    <template v-for="(param, index) in parse" :key="index">
      <GlobalParamParser v-if="isParam(param)" :param="decode(param)" />
      <p v-else>/{{ param }}/</p>
    </template>
    <button>REQUEST</button>
  </div>

  <template v-if="route.req">
    <p class="header">Body</p>
    <RouteInteractivator :referance="route.req" type="requests" />
  </template>

  <template v-if="route.res">
    <p class="header">Response</p>
    <RouteInteractivator :referance="route.res" type="responses" />
  </template>
</template>

<script>
export default {
  name: "Route-Details",
  inheritAttrs: false,
  data() {
    return {
      base: this.$store.state.endpoints.datas[this.$route.params.endpoint].route,
    };
  },
  computed: {
    route() {
      const { endpoint, route } = this.$route.params;
      return this.$store.state.endpoints.datas[endpoint].routes[route];
    },

    parse() {
      let url = this.base + this.route.route;
      const splits = url.split("/");
      return splits.filter(v => !!v);
    },

    params() {
      const params = this.route.params;

      const p = [];
      for (const key in params) {
        p.push(`{:${key}}`);
      }
      return p;
    },
  },

  methods: {
    isParam(asd) {
      const isParam = this.params.includes(asd);

      return isParam;
    },

    decode(param) {
      param = param.replace("{:", "");
      param = param.replace("}", "");

      const details = this.route.params[param];

      return { param, details };
    },
  },
};
</script>

<style lang="scss" scoped>
.routing {
  display: flex;
  align-items: center;
  gap: 10px;
}

.params {
  font-family: monospace;
  display: flex;
  align-items: center;
  gap: 1px;

  button {
    margin-left: 20px;
  }
}

.header {
  padding: 10px 20px;
  font-size: 1.2rem;
}
</style>