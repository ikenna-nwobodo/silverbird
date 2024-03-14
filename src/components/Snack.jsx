import React, { useEffect, useRef, useState } from "react";

function Snack({ image, title, data, price }) {
  const [quantity, setquantity] = useState(0);
  const [val, setVal] = useState(null);
  const [selections, setselections] = useState({
    title: title,
    quantity: quantity,
    price: price,
    total: 0,
  });

  const getQuan = useRef(0);
  // console.log(getQuan.current);
  const getValue = () => {
    return getQuan.current.value; // Access current value in a separate function
  };
  const handlequantity = (id) => {
    if (id === 1) {
      setquantity(quantity + 1);
      setVal(quantity);
      setselections({
        title: title,
        quantity: val + 1,
        price: price,
        total: price * (val + 1),
      });
    }
    if (id === 2) {
      setquantity(quantity - 1);
      setVal(quantity);
      setselections({
        title: title,
        quantity: val - 1,
        price: price,
        total: price * (val - 1),
      });
    }
    data(selections);
  };

  useEffect(() => {
    handlequantity();
    setVal(quantity);
  }, [quantity]);

  return (
    <div className="flex gap-4">
      <img src={image} alt="img" />
      <div className="flex-1 flex justify-between items-end md:items-center">
        <div className="flex h-full w-max flex-col flex-1 justify-between">
          <p className="capitalize">{title}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handlequantity(2)}
              className={`${
                quantity <= 0
                  ? "pointer-events-none bg-white/60 text-primary/40"
                  : "pointer-events-auto bg-white"
              }  text-primary selection:bg-transparent w-8 py-1`}
            >
              -
            </button>
            <input
              ref={getQuan}
              disabled
              className="text-white pointer-events-none w-[17px] bg-transparent outline-none outline-0"
              value={quantity}
            ></input>
            <button
              onClick={() => handlequantity(1)}
              className={`${
                quantity >= 10
                  ? "pointer-events-none bg-white/60 text-primary/40"
                  : "pointer-events-auto bg-white"
              } text-primary w-8 py-1`}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snack;
