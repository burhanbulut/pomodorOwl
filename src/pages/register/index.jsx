import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Logo from '/logo1copy.png'
import {Link} from "react-router-dom";
import {useState} from "react";


const defaultTheme = createTheme();

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
        setFormData({
            username: "",
            password: ""
        })
        history.go("/register")
    };




    return (
        <ThemeProvider theme={defaultTheme}>
            <Container className={'h-full'} component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: ''}}>
                        <img width={175} height={175} src={Logo} alt='google logo'/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Kayıt ol
                    </Typography>
                    <Box component="form" noValidate  sx={{mt: 3}}>
                        <Grid container spacing={2}>

                            <Grid item xs={12} sm={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Kullanıcı Adı"
                                    autoFocus
                                    value={formData.username}
                                    onInput={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={formData.password}
                                    onInput={handleChange}
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            onClick={handleSubmit}

                        >
                            Kayıt Ol
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to={"/login"} >
                                    Zaten hesabın var mı? Giriş yap
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}