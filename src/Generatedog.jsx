import React, { useEffect, useState } from 'react'

function Generatedog() {
   const[image,setimage] = useState("")
   const fetchImage=async()=>{
    let response = await fetch('https://dog.ceo/api/breeds/image/random')
    let data=await response.json();
    setimage(data.message)
   }
   useEffect(()=>{
    fetchImage()
   },[])


  return (
    <div>
    <div className="main-page">
      <h1>Generate Random Dog Image</h1>
      <button id="colgen" onClick={fetchImage}>Generate</button>
      <div className="color-box" id="color-box"> <img src={image} alt="loading..." /></div>
    </div>
    </div>
  )
}

export default Generatedog