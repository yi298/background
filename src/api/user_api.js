// 专门处理user用户管理

// 引入
import axios from 'axios'
// 设置基准路径（有了基准路径，后面的路径就可以直接写最后的目标路径了）
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

// 实现用户登录
export const login = (data) => {
  return axios({
    method: 'post',
    url: 'login',
    data
  })
}