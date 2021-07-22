<template>
  <Endpoint v-for="(endpoint, index) in $store.state.endpoints.datas" :key="index" :endpoint="endpoint" />
</template>