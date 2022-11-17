import "./App.css";
import DatingCards from "./components/datingcard/DatingCards";
import Header from "./components/header/Header";
import SwipeButtons from "./components/swipe/SwipeButtons";

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
