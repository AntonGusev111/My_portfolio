import React from 'react';
import { Link } from 'react-router-dom';

export default function BackBotton() {
  return (
    <div className='BackBotton'>
      <Link className='BackUrl' to='/My_portfolio/'>Home</Link>
    </div>
  )
}
