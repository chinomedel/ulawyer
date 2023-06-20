import React, { useState } from 'react';
import { Header } from './Header';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';

export default function LoginUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [redirectTo, setRedirectTo] = useState(null);

  function handleLoginSubmit(event) {
    event.preventDefault();

    // Verificación de las credenciales en duro
    const hardcodedUsername = 'admin@admin.cl';
    const hardcodedPassword = '1234';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      setUser({ name: username });
      alert('Inicio de sesión exitoso');
      setRedirectTo('/seleccionabogado');
    } else {
      alert('Credenciales incorrectas');
    }
  }

  function cerrarSesion(event) {
    event.preventDefault();
    setUser(null);
  }


  return (
    <>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleLoginSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Usuario
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Clave
                </label>
                <div className="text-sm">
                  <a href="/olvideclave" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Olvidé mi clave
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleLoginSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar Sesión
              </button>
            </div>
            <div className="text-sm">
                  <a href="/registroabogado" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Registrarme como Abogado
                  </a>
            </div>
            <div className="text-sm">
                  <a href="/registrocliente" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Registrarme como Cliente
                  </a>
            </div>
          </form>

          
        </div>
        {redirectTo && <Navigate to={redirectTo} />}
      </div>
    </>
  )
}
