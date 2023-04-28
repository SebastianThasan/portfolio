import '../Styles/ProjectsStyles.css'
import MyImageSlider from '../components/MyImageSlider'
import SignUp from '../assets/SignUp.jpg'
import SignIn from '../assets/SignIn.jpg'
import HomeScreen from '../assets/HomeScreen.jpg'
import GroupsScreen from '../assets/GroupsScreen.jpg'
import AddGroupModal from '../assets/AddGroupModal.jpg'
import WorkoutsScreen from '../assets/WorkoutsScreen.jpg'
import AddSetModal from '../assets/AddSetModal.jpg'
import AddWorkoutModal from '../assets/AddWorkoutModal.jpg'

const Projects = () => {

    const containerStyles = {
		display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
	}

    const images = [
        {src: SignUp, title: 'image-1'},
        {src: SignIn, title: 'image-2'},
        {src: HomeScreen, title: 'image-3'},
        {src: GroupsScreen, title: 'image-4'},
        {src: AddGroupModal, title: 'image-5'},
        {src: WorkoutsScreen, title: 'image-6'},
        {src: AddSetModal, title: 'image-7'},   
        {src: AddWorkoutModal, title: 'image-8'}
    ]

    return (
        <div style={containerStyles}>
            <h1>My Workout Tracker App</h1>
            <MyImageSlider images={images} />

            <a href='https://github.com/SebastianThasan/MyWorkoutTracker' target='_blank' rel='noreferrer'>
                <text>Github Link</text>
            </a>
            <div className='text-layout'>
                <text>This is a workout tracker app that I created driven on my motivation to learn mobile development. The app allows users to store workout information and perform basic CRUD operations (Create, Read, Update, Delete). I'm currently working on a way for users to sync their data with their phones thrugh google health. I used React Native and AWS Amplify Datastore as the databse to store users information.</text>
            </div>
            
        </div>
    )
}

export default Projects