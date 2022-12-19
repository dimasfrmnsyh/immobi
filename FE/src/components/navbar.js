import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
const Navbar = () => {
    const history = useNavigate();

  return (
   <div style={{margin:"0 auto",display:"flex",gap:"50px",padding:"50px 0",fontSize: "30px"}}>
    <div style={{cursor:"pointer",fontSize: "30px"}} onClick={()=>history("/")}>{"Karyawan"}</div>
    <div style={{cursor:"pointer",fontSize: "30px"}} onClick={()=>history("/jabatan")}>{"Jabatan"}</div>
    <div style={{cursor:"pointer",fontSize: "30px"}} onClick={()=>history("/departement")}>{"Departements"}</div>
   </div>
  );
};
export default Navbar;
