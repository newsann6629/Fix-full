import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useUserStore } from "../composables/UserStore";


export const useService = () =>{
    const UserStore = useUserStore()


    const login = async(u,p) =>{
        if(u == "" || p == ""){
            alert("กรุณากรอกชื่อหรือรหัสผ่าน")
            return
        }

        try {
            const res = await axios.post("api/auth/login",{
                email: u,
                password: p,
            })
            UserStore.SetUser(res.data.data.token)
            alert(res.data.data.message)
        }
        catch(err){
            alert(err.response.data.message)
        }
        
    }

    const register = async(u,p,email,czid,bdate,phone,sal,po,level,dep) => {
        try {
            const res = await axios.post("api/auth/register",{
                username: u,
                email: email,
                password: p,
                czid: czid,
                bdate: bdate,
                phone: phone,
                sal: sal,
                po: po,
                level: level,
                dep: dep,
            })
            alert(res.data.data.message)
        }
        catch(err){
            alert(err.response.data.message)
        }
    }

    const userdata = async() => {
        UserStore.Loaduser()
        const token = UserStore.token
        try {
            const res = await axios.get("api/user/data",{
                headers: {
                    token: token,
                }
            })
            return res.data
        }catch(err){
            alert(err.response.data.message)
        }
    }

    const addhead = async(h) => {
        UserStore.Loaduser()
        const token = UserStore.token
        try{
            const res = await axios.post("",{
                token: token,
                head: h,
            })

            alert(res.data.data.message)

        }catch(err){
            alert(err.response.data.message)
        }
    }

    const adddetail = async(d) => {
        UserStore.Loaduser()
        const token = UserStore.token
        try{
            const res = await axios.post("",{
                token: token,
                detail: d,
            })

            alert(res.data.data.message)

        }catch(err){
            alert(err.response.data.message)
        }
    }

    const deleteform = async() => {
        UserStore.Loaduser()
        const token = UserStore.token
        try{
            const res = await axios.delete("",{
                data: {
                    token: token,
                }
            })

            alert(res.response.data.message)

        }catch(err){
            alert(err.response.data.message)
        }
    }

    return {
        deleteform,
        addhead,
        adddetail,
        userdata,
        register,
        login,
    }

}