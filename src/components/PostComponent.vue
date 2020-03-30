<template>
  <div class="psc_root">
    <div class="psc_table">
      <div class="psc_theader">{{ title }}</div>
      <hr />
      <div class="psc_tcontent">
        <div class="psc_add">
          <router-link :to="{ name: 'AddPostComponent', path: '/add' }">
            <button>+ Add</button>
          </router-link>
        </div>
        <table border="1">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Age</th>
              <th>Last Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="posts.length">
              <tr v-for="(items, index) in posts" :key="index">
                <td>{{ items.firstName }}</td>
                <td>{{ items.age }}</td>
                <td>{{ items.lastName }}</td>
                <td>
                  <button type="button" @click="removePost(index)">
                    Delete
                  </button>
                </td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td colspan="4" align="center">No Posts found.</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PostComponent",
  computed: {
    ...mapState("VuxPost", ["posts"])
  },
  data() {
    return {
      title: "Post Lists"
    };
  },
  methods: {
    ...mapActions("VuxPost", ["actRemovePosts"]),
    removePost(id) {
      this.actRemovePosts(id);
      // this.$store.dispatch("actRemovePosts", id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.psc_theader {
  margin: 10px;
  padding: 0 10px;
}
.psc_tcontent {
  margin: 10px;
}
.psc_tcontent table {
  width: 100%;
}
.psc_tcontent thead {
  background: #eeeeee;
}
.psc_tcontent tbody tr:hover {
  background: yellow;
}
</style>
