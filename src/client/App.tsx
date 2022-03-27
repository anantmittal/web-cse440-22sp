import * as React from "react";

import {
    AppBar,
    Box,
    Container,
    Toolbar
} from "@mui/material";

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

export const App: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters>
                        <Box display="flex" flexDirection="row" width="100%" role="navigation"
                             aria-label="Primary Navigation Links">
                            <NavButton to="/" match="never">CSE 440 - Introduction to HCI - Spring 2022</NavButton>
                            <Box flexGrow={1}/>
                            <NavButton to="/assignments">Assignments</NavButton>
                            <NavButton to="/calendar">Calendar</NavButton>
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
                        </Route>
                        <Route path="/calendar" element={<Calendar/>} />
                    </Routes>
                </DefaultLayout>
            </Container>
        </React.Fragment>
    );
}

export default App;
