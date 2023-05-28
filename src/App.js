import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import HomePage from './HomePage';
import WorkExperiencePage from './WorkExperiencePage';
import ProjectsPage from './ProjectsPage';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className='app'>
      <NavBar setPage={setPage} currPage={page}/>
      {page === 'home' && <HomePage/>}
      {page === 'experience' && <WorkExperiencePage/>}
      {page === 'projects' && <ProjectsPage/>}
      <Footer/>
    </div>
  )
}

export default App;
