import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

// Import React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Home Route: Your original homepage content */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Slider />
                <ProductionHouse />
                <GenreMovieList />
                <Footer />
              </>
            }
          />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Signup Page */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
