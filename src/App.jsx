import React from 'react'
import Header from './componets/Header'
import Card from './componets/Card'
import color from './colors'
import { Main } from './MainContainer'

function App() {
  

  return (
    <>
      <Header />
      <Main>
        <Card primaryColor={color.primaryColor} 
              primaryDetailColor={color.primaryDetailColor}/>
        
        <Card primaryColor={color.secondColor} 
              primaryDetailColor={color.secondDetailColor}/>
      </Main>
    </>
  )
}

export default App
