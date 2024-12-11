import { Navbar } from "./components/ui/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Footer } from "./components/sections/Footer/Footer";
import { Sentosa } from "./pages/Sentosa";

function App() {
  return (
    <div className="bg-black relative pt-[100px]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/sentosa" element={<Sentosa />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
