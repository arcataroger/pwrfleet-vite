import {useContext, useRef, useState} from 'react'
import {AppContext, AppContextProvider} from "./AppContext";
import {
    AppBar,
    Box,
    Button,
    Container, createTheme, CssBaseline,
    Drawer,
    Grid,
    IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    Menu,
    MenuItem, ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import {Menu as MenuIcon, AccountCircle as AccountCircleIcon, Description as DescriptionIcon} from '@mui/icons-material'
import {PWRNav} from "./components/PWRnav";

function App() {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });


    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <PWRNav/>
        </ThemeProvider>
    )
}

export default App
