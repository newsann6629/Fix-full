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

    return {
        register,
        login,
    }

}