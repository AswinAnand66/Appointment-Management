

import { useNavigate } from "react-router-dom"
import "../Styles/DoctorCard.css"



export const DoctorCard=({item})=>{

console.log("item",item)

var navigate=useNavigate()

const handleClick=(id)=>{
  
   navigate(`/${id}`)
}

    return (
        <div className="doctorCard" onClick={()=>handleClick(item.id)}>
            <img src={item.img} alt="Doctor" />
            <h2>{item.name}</h2>
            
            <p>Specialist :{item.speciality}</p>
        </div>
    )
}