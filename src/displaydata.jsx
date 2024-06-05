import React, { useEffect, useState } from 'react'

export default function Displaydata() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y=>y.json())
        .then(y=>
            setData(y)
        )
    },[])
  return (
    <div>{data.map((v)=>{
        return (<div>{v.title}</div>)
    })}</div>
  )
}
