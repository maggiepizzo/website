import './App.css'

const HomePage = () => {
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
                <h2>I'm a Fullstack Engineer and Web Developer</h2>
                <h3>who loves to solve puzzles and build beautiful things.</h3>
            </div>
        </div>
    )
}

export default HomePage
