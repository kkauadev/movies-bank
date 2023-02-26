import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { Header } from "../../components/sections/header";
import { OneMoviePage } from "../../pages/movie";
import { SearchPage } from "../../pages/search";
import { Footer } from "../../components/sections/footer";

export const AllRoutes = () => {
  return (
    <main className="scroll-smooth">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<OneMoviePage />} />
        <Route path="/search/:value" element={<SearchPage />} />
      </Routes>
      <Footer />
    </main>
  );
};
