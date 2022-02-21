import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>You are now ready to write a review!</h1>
      <img className='form-img-2' src='/images/SignUpSuccess.jpg' alt='success-image' />
    </div>
  );
};

export default FormSuccess;