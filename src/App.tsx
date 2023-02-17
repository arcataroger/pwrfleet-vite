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
import {
    Menu as MenuIcon,
    AccountCircle as AccountCircleIcon,
    Description as DescriptionIcon,
} from '@mui/icons-material'
import {PWRNav} from "./components/PWRnav";
import {createBrowserRouter, RouteObject, RouterProvider, Routes, Route} from "react-router-dom";
import {HomePage} from "./routes/HomePage";
import {DashboardPage} from "./routes/DashboardPage";
import {ErrorPage} from "./routes/ErrorPage";
import {Layout} from "./routes/Layout";


function App() {

    return (
        <>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="dashboard" element={<DashboardPage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
