import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { ProductContext } from "../../context/ProductContext";

export default function DetailProduct() {
  const [singleProduct, setSingleProduct] = useState([])
  const { title } = useParams();
  const products = useContext(ProductContext);

  useEffect(() => {
    const findProduct = () => {
      const newProduct = products.find((product) => product.title === title);
      setSingleProduct(newProduct);
    }

    findProduct()
  }, [title])


  const handleDeleteProduct = () => {
    fetch(`https://fakestoreapi.com/products/${singleProduct.id}`, {
      method: "DELETE"
    }).then(res => res.json())
      .then(json => (
        console.log(json),
        alert(`'DELETED', ${json.title}`)
      ))
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col lg:col-3">
            <img src={singleProduct.image} alt={singleProduct.title} width="50" className="max-w-full h-auto rounded-lg" />
          </div>

          <div className="col lg:col-9">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Başlık
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={singleProduct.title}
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Fiyat
              </label>

              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={singleProduct.price}
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Kategori
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>
                  {singleProduct.category}
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="stockInput"
                className="block text-sm font-medium text-gray-700"
              >
                Stock
              </label>
              <input
                type="text"
                name="stock"
                id="stockInput"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={singleProduct ? singleProduct.title && singleProduct.rating.count : "Loading..."}
              />
            </div>

            <div>
              <>
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Açıklama
                </label>
                <textarea
                  className="
  form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Your message"
                  defaultValue={singleProduct.description}
                />
              </>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleDeleteProduct}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}