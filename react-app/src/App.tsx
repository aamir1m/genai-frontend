import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";

function App() {
  let items = ["New York", "San Fran", "London", "Tokyo", "Paris"];
  let heading = "Cities";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
