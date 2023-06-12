import { useState } from "react";
import { dice6, getRolls, sum } from "../utils/utils";
import "./Lucky7.css";
const Lucky7 = ()=>{
   const [dieRolls, setdieRolls] = useState(getRolls(2));
   const won = sum(dieRolls) === 7 ;
   const rollDice = ()=>{
  let newDiceNumnbers=getRolls(2);
  setdieRolls(newDiceNumnbers)
  console.log(sum(dieRolls))
   }
    return (
        <main className="Lucky7">
        <h1>Lucky7 {won && "You won"} </h1>
        <section className="Lucky7-dice">
          <div className="Lucky7-die">{dieRolls[0]}</div>
          <div className="Lucky7-die">{dieRolls[1]}</div>
        </section>
        <button onClick={rollDice} >Roll Again!</button>
      </main>
    )
}
export default Lucky7