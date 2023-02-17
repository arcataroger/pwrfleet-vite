import {FC, useContext} from "react";
import {AppContext} from "../AppContext";
import {Button, Typography} from "@mui/material";
import {Navigate, useLocation} from "react-router-dom";

export const LoginPage: FC = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext)
    const location = useLocation()

    return <>
        {!isLoggedIn &&
            <>
                <Typography variant={'body1'}>You are not logged in. Please login first.</Typography>
                <Button sx={{my: 4}} size='large' variant='contained' onClick={() => setIsLoggedIn(true)}>Log in</Button>
            </>
        }

        {isLoggedIn && <Navigate to={location.state.from}/>}
    </>
}