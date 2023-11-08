import React, { useEffect, useState } from 'react'
import './header.css'

function Header() {
    const[bgShow,setBg]=useState(false)
    useEffect(()=>{
window.addEventListener('scroll',()=>{
if(window.scrollY>600){
    setBg(true)
}
else{
    setBg(false)
}
})        
    })
  return (
    <div>
      <div className={`logo ${bgShow && "navBg"}`}>
        <img
          src="https://i.postimg.cc/SxkW2p6Q/Screenshot-2023-10-11-100152-transformed-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header