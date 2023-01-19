import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import TopCard from "./components/TopCard/TopCard.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      {/* <TopCard /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
