import { Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Header, Footer, Search, Card } from "./components";
import { HomePage, PageNotFound, PopularPage, SearchPage, TopRatedPage, UpcomingPage, MovieDetailPage } from "./pages";
import { AllRoutes } from "./routes/AllRoutes";
function App() {
  return (
    <div className="container mx-auto px-4">
      <div className="App">
        <section className="navigation">
          <Header />
        </section>
        <AllRoutes />
        <section className="footer">
          <Footer />
        </section>
      </div >
    </div>
  );
}

export default App;
