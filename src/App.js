// Components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NavMenu from "./components/NavMenu";
import Loading from "./components/Loading";
// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Pages
  const Home = lazy(() => import("./pages/Home"));
  const Skills = lazy(() => import("./pages/Skills"));
  const Certificates = lazy(() => import("./pages/Certificates"));

  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
