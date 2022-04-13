import { useDispatch } from "react-redux"
import { deleteAppointment } from "../Redux/actions";
import "../Styles/EachAppointment.css"


export const EachAppointment=({element})=>{


    const dispatch=useDispatch();

  console.log("each",element)

  const handleDelete=()=>{
      dispatch(deleteAppointment(element.id));
  }
    return(
        <div className="eachAppointment">
            <div>
          Appointment is Sheduled with {element.name} on {element.date} at {element.time}
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}