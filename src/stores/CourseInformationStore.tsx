import {
    DateTime,
    DateTimeFormatOptions,
} from 'luxon';

const DATE_FORMAT_OPTIONS = {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
} as DateTimeFormatOptions;

export type link = string | null;
type dueDate = string | null;

function formatDateString(dateString: string): string {
    return DateTime.fromISO(dateString).toLocaleString(DATE_FORMAT_OPTIONS);
}

export class CourseInformationStore {
    //
    // Home
    //

    // Link to course Canvas
    linkCanvas: link = 'https://canvas.uw.edu/courses/1545349';

    // Link to course GitHub
    linkGitHub: link = 'https://github.com/uwcse440/web-cse440-22sp';

    // Link to university syllabus policies and guidelines
    linkUniversitySyllabusGuidelines: link = 'https://registrar.washington.edu/staffandfaculty/syllabus-guidelines/';

    //
    // Readings
    //
    linkReadingPersonalInformatics: link = 'https://doi.org/10.1145/1753326.1753409';
    linkReadingQuantifiedSelf: link = 'https://archive.wired.com/medtech/health/magazine/17-07/lbnp_knowthyself';

    //
    // Assignment 0
    //
    dueDateAssignment0: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-03-31') + '.';
    linkCanvasAssignment0: link = 'https://canvas.uw.edu/courses/1545349/assignments/7252282';

    //
    // Assignment 1
    //
    dueDateAssignment1a: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-03-31') + '.';
    linkCanvasAssignment1a: link = "https://canvas.uw.edu/courses/1545349/assignments/7291898";

    dueDateAssignment1b: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-06') + '.';
    linkCanvasAssignment1b: link = 'https://canvas.uw.edu/courses/1545349/assignments/7298139';
    linkCanvasAssignment1b_revised: link = 'https://canvas.uw.edu/courses/1545349/assignments/7281788';

    dueDateAssignment1c: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-11') + '.';
    linkCanvasAssignment1c: link = 'https://canvas.uw.edu/courses/1545349/assignments/7281798';

    //
    // Assignment 2
    //
    dueDateAssignment2a: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-12') + '.';
    linkCanvasAssignment2a: link = null;

    dueDateAssignment2b: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-14') + '.';
    linkCanvasAssignment2b: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322551';

    dueDateAssignment2c: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-18') + '.';
    linkCanvasAssignment2c: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322552';

    dueDateAssignment2d: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-21') + '.';
    linkCanvasAssignment2d: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322554';

    dueDateAssignment2e: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-25') + '.';
    linkCanvasAssignment2e: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322556';

    dueDateAssignment2f: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-27') + '.';
    linkCanvasAssignment2f: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322558';
    linkCanvasAssignment2f_revised: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322560';

    dueDateAssignment2g: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-05-02') + '.';
    linkCanvasAssignment2g: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322562';

    dueDateAssignment2p: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-05-04') + '.';
    linkCanvasAssignment2p: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322564';

    dueDateAssignment2web: dueDate = null;
    linkCanvasAssignment2web: link = null;

    //
    // Assignment 3
    //
    dueDateAssignment3a: dueDate = null;
    linkCanvasAssignment3a: link = null;

    dueDateAssignment3b: dueDate = null;

    dueDateAssignment3c: dueDate = null;
    linkCanvasAssignment3c: link = null;

    dueDateAssignment3d: dueDate = null;
    linkCanvasAssignment3d: link = null;

    dueDateAssignment3e: dueDate = null;
    linkCanvasAssignment3e: link = null;

    dueDateAssignment3p: dueDate = null;
    linkCanvasAssignment3p: link = null;

    dueDateAssignment3web: dueDate = null;
    linkCanvasAssignment3web: link = null;

    //
    // Assignment 4
    //
    dueDateAssignment4a: dueDate = null;
    linkCanvasAssignment4a: link = null;

    dueDateAssignment4b: dueDate = null;
    linkCanvasAssignment4b: link = null;

