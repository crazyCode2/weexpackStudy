<!-- 类型 说明抬头(类似h2标签) -->
<template>
  <div class="category">
    <text class="category-text">{{title}}</text>
  </div>
</template>

<style scoped>
  .category {
    padding-left: 24px;
    width: 750px;
    height: 90px;
    background-color: #FAFAFA;
    justify-content: center;
  }

  .category-text {
    color: #000;
    font-weight: 600;
    font-size: 28px;
  }

</style>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>
