import Cookies from 'js-cookie'

export const setLocalstorage=(key,value)=>{
   localStorage.setItem(key,value)
}

export const getLocalstorage=(key)=>{
   return localStorage.getItem(key)
}
export const deleteLocalstorage=(key)=>{
  localStorage.removeItem(key)
}

export const setCookies=(key,value)=>{
  Cookies.set(key,value,{expires:1})
}
export const getCooies=(key)=>{
   return Cookies.get(key);
}

export const deleteCookies=(key)=>{
   Cookies.remove(key)
}

export const setAuthneticate=(token,user)=>{
    setCookies('authorization',token);
    setLocalstorage('user',user)
}
export const removeAuthneticate=()=>{
    deleteCookies('authorization');
   deleteLocalstorage('user')
}
export const isAuthenticate=()=>{
    if(getCooies('authorization') && getLocalstorage('user')){
        return getLocalstorage('user')
    }else{
        return false;
    }
}