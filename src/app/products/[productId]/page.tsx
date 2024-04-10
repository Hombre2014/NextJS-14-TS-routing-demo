import React from 'react';

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h1>Product Details about {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
