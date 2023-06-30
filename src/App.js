import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import HomePage from './HomePage';
import WorkExperiencePage from './WorkExperiencePage';
import ProjectsPage from './ProjectsPage';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT9WwKG6_Y8UbFzjrsCE50XddBW1zexF4",
  authDomain: "maggie-pizzo.firebaseapp.com",
  projectId: "maggie-pizzo",
  storageBucket: "maggie-pizzo.appspot.com",
  messagingSenderId: "1026101808139",
  appId: "1:1026101808139:web:f253292064f0aa9428cb0e",
  measurementId: "G-49GYVFBX8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [page, setPage] = useState('home')
  const [textDelay, setTextDelay] = useState(true)

  return (
    <div className='app'>
      <NavBar setPage={setPage} currPage={page} setTextDelay={setTextDelay}/>
      {page === 'home' && <HomePage textDelay={textDelay}/>}
      {page === 'experience' && <WorkExperiencePage/>}
      {page === 'projects' && <ProjectsPage/>}
      <Footer/>
    </div>
  )
}

export default App;
