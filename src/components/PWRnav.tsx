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
    Typography
} from "@mui/material";
import {
    AccountCircle as AccountCircleIcon,
    Description as DescriptionIcon,
    Menu as MenuIcon
} from "@mui/icons-material";
import {useContext, useRef, useState} from "react";
import {AppContext} from "../AppContext";

export const PWRNav = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const accountButtonRef = useRef(null)

    const handleLogout = () => {
        setIsLoggedIn(false)
        setIsAccountMenuOpen(false)
    }

    return <AppBar position="static">
        <Toolbar id='top-nav-bar' sx={{backgroundColor: 'darkorange'}}>
            <IconButton
                id='main-menu'
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}
                onClick={() => setIsSidebarOpen(true)}
            >
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                PWRfleet v1.5 Demo - Vite
            </Typography>
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
            <Drawer
                anchor='left'
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            >
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <DescriptionIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Test'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <DescriptionIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Page 2'}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Toolbar>
    </AppBar>
}