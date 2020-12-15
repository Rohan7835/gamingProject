import React from 'react'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import Main from './components/Main'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Messages from './components/Tabs/Messages'
import Global from './components/Tabs/Global'
import Bonuses from './components/Tabs/Bonuses'
import LeaderBoard from './components/Tabs/LeaderBoard'

const App = () => {
  return(
    <Router>
      <div className="app">
      <TopNav />
      <Sidebar />
      <Main />
      <Switch>
        <Route path="/" exact component={Main}/>
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
