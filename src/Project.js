import './App.css'
import Video from './Video'

const Project = ({title, description, url, video, languages}) => {
    return (
        <div className='project'>
            <a href={url} target="_blank" rel="noreferrer" className='projectLink'>{title}</a>
            <p>{description}</p>
            <Video src={video}/>
            <p>Built in {languages}.</p>
        </div>
    )
}

export default Project