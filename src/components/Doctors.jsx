import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/actions";
import { DoctorCard } from "./DoctorCard";
import "../Styles/doctors.css"

export const Doctors=()=>{

    const doctors=useSelector(state=>state.doctors)

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getData());
    },[dispatch]);

   

    return (
        <div className="doctors">
        {doctors.map((item)=>{
            return <DoctorCard key={item.id} item={item}/>
        })}
        </div>
    )
}