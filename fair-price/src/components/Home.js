import Main1 from "./Main1";
import Main2 from "./Main2";
import Navbar from "./Navbar";
import "./css/Home.css";

function Home() {
  return (
    <div className="app-container">
      <Navbar />

      <div className="main">
        <Main1 />
        <Main2 />
      </div>
    </div>
  );
}

export default Home;
