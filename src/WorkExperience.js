import './App.css'
import WorkAccomplishment from './WorkAccomplishment'
import { useState } from 'react'

const WorkExperience = ({company, startDate, endDate, position, accomplishments}) => {
    const [expanded, setExpanded] = useState(false)
    const listItems = accomplishments.map(a => <WorkAccomplishment {...a}/>)
    const Details = <ul style={{listStyleType: 'none'}}>{listItems}</ul>
    
    return (
        <>
            <div className='workExperience' onClick={() => setExpanded(expanded => !expanded)}>
                <h2 style={{display: 'inline'}}>{company}</h2>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <h3 style={{display: 'inline'}}>{position}</h3>
                <span>&nbsp;&nbsp;&nbsp;</span>
                {expanded && <h3 style={{display: 'inline'}}>{startDate} - {endDate}</h3>}
            </div>
            {expanded && Details}
            <hr style={{marginTop: '2%', marginBottom: '2%'}} />
        </>
    )
}

export default WorkExperience