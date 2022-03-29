<template>
<div class="preview">
  <div class="preview__data">
    <div class="preview__data personal">
      <h2>Персональные данные</h2>
      <input type="text" v-model="$store.state.personalData.name" readonly :disabled="true">
      <input type="text" v-model="$store.state.personalData.age" readonly :disabled="true">
    </div>
    <div class="preview__data children" v-for="child in this.$store.state.children" :key = "child.id">
      <h2>Дети</h2>
      <input type="text" v-model="child.name" readonly :disabled="true">
      <input type="text" v-model="child.age" readonly :disabled="true">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'preview',
  components: {

  }
}
</script>

<style scoped>
h2{
    margin-bottom: 10px;
}

input{
    width: 400px;
    margin-bottom: 20px;
    border: none;
}
.personal {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
}
.personal input{
    border: none;
    color: black;
    background-color: white;

}
.children{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.children input{
    background-color: #F1F1F1;
}
</style>