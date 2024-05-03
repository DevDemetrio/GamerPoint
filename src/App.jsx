import React from 'react'
import Header from './componets/Header'
import Card from './componets/Card'
import color from './colors'

function App() {
  

  return (
    <>
      <Header />
      <Card primaryColor={color.primaryColor} 
            primaryDetailColor={color.primaryDetailColor}/>
    </>
  )
}

export default App
