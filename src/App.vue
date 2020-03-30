<template>
  <div id="app">
    <template>
      <el-container>
        <el-header class="el-header">
          <div class="logo">
            <el-image
              class="el-header-logo"
              :src="header_logo"
              fit="contain"
            ></el-image>
          </div>
          <div class="icon">
            <i
              class="el-icon-s-unfold menubar-shown"
              v-if="menubaractive"
              @click="fnmenubar"
            ></i>
            <i
              class="el-icon-s-fold menubar-hidden"
              v-else
              @click="fnmenubar"
            ></i>
          </div>
        </el-header>
        <el-container class="el-maincontainer">
          <el-aside
            width="200px"
            class="el-asidecontainer"
            v-show="menubaractive"
          >
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <router-link
                :to="{ name: 'DashboardComponent', path: '/' }"
                class="el-links"
              >
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span>Dashboard</span>
                </el-menu-item>
              </router-link>

              <router-link
                :to="{ name: 'PostListComponent', path: '/posts' }"
                class="el-links"
              >
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span>Posts</span>
                </el-menu-item>
              </router-link>

              <router-link
                :to="{ name: 'AddPostComponent', path: '/add' }"
                class="el-links"
              >
                <el-menu-item index="3">
                  <i class="el-icon-document"></i>
                  <span>Navigator Three</span>
                </el-menu-item>
              </router-link>

              <el-menu-item index="4" disabled>
                <i class="el-icon-setting"></i>
                <span>Navigator Four</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </template>
  </div>
</template>

<script>
import logo from "./assets/elementui.svg";

export default {
  name: "app",
  data() {
    return {
      header_logo: logo,
      menubaractive: true
    };
  },
  methods: {
    fnmenubar() {
      this.menubaractive = !this.menubaractive;
    }
  }
};
</script>

<style scoped>
.el-header {
  background: #545c64;
  border-bottom: 4px solid rgb(127, 142, 158);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.el-header-logo {
  padding: 4px;
  margin: 5px;
}
.menubar-shown,
.menubar-hidden {
  font-size: x-large;
  padding: 4px;
  margin: 5px;
  color: #aaccd4;
  cursor: pointer;
}
.el-maincontainer,
.el-menu-vertical-demo {
  min-height: 100vh;
}
.el-asidecontainer {
  background: #545c64;
}
.el-links {
  text-decoration: none;
  cursor: pointer;
}
</style>
