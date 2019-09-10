<template>
  <div class="home">
    <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="logo">后台管理系统</div>
        <div class="menu">
          <el-menu
            router
            default-active="2-1"
            class="el-menu-vertical-demo"
            background-color="#1e3a46"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/home/users">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户列表</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item index="2-1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限列表</span>
                </template>
              </el-menu-item>
              <el-menu-item index="2-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>角色列表</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="3-1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>商品分类</span>
                </template>
              </el-menu-item>
              <el-menu-item index="3-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>商品列表</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="4-1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户列表</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item index="5-1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户列表</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header >
            <el-col :span="6" :offset="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="2" :offset="6" class="welcome">
              <div class="grid-content bg-purple"><a href="#">退出</a></div>
            </el-col>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #1e3a46;
  }
  .el-main {
    background-color: #e6e6e6;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1e3a46;
  }
  .logo {
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    color: #fff;
    font-weight: 900;
    background-size: cover;
    background-color: #1e3a46;
  }
  .toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: white;
    cursor: pointer;
    line-height: 60px;
    &:hover {
      background-color: #4292cf;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome {
    color: white;
    &:hover{
      color: #ffd04b;
    }
  }
}
</style>
