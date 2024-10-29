// App.jsx
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <div className="main-content">
          <Home />
        </div>
      </div>
    </div>
  );
}
export default App;