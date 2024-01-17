import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    login: false,
    logout: false,
}

export const timeSlice = createSlice({
    name: "time",
    initialState,
    reducers: {
        getTime: (state, action) => {
            state.time = action.payload;
        },
        setPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        setRemainingTime: (state, action) => {
            state.remainingTime = action.payload;
        }
    }
})
export const {getTime, setPlaying,setRemainingTime} = timeSlice.actions
export default timeSlice.reducer