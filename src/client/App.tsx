import * as React from "react";

import {
    AppBar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar
} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

import {
    Route,
    Routes
} from "react-router-dom";

import {DefaultLayout} from "src/client/DefaultLayout";
import {NavButton} from "src/common/NavButton";

import Assignments from "src/pages/Assignments.mdx";
import Calendar from "src/pages/Calendar.mdx";
import Home from "src/pages/Home.mdx";

import AssignmentsOverviewWrapper from "src/content/assignments/OverviewWrapper.mdx"
import Assignment0 from "src/content/assignments/assignment0/Assignment0.mdx"
import Assignment1 from "src/content/assignments/assignment1/Assignment1.mdx"
import Assignment2 from "src/content/assignments/assignment2/Assignment2.mdx"
import Assignment3 from "src/content/assignments/assignment3/Assignment3.mdx"
import Assignment4 from "src/content/assignments/assignment4/Assignment4.mdx"

export const App: React.FunctionComponent = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <React.Fragment>
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters>
                        {/* Sizes >= md render navigation with buttons */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: "row"
                            }}
                            width="100%"
                            role="navigation"
                            aria-label="Primary">
                            <NavButton to="/" match="never">CSE 440 - Introduction to HCI - Spring 2022</NavButton>
                            <Box flexGrow={1}/>
                            <NavButton to="/assignments">Assignments</NavButton>
                            <NavButton to="/calendar">Calendar</NavButton>
                        </Box>
                        {/* Sizes < md render navigation with collapsible menu icon */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                            role="navigation"
                            aria-label="Primary"
                        >
                            <NavButton to="/" match="never">CSE 440 - Introduction to HCI - Spring 2022</NavButton>
                            <IconButton
                                size="large"
                                aria-label="Assignments and Calendar Links"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu} disableGutters>
                                    <NavButton to="/assignments">Assignments</NavButton>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu} disableGutters>
                                    <NavButton to="/calendar">Calendar</NavButton>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                <DefaultLayout>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/assignments" element={<Assignments/>}>
                            <Route path="" element={<AssignmentsOverviewWrapper/>} />
                            <Route path="assignment0" element={<Assignment0/>} />
                            <Route path="assignment1" element={<Assignment1/>} />
                            <Route path="assignment2" element={<Assignment2/>} />
                            <Route path="assignment3" element={<Assignment3/>} />
                            <Route path="assignment4" element={<Assignment4/>} />
                        </Route>
                        <Route path="/calendar" element={<Calendar/>} />
                    </Routes>
                </DefaultLayout>
            </Container>
        </React.Fragment>
    );
}

export default App;
