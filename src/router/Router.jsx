import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Work from '../pages/Work';
import WorkPage from '../pages/WorkPage';

export default function Router() {
  return (
    <div>
      <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Work" element={<Work />} />
      <Route path="/Work/:id" element={<WorkPage />} />
      </Routes>
    </div>
  )
}
