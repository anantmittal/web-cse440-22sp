// import * as React from 'react';

import { ReactElement } from 'react';

import { useAppStore } from '../stores/AppStoreProvider';

import { DateTime } from 'luxon';

// import { Reading } from '../types/Reading';

// import ContentAvailableExam from '../content/calendar/AvailableExam.mdx';
// import ContentContributionsInHCI from '../content/calendar/ContributionsInHCI.mdx';
// import ContentDueExam from '../content/calendar/DueExam.mdx';
// import ContentDueProjectFinalReport from '../content/calendar/DueProjectFinalReport.mdx';
// import ContentDueStatisticsLab from '../content/calendar/DueStatisticsLab.mdx';
// import ContentExperimentalDesignAndAnalysis from '../content/calendar/ExperimentalDesignAndAnalysis.mdx';
// import ContentNoReading from '../content/calendar/NoReading.mdx';
// import ContentProjectMilestone from '../content/calendar/ProjectMilestone.mdx';
// import ContentProjectProposal from '../content/calendar/ProjectProposal.mdx';
// import ContentVisionsOfHCI from '../content/calendar/VisionsOfHCI.mdx';

export type CalendarDate = {
    date: DateTime
}

export type CalendarWeek = {
    days: CalendarDate[]
}

/**
 * A calendar item has either a date or a list of dates.
 */
type BaseCalendarItemDates = {
    date: DateTime
} | {
    dates: DateTime[]
}

export type AssignmentCalendarItem = BaseCalendarItemDates & {
    type: 'assignment',
    title: string,
}

export type LectureCalendarItem = BaseCalendarItemDates & {
    type: 'lecture',
    title: string,
}

export type SectionCalendarItem = BaseCalendarItemDates & {
    type: 'section',
    title: string,
}

export type CalendarItem =
    AssignmentCalendarItem |
    LectureCalendarItem |
    SectionCalendarItem;

export class CourseCalendarStore {
    /**
     * Start and end dates for the course.
     */
    datesOfInstruction = {
        start: DateTime.fromFormat('Mon 2022-03-28', 'EEE yyyy-MM-dd'),  // Should be a Monday
        end:   DateTime.fromFormat('Fri 2022-06-10', 'EEE yyyy-MM-dd')   // Should be a Friday
    };

    /**
     * Use start and end dates to calculate a list of CalendarWeek objects.
     */
    get calendarWeeks(): CalendarWeek[] {
        return (
            // Obtain an interval for the dates of instruction
            this.datesOfInstruction.start.until(
                this.datesOfInstruction.end.plus({days: 1})
            )
            // Split the interval into weeks
            .splitBy({weeks: 1})
            // Convert each week interval into a list of dates
            .map(
                weekIntervalCurrent => weekIntervalCurrent.splitBy({days: 1}).map(
                    interval => interval.start
                )
                // Keep only weekdays
                .filter(
                    date => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(date.weekdayShort)
                )
            )
            // Convert each list of dates into a CalendarWeek
            .map(
                weekListDatesCurrent => ({
                    // Convert each date into a CalendarDate
                    days: weekListDatesCurrent.map(
                        dayCurrent => ({
                            date: dayCurrent
                        }) as CalendarDate
                    )
                }) as CalendarWeek
            )
        )
    }

    calendarItems: CalendarItem[] = [
        //
        // Lecture Calendar Items
        //
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-03-29'),
            title: 'Introduction and Overview'
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-03-31'),
            title: 'Design Diamond'
        },
        {
            type: 'lecture',
            dates: [
                DateTime.fromISO('2022-04-05'),
                DateTime.fromISO('2022-04-07'),
                DateTime.fromISO('2022-04-12'),
                DateTime.fromISO('2022-04-14'),
                DateTime.fromISO('2022-04-19'),
                DateTime.fromISO('2022-04-21'),
                DateTime.fromISO('2022-04-26'),
                DateTime.fromISO('2022-04-28'),
                DateTime.fromISO('2022-05-03'),
                DateTime.fromISO('2022-05-05'),
                DateTime.fromISO('2022-05-10'),
                DateTime.fromISO('2022-05-12'),
                DateTime.fromISO('2022-05-17'),
                DateTime.fromISO('2022-05-19'),
                DateTime.fromISO('2022-05-24'),
                DateTime.fromISO('2022-05-26'),
                DateTime.fromISO('2022-05-31'),
                DateTime.fromISO('2022-06-02'),
            ],
            title: 'Lecture'
        },

        //
        // Lecture Calendar Items
        //
        {
            type: 'section',
            dates: [
                DateTime.fromISO('2022-04-01'),
                DateTime.fromISO('2022-04-08'),
                DateTime.fromISO('2022-04-15'),
                DateTime.fromISO('2022-04-22'),
                DateTime.fromISO('2022-04-29'),
                DateTime.fromISO('2022-05-06'),
                DateTime.fromISO('2022-05-13'),
                DateTime.fromISO('2022-05-20'),
                DateTime.fromISO('2022-05-27'),
                DateTime.fromISO('2022-06-03'),
            ],
            title: 'Section'
        },

        //
        // Assignment Calendar Items
        //
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-03-31'),
            title: '0 - Introduction Slide'
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-03-31'),
            title: '1a - Individual Brainstorm'
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-04-06'),
            title: '1b - Group Proposals'
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-04-11'),
            title: '1c - Revised Proposal'
        },
    //
    ];

    getCalendarItems(calendarDate: CalendarDate, itemType: string): CalendarItem[] {
        const store = useAppStore();

        return store.courseCalendar.calendarItems.filter(
            function(calendarItem) {
                if ('date' in calendarItem) {
                    if (!calendarItem.date.equals(calendarDate.date)) {
                        return false;
                    }
                } else {  // dates in calendarItem
                    if (!calendarItem.dates.some(itemDateCurrent => itemDateCurrent.equals(calendarDate.date))) {
                        return false;
                    }
                }

                return calendarItem.type == itemType;
            }
        )
    }
}
