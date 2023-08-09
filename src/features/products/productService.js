import axios from "axios";
import { UseSelector,useDispatch, useSelector } from "react-redux/es/hooks/useSelector";


const API_URL='http://localhost:8081/api/v1/products'

// const {token}=useSelector((state)=>state.auth)

const authAxios = axios.create({
    baseURL: API_URL,
    // headers: {
    //     Authorization: `Bearer ${token}`
    // }
})



const getAllProducts=async()=>{
    const response= await authAxios.get(`${API_URL}/all`)
    return response.data;

}

const productService={
    getAllProducts,
}

export default productService