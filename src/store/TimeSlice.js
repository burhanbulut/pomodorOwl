import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    time: 45,
    isPlaying: false,
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
        }
    }
})
export const {getTime, setPlaying} = timeSlice.actions
export default timeSlice.reducer