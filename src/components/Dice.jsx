/* eslint-disable react/prop-types */
import Die from "./Die"

// eslint-disable-next-line react/prop-types
const Dice = ({dice,color})=>{
    return (
        <>
        {dice.map((item,i)=>
            <Die val={item} key ={i} color={color}/>
        )}
        </>
    )

}
export default Dice