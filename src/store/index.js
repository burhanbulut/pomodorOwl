import {configureStore} from "@reduxjs/toolkit";
import timeSlice from "./TimeSlice";
import userSlice from "./UserSlice.jsx";

export const store = configureStore(
    {
        reducer: {
            time: timeSlice,
            user: userSlice
        }
    }
)