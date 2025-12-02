export const checkValidUser = () => {
    let status = localStorage.getItem("status");
    if(status != undefined && status == 200){
        return true
    }else{
        return false
    }
}

export const fetchUserDatafromLocal = () => {
    let data = JSON.parse(localStorage.getItem("OG_Data"));
    return data
}