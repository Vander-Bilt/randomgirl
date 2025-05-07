import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://nv.all4bridge.serv00.net', //https://nv.all4bridge.serv00.net http://localhost:3000
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance