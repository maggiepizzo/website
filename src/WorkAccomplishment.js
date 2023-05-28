import './App.css'

const WorkAccomplishment = ({domain, languages, projects}) => {
    const header = languages.length > 0 ?
        <>
            <p className='domain'>{domain}</p>
            <p className='languages'><i>{languages.join(", ")}</i></p>
        </> :
        <p>{domain}</p>

    const listItems = projects.map((p, index) => <li key={index}>{p}</li>)

    return (
        <li>
            {header}
            <ul>{listItems}</ul>
        </li>
       
    )
}

export default WorkAccomplishment