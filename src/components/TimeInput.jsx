import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useDispatch, useSelector} from "react-redux";
import {getTime} from "../store/TimeSlice.js";

function TimeInput() {

    const dispatch = useDispatch()

    return (
        <div className='w-36'>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                     textAlign:'center',
                    '& > :not(style)': { m: 1 },
                }}
            >
                <TextField
                    defaultValue={45}
                    id="demo-helper-text-aligned-no-helper"
                    label="Süre (dk)"
                    type={'number'}
                    inputProps={{ min: "0", step: "1" }}
                    onChange={(event) => dispatch( getTime(event.target.value) )}
                />
            </Box>

        </div>
    )
}

export default TimeInput
