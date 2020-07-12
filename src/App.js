import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import {CharacterList} from './pages/CharacterList'
import {CharacterPage} from './pages/CharacterPage'
import {Footer} from './components/Footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContent = styled.div`
  flex: 1;
`

function App() {
  return (
    <BrowserRouter>
    <Wrapper>
      <MainContent>
    <Switch>
      <Route path="/" exact>
        <CharacterList />
      </Route>
      <Route path="/characters/:characterId" >
        <CharacterPage />
      </Route>
    </Switch>
    </MainContent>
    <Footer />
    </Wrapper>
  </BrowserRouter>
  )
}

export default App
