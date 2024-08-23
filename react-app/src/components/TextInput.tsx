import React from "react";
import { useState } from "react";

interface Props {
  placeholder?: string;
  onSubmit: (value: string) => void;
}

function TextInput({ placeholder, onSubmit }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      submitInput();
    }
  };

  const submitInput = () => {
    if (inputValue.trim() !== "") {
      onSubmit(inputValue); // Call parent handler
      setInputValue(""); // Clear input after submission
      setIsClicked(true); // Trigger the animation
      setTimeout(() => setIsClicked(false), 300); // Reset after the animation
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <button
        onClick={submitInput}
        className={`p-3 ${
          isClicked ? "bg-green-500 rounded-full" : "bg-blue-500 rounded-md"
        } text-white transform transition-all duration-200 ease-in-out focus:outline-none`}
      >
        Submit
      </button>
    </div>
  );
}

export default TextInput;
