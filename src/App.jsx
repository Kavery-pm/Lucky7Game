import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lucky7 from './components/Lucky7'
import Die from './components/Die'
import Dice from './components/Dice'
import LuckyN from './components/LuckyN'

function App() {


  return (
    <>
    <LuckyN title='Dice Game' numDice={4} goal={16}/>
    <LuckyN title='Dice Game' numDice={3} goal={11} color="red"/>
   {/* <Dice dice={[1,3,4]} color='red'/> */}
     {/* <Lucky7/> */}
    </>
  )
}

export default App
