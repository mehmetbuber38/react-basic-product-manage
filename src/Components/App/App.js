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
      <ProductContextProvider limit={15}>
        <main className="app">
          <div className='container'>
            <a href="/">
              <img src="hizli-geliyo-logo.svg" alt="Hızlı Geliyo" className='app__logo' />
            </a>

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />}>
                </Route>
                <Route path="/:title" element={<DetailProduct />}>
                </Route>
                <Route path="/add-product" element={<AddProduct />}>
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </main>
      </ProductContextProvider>
    </>
  );
}
export default App;