import { useNavigate, useParams } from "react-router-dom"
import data from "../data/Data";
import { DoctorCard } from "./DoctorCard";
import "../Styles/SingleDoctor.css"
import { useState } from "react";


export const SingleDoctor=()=>{
    const [show,setShow]=useState(false);

var params=useParams();
console.log(params);
var datas=data.filter((e)=>e.id==params.id)
var doctor=datas[0]
console.log("doctor",doctor)
const navigate=useNavigate()

const handleClick=()=>{
    navigate(`/appointmentnew/${doctor.id}`)
}

const showHistory=()=>{
   setShow(!show);
}
    return (
        <div>
         <div>
             <img src={doctor.img} alt="doctor" style={{width:"250px"}} />
         </div>
         <div>
             <h2>Name: {doctor.name}</h2>
             <h2>Age: {doctor.age}</h2>
             <h2>Cost :{doctor.cost}</h2>
             <h2>Specialist: {doctor.speciality}</h2>
             <button className="addAppointment" onClick={handleClick}>Add Appointment</button>
             <button onClick={showHistory} className="appointmentHistory">Appointment History</button>
         </div>
         <div>
             {show&&doctor.history.map((e)=>{
                 return <p className="history">{e.name} has Treatment on {e.date}</p>
             })}
         </div>
        </div>
    )
}