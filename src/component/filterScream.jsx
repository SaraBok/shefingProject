import { useState } from "react"

  export  const filterScream=()=>{
    const [user,setUser]=useState([
    { firstNeme:'Sara',LastName:'Levi',email:'444@gmail.com' ,company:'rrrrrr'},
    { firstNeme:'Sara',LastName:'Levi',email:'444@gmail.com' ,company:'rrrrrr'},
    { firstNeme:'Sara',LastName:'Levi',email:'444@gmail.com' ,company:'rrrrrr'},
    { firstNeme:'Sara',LastName:'Levi',email:'444@gmail.com' ,company:'rrrrrr'}])

    const [selectesUser,setSelectesUser]=useState([])
    const [key,setKey]=usestate(1);

    function selectesUser(user){
        setSelectesUser(selectesUser.filter)
    }




  }


    
