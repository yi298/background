// 专门处理user用户管理

// 引入
import axios from 'axios'
// 设置基准路径（有了基准路径，后面的路径就可以直接写最后的目标路径了）
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

// 添加拦截器  在请求之前设置token值
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么？ 手动添加token值
    var token = localStorage.getItem("token");
    // console.log(config);
    config.headers["Authorization"] = token;
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 实现用户登录
export const login = (data) => {
  return axios({
    method: 'post',
    url: 'login',
    data
  })
}

// 获取用户列表数据
export const getUserList = (params) => {
  return axios({
    method: 'get',
    url: 'users',
    params
  })
}