import './App.css'
import Project from './Project'

const ProjectsPage = () => {
    return (
        <div className='page'>
            <h1>Personal Projects</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Project
                    title="East Fork Shelf Builder" 
                    description="A drag-and-drop web app to test out different combinations of East Fork Pottery."
                    url="https://ef-shelf-builder.web.app/"
                    video="/media/ef-final.mp4"
                    languages="React, CSS, HTML, and Adobe Illustrator"
                />

                <Project
                    title="Pam's Tutoring Appointment Manager" 
                    description="An appointment booker for Pam's Tutoring company.  Allows clients and admin to schedule tutoring appointments and track payments."
                    url="https://pam-tutoring.web.app/"
                    video="/media/ef-final.mp4"
                    languages="React, CSS and HTML"
                />
            </div>
        </div>
    )
}

export default ProjectsPage