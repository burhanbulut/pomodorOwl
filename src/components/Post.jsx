import TextField from "@mui/material/TextField";
import AddTaskIcon from '@mui/icons-material/AddTask';
import {Button} from "@mui/material";
import {useEffect, useState} from "react";

function Post() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    function submitTodo() {
        fetch('http://localhost:8080/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": localStorage.getItem("tokenKey"),
                },
                body: JSON.stringify({
                    text: todo,
                    userId: localStorage.getItem("currentUser")
                })
            }
        ).then(res => res.json())
            .then((result) => {
                setTodos(result.text)

            }).catch( (e) =>{console.log(e)})

    }



    const handleInput = () => {
        submitTodo();
        setTodo('');
    }
    return (
        <div className={'flex justify-center items-center '}>
            <div className={'flex mt-5 items-center justify-center'}>
                <div className={'mx-2 w-[420px]'}>
                    <TextField fullWidth onChange={(e) => setTodo(e.target.value)} id="outlined-basic" label="Todo Ekle"
                               variant="outlined"/>
                </div>
                <Button onClick={handleInput} size={"large"} variant="contained" endIcon={<AddTaskIcon/>}>
                    Ekle
                </Button>

            </div>
        </div>
    );
}

export default Post;