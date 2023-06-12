import './Die.css';
// eslint-disable-next-line react/prop-types
const Die = ({val,color = "slateblue"} )=>{
    return (
        <div className="Die" style={{ backgroundColor: color }}>
   {val}
    </div>
    )
}
export default Die;