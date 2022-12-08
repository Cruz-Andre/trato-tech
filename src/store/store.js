import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from "./reducers/carrinhoSlice";
import categoriasSlice from "./reducers/categoriasSlice";
import itensSlice from './reducers/itensSlice'


const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice
  }
})

export default store