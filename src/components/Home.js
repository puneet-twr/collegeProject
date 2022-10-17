import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import './styles/Home.css';
import Header from "./HomeComponents/Header";
import HomeContent from "./HomeComponents/HomeContent";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const userInfo={
    phone: user.phoneNumber,
    email: user.email

  }
  return (
    <div className="Home">
      <Header logoutFunc={handleLogout}/>
      <HomeContent {...userInfo} />
     
    </div>
      
    
  );
};

export default Home;
