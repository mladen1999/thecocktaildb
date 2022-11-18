import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { SearchContextProvider } from "./context/SearchContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DrinkDetails from "./containers/DrinkDetails/DrinkDetails";

function App() {
  return (
    <div>
      <SearchContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/:id" element={<DrinkDetails />} />
          </Routes>
        </Router>
      </SearchContextProvider>
    </div>
  );
}

export default App;
