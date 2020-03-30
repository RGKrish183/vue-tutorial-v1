<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Dashboard</el-breadcrumb-item>
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <div>
      <el-divider></el-divider>
    </div>
    <div class="el-addpost">
      <AddPost />
    </div>
    <el-table :data="posts" style="width: 100%" v-loading="loading">
      <el-table-column prop="employee_name" label="Name"></el-table-column>
      <el-table-column prop="employee_salary" label="Salary"></el-table-column>
      <el-table-column prop="employee_age" label="Age"></el-table-column>
      <el-table-column prop="id" label="Action">
        <template slot-scope="scope">
          <el-button @click="fnEditPosts" circle icon="el-icon-edit" type="primary"></el-button>&nbsp;&nbsp;
          <el-popconfirm
            confirmButtonText="OK"
            cancelButtonText="Cancel"
            icon="el-icon-info"
            iconColor="red"
            title="Are you sure wants to delete this?"
            @onConfirm="fnRemovePosts(scope.$index, scope.row.id)"
          >
            <el-button circle slot="reference" icon="el-icon-delete" type="danger"></el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import AddPost from "./AddPost";
import { mapState } from "vuex";

export default {
  name: "PostListComponent",
  components: {
    AddPost
  },
  computed: {
    ...mapState("VuxPostList", ["posts", "loading"])
  },
  mounted() {
    this.getPosts();
  },
  data() {
    return {
      test: false,
      title: "Posts List"
    };
  },
  methods: {
    getPosts() {
      this.$store.dispatch("VuxPostList/ActGetPost");
    },
    fnEditPosts() {
      console.log("xxx");
    },
    fnRemovePosts(index, id) {
      console.log("xxx-remove-posts", id);
      this.$store.dispatch("VuxPostList/ActDelPost", id, index);
    }
  }
};
</script>

<style>
.el-addpost {
  float: right;
}
.el-icon-edit,
.el-icon-delete {
  font-size: large;
}
</style>
