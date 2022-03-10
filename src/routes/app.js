import "../style/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";

function App() {
  return (
    <div className="main">
      <Header />
      <div id="home"></div>
      <div className="content">
        <Introduction />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
