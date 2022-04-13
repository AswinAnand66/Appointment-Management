import { Routes,Route } from "react-router-dom"
import { Appointment } from "../components/Appointment"
import { AppointmentNew } from "../components/AppointmentNew"
import { Doctors } from "../components/Doctors"
import { Navigation } from "../components/Navigation"
import { SingleDoctor } from "../components/SingleDoctor"



export const MainRoutes=()=>{


    return (
        <>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Doctors/>}/>
            <Route path="/appointment" element={<Appointment/>}/>
            <Route path="/:id" element={<SingleDoctor/>}/>
            <Route path="/appointmentnew/:id" element={<AppointmentNew/>}/>
        </Routes>
        </>
    )
}