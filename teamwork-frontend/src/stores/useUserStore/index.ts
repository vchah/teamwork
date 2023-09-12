import { reactive } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

import  type { LoginParams } from './types'
import axios from 'axios'
export const useUserStore = defineStore('user', () => {
    const state = reactive({
        token:"",
        name: "",
        role: ""
    })
    const login = (loginParams: LoginParams) => {
        console.log('登录', loginParams)
        axios.post("/dev-api/login", loginParams).then(res => {
            console.log('login',res)
            state.token = res.data.token
        }).catch(error => {
            console.log(error)
        })
        state.name = loginParams.username
        router.push({path:'/home'})
    }
    return { state, login } 
})
