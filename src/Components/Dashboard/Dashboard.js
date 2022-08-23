import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from "../../context/ProductContext";

export default function Dashboard() {
  const products = useContext(ProductContext);

  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img src={item.image} alt={item.title}
                      className="p-1 bg-white border rounded max-w-sm" width="80" />
                  </th>
                  <td className="py-4 px-6">
                    {item.title}
                  </td>
                  <td className="py-4 px-6">
                    {`${item.description.substring(
                      0,
                      200
                    )}...`}
                  </td>
                  <td className="py-4 px-6"> {item.price}</td>
                  <td className="py-4 px-6">
                    <Link
                      to={`/${item.title}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ];
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}