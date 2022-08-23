import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from "../../context/ProductContext";

export default function Dashboard() {
  const products = useContext(ProductContext);

  return (
    <>
      <div>
        <div className="row mb-3">
          <div className="col-md-6">
            <h3 className='mb-0'>
              Ürün Listesi
            </h3>
          </div>
          <div className="col-md-6 text-end">
            <Link
              to="/add-product"
              className="btn btn-danger btn-lg"
            >
              Yeni Ekle
            </Link>
          </div>
        </div>
        <div className="table-responsive">

          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" className="py-3 px-6">
                  Ürün Resim
                </th>
                <th scope="col" className="py-3 px-6">
                  Ürün Adı
                </th>
                <th scope="col" className="py-3 px-6">
                  Ürün Açıklaması
                </th>
                <th scope="col" className="py-3 px-6">
                  Fiyat
                </th>
                <th scope="col" className="py-3 px-6">
                  Detay
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, i) => {
                return [
                  <tr key={i}>
                    <th>
                      <img src={item.image} alt={item.title}
                        className="" width="80" />
                    </th>
                    <td>
                      {item.title}
                    </td>
                    <td>
                      {`${item.description.substring(
                        0,
                        200
                      )}...`}
                    </td>
                    <td> {item.price}</td>
                    <td>
                      <Link
                        to={`/${item.title}`}
                      >
                        <img src="arrow-right.svg" alt="Edit" />
                      </Link>
                    </td>
                  </tr>
                ];
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}