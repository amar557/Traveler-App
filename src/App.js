import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import List from "./List";
import { FaSave } from "react-icons/fa";
export default function App() {
  const [items, setitems] = useState([]);

  function handlelist(items) {
    setitems((item) => [...item, items]);
  }
  function ClearAll() {
    return setitems([]);
  }
  function handleDeleteItem(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }
  function handleCheck(id) {
    setitems((items) =>
      items.map((call) =>
        call.id === id ? { ...call, picked: !call.picked } : call
      )
    );
  }
  return (
    <>
      <Header />
      <Form handlelist={handlelist} ClearAll={ClearAll} />
      <List
        item={items}
        handleDeleteItem={handleDeleteItem}
        handleCheck={handleCheck}
      />
      <Footer items={items} />
    </>
  );
}
function Header() {
  return <div className="header"> 🏝️FAR AWAY 🧳</div>;
}
function Form({ handlelist, ClearAll }) {
  const [value, setvalue] = useState(1);
  const [discription, setdiscription] = useState("");
  function handleForm(e) {
    e.preventDefault();
    if (!discription) return;
    const total = { value, discription, picked: false, id: Date.now() };
    setdiscription("");
    setvalue(1);
    handlelist(total);
  }
  function handleButton(e) {}

  return (
    <form className="form" onSubmit={handleForm}>
      <h3 className="form__heading">what do you need for your trip</h3>
      <select value={value} onChange={(e) => setvalue(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="menu"
        value={discription}
        onChange={(e) => setdiscription(e.target.value)}
      />
      <button className="btn" onClick={handleButton}>
        add
      </button>
      <button onClick={ClearAll} className="btn">
        Clear All
      </button>
    </form>
  );
}
