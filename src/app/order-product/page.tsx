'use client';

import { useRouter } from 'next/navigation';

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log('Order placed');
    router.push('/');
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button type="button" onClick={handleClick}>
        Place order
      </button>
    </div>
  );
};

export default OrderProduct;
