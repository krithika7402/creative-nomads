// App.jsx
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

// App.tsx
function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <Sidebar />
        <main className="main-content">
          <Home />
        </main>
      </div>
    </div>
  );
}
export default App;