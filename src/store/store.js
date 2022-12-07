import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categoriasSlice";
import itensSlice from './reducers/itensSlice'

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice
  }
})

export default store