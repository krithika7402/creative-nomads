import Notes from '../components/Notes/Notes';
import WeeklyOverview from '../components/WeeklyOverview/WeeklyOverview'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <span>Welcome Back!</span>
        <h1>Dalton&apos;s Home</h1>
      </div>
      <div className="dashboard-content">
        <WeeklyOverview />
        <div className="calendar">Calendar</div>
        <Notes/>
        <div className="todo">Todo</div>
      </div>
    </div>
  )
}

export default Home;