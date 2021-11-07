import React from 'react';

const TextButton = ({ text, onClick }) => {
  return (
    <div
      className='text-button'
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default TextButton;
