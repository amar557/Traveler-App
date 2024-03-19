export default function Footer({ items }) {
  if (!items.length)
    return (
      <p className="footer">start adding something to your packing list</p>
    );
  const totalItems = items.length;
  const packed = items.filter((items) => items.picked).length;
  const percentage = Math.floor((packed / totalItems) * 100);

  return (
    <>
      {percentage === 100 ? (
        <div className="footer">you are ready to fly </div>
      ) : (
        <div className="footer">
          you have {totalItems} items on your list and you have packed {packed}
          items ({percentage}%)
        </div>
      )}
    </>
  );
}
