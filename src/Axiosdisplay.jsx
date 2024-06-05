import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Axiosdisplay() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((y) => {
      console.log(y);
      setProducts(y.data);
    });
  }, []);
  return (
    <div>
      {products.map((v) => {
        return <div>{v.title}</div>;
      })}
    </div>
  );
}

// **********************************************FOR PRACTICE ********************************

//here i want that in users api only display firstname which includes 'm';

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// export default function Axiosdisplay() {
//   let [users,setUsers]=useState([]);
//   useEffect(()=>{
//     axios.get("https://fakestoreapi.com/users")
//     .then(y=>{
//       setUsers(y.data)
//     })

//   },[])
//   return (
//     <div>{users.filter((v)=>{
//       return (v.name.firstname.includes('m'))
//     }).map((v)=>{
//       return (<div>{v.name.firstname}</div>)
//     })}</div>
//   )
// }
