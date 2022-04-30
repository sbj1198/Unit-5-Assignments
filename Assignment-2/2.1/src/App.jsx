
import './App.css'

function App() {
  let t1 = "Mobile Operating System", t2 = "Mobile Manufacturers";
  let l1 = ["Android", "Blackberry", "IPhone", "Windows Phone"];
  let l2 = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div className="App">
      <MobileComp title={t1} items={l1}/>
      <MobileComp title={t2} items={l2}/>
    </div>
  )
};

const MobileComp = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <ul>{props.items.map(e => <li>{e}</li>)}</ul>
    </div>
  )
};

export default App
