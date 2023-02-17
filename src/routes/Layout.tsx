import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {PWRNav} from "../components/PWRnav";
import {FC} from "react";
import {Outlet} from "react-router-dom";


export const Layout: FC = () => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    return <>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <PWRNav/>
            <Container sx={{padding: 5}} maxWidth='xl'>
                <Outlet/>
            </Container>
        </ThemeProvider>
    </>
}