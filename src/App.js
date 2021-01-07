import React, {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import Main from './components/Main'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Messages from './components/Tabs/Messages'
import Global from './components/Tabs/Global'
import Bonuses from './components/Tabs/Bonuses'
import LeaderBoard from './components/Tabs/LeaderBoard'
import Loading from  './components/Loading'
import './index.css'

const App = () => {
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },3000)
  }, [])

  return(
    loading ? <Loading /> :
    <Router>
      <div className="app">
      <TopNav />
      <Sidebar />
      <Main />
      <Switch>
        <Route path="/" exact/>
        <Route path="/messages" component={Messages}/>
        <Route path="/global" component={Global}/>
        <Route path="/bonuses" component={Bonuses}/>
        <Route path="/leaderboard" component={LeaderBoard}/>
      </Switch>
      </div>
    </Router>
  )
}

export default App;
