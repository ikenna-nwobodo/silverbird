import React, { useEffect, useState } from "react";

function Snack({ image, title, data }) {
  const [quantity, setquantity] = useState(0);
  const [selections, setselections] = useState({
    title: "",
    quantity: 0,
  });

  const handlequantity = (id) => {
    if (id === 1) {
      setquantity(quantity + 1);
    }
    if (id === 2) {
      setquantity(quantity - 1);
    }
  };

  useEffect(() => {
    setselections({
      title: title,
      quantity: quantity,
    });
  }, [title, quantity]);
  if (selections.quantity !== 0) {
    data(selections);
  }

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
            <span>{quantity}</span>
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
        {/* <div className="flex items-center gap-4">
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
          <span>{quantity}</span>
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
        </div> */}
      </div>
    </div>
  );
}

export default Snack;
