import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import data from "../data/Data";
import { addAppointment, bookSlot } from "../Redux/actions";
import "../Styles/AppointmentNew.css"



export const AppointmentNew=()=>{

    const [id,setId]=useState("");
    const [valid,setValid]=useState(false);
    const [date,setDate]=useState("");
    const [slotID,setSlotId]=useState("");
    const [time,setTime]=useState("")
    const appointments=useSelector(state=>state.appointments)

const params=useParams();
var ref=useRef()
const dispatch=useDispatch()
const navigate=useNavigate();

var datas=data.filter((e)=>e.id==params.id);
var doctor=datas[0];
const handleButton=(e,el)=>{
    
    if(el.check==false){
        alert("Appointments Not Available")
    }else{
        if(ref.current!=undefined){
            ref.current.target.style.backgroundColor=null
            ref.current.target.style.color="green"  
        }
        ref.current=e
        ref.current.target.style.backgroundColor="green"
        ref.current.target.style.color="white"
       
        setTime(el.time);
        setSlotId(el.id);
        setValid(true);
       
    }

}
const handleDate=(e)=>{

  
  setDate(e.target.value);
}
const book=()=>{
    if(date!=""){
       
   dispatch(bookSlot({doctor:params.id,slot:slotID}));
   let apId=appointments.length+1;
   let appointment={
       id:apId,
       name:doctor.name,
       date:date,
       time:time,
   }
   console.log(appointment);
   dispatch(addAppointment(appointment));

   navigate("/appointment");
   
}else{
    alert("Enter Date and Time");
}
}
    return (
        <div className="appointmentNew">
         
            <label htmlFor="">
               Select Date 
            </label>
            <br />
               <input onChange={(e)=>handleDate(e)} type="date" name="" id="" required/>
          <div className="selectTime">
             
            {doctor.availablity.map((el)=>{
                return <button key={el.id} style={el.check?{color:"green"}:{color:"red"}} onClick={(e)=>handleButton(e,el)}>{el.time}</button>
            })}
          </div>
        <button onClick={book} style={valid?{background:"green",color:"white"}:{background:"red",color:"white"}}>Book</button>
        </div>
    )
}