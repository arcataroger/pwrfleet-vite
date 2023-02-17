import {Typography} from "@mui/material";
import {FC} from "react";

export const ErrorPage: FC = () => {
    return <>
        <Typography variant='h1'>Oh noes... error :( </Typography>

        <Typography>
            An unknown error occurred.
        </Typography>
    </>
}