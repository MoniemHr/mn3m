import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import i18n from "i18next";
import { useTranslation } from "react-i18next";

import App from './App';



ReactDOM.render(
 <Router>
     <App/>
 </Router>,
  document.getElementById('root')
);