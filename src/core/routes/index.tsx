import { Route, Routes } from "react-router-dom";

import { Footer } from "../../components/sections/footer";
import { Header } from "../../components/sections/header";
import { Home } from "../../pages/home";
import { OneMoviePage } from "../../pages/movie";
import { SearchPage } from "../../pages/search";

export const AllRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<OneMoviePage />} />
        <Route path="/search/:value" element={<SearchPage />} />
      </Routes>
      <Footer />
    </>
  );
};
