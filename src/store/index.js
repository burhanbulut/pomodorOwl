import {configureStore} from "@reduxjs/toolkit";
import timeSlice from "./TimeSlice";

export const store = configureStore(
    {
        reducer: {
            time: timeSlice
        }
    }
)