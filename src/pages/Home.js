import '../Styles/HomeStyles.css'
import StarsParticle from '.././components/StarParticle'
import Typewriter from 'typewriter-effect'
import error from '../assets/error.png'

const Home = () => {
    return (
        <div>
            <div className='linear-gradient-background'>
                <StarsParticle className='particles' />
                <div className='flex-container'>
                    <h1>Hey, I'm Sebastian Thasan</h1>
                    <img src={error} className='my-picture' width='300' height='300' alt='Sebastian Thasan' />
                    <div className='type-writer'>
                        <Typewriter
                             options={{
                                strings: ['Enthusiastic Student', 'Junior Software Engineer', 'Hard Worker'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home