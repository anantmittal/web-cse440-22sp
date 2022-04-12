import {
    // Alert,
    Box,
    // Collapse,
    Grid,
    Stack,
} from '@mui/material';

// import {
//     ExpandCircleDownOutlined
// } from '@mui/icons-material'

import * as React from 'react';

// import { anchorText } from "src/common/GeneratedAnchor";
// import { CourseInformationLink } from '../components/CourseInformation';
import { useAppStore } from '../stores/AppStoreProvider';
import {
    CalendarDate,
    CalendarWeek,
    AssignmentCalendarItem,
    AwayCalendarItem,
    BaseCalendarItemTimeAndLocation,
    EventCalendarItem,
    HolidayCalendarItem,
    LectureCalendarItem,
    OfficeHourCalendarItem,
    StudioCalendarItem,
} from 'src/stores/CourseCalendarStore';

// import GeneratedLink from "src/common/GeneratedLink";

const DATE_FORMAT = 'EEE MMM d';
// const DATE_FORMAT_WITH_DAY = 'EEE MMM d';

// function renderAssignment(assignmentCurrent: CalendarAssignment) {
//     return (
//         <Box>{assignmentCurrent}</Box>
//     );
// }
//
// function renderAssignments(calendarDateCurrent: CalendarDate) {
//     if (!calendarDateCurrent.assignments) {
//         return null;
//     }
//
//     return (
//         <Box>{calendarDateCurrent.assignments.map(renderAssignment)}</Box>
//     );
// }

// function renderCalendarDateCurrent(calendarDateCurrent: CalendarDate) {
//     const [expanded, setExpanded] = React.useState<boolean>(
//         true
//         // calendarDateCurrent.date.diffNow("days").days >= -1
//     );
//
//     const toggleExpanded = () => {
//         setExpanded(!expanded);
//     };
//
//     let rotation;
//     if (expanded) {
//         rotation = "rotate(180deg)";
//     } else {
//         rotation = "rotate(0deg)";
//     }
//
//     return (
//         <Grid item container key={calendarDateCurrent.date.toISODate()}>
//             <Grid item xs={2}>
//                 <h2 id={anchorText(calendarDateCurrent.date.toFormat(DATE_FORMAT))}>
//                     {calendarDateCurrent.date.toFormat(DATE_FORMAT)}
//                 </h2>
//             </Grid>
//             <Grid item xs={10}>
//                 <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
//                     <h2 id={anchorText(calendarDateCurrent.title)}>{calendarDateCurrent.title}</h2>
//                     <ExpandCircleDownOutlined onClick={toggleExpanded} sx={{ transform: rotation }} />
//                 </Box>
//                 <Collapse in={expanded} mountOnEnter unmountOnExit>
//                     {renderAssignments(calendarDateCurrent)}
//                     {/*{renderVirtual(calendarDateCurrent)}*/}
//                     {/*{renderAwayJames(calendarDateCurrent)}*/}
//                     {/*{renderGuest(calendarDateCurrent)}*/}
//                     {/*{renderContent(calendarDateCurrent)}*/}
//                     {/*{renderAdditionalResources(calendarDateCurrent)}*/}
//                 </Collapse>
//             </Grid>
//         </Grid>
//     );
// }

function renderAssignmentCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'assignment'
                    ) as AssignmentCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            sx={{
                                backgroundColor: "lightgreen",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                            key={calendarItem.title}
                        >
                            {calendarItem.title}
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )
}

function renderAwayCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'away'
                    ) as AwayCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            sx={{
                                backgroundColor: "lightpink",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                            key={calendarItem.title}
                        >
                            {calendarItem.title}
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )}

function renderEventCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'event'
                    ) as EventCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box sx={{
                                backgroundColor: "lavender",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                             key={calendarItem.title}
                        >
                            {calendarItem.title}<br/>
                            {renderTimeAndLocation(calendarItem)}
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )
}

function renderHolidayCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'holiday'
                    ) as HolidayCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            sx={{
                                backgroundColor: "orange",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                            key={calendarItem.title}
                        >
                            {calendarItem.title}
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )}

function renderLectureCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'lecture'
                    ) as LectureCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            sx={{
                                backgroundColor: "lightsalmon",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                            key={calendarItem.title}
                        >
                            {calendarItem.title}<br/>
                            {renderTimeAndLocation(calendarItem)}
                            {calendarItem.slides != undefined &&
                                <React.Fragment>
                                    [<a href={calendarItem.slides}>slides</a>]
                                </React.Fragment>
                            }
                            {(calendarItem.slides != undefined && calendarItem.video != undefined) &&
                                <React.Fragment>
                                    {" "}
                                </React.Fragment>
                            }
                            {calendarItem.video != undefined &&
                                <React.Fragment>
                                    [<a href={calendarItem.video}>video</a>]
                                </React.Fragment>
                            }
                            {(calendarItem.slides != undefined || calendarItem.video != undefined) &&
                                <React.Fragment>
                                    <br/>
                                </React.Fragment>
                            }
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )
}

function renderOfficeHourCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'officehour'
                    ) as OfficeHourCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            sx={{
                                backgroundColor: "lightgoldenrodyellow",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                            key={calendarItem.title}
                        >
                            {calendarItem.title}<br/>
                            {renderTimeAndLocation(calendarItem)}
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )
}

function renderSectionCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'studio'
                    ) as StudioCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            sx={{
                                backgroundColor: "lightblue",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                            key={calendarItem.title}
                        >
                            {calendarItem.title}<br/>
                            {renderTimeAndLocation(calendarItem)}
                            {calendarItem.slides != undefined &&
                                <React.Fragment>
                                    [<a href={calendarItem.slides}>slides</a>]
                                </React.Fragment>
                            }
                            {(calendarItem.slides != undefined && calendarItem.video != undefined) &&
                                <React.Fragment>
                                    {" "}
                                </React.Fragment>
                            }
                            {calendarItem.video != undefined &&
                                <React.Fragment>
                                    [<a href={calendarItem.video}>video</a>]
                                </React.Fragment>
                            }
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )
}

function renderTimeAndLocation(calendarItem: BaseCalendarItemTimeAndLocation) {
    return <React.Fragment>
        {'timeAndLocation' in calendarItem &&
            <React.Fragment>
                {calendarItem.timeAndLocation}<br/>
            </React.Fragment>
        }
        {'timeAndLocations' in calendarItem &&
            <React.Fragment>
                {calendarItem.timeAndLocations.map(timeAndLocationCurrent => {
                    return <React.Fragment key={timeAndLocationCurrent}>
                        {timeAndLocationCurrent}<br/>
                    </React.Fragment>;
                })}
            </React.Fragment>
        }
    </React.Fragment>
}

function renderCalendarItems(calendarDate: CalendarDate) {
    return (
        <Stack spacing={0.5}>
            {renderHolidayCalendarItems(calendarDate)}
            {renderLectureCalendarItems(calendarDate)}
            {renderSectionCalendarItems(calendarDate)}
            {renderEventCalendarItems(calendarDate)}
            {renderAssignmentCalendarItems(calendarDate)}
            {renderOfficeHourCalendarItems(calendarDate)}
            {renderAwayCalendarItems(calendarDate)}
        </Stack>
    );
}

function renderCalendarDate(calendarDate: CalendarDate) {
    return (
        <Grid item xs key={calendarDate.date.toFormat(DATE_FORMAT)}>
            <h3>
                {calendarDate.date.toFormat(DATE_FORMAT)}
            </h3>
            {renderCalendarItems(calendarDate)}
        </Grid>
    );
}

function renderCalendarWeek(calendarWeekCurrent: CalendarWeek) {
    // Assign Monday's date of every week as key
    const key = calendarWeekCurrent.days[0].date.toFormat(DATE_FORMAT);
    return (
        <Grid container width="100%" spacing={2} key={key}>
            {calendarWeekCurrent.days.map(renderCalendarDate)}
        </Grid>
    );
}

export const CourseCalendar: React.FunctionComponent = () => {
    const store = useAppStore();

    return (
        <React.Fragment>
            <Stack spacing={2}>
                {store.courseCalendar.calendarWeeks.map(renderCalendarWeek)}
            </Stack>
        </React.Fragment>
    );
}

export default CourseCalendar;
