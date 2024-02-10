import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SearchBar />
      </div>
    </>
  );
}

export default App;
