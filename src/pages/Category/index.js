import React from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

function Category() {
  const { category } = useParams();

  return (
    <div>
      <br />
      <br />
      <br />
      {category}
    </div>
  );
}

export default Category;
