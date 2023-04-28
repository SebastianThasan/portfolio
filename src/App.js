import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'

const App = () => {
	return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/AboutMe' element={<AboutMe />} />
                <Route path='/Projects' element={<Projects />} />
            </Routes>
        </div>
	)
}

export default App
