import {
    AppBar,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Link as MUILink, Box
} from "@mui/material";
import {
    AccountCircle as AccountCircleIcon,
    Description as DescriptionIcon,
    Menu as MenuIcon
} from "@mui/icons-material";
import {FC, useContext, useRef, useState} from "react";
import {AppContext} from "../AppContext";
import {Link, NavLink as RouterNavLink, Routes} from "react-router-dom";

export const PWRNav: FC = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState<boolean>(false);
    const accountButtonRef = useRef(null)

    const handleLogout = () => {
        setIsLoggedIn(false)
        setIsAccountMenuOpen(false)
    }


    return <>
        <AppBar position="static">
            <Toolbar id='top-nav-bar'>
                <Typography variant="h6" component="div" sx={{mr: 4}}>
                    PWRfleet Vite + React-Router Proof-of-Concept
                </Typography>

                <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
                    <MUILink sx={{display: 'flex', flexDirection: 'row'}} to={'/'} component={RouterNavLink}>Home</MUILink>
                    <MUILink sx={{display: 'flex', flexDirection: 'row'}} to={'dashboard'} component={RouterNavLink}>Dashboard</MUILink>
                    <MUILink sx={{display: 'flex', flexDirection: 'row'}} to={'protected'} component={RouterNavLink}>Protected</MUILink>
                </Box>


                {!isLoggedIn && <Button variant='contained' onClick={() => setIsLoggedIn(true)}>Log
                    in</Button>}
                {isLoggedIn && <>
                    <IconButton ref={accountButtonRef} onClick={() => setIsAccountMenuOpen(true)}>
                        <AccountCircleIcon/>
                        <Typography ml={1} variant='body1'>PWRuser</Typography>
                    </IconButton>
                </>
                }

                <Menu
                    id="account-menu"
                    anchorEl={accountButtonRef.current ?? null}
                    open={isAccountMenuOpen}
                    onClose={() => setIsAccountMenuOpen(false)}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                </Menu>

            </Toolbar>
        </AppBar>
    </>
}