import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
    // Create add and remove functions here that changes the
    // state.

  const handleChange = (items, value, diff) => {
    if(value + diff < 0){
      return;
    } 
    if(items === "books"){
      setInv({...inv, books: value + diff})
    }
    else if(items === "notebooks"){
      setInv({...inv, notebooks: value + diff})
    }
    else if(items === "pens"){
      setInv({...inv, pens: value + diff})
    }
  }; 

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button onClick={() => handleChange("books", inv.books, 1)} className="circlularButton">+</button>
        <button onClick={() => handleChange("books", inv.books, -1)} className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button  onClick={() => handleChange("notebooks", inv.notebooks, 1)} className="circlularButton">+</button>
        <button onClick={() => handleChange("notebooks", inv.notebooks, -1)} className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button onClick={() => handleChange("pens", inv.pens, 1)} className="circlularButton">+</button>
        <button onClick={() => handleChange("pens", inv.pens, -1)} className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      {/* <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div> */}
            {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens}
    </div>
  );
};
