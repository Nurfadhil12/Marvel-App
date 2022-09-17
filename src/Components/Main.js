import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"


export const Main = () => {
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=00909308f05690d39cf17923a6fb0776&hash=ea2286c32b7b1ebda6855a4aa3567372")
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");

  console.log(url)
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=00909308f05690d39cf17923a6fb0776&hash=ea2286c32b7b1ebda6855a4aa3567372`)
  }

  return (
    <>
        <div className="header">
            <div className="bg">
                <img src="./Images/bg.png" alt="" />
            </div>
            <div className="search-bar">
                <img src="./Images/logo.jpg" alt="logo" />
                <input type="search" placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onKeyPress={searchMarvel}/>
            </div>
        </div>
       <div className="content">
         
        {
          (!item)?<p>Not Found</p>:<Card data={item}/>
        }
       </div>
    </>
  )
}
