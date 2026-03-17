import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between mt-10 cursor-pointer border border-red-600"
        onClick={() => setOpen(!open)}
      >
        <h2>Availability</h2>
        {open ? <Minus /> : <Plus />}
      </div>

      {open && (
        <div className="mt-5  border-2 border-green-600">
          <input type="checkbox" />
          <label className="ml-2">In stock (56)</label>
          <br />

          <input type="checkbox" />
          <label className="ml-2">Out of stock (53)</label>

          <hr className="mt-5 border border-gray-200" />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
