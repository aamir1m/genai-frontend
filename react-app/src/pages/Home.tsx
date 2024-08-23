import React from "react";
import TextInput from "../components/TextInput";
import ProcessRequest from "../components/ProcessRequest";

function Home() {
  let placeholderText = "Insert prompt here...";
  const handleSubmit = (value: string) => {
    console.log(value);
  };
  return <ProcessRequest />;
}

export default Home;
