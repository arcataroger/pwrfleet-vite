import {useContext, useRef, useState} from 'react'
import {AppContext, AppContextProvider} from "./AppContext";
import {AppBar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {Menu as MenuIcon, AccountCircle as AccountCircleIcon} from '@mui/icons-material'

function App() {

    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState<boolean>(false);
    const accountButtonRef = useRef(null)

    const handleLogout = () => {
        setIsLoggedIn(false)
        setIsAccountMenuOpen(false)
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{backgroundColor: 'darkorange'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        PWRfleet v1.5 Demo - Vite
                    </Typography>
                    {!isLoggedIn && <Button variant='contained' color='primary' onClick={() => setIsLoggedIn(true)}>Log
                        in</Button>}
                    {isLoggedIn && <>
                        <IconButton ref={accountButtonRef} onClick={()=>setIsAccountMenuOpen(true)}>
                            <AccountCircleIcon sx={{color: 'black'}}/>
                            <Typography ml={1} variant='body1' color={'black'}>PWRuser</Typography>
                        </IconButton>
                    </>
                    }
                    <Menu
                        id="basic-menu"
                        anchorEl={accountButtonRef.current ?? null}
                        open={isAccountMenuOpen}
                        onClose={()=>setIsAccountMenuOpen(false)}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default App
