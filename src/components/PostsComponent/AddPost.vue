<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true">+ Add</el-button>

    <el-dialog v-bind:title="title" :visible.sync="dialogFormVisible">
      <el-form label-position="right" label-width="130px" :model="form" :rules="rules" ref="form">
        <el-form-item label="Employee Name" prop="name">
          <el-input v-model.trim="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Employee Age" prop="age">
          <el-input v-model.number="form.age" type="age" />
        </el-form-item>
        <el-form-item label="Employee Salary" prop="salary">
          <el-input v-model.number="form.salary" type="salary" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="ApiAddPost">Add</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddPost",
  data() {
    return {
      title: "Add Employee Details",
      dialogFormVisible: false,
      form: {
        name: "",
        age: "",
        salary: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Name is required"
          }
        ],
        age: [
          {
            required: true,
            message: "Age is required"
          },
          {
            type: "number",
            min: 18,
            max: 58,
            message: "Age should must be 18 to 58"
          }
        ],
        salary: [
          {
            required: true,
            message: "Salary is required"
          },
          {
            type: "number",
            min: 1800,
            max: 5800,
            message: "Age should must be 1800 to 5800"
          }
        ]
      }
    };
  },
  methods: {
    ApiAddPost() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          axios
            .post("http://dummy.restapiexample.com/api/v1/create", this.form)
            .then(response => {
              console.log(response);
              this.dialogFormVisible = false;
            })
            .catch(error => console.log(error));
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style>
</style>