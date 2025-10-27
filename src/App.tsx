import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import News from "./pages/News";
import Community from "./pages/Community";

function App() {
  return (
    <div>
      <header style={{ padding: "1rem", textAlign: "center" }}>
        <div>
          <h1 style={{ marginBottom: "-15px" }}>rOck</h1>
          <h2 style={{ marginTop: "-75px" }}>Gnv</h2>
        </div>
        <nav className="nav-bar" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shows"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Shows
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            News
          </NavLink>
          <NavLink
            to="/community"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Community
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/news" element={<News />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
