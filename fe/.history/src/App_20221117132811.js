import "./App.css";
import DatingCards from "./components/DatingCards";
import Header from "./components/header/Header";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
