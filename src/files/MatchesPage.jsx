import React, { useEffect } from "react";
import Navbar from "./Navbar";
import MatchesCard from "./MatchesCard";

const MatchesPage = () => {
  const connectionRequest = async () => {
    try {
      const res = await axios.fetch("/connections", { withCredentials: true });
      console.log(res);
    } catch (error) {}
  };

  useEffect(()=>{
    connectionRequest()
  },[]);
  
  return (
    <div>
      <Navbar />
      <MatchesCard />
    </div>
  );
};

export default MatchesPage;
