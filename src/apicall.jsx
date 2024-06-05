import React, { useEffect, useState } from 'react'

export default function Apicall() {
   
    let [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://www.course-api.com/react-tours-project")
        .then(y=>y.json())
        .then(y=>{
            setData(y)
            console.log(data)
        })

    },[])

  return (
    <div>{data.map((v)=>{
        return (<div className="card" >
        <img style={{height:"400px"}} src={v.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{v.name}</h5>
          <p className="card-text">{v.info}</p>
          <a href="#" className="btn btn-primary">{v.price}</a>
        </div>
      </div>)
    })}</div>
  )
}
