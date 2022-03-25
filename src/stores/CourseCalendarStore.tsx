// import * as React from 'react';

import { ReactElement } from 'react';

import { DateTime } from 'luxon';

import { Reading } from '../types/Reading';

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

type CalendarDateBase = {
    date: DateTime,
    dateTitle: string,
    virtual?: boolean,
    awayJames?: boolean,
    guest?: {
        name: string,
        link: string,
    }
    additionalResources?: Reading[],
}

type CalendarDateContentStandard = CalendarDateBase & {
    readingsStandard: {
        framing: Reading,
        instances: Reading[],
    }
}

type CalendarDateContentNonstandard = CalendarDateBase & {
    contentNonstandard: ReactElement,
}

export type CalendarDate = CalendarDateBase | CalendarDateContentStandard | CalendarDateContentNonstandard;

export class CourseCalendarStore {
    calendarDates: CalendarDate[] = [
        //
        // Week 1
        //
        {
            date: DateTime.fromISO('2022-03-29'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-03-31'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-01'),

            dateTitle: 'Section',
        },

        //
        // Week 2
        //
        {
            date: DateTime.fromISO('2022-04-05'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-07'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-08'),

            dateTitle: 'Section',
        },

        //
        // Week 3
        //
        {
            date: DateTime.fromISO('2022-04-12'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-14'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-15'),

            dateTitle: 'Section',
        },

        //
        // Week 4
        //
        {
            date: DateTime.fromISO('2022-04-19'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-21'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-22'),

            dateTitle: 'Section',
        },

        //
        // Week 5
        //
        {
            date: DateTime.fromISO('2022-04-26'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-28'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-29'),

            dateTitle: 'Section',
        },

        //
        // Week 6
        //
        {
            date: DateTime.fromISO('2022-05-03'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-05'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-06'),

            dateTitle: 'Section',
        },

        //
        // Week 7
        //
        {
            date: DateTime.fromISO('2022-05-10'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-12'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-13'),

            dateTitle: 'Section',
        },


        //
        // Week 8
        //
        {
            date: DateTime.fromISO('2022-05-17'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-19'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-20'),

            dateTitle: 'Section',
        },

        //
        // Week 9
        //
        {
            date: DateTime.fromISO('2022-05-24'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-26'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-27'),

            dateTitle: 'Section',
        },

        //
        // Week 10
        //
        {
            date: DateTime.fromISO('2022-05-31'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-06-02'),

            dateTitle: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-06-03'),

            dateTitle: 'Section',
        },
    ];
}
