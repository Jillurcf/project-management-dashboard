"use client"
import { useState } from "react";
import { Reorder } from "framer-motion";
const Dndhome = () => {
  const [items, setItems] = useState([ "To do", "In Progress", "Done"]);
  return (
    <div className="px-36">
        <Reorder.Group values={items} onReorder={setItems }>
        {items.map((item, index) => (
            <Reorder.Item values="item" key={item}>
        <div className="border my-4 rounded-xl px-4">
          <div className="m-8">
            <div className="">
              <div className="">
                <h1 className="font-bold text-gray-400">{item} </h1>
              </div>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              atque commodi totam numquam, nulla nemo quo fuga? Sint quis
              laudantium assumenda soluta tenetur delectus numquam facilis
              dolorum placeat mollitia? Suscipit?
            </p>
          </div>
        </div>
        </Reorder.Item>
      ))}
        </Reorder.Group>
      
    </div>
  );
};

export default Dndhome;
