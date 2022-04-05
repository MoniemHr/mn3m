import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand text-success " href="/">Aroma Best Perfume</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul class="navbar-nav  ">
              <li class="nav-item">
                <a class="nav-link  text-success" className={(url === "/" ?" active" : "")} aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" className={(url === "/about" ?" active" : "")}  href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" className={(url === "/Category" ?" active" : "")}  href="/Category">Category</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" className={(url === "/contact" ?" active" : "")} href='/contact'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
 