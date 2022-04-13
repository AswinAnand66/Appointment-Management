import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import data from "../data/Data"
import { EachAppointment } from "./EachAppointment";


export const Appointment=()=>{

    const appointments=useSelector(state=>state.appointments);
   

    return (
        <div>
           {appointments.length>0?appointments.map((element)=>{
                return <EachAppointment element={element}/>
           }): <div>No Appointments is sheduled</div>}
        </div>
    )
}