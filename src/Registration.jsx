// import React, { useState } from 'react'

// export default function Registration() {
//     let[form,setForm]=useState({
//         firstName: '',
//         lastName: '',
//     })
//     const handleFirstName = (e)=>{
//     setForm({...form,firstName:e.target.value})
//     }
//     const handlelastName = (e)=>{
//         setForm({...form,lastName:e.target.value})
//         }
//         const handleSubmit = (e)=>{
//             e.preventDefault()
//             console.log(form)
//         }
//   return (
//     <div><form onSubmit={handleSubmit}>
//         <input type="text" name='firstName' onChange={handleFirstName} />
//         <input type="text" name='lastName' onChange={handlelastName}/>
//         <input type="submit" />
//         </form></div>
//   )
// }


//********************************************** FOR PRACTICE *************************************

import React, { useState } from 'react'
export default function Registration() {
    let [form,setForm]=useState({
        firstName :'',
        lastName :'',
    })
    const handleChange =(e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(form)
        
       

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='firstName' onChange={handleChange}/>
            <input type="text" name='lastName' onChange={handleChange}/>
            <input type="submit" />

        </form>
        </div>
  )
}

