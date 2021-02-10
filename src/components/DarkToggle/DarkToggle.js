import React, { useState, useEffect } from "react";
import "./dark.style.css";
export default function DarkToggle() {

  const handleToggle=()=>{
  
        document.body.classList.toggle('dark')
        
      
  }


  return (
    <div>
      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="chk"
          checkedDefault={false}
          onChange={handleToggle}
        />
        <label className="label" htmlFor="chk">
          <i className="fas fa-sun" />
          <i className="fas fa-moon" />

          <div className="ball" />
        </label>
      </div>
    </div>
  );
}
