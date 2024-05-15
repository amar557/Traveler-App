import { RxCross2 } from "react-icons/rx";
export default function List({ item, handleDeleteItem, handleCheck }) {
  console.log(item);
  return (
    <div className="list">
      {item.map((item) => (
        <ListItem
          item={item}
          handleCheck={handleCheck}
          key={item.id}
          handleDeleteItem={() => handleDeleteItem(item.id)}
        />
      ))}
    </div>
  );
}
function ListItem({ item, handleDeleteItem, handleCheck }) {
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={item.picked}
        onChange={() => handleCheck(item.id)}
      />

      <div className={`listItem ${item.picked ? "lineThrough" : ""}`}>
        {item.value} {item.discription}
      </div>
      <button className="button" onClick={handleDeleteItem}>
        <RxCross2 />
      </button>
    </div>
  );
}
