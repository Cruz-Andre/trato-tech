import PaginaPadrao from "components/PaginaPadrao/PaginaPadrao";
import Carrinho from "pages/Carrinho/Carrinho";
import Categoria from "pages/Categoria/Categoria";
import Home from "pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
          <Route path='carrinho' element={<Carrinho />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}