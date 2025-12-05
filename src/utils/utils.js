export const checkValidUser = () => {
    let status = localStorage.getItem("status");
    let token = localStorage.getItem("accessToken");
    if(status != undefined && status == 200 && token != undefined){
        return true
    }else{
        return false
    }
}

export const fetchUserDatafromLocal = () => {
    let data = JSON.parse(localStorage.getItem("OG_Data"));
    return data
}