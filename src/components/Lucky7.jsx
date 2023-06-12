import "./Lucky7.css";
const Lucky7 = ()=>{
    return (
        <main className="Lucky7">
        <h1>Lucky7 </h1>
        <section className="Lucky7-dice">
          <div className="Lucky7-die">{1}</div>
          <div className="Lucky7-die">{2}</div>
        </section>
        <button >Roll Again!</button>
      </main>
    )
}
export default Lucky7