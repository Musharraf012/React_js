import React from 'react'
import data from './Dis'
export default function Dis() {
   
  return (
    <div>
        {data.map((v)=>{
        return (<div className="card" >
        <img src={v.image} className="card-img-top" alt ="..."/>
        <div className="card-body">
          <h5 className="card-title">{v.name}</h5>
          <p className="card-text">{v.id}</p>
          <p className="card-text">{v.age} Years</p>
          
        </div>
      </div>)
    })}
    </div>
  )
}
