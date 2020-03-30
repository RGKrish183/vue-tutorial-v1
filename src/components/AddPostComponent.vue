<template>
  <div class="apc_root">
    <div class="apc_pannel">
      <div class="apc_header">{{ title }}</div>
      <hr />
      <div class="apc_content">
        <div class="apc_formControl">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="apc_formControl">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div class="apc_formControl">
          <label for="age">Age</label>
          <input type="number" id="age" v-model="age" />
        </div>
        <div class="apc_formControl">
          <button type="submit" @click="addpost">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPostComponent",
  data() {
    return {
      title: "Add Posts",
      firstName: null,
      lastName: null,
      age: null
    };
  },
  // beforeCreate() {
  //   console.log("vue init");
  // },
  // created() {
  //   console.log("vue setup ready");
  // },
  // beforeMount() {
  //   console.log("constructor");
  // },
  // mounted() {
  //   console.log("componentDidmount");
  // },
  // beforeUpdate() {
  //   console.log("before data changes or update");
  // },
  // updated() {
  //   console.log("data changes or updated");
  // },
  // beforeDestroy() {
  //   console.log("cleanup");
  // },
  //   props: ["posts"],
  methods: {
    addpost() {
      let postObj = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age
      };
      this.$store.dispatch("actAddposts", postObj);
    }
  }
};
</script>

<style>
.apc_header {
  margin: 10px;
  padding: 0 10px;
}
.apc_content {
  margin: 10px;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
}
.apc_formControl {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 5px;
  padding: 5px;
}
.apc_formControl label {
  width: 40%;
  text-align: center;
}
.apc_formControl input {
  width: 40%;
}
</style>