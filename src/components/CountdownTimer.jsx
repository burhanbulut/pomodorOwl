import {CountdownCircleTimer} from "react-countdown-circle-timer";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import {Button} from "@mui/material";
import {useState} from "react";
import TimeInput from "./TimeInput.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setPlaying} from "../store/TimeSlice.js";


function CountdownTimer() {

    const time = useSelector(state => state.time.time)
    const dispatch = useDispatch()
    const isPlayingState = useSelector(state => state.time.isPlaying)

    function startTimer() {
        dispatch(setPlaying(!isPlayingState))
    }

    const children = ({remainingTime}) => {
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60

        return (
            <div>
                <div className='text-3xl text-center font-bold'>{10 > hours ? `0${hours}` : hours}</div>
                <div className='text-3xl text-center font-bold'>{10 > minutes ? `0${minutes}` : minutes}</div>
                <div className='text-3xl text-center font-bold'>{10 > seconds ? `0${seconds}` : seconds}</div>
            </div>

        )
    }

    return (
        <div className='flex items-center flex-col justify-center align-middle my-4'>
            <div className=''>
                <CountdownCircleTimer
                    isPlaying={isPlayingState}
                    duration={time * 60}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                    size={400}
                    strokeWidth={20}
                    trailStrokeWidth={10}
                >
                    {children}
                </CountdownCircleTimer>
            </div>

            <div className='mt-5 flex justify-center align-middle items-center'>
                <div>
                    <TimeInput/>
                </div>
                <div>
                    {isPlayingState ? <Button onClick={startTimer} variant="contained" color={'error'}
                                              startIcon={<PauseCircleOutlineIcon/>}>Durdur</Button> :
                        <Button onClick={startTimer} variant="contained" color={"success"}
                                startIcon={<PlayCircleOutlineIcon/>}>Başlat</Button>}
                </div>


            </div>
        </div>
    )
}

export default CountdownTimer
