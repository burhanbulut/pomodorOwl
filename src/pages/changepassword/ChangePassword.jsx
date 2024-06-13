import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);

  const [changedPassword, setChangedPassword] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState({
    newPassword: "",
    newPasswordAgain: "",
  });
  const getOldPassword = (e) => {
    setOldPassword(e.target.value);
  };

  const getNewPassword = (e) => {
    setNewPassword({ ...newPassword, newPassword: e.target.value });
  };

  const getNewPasswordAgain = (e) => {
    setNewPassword({ ...newPassword, newPasswordAgain: e.target.value });
  };

  useEffect(() => {
    if (newPassword.newPassword == newPassword.newPasswordAgain && getOldPassword.length > 0) {
      setChangedPassword(newPassword.newPassword);
      
    } 
  }, [newPassword.newPassword, newPassword.newPasswordAgain]);

  const updatePassword = () => {
    

    fetch("http://localhost:8080/auth/updatepassword", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: localStorage.getItem("username"),
        oldPassword: oldPassword,
        newPassword:changedPassword,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="h-full flex  justify-center">
      <div className="flex flex-col mt-4">
        <h1 className="text-2xl font-bold text-center mb-4">Şifre Değiştir</h1>

        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password" color="warning">
            Eski Şifre
          </InputLabel>
          <FilledInput
            onChange={getOldPassword}
            color="warning"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password" color="warning">
            Yeni Şifre
          </InputLabel>
          <FilledInput
            onChange={getNewPassword}
            color="warning"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password" color="warning">
            Yeni Şifre Tekrar
          </InputLabel>
          <FilledInput
            onChange={getNewPasswordAgain}
            color="warning"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button
          onClick={updatePassword}
          disabled={changedPassword.length > 0 ? false : true}
          variant="contained"
        >
          Şifre Değiştir
        </Button>
      </div>
    </div>
  );
}
