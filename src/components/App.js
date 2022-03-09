import "../style/main.scss";
import Header from "./Header";
import Footer from "./Footer";
import Introduction from "./Introduction";
import Skills from "./Skills";

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
