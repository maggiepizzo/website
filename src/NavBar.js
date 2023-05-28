import './App.css'

const NavBarButton = ({label, onClick, selected}) => {
    return (
        <button className={selected ? 'navBarButtonSelected' : 'navBarButton'} onClick={onClick}>{label}</button>
    )
}

const NavBar = ({setPage, currPage}) => {
    return (
        <div className='navBar'>
            <NavBarButton label="Home" onClick={() => setPage('home')} selected={currPage === 'home'}/>
            <NavBarButton label="Work Experience" onClick={() => setPage('experience')} selected={currPage === 'experience'}/>
            <NavBarButton label="Personal Projects" onClick={() => setPage('projects')} selected={currPage === 'projects'}/>
        </div>
    )
}

export default NavBar
