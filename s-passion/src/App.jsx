import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Components/layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Academy from "./Pages/Academy";

function App() {
  return (
    <Router basename="/S-passion-website">
      <Routes>
        {/* All pages use Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="academy" element={<Academy />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
