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
    StudioCalendarItem, CalendarItem,
} from 'src/stores/CourseCalendarStore';

// import GeneratedLink from "src/common/GeneratedLink";

const DATE_FORMAT = 'EEE MMM d';
const DATE_FORMAT_WITH_YEAR = 'EEE MMM d yyyy';


function keyCalendarItem(calendarDate: CalendarDate, calendarItem: CalendarItem): string {
    let key = "";

    key += calendarDate.date.toFormat(DATE_FORMAT);
    key += ":"
    key += calendarItem.type
    key += ":"
    key += calendarItem.title

    return key
}

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
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "lightgreen",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
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
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "lightpink",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
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
                        <Box
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "lavender",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
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
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "orange",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
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
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "lightsalmon",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
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
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "lightgoldenrodyellow",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
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
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "lightblue",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
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
        <Grid item key={calendarDate.date.toFormat(DATE_FORMAT)} xs={12} sm md>
            <h3>
                {calendarDate.date.toFormat(DATE_FORMAT)}
            </h3>
            {renderCalendarItems(calendarDate)}
        </Grid>
    );
}

function renderCalendarWeek(calendarWeekCurrent: CalendarWeek) {
    // Assign Monday's date of every week as key
    const key = calendarWeekCurrent.days[0].date.toFormat(DATE_FORMAT_WITH_YEAR);
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
            {store.courseCalendar.calendarWeeks.map(renderCalendarWeek)}
        </React.Fragment>
    );
}

export default CourseCalendar;
