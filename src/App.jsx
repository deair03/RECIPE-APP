import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    
    </div>
  );
}

export default App;
