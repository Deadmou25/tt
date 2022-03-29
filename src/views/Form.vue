<template>
  <div class="main_content">
    <div class="main_content personal_data">
      <div class="personal_data-title"><label>Персональные данные</label></div>
      <div class="personal_data-name">
        <input placeholder="Имя" v-model="$store.state.personalData.name" type="text"></div>
      <div class="personal_data-age">
        <input
          type="number"
          placeholder="Возраст"
          v-model="$store.state.personalData.age"
          min="1"
          max="99"
          required
        >

      </div>
    </div>
    <div class="main_content children-data">
      <div class="children-data-add">
        <div class="children-data-title"><h6>Дети(макс.5)</h6></div>
        <div class="children-data-button">
          <button class="add-child" :disabled="children.length===5" @click="addChild">Добавить ребенка</button>
        </div>
      </div>
    </div>
    <div class="children-data-item"
         v-for="(child,index) in children"
         :key="child.id"
    >
      <div class="children-data-item-name">
        <input
          type="text"
          required
          class="name"
          placeholder="name"
          v-model="child.name"
        />

      </div>
      <div class="children-data-item-age">
        <input
          type="number"
          placeholder="age"
          class="age"
          required
          v-model="child.age"
        />

      </div>

      <div class="children-data-item-delete">
        <button class="delete" @click="del(child.id)">
          Удалить
        </button>
      </div>
      <div>{{ errors[index] }}</div>
    </div>
    <div class="children-data-item-save">
      <button class="save" @click="save">
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      errors: [],
      children: [],

    }
  },
  methods: {
    addChild() {
      this.children.push({
        id: Date.now(),
        name: '',
        age: ''
      })
    },
    del(id) {
      const index = this.children.findIndex(d => d.id === id)
      if (index !== -1) {
        this.children.splice(index, 1)
      }
    },

    save() {
      this.children.forEach((c, index) => {
        const age = Number(c.age)
        if (!c.name || !age) {
          this.errors[index] = `Введите имя и возраст ребенка ${index }`
        }
        if (age<0 || age>18 || age.isNaN) {
          this.errors[index] = `Введите другой возраст ${index}`

        }

      })

      this.$store.state.children = this.children
    },
    created() {
      this.children = this.$store.state.children.map(c => ({ ...c }))
    },
  }
}
</script>