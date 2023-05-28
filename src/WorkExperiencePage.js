import './App.css'
import WorkExperience from './WorkExperience'

const WorkExperiencePage = () => {
    return (
        <div className='page'>
            <h1>Work Experience</h1>
            <WorkExperience 
                company="Meta" 
                position="Software Engineer"
                startDate="August 2019"
                endDate="September 2020"
                accomplishments={[
                    {
                        domain: "Nearby Friends",
                        languages: ["Python"],
                        projects: [
                            "Optimized notification algorithms, increasing monthly active users by 4% (3.5 million users)",
                            "Built back-end to enable emoji reactions on iPhone",
                        ]
                    },
                    {
                        domain: "Live Location Sharing Android",
                        languages: ["Java", "Javascript", "CSS"],
                        projects: [
                            "Completely updated UI and UX", 
                            "Migrated map stack from Mapbox to internal FB maps", 
                            "Added static location sharing options", 
                        ]
                    },
                    {
                        domain: "Facebook Pages Web",
                        languages: ["Python", "React"],
                        projects: [
                            "Added ability for restaurants to include pickup and delivery options in response to COVID-19 pandemic", 
                            "Notified users when restaurants they followed added pickup or delivery options", 
                        ]
                    },
                    {
                        domain: "Intern Manager",
                        languages: ["Python", "React"],
                        projects: [
                            "Developed project for 12-week college intern adding static location sharing on Facebook web", 
                            "Met several times weekly to answer questions and guide her through development process",
                            "Provided feedback at end of internship evaluating performance",
                        ]
                    }

                ]}
            />
             <WorkExperience 
                company="St. Mark's School" 
                position="Math Instructor"
                startDate="August 2021"
                endDate="August 2022"
                accomplishments={[
                    {
                        domain: "Teaching",
                        languages: [],
                        projects: [
                            "Taught a full course-load of Geometry and Precalculus",
                            "Held weekly office hours and help sessions to fill in COVID learning gaps",
                            "Developed significant new course content (worksheets, tests, guided answer sheets) to accompany the textbook"
                        ]
                    },
                    {
                        domain: "Coaching",
                        languages: [],
                        projects: [
                            "Coached the girls cross country and squash teams",
                            "Led a Saturday morning rock climbing class at the local climbing gym"
                        ]
                    },
                    {
                        domain: "Advisory and Dorm Duties",
                        languages: [],
                        projects: [
                            "Mentored a group of four incoming 9th graders, meeting weekly to check-in and ease their transition into highschool",
                            "Supervised the upper-classmen girls dorm one night each week",
                            "Led monthly weekend activities open to the whole student body"
                        ]
                    },
                ]}
            />
            <WorkExperience 
                company="Pine Cobble School" 
                position="Math Specialist"
                startDate="January 2021"
                endDate="August 2022"
                accomplishments={[
                    {
                        domain: "Tutoring Support",
                        languages: [],
                        projects: [
                            "Created individualized lesson plans for ten 2nd-8th graders struggling in the math classroom",
                            "Acted as sole math teacher for one 6th grader who needed one-on-one teaching, completing the full year's curriculum on schedule",
                            "Developed several online learning games using Google Jamboard"
                        ]
                    },
                    {
                        domain: "Enrichment Support",
                        languages: [],
                        projects: [
                            "Provided advanced content for three students performing above their grade level in math",
                            "Collaborated with teachers to extend concepts they were teaching in the classroom, adding depth and complexity to challenge students"
                        ]
                    },

                ]}
            />
            <WorkExperience 
                company="Dartmouth College" 
                position="Research Assistant"
                startDate="January 2018"
                endDate="June 2018"
                accomplishments={[
                    {
                        domain: "Balkcom Robotics Lab",
                        languages: ["Python", "Javascript", "CSS", "HTML"],
                        projects: [
                            "Worked on a three-person team to develop a website to interactively teach American Sign Language using Leap Motion Recorder",
                            "Created machine learning model and trained it on hand motion data collected from ASL professionals, which gave specific feedback to learners on how to correct their form"
                        ]
                    },
                    {
                        domain: "Math Publication",
                        languages: ["Python", "MATLAB"],
                        projects: [
                            "Worked with Professor John Voight to solve a previously open problem in Elliptic Curves",
                            "Furthered mathematical understanding of torsion subgroups and proposed methods to solve similar problems of higher degrees",
                            [
                                "Published ", 
                                <a 
                                    className='articleLink'
                                    href="https://www.ams.org/journals/bproc/2020-07-03/S2330-1511-2020-00045-1/S2330-1511-2020-00045-1.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    'Counting Elliptic Curves with an Isogeny of Degree Three'
                                </a>,
                                " in ",
                                <i>Proceedings of the American Mathematical Society, Series B</i>
                            ]
                        ]
                    },

                ]}
            />
        </div>
    )
}

export default WorkExperiencePage