/* eslint-disable react/prop-types */
import { useState } from "react";
import { getRolls, sum } from "../utils/utils";
import Dice from "./Dice";
import Button from "./Button";

const LuckyN = ({title='Dice Game', numDice=4, goal=16})=>{
const [diceNumber, setdiceNumber] = useState(getRolls(numDice));
const winner = sum(diceNumber) === goal
    return (
        <main className="LuckyN">
          <h1>
            {title} {winner && "you won"}
          </h1>
        
          <Dice dice={diceNumber}  />
          <Button label='Re roll dice' clickFunc={()=>{setdiceNumber(getRolls(numDice))}}/>
         {/* <button onClick={()=>{setdiceNumber(getRolls(numDice))}}>Re roll</button> */}
        </main>
      );

}
export default LuckyN