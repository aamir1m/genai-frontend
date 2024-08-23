import React from "react";
import { useState } from "react";
import TextInput from "./TextInput";
import DisplayOutput from "./DisplayOutput";

function ProcessRequest() {
  const [outputText, setOutputText] = useState("");

  const handleTextSubmit = async (inputValue: string) => {
    try {
      const response = await fetch("http://localhost:5000/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (response.ok) {
        const data = await response.json();
        setOutputText(data.output);
      } else {
        console.error("Error in API request");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <TextInput placeholder="Enter text" onSubmit={handleTextSubmit} />
      {outputText && <DisplayOutput outputText={outputText} />}
    </div>
  );
}

export default ProcessRequest;
