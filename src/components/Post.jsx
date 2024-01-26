import TextField from "@mui/material/TextField";
import AddTaskIcon from '@mui/icons-material/AddTask';
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import {UpdateTodoModal} from "../modal/UpdateTodoModal.jsx";

function Post() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [isSubmit, setIsSubmit] = useState(false)
    const [open, setOpen] = useState(false);
    const [updateTodoItem, setUpdateTodoItem] = useState('')

    function submitTodo() {
        if (todo === '') return;
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
                setTodos([...todos, result.text])
                setIsSubmit(true)
                setTodo('')
            }).catch((e) => {
            console.log(e)
        })

    }

    function getTodos() {
        fetch(`http://localhost:8080/todos?userId=${localStorage.getItem("currentUser")}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem("tokenKey"),
            }
        }).then(res => res.json())
            .then((res) => {
                setTodos(res)
            })
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        getTodos();
    }, [todos]);

    const deleteTodo = (todoItem) => {
        setTodos((prevTodos) => prevTodos.filter(item => item.id !== todoItem.id));
        fetch(`http://localhost:8080/todos/${todoItem.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem("tokenKey"),
            }
        }).then(res => res.json())
            .then(() => {
                getTodos();
            })
            .catch((e) => console.log(e))

    }


    const handleInput = () => {
        submitTodo();
        if (isSubmit) {
            getTodos()
            setTodo('')

        }
    }

    const updateTodoFunc = (todoItem) => {
        console.log(updateTodoItem)
        fetch(`http://localhost:8080/todos/${todoItem.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem("tokenKey"),
            },
            body: JSON.stringify({
                text: updateTodoItem,
                userId: localStorage.getItem("currentUser")
            })
        }).then(res => res.json())
            .then((res) => {
                console.log(res)
                setOpen(false)
                getTodos();
            })
            .catch((e) => console.log(e))
    }


    return (
        <div className={'flex relative  justify-center items-center align-middle flex-col'}>
            <div className={'flex  mt-5 items-center justify-center w-full sticky top-0 z-10'}>
                <div className={'mx-2 w-[420px]'}>
                    <TextField
                        style={{
                            backgroundColor: '#cdc9c3',
                            color: '#555555',
                            border: 'none'
                        }}
                        color="success"

                        fullWidth onChange={(e) => setTodo(e.target.value)} value={todo} id="filled-basic"
                        label="Todo Ekle"
                        variant="outlined"/>
                </div>
                <Button style={{
                    backgroundColor: '#cdc9c3',
                    color: '#555555',
                    fontWeight: 'bold',
                    height: '55px',
                    width: '120px',
                    borderRadius: '15px',
                }} onClick={handleInput} size={"large"} variant="contained" endIcon={<AddTaskIcon />}>
                    Ekle
                </Button>
            </div>
            <div className={'flex flex-wrap  align-middle items-center max-w-[1200px]  p-2 '}>

                {todos.map((todoItem, _) => (
                    <div key={_}
                         className={'flex  p-2 relative flex-col m-2 align-middle w-[250px]  h-[200px] items-center  border-2 bg-baseColorHeader text-mainColor outline-0 rounded-2xl'}>
                        <li className={'list-none break-words overflow-auto scroll-smooth h-[130px] w-full align-middle  p-3'}>{todoItem.text}</li>

                        <div onClick={() => deleteTodo(todoItem)}
                             className={'bottom-0 absolute  left-0 justify-center items-center m-2 border-2 px-3 py-2 rounded-2xl align-bottom bg-mainColor'}>
                            <p
                                className={'align-middle  flex justify-center text-center font-bold items-center text-baseColorHeader'}>
                                <DeleteIcon className={'mr-1'} color={'error'}/>Sil
                            </p>
                        </div>
                        <div onClick={() => {
                            setOpen(true)
                            setUpdateTodoItem(todoItem)
                            console.log(updateTodoItem)

                        }}
                             className={'bottom-0 absolute cursor-pointer right-0 justify-center items-center m-2 border-2 px-3 py-2 rounded-2xl align-bottom bg-mainColor '}>
                            <p
                                className={'align-middle flex justify-center text-center  font-bold items-center text-baseColorHeader'}>
                                <UpdateIcon className={'mr-1'} color={'warning'}/>Düzenle
                            </p>
                        </div>
                        <UpdateTodoModal open={open} onClose={() => setOpen(false)}>
                            <div className={'text-center w-[500px] h-auto'}>
                                <UpdateIcon className={'mr-1'} color={'warning'}/>
                                <div>
                                    <h3 className="text-lg font-black text-gray-800">İçeriği Güncelle</h3>
                                    <textarea value={updateTodoItem.text}
                                              onChange={(e) => setUpdateTodoItem(e.target.value)}
                                              className="text-2xl text-black border break-words resize-none w-full h-40 p-2"/>


                                </div>
                                <div className="flex gap-4">
                                    <button onClick={() => updateTodoFunc(todoItem)}
                                            className="btn border-2 rounded-full bg-baseColorHeader h-10 w-full">Güncelle
                                    </button>
                                    <button
                                        className="btn border-2 rounded-full bg-red-800 h-10 w-full"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </UpdateTodoModal>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default Post;