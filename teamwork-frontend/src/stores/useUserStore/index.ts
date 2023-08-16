import { reactive } from 'vue'
import { defineStore } from 'pinia'

import  type { LoginParams } from './types'

export const useUserStore = defineStore('user', () => {
    const state = reactive({
        token:"",
        name: "",
        role: ""
    })
    const login = (loginParams: LoginParams) => {
        console.log('登录', loginParams)
        state.name = loginParams.account
    }
    return { state, login } 
})
