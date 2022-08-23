import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { ProductContext } from "../../context/ProductContext";
import toast, { Toaster } from 'react-hot-toast';

export default function DetailProduct() {
  const [singleProduct, setSingleProduct] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const [values, setValues] = useState({
    title: '',
    price: 0,
    description: '',
    category: ''
  });
  const { title } = useParams();
  const products = useContext(ProductContext);


  useEffect(() => {
    const findProduct = () => {
      const newProduct = products.find((product) => product.title === title);
      setSingleProduct(newProduct);
    }

    findProduct()
  }, [title])


  /***
  * Handle Inputs
  */
  const handleDeleteProduct = () => {
    fetch(`https://fakestoreapi.com/products/${singleProduct.id}`, {
      method: "DELETE"
    }).then(res => res.json())
      .then(json => (
        console.log(json),
        toast.success('Delete Product, please open console', {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            fontSize: '18px'
          },
        })
      ))
  }

  const handleTitleInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      title: event.target.value,
    }));
  };

  const handlePriceInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      price: event.target.value,
    }));
  };

  const handleCategoryInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      category: event.target.value,
    }));
  };

  const handleDescriptionInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      description: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    fetch(`https://fakestoreapi.com/products`, {
      method: "POST",
      body: JSON.stringify(values)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        toast.success('Save Product, please open console', {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#000',
            color: '#fff',
            fontSize: '18px'
          },
        })
      })
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-3">
              <div
                className="detail__image">
                <img src={singleProduct.image} alt={singleProduct.title}
                />
              </div>
            </div>

            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-7">
                  <label>
                    Başlık
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder={singleProduct.title}
                    value={values.title}
                    name="title"
                    onChange={handleTitleInputChange}
                  />
                </div>

                <div className="col-lg-5">
                  <label>
                    Fiyat
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder={singleProduct.price}
                    value={values.price}
                    name="price"
                    onChange={handlePriceInputChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-7">
                  <label>
                    Kategori
                  </label>

                  <select className="form-select"
                    onChange={handleCategoryInputChange}
                  >
                    <option value={values.category}
                      name="category"
                    >{singleProduct.category}</option>
                  </select>
                </div>

                <div className="col-lg-5">
                  <label>
                    Stok
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder={singleProduct ? singleProduct.title && singleProduct.rating.count : "Loading..."}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <label>
                    Açıklama
                  </label>

                  <textarea
                    className="form-control"
                    placeholder={singleProduct.description}
                    value={values.description}
                    name="description"
                    onChange={handleDescriptionInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 justify-content-end">
            <div className="col-12 col-md-2 text-end">
              <button
                type="button"
                className="btn btn-danger btn-lg"
                onClick={handleDeleteProduct}>Delete</button>
            </div>
            <div className="col-12 col-md-1 text-end">
              <button
                type="submit"
                className="btn btn-warning btn-lg"
              >
                Save
              </button>
            </div>
          </div>
        </form>

        <Toaster
          position="top-right" />
      </div>
    </>
  );
}