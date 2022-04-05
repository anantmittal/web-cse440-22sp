import {
    observer
} from "mobx-react-lite";

import {
    Box,
    Collapse,
    Paper,
//     SxProps,
} from "@mui/material";

import {
    ExpandCircleDownOutlined
} from '@mui/icons-material'

import * as React from "react";

//
// Properties
//
interface CollapseWithHeaderProps extends React.PropsWithChildren<{}> {
    header: React.ReactElement
}

/**
 */
export const CollapseWithHeader: React.FunctionComponent<CollapseWithHeaderProps> = observer((props: CollapseWithHeaderProps) => {
    // const store = useAppStore();

    const [expanded, setExpanded] = React.useState<boolean>(
        false
        // calendarDateCurrent.date.diffNow("days").days >= -1
    );

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    let rotation;
    if (expanded) {
        rotation = "rotate(180deg)";
    } else {
        rotation = "rotate(0deg)";
    }


    return <React.Fragment>
        <Paper elevation={1}>
            <Box sx={{margin: 2}} onClick={toggleExpanded}>
                <Box sx={{display: "flex", alignItems: "baseline", justifyContent: "space-between"}}>
                    {props.header}
                    <ExpandCircleDownOutlined  sx={{transform: rotation}}/>
                </Box>
                <Collapse in={expanded} mountOnEnter unmountOnExit>
                    {props.children}
                </Collapse>
            </Box>
        </Paper>
    </React.Fragment>;
});

export default CollapseWithHeader;
