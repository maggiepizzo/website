import './App.css'
import { useEffect, useState } from 'react'
const DELAY = 1000

const HomePage = ({textDelay}) => {
    const [showh2, setShowh2] = useState(!textDelay)
    const [showh3, setShowh3] = useState(!textDelay)
    
    useEffect(() => {
        let timer = setTimeout(() => setShowh2(true), DELAY)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        let timer = setTimeout(() => setShowh3(true), 2 * DELAY)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='page'>
            <div style={{marginTop: '4vh'}}>
                <img 
                        src='/media/cover_pic.jpg' 
                        alt='Maggie smiling in front of the desert.  It looks hot.'
                        style={{
                            width: '50vw', 
                            height: 'auto', 
                            borderRadius: '20px',
                            float: 'right',
                            marginLeft: '4vw',
                        }}
                />
                <h1>Hi, I'm Maggie.</h1>
                {showh2 && <h2>I'm a Fullstack Engineer and Web Developer</h2>}
                {showh3 && <h3>who loves to solve puzzles and build beautiful things.</h3>}
            </div>
        </div>
    )
}

export default HomePage
