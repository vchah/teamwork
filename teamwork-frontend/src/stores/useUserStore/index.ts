import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const state = reactive({
        token:"",
        name: "",
        role: ""
    })
    function login(loginParams: any){
        console.log('登录', loginParams)
    }
})
