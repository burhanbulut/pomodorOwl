import {CountdownCircleTimer} from "react-countdown-circle-timer";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import {Button} from "@mui/material";
import {useState} from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';



function CountdownTimer() {
    const [isPlaying, setIsPlaying] = useState(false);

    function startTimer() {
        setIsPlaying(!isPlaying);
    }

    const children = ({remainingTime}) => {
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60

        return `${hours}:${minutes}:${seconds}`
    }

    return (
        <div className='flex items-center flex-col justify-center align-middle my-4'>
            <div className=''>
                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    duration={100}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                    size={400}
                    strokeWidth={20}
                    trailStrokeWidth={10}

                >
                    {children}
                </CountdownCircleTimer>
            </div>

            <div className='mt-5'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="Basic time picker" />
                    </DemoContainer>
                </LocalizationProvider>


                {isPlaying ? <Button onClick={startTimer} variant="contained" color={'error'}
                                     startIcon={<PauseCircleOutlineIcon/>}>Durdur</Button> :
                    <Button onClick={startTimer} variant="contained" color={"success"}
                            startIcon={<PlayCircleOutlineIcon/>}>Başlat</Button>}

            </div>
        </div>
    )
}

export default CountdownTimer
