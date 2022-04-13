
import data from "../data/Data";
import { ADD_APPOINTMENT, BOOK_SLOT, DELETE_APPOINTMENT, GET_DATA } from "./actionTypes";


export const getData=()=>({
    type:GET_DATA,
    payload:data,
});

export const bookSlot=(payload)=>({
    type:BOOK_SLOT,
    payload:payload
})


export const addAppointment=(payload)=>({
    type:ADD_APPOINTMENT,
    payload:payload,
})


export const deleteAppointment=(payload)=>({
    type:DELETE_APPOINTMENT,
    payload:payload,
})