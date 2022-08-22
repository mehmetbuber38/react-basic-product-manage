import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=5')
      .then(res => {
        setProducts(res.data);
      })
  }, [products]);

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

          </tbody>
        </table>
      </div>

      {products.map((item, i) => {
        return [
          <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img src={item.image} alt={item.title}
                class="p-1 bg-white border rounded max-w-sm" width="80" />
            </th>
            <td className="py-4 px-6">
              {item.title}
            </td>
            <td className="py-4 px-6">
              {item.description}
            </td>
            <td className="py-4 px-6"> {item.price}</td>
            <td className="py-4 px-6">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        ];
      })}

    </>
  );
}