import Starrating from "./Star";
import "./index.css";
function App() {
  return (
    <div className="app">
      <Starrating
        maxrating={5}
        color="red"
        size={40}
        message={["Terrible", "Bad", "Good", "VeryGood", "Amazing"]}
      />
      <Starrating maxrating={10} size={50} />
    </div>
  );
}

export default App;
