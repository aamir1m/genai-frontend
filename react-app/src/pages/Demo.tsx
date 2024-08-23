import React from "react";
import Alert from "../components/Alert";
import ListGroup from "../components/ListGroup";

function Demo() {
  let items = ["New York", "San Fran", "London", "Tokyo", "Paris"];
  let heading = "Cities";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert type="info" title="Demo Page">
        Demo Page
      </Alert>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default Demo;