    dueDateAssignment4p: dueDate = null;

    //
    // Samples
    //
    projectSamples = [
        {
            name: 'BackTrack',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/backtrack/',
            samples: {
                '1c': 'https://canvas.uw.edu/files/90491667/',
                '2b': 'https://canvas.uw.edu/files/90572601/',
            }
        },
        {
            name: 'BookWurm',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/bookwurm/',
            samples: {
                '1c': 'https://canvas.uw.edu/files/90491675/',
                '2b': 'https://canvas.uw.edu/files/90573013/',
            }
        },
        {
            name: 'Dash',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/dash/',
            samples: {
                '1c': 'https://canvas.uw.edu/files/90491685/',
                '2b': 'https://canvas.uw.edu/files/90573270/',
            }
        },
        {
            name: 'Hermes',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/hermes/',
            samples: {
                '1c': 'https://canvas.uw.edu/files/90491690/',
                '2b': 'https://canvas.uw.edu/files/90573384/',
            }
        },
        {
            name: 'Jasper',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/jasper/',
            samples: {
                '1c': 'https://canvas.uw.edu/files/90491701/',
                '2b': 'https://canvas.uw.edu/files/90573515/',
            }
        },
        {
            name: 'Laundr',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/laundr/',
            samples: {
                '1c': 'https://canvas.uw.edu/files/90491707/',
                '2b': 'https://canvas.uw.edu/files/90578151/',
            }
        },
        {
            name: 'notE',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/note/',
            samples: {
                '1c': 'https://canvas.uw.edu/files/90491732/',
                '2b': 'https://canvas.uw.edu/files/90578222/',
            }
        },
        {
            name: 'Pawsitive',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/pawsitive/',
            samples: {
                '1c': 'https://canvas.uw.edu/files/90491738/',
                '2b': 'https://canvas.uw.edu/files/90578445/',
            }
        },
        {
            name: 'Pilltender',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/pilltender/',
            samples: {
                '1c': 'https://canvas.uw.edu/files/90491745/',
                '2b': 'https://canvas.uw.edu/files/90578818/',
            }
        },
        {
            name: 'SEEK',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/seek/',
            samples: {
                '1c': 'https://canvas.uw.edu/files/90491755/',
                '2b': 'https://canvas.uw.edu/files/90579302/',
            }
        },
        {
            name: 'SimPark',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/simpark/',
            samples: {
                '1c': 'https://canvas.uw.edu/files/90491761/',
                '2b': 'https://canvas.uw.edu/files/90579345/',
            }
        },
        {
            name: 'Wishing Well',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/wishingwell/',
            samples: {
                '1c': 'https://canvas.uw.edu/files/90491772/',
                '2b': 'https://canvas.uw.edu/files/90579418/',
            }
        }
    ]

