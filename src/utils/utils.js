const dice6 = ()=>{
    return Math.floor((Math.random()*6)+1)
}
const getRolls = (n)=>{
    console.log(n)
return Array.from({length:n},()=>dice6());
}
export {getRolls,dice6}