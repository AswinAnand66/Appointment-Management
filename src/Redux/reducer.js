import { ADD_APPOINTMENT, BOOK_SLOT, DELETE_APPOINTMENT, GET_DATA } from "./actionTypes"


const initState={
    data:[],
    doctors:[],
    appointments:[],
}

export const Reducer=(state=initState,action)=>{
    switch(action.type){
       case GET_DATA:
           return{
               ...state,
               data:[...action.payload],
               doctors:[...action.payload]
           }
        case BOOK_SLOT:

            let doctor=state.doctors.filter((e)=>e.id==action.payload.doctor);
            let id=action.payload.slot-1
            doctor[0].availablity[id].check=false;
           
            let newData=state.doctors.map((e)=>e.id==action.payload.doctor?doctor[0]:e);
          
           return {
               ...state,
               doctor:[...newData]
           }
        case ADD_APPOINTMENT:
            return{
                ...state,
                appointments:[...state.appointments,action.payload]
            }
         case DELETE_APPOINTMENT:
             let newAppointment=state.appointments.filter((e)=>e.id !=action.payload);
             return {
                 ...state,
                 appointments:[...newAppointment]
             }
             

        default:
            return state
    }
}