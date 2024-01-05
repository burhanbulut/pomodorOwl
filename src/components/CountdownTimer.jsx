import {CountdownCircleTimer} from "react-countdown-circle-timer";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import {Button} from "@mui/material";
import TimeInput from "./TimeInput.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getTime, setPlaying, setRemainingTime} from "../store/TimeSlice.js";
import {useEffect, useState} from "react";


function CountdownTimer() {
    const [key, setKey] = useState(0);
    const time = useSelector(state => state.time.time)
    const dispatch = useDispatch()
    const isPlayingState = useSelector(state => state.time.isPlaying)
    const newRemainingTime = useSelector(state => state.time.remainingTime)

    useEffect(() => {
        resetTimer()
    }, [time]);

    function resetTimer() {
        setKey(prevKey => prevKey + 1);
        dispatch(setPlaying(false))
        dispatch(setRemainingTime(time * 60))
    }

    function startTimer() {
        if (newRemainingTime === 0){
            setKey(prevKey => prevKey + 1);
        }
        dispatch(setPlaying(!isPlayingState))
    }
    // const calculateColorsTime = (remainingTime) => {
    //     // Define your dynamic colorsTime logic based on percentages
    //     const totalDuration = time * 60;
    //     const quarter = totalDuration / 4; // 15
    //     const half = totalDuration / 2; // 30
    //     const threeQuarters = (totalDuration / 4) * 3; // 45
    //
    //     if (remainingTime <= quarter)
    //         return [totalDuration];
    //     else if (remainingTime <= half)
    //         return [totalDuration, threeQuarters]
    //     else if (remainingTime <= threeQuarters)
    //         return [totalDuration, threeQuarters, half]
    //     else
    //         return [totalDuration, threeQuarters, half, quarter]
    //
    //
    // }


    const children = ({remainingTime}) => {
        dispatch(setRemainingTime(remainingTime))
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60
        let isHidden = hours <= 0 ? 'hidden' : ''
        return (
            <div>
                <div className={`text-8xl text-center font-bold ${isHidden}`}>{10 > hours ? `0${hours}` : hours}</div>
                <div className='text-6xl text-center font-bold'>{10 > minutes ? `0${minutes}` : minutes}</div>
                <div className='text-3xl text-center font-bold'>{10 > seconds ? `0${seconds}` : seconds}</div>
            </div>

        )
    }

    return (
        <div className='flex items-center flex-col justify-center align-middle my-4'>
            <div className=''>
                <CountdownCircleTimer
                    key={key}
                    isPlaying={isPlayingState}
                    duration={time * 60}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[10,7,5,3]}
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
