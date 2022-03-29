<template>
  <div class="wrapper">
    <HeaderLayout/>
    <main class="main">
      <router-view/>
    </main>
    <FooterLayout/>
  </div>
</template>

<script>
import FooterLayout from "@/components/FooterLayout";
import HeaderLayout from "@/components/HeaderLayout";

export default {
  components: {
    FooterLayout,
    HeaderLayout
  }
}

</script>

<style lang="scss">
h6 {
  margin: 0;
}
html{
  height: 100%;
}
input {
  width: 616px;
  height: 56px;
}

.wrapper{
  display: flex;
  flex-direction: column;
  height: 100%;
}

head {
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
body {
  display: flex;
  flex-direction: column;
  height: 100%;

}

.header {
  margin-bottom: 30px;
  height: 76px;
}

main {
  flex:1 1 auto;
  display: flex;
  justify-content: center;
}

.main_content {
  display: flex;
  flex-direction: column;

}

.personal_data {
  width: 616px;
  margin-bottom: 44px;
}

.personal_data-title {
  margin-bottom: 20px;
  text-align: left;
}

.personal_data-name {
  margin-bottom: 10px;
}

.name {
  width: 260px;
}

.children-data {
  margin-bottom: 20px;
}

.children-data-add {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 44px;
}

.add-child {
  width: 204px;
  height: 44px;
  background: none;
  border: 2px solid #01A7FD;
  box-sizing: border-box;
  border-radius: 100px;
  margin-bottom: 20px;
}

.children-data-button {
  display: flex;
  justify-content: flex-end;
}

.children-data-title {
  display: flex;
  align-items: center;
}

.children-data-item {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.children-data-item-name {
  width: 260px;
}

.name {
  margin-bottom: 10px;
}

.children-data-item-age {
  width: 260px !important;

}

.age {
  width: 260px !important;
  margin-bottom: 10px;
}

.children-data-item-delete {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.delete {
  color: #01A7FD;
  width: 75px;
  height: 30px;
  background: none;
  border: 2px solid #01A7FD;
  border-radius: 10px;
}

.add-child:before {
  content: "+";
}

.add-child {
  width: 204px;
  height: 44px;
  background: none;
  border: 2px solid #01A7FD;
  box-sizing: border-box;
  border-radius: 100px;
  margin-bottom: 20px;
}

.children-data-item-save {
  display: flex;
  justify-content: left;

}

.save {
  width: 118px;
  height: 44px;
  color: white;
  background: #01A7FD;
  border-radius: 100px;
  border: none;
}
</style>
