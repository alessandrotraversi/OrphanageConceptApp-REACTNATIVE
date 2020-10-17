import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.103:3333' //real device & emulator
  //baseURL: 'http://localhost:3333' // emulator (cmd: adb reverse tcp:3333 tcp:333)
})

export default api