import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./hero"; // Make sure hero.tsx exports Hero
import Home from "./home"; // Make sure home.tsx exports Home

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/welcome-to-the-show" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
