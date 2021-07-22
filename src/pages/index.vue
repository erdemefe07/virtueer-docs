<template>
  <div>Index Page</div>

  <div>
    <button @click="openModal({ type: 'Model', referance: 'Product' })">
      Open Model Product
    </button>

    <button @click="openModal({ type: 'Model', referance: 'Contributor' })">
      Open Model Contributor
    </button>

    <button @click="openModal({ type: 'Role', referance: 'Admin' })">
      Role - Admin
    </button>

    <button @click="openModal({ type: 'Type', referance: 'OnlyNumber' })">
      Type - OnlyNumber
    </button>

    <button @click="openModal({ type: 'Request', referance: 'Product' })">
      Request - Product
    </button>

    <button @click="openModal({ type: 'Request', referance: 'Contributor' })">
      Request - Contributor
    </button>

    <button @click="openModal({ type: 'Response', referance: 'Product' })">
      Response - Product
    </button>

    <button @click="openModal({ type: 'Response', referance: 'Contributor' })">
      Response - Contributor
    </button>
  </div>

  <br />
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style lang="scss" scoped>
</style>