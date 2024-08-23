import React from "react";

interface Props {
  outputText: string;
}

function DisplayOutput({ outputText }: Props) {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-md shadow">
      <h2 className="text-xl font-bold">Processed Output:</h2>
      <p className="mt-2 text-gray-700">{outputText}</p>
    </div>
  );
}

export default DisplayOutput;
