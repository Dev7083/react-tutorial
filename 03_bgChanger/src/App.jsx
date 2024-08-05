
import './App.css';
import { Bottom } from './components/Bottom';
import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      </div>
      <Bottom />
    </>
  );
}

export default App;
