"use client"
import { useState } from "react";
import { Reorder } from "framer-motion";
const Dndhome = () => {
  const [items, setItems] = useState([ "To do", "In Progress", "Done"]);
  return (
    <div className="">
        <Reorder.Group values={items} onReorder={setItems }>
        {items.map((item, index) => (
            <Reorder.Item values="item" key={item}>
        <>
          <div className="m-8">
            <div>
              <div>
                <h1>{item} </h1>
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
        </>
        </Reorder.Item>
      ))}
        </Reorder.Group>
      
    </div>
  );
};

export default Dndhome;
