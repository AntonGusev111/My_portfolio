import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function BackBotton() {
  const param = useParams();
    const back = param.id ? '/Work/' :'/My_portfolio/'
  
  return (
    <div className='BackBotton'>
      <Link className='BackUrl' to={back}> {param.id ? 'Back': 'Home'}</Link>
    </div>
  )
}
