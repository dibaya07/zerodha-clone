import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "./context";

export const GeneralContextProvider = ({children})=>{
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("")
    const [isAuthorized, setIsAuthorized] = useState(false)

    const Logout = () => {
    removeCookie("token");
    setIsAuthorized(false)
    navigate("/");
  };

    return <GeneralContext.Provider value={{username, setUsername, Logout,cookies, removeCookie,isAuthorized, setIsAuthorized}}>
        {children}
    </GeneralContext.Provider>
}