    // // Link regarding accessible presentations
    // // linkAccessiblePresentations: link = 'https://interactions.acm.org/archive/view/july-august-2017/making-your-presentation-accessible'
    //
    // //
    // // Readings
    // //
    //
    // // Link to the Canvas discussion forum
    // linkDiscussion: link = "https://canvas.uw.edu/courses/1519807/discussion_topics";
    //
    // // Links for the Visions of HCI discussion
    // linkVisionsOrganization: link = "https://docs.google.com/document/d/1p0jUK0ONrz8OuhXGqjHzEg-cte4vCDH4pxCIKSu9rek/edit?usp=sharing";
    // linkVisionsSlides: link = "https://docs.google.com/presentation/d/1q8U1QfW_n5XaKPjEyquUElOgNUD-RSyGVTWZgLT5YeE/edit?usp=sharing";
    //
    // //
    // // Project
    // //
    //
    // assignmentDateProjectInClassProposalFinalization: assignmentDate =
    //     DateTime.fromISO('2022-01-20').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    // assignmentDateDueProjectProposal: assignmentDate =
    //     '11:59pm ' + DateTime.fromISO('2022-01-23').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    // assignmentDateDueProjectMilestone1: assignmentDate =
    //     '11:59pm ' + DateTime.fromISO('2022-02-07').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
    //     ' for in-class presentations ' + DateTime.fromISO('2022-02-08').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
    //     ' and ' + DateTime.fromISO('2022-02-10').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    // assignmentDateDueProjectMilestone2: assignmentDate =
    //     '11:59pm ' + DateTime.fromISO('2022-02-28').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
    //     ' for in-class presentations ' + DateTime.fromISO('2022-03-01').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
    //     ' and ' + DateTime.fromISO('2022-03-03').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    // assignmentDateDueProjectReport: assignmentDate =
    //     '11:59pm ' + DateTime.fromISO('2022-03-17').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    //
    // // Link to a Canvas thread of potential project proposal ideas
    // linkProjectProposalIdeas: link = "https://canvas.uw.edu/courses/1519807/discussion_topics/6939656";
    // // Link to a Canvas folder of prior project proposals
    // linkProjectProposalSamples: link = "https://canvas.uw.edu/courses/1519807/files/folder/project%20samples";
    // // Link to the current CHI format to use for report submission
    // linkProjectCHIFormat: link = "https://chi2022.acm.org/for-authors/presenting/papers/chi-publication-formats/";
    //
    // // Link to shared document for project proposals
    // linkProjectProposalGoogleDoc: link = "https://docs.google.com/document/d/1OB4rPy4x7OAfy1HT2tnXLqplIEsZQ2Odx_DZPlME0Tk/edit?usp=sharing";
    //
    // // Links to submit project components
    // linkSubmitProjectProposal: link = "https://canvas.uw.edu/courses/1519807/assignments/7075561";
    // linkSubmitProjectMilestone1Document: link = "https://canvas.uw.edu/courses/1519807/assignments/7099160";
    // linkSubmitProjectMilestone1Slides: link = "https://canvas.uw.edu/courses/1519807/assignments/7103427";
    // linkSignupProjectMilestone1Presentation: link = "https://docs.google.com/document/d/1QK6ZglvPnWBGY5pCbLLHOEhxt19sx2CF-TTGXxn_v3c/edit?usp=sharing";
    // linkSubmitProjectMilestone2: link = "https://canvas.uw.edu/courses/1519807/assignments/7099249";
    // linkSignupProjectMilestone2Presentation: link = "https://docs.google.com/document/d/1LPryCVy4vjscDFb6WM6yJUX0kHjOm9TkvsPQ8Q3917s/edit?usp=sharing";
    // linkSubmitProjectReport: link = "https://canvas.uw.edu/courses/1519807/assignments/7170960";
    //
    // // Reading on paper writing
    // readingWobbrockPaperWriting: Reading = {
    //     authorText: 'Jacob O. Wobbrock',
    //     title: 'Catchy Titles are Good: But Avoid Being Cute',
    //     publicationText: '2015',
    //     link: 'https://faculty.washington.edu/wobbrock/pubs/Wobbrock-2015.pdf'
    // };
    //
    // //
    // // Statistics Lab
    // //
    //
    // assignmentDateAvailableStatisticsLab: assignmentDate =
    //     '11:59pm ' + DateTime.fromISO('2022-02-17').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    // assignmentDateDueStatisticsLab: assignmentDate =
    //     '11:59pm ' + DateTime.fromISO('2022-03-06').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    //
    // linkStatisticsLab: link = 'https://canvas.uw.edu/files/88095585/download?download_frd=1';
    // linkSubmitStatisticsLab: link = 'https://canvas.uw.edu/courses/1519807/assignments/7128609';
    //
    // //
    // // Exam
    // //
    //
    // assignmentDateAvailableExam: link =
    //     'by 11:59pm ' + DateTime.fromISO('2022-03-10').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    // assignmentDateDueExam: link =
    //     'by 11:59pm ' + DateTime.fromISO('2022-03-14').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    //
    // linkSubmitExam: link = "https://canvas.uw.edu/courses/1519807/assignments/7170957"
}
