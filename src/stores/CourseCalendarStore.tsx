// import * as React from 'react';

import { ReactElement } from 'react';

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

export type CalendarAssignment = string;

type CalendarDateBase = {
    date: DateTime,
    title: string,
    assignments?: CalendarAssignment[],


    virtual?: boolean,
    awayJames?: boolean,
    guest?: {
        name: string,
        link: string,
    }
    // additionalResources?: Reading[],
}

type CalendarDateContentStandard = CalendarDateBase & {
    // readingsStandard: {
    //     framing: Reading,
    //     instances: Reading[],
    // }
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

            title: 'Course Introduction',
        },
        {
            date: DateTime.fromISO('2022-03-31'),

            title: 'Design Diamond',
            assignments: [
                'Introduction Slide',
                'Project Brainstorm',
            ]
        },
        {
            date: DateTime.fromISO('2022-04-01'),

            title: 'Section',
        },

        //
        // Week 2
        //
        {
            date: DateTime.fromISO('2022-04-05'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-07'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-08'),

            title: 'Section',
        },

        //
        // Week 3
        //
        {
            date: DateTime.fromISO('2022-04-12'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-14'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-15'),

            title: 'Section',
        },

        //
        // Week 4
        //
        {
            date: DateTime.fromISO('2022-04-19'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-21'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-22'),

            title: 'Section',
        },

        //
        // Week 5
        //
        {
            date: DateTime.fromISO('2022-04-26'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-28'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-04-29'),

            title: 'Section',
        },

        //
        // Week 6
        //
        {
            date: DateTime.fromISO('2022-05-03'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-05'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-06'),

            title: 'Section',
        },

        //
        // Week 7
        //
        {
            date: DateTime.fromISO('2022-05-10'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-12'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-13'),

            title: 'Section',
        },


        //
        // Week 8
        //
        {
            date: DateTime.fromISO('2022-05-17'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-19'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-20'),

            title: 'Section',
        },

        //
        // Week 9
        //
        {
            date: DateTime.fromISO('2022-05-24'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-26'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-05-27'),

            title: 'Section',
        },

        //
        // Week 10
        //
        {
            date: DateTime.fromISO('2022-05-31'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-06-02'),

            title: 'Lecture',
        },
        {
            date: DateTime.fromISO('2022-06-03'),

            title: 'Section',
        },
    ];
}
