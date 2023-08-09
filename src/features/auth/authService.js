import axios from "axios";


const API_URL='http://localhost:8081/api/v1'
const register=async(payload)=>{

    const response=await axios.post(API_URL+"/auth/register",payload)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data;

}

const login=async(payload)=>{
    const response=await axios.post(API_URL+"/auth/login",payload)
    if(response.data){
        localStorage.setItem('token',JSON.stringify(response.data))
    }
    return response.data;  
}

const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

const authService={
    register,
    login,
    logout,
}

export default authService