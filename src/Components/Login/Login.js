import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <>
      <div className="login">
        <div className='container'>
          <div className='login__form'>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className='col-12'>
                  <img src="hizli-geliyo-logo.svg" className='login__logo' alt="Hızlı Geliyo, istiyorsun geliyo" />
                </div>

                <div className="col-12">
                  <label className='form-label'>
                    <p className='sr-only'>Kullanıcı Adı</p>
                  </label>
                  <input type="text" className='form-control' onChange={e => setUserName(e.target.value)} />
                </div>

                <div className="col-12">
                  <label className='form-label'>
                    <p className='sr-only'>Şifre</p>
                  </label>

                  <input type="password" className='form-control' onChange={e => setPassword(e.target.value)} />
                </div>
              </div>

              <div className='col-12 text-end mt-5'>
                <button type="submit" className="btn btn-lg c-btn c-btn--orange">Giriş</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};