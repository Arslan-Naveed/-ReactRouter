import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import About from './screen/about';
// import Home from './screen/home';
// import Service from './screen/service';
import Blog from './screen/blog';
import Details from './screen/details';

const Home = lazy(() => import('./screen/home'));
const Service = lazy(() => import('./screen/service'));


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service'>
          <Route index  element={<Service />} />
          <Route path='details/:id' element={<Details />} />
          {/* <Route path='details/:id' element={<Details />} /> */}
        </Route>
        <Route path='blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
