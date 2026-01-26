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
            console.log("Username" , u)
            console.log("Password", p)
            const res = await axios("api/auth/login",{
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

    const register = (u,p,czid,) => {
        
    }

    return {
        login,
    }

}