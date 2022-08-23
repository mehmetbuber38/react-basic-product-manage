import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import useToken from './useToken';
import { ProductContextProvider } from "../../context/ProductContext";
import DetailProduct from '../DetailProduct/DetailProduct';
import AddProduct from '../AddProduct/AddProduct';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <ProductContextProvider>
        <div className="wrapper">
          <h1>Application</h1>
          <BrowserRouter>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}>
              </Route>
              <Route path="/:title" element={<DetailProduct />}>
              </Route>
              <Route path="/add-product" element={<AddProduct />}>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ProductContextProvider>
    </>
  );
}
export default App;