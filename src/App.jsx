import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import users from './json/users.json'

const arrayColors = [
  '#6B4A0A', '#304377', '#A3145A', '#9681D7'
]

function App() {

const createNumberRandom = array => {
  return Math.floor(Math.random() * array.length)
 }

 const getElementRandom = array => {
   const i = createNumberRandom(array)
   return array[i]
 }

 const [userRandom, setUserRandom] = useState(getElementRandom(users))
 const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors))

 const clickButton = () =>{
  setUserRandom(getElementRandom(users))
  setColorRandom(getElementRandom(arrayColors))
 }

 const appStyle = {
   backgroundColor: colorRandom
 }

return (
  <div style={appStyle} className="App">
  <Card 
    userRandom={userRandom}
    colorRandom={colorRandom}
    clickButton={clickButton}
  />
  </div>
  )
}

export default App