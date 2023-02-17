import {FC, useContext} from "react";
import {AppContext} from "../AppContext";
import {Typography} from "@mui/material";
import {Navigate, useLocation} from "react-router-dom";
import {Check as CheckIcon} from "@mui/icons-material";

export const ProtectedPage: FC = () => {
    const {isLoggedIn} = useContext(AppContext)
    const location = useLocation();

    return (<>
            {isLoggedIn &&
                <>
                    <CheckIcon sx={{color: 'green', fontSize: 40}}/><Typography variant='body1'>You're logged in, so you can see this. Congrats!</Typography>
                </>
            }
            {!isLoggedIn && <Navigate to='/login' state={{from: location.pathname}} replace={true}/>}
        </>
    )
}