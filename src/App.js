import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Accommodation from "./View/Accommodation/Accommodation";
import Home from "./View/Home/Home";
import Location from "./View/Location/Location";
import PageNotFound from "./View/PageNotFound/PageNotFound";
import Place from "./View/Place/Place";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/accommodations" element={<Accommodation />} />
          <Route path="/place/:id" element={<Place />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
