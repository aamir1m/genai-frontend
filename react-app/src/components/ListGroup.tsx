import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-4"> {heading} </h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="divide-y divide-gray-200 rounded-lg border border-gray-300 bg-white">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "p-4 bg-blue-500 text-white border border-blue-600"
                : "p-4 hover:bg-gray-100 cursor-pointer"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
