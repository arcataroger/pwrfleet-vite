import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {AppContextProvider} from "./AppContext";
import {BrowserRouter, createBrowserRouter, RouteObject, RouterProvider, Routes, Route} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppContextProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AppContextProvider>
    </React.StrictMode>,
)
