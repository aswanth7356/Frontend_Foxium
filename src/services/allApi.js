import base_url from "./base_url";
import commonApi from "./commonApi";

export const registerApi=async(data)=>{
    return await commonApi("POST",`${base_url}/reg`,data,"")
}   


export const LoginApi=async(data)=>{
    return await commonApi("POST",`${base_url}/log`,data,"")
}
