import React, { useState, useEffect } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom"

export default function AddProduct() {
  const [singleProduct, setSingleProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [values, setValues] = useState({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => {
        setCategories(json)
      })
  }, [])

  /***
   * Handle Inputs
   */

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const formData = new FormData();
    formData.append('File', selectedFile);

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

  const changeHandler = (event) => {
    setValues((values) => ({
      ...values,
      image: event.target.files[0].name,
    }));
    setIsFilePicked(true);

    toast.success('Photo Uploaded', {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#000',
        color: '#fff',
        fontSize: '18px'
      },
    })
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div
              className="detail__image">
              <img src={values?.image}
              />
            </div>

            <div className="mt-5">
              <input type="file" name="file" className="btn btn-warning btn-md" onChange={changeHandler} />
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
                  name="category"
                  onChange={handleCategoryInputChange}
                >
                  {categories.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option}
                    </option>
                  ))}
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

        <form onSubmit={handleFormSubmit}>
          <div className="row mt-5 justify-content-end">
            <div className="col-12 col-md-2 text-end">
              <Link to="/" className="btn btn-danger btn-lg">
                İptal
              </Link>
            </div>
            <div className="col-12 col-md-1 text-end">
              <button
                type="submit"
                className="btn btn-warning btn-lg"
              >
                Kaydet
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