import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/products/Products";
import { ProductItem } from "./pages/productItem/ProductItem";
import { Header } from "./components/header/Header";
import { AdminAdd } from "./pages/adminAdd/AdminAdd";
import { AdminUpdate } from "./pages/adminUpdate/AdminUpdate";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<>home</>}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/Admin/add" element={<AdminAdd />}/>
      <Route path="/Admin" element={<AdminUpdate />}/>
      <Route path="/products/:id" element={<ProductItem />}/>
    </Routes>
   </>
  )
}

export default App
