<template>
  <header>
    <h3 class="title">{{ $store.state.project.name }}</h3>

    <div class="search">
      <input type="text" placeholder="Search" />
      <i class="fas fa-search"></i>
    </div>

    <div class="profile">
      <img src="/manowar.jpg" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 0px 20px;
  height: 60px;
  border-bottom: 2px solid black;

  .title {
    margin: 0px;
  }

  .search {
    justify-self: center;
    border: 1px solid black;
    padding: 5px 10px;
    border-radius: 50px;

    input {
      outline: none;
      border: none;
    }

    i {
      border-left: 1px solid black;
      padding: 5px;
      padding-right: 0px;
      cursor: pointer;
    }
  }

  .profile {
    justify-self: end;
    height: 52px;

    img {
      height: 50px;
      border-radius: 50%;
      border: 1px solid black;
      cursor: pointer;
    }
  }
}
</style>