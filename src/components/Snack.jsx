import React, { useState } from "react";

function Snack({ image, title }) {
  const [value, setValue] = useState(0);
  const handleValue = (id) => {
    if (id === 1) {
      setValue(value + 1);
    }
    if (id === 2) {
      setValue(value - 1);
    }
  };
  return (
    <div className="flex gap-2">
      <img src={image} alt="img" />
      <div className="flex-1 flex justify-between items-end md:items-center">
        <div className="flex h-full w-max flex-col justify-between">
          <p className="capitalize">{title}</p>
          <div className="flex items-center gap-2">
            <button className="grid place-items-center cursor-pointer border-2 border-white hover:bg-white/70 font-medium text-sm w-8 h-8">
              S
            </button>
            <button className="grid place-items-center cursor-pointer border-2 border-white hover:bg-white/70 font-medium text-sm w-8 h-8">
              L
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleValue(2)}
            className={`${
              value <= 0
                ? "pointer-events-none bg-white/60 text-primary/40"
                : "pointer-events-auto bg-white"
            }  text-primary selection:bg-transparent w-8 py-1`}
          >
            -
          </button>
          <span>{value}</span>
          <button
            onClick={() => handleValue(1)}
            className="bg-white text-primary w-8 py-1"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Snack;
