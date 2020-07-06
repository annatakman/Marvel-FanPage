import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {CharacterList} from './pages/CharacterList'
import {CharacterPage} from './pages/CharacterPage'
import {Footer} from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <CharacterList />
      </Route>
      <Route path="/characters/:characterId" >
        <CharacterPage />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>
  )
}

export default App
