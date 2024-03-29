import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Work from '../pages/Work';
import WorkPage from '../pages/WorkPage';
import ParalaxBackGroud from '../components/ParalaxBackGroud';


export default function Router() {
  return (
    <div>
      <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/My_portfolio/" element={<MainPage />} />
      <Route path="/My_portfolio/About" element={<About />} />
      <Route path="/My_portfolio/Contact" element={<Contact />} />
      <Route path="/My_portfolio/Work" element={<Work />} />
      <Route path="/My_portfolio/Work/:id" element={<WorkPage />} />

      </Routes>
    </div>
  )
}
