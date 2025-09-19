
import './App.css'
import Profile from './components/Profile'
import Html from './components/Html'
import Css from './components/Css'
import Javascript from './components/Javascript'

function App() {

  return (
    <>
      <div className="back">
        <div className="card">
          <h1>PROFILE CARD</h1>
          <div className="top">
            
            <Profile></Profile>
            </div>
          
          <div className="lists">
            <Html></Html>
            <Css></Css>
            <Javascript></Javascript>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
