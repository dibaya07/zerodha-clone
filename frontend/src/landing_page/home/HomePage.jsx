import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {GeneralContext} from "../../Context/context";

export default function HomePage() {
  const {setUsername,removeCookie, cookies, setIsAuthorized, isAuthorized} = useContext(GeneralContext)
  const navigate = useNavigate();

  useEffect(() => {
    const verifyCookie = async () => {
      // if (!cookies.token) {
      //   console.log("hello")
      //   navigate("/login");
      // }
      const { data } = await axios.post(
        import.meta.env.VITE_BACKEND_URL, 
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      if(status) setIsAuthorized(true)
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie,setUsername,setIsAuthorized]);
 
  return (
    <>
      {/* <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer /> */}

    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    {!isAuthorized && 
    <OpenAccount/>}
    </>
  )
}
