import Link from 'next/link';

const ProductList = () => {
  const productId = 100;
  return (
    <div>
      <h1>ProductList</h1>
      <Link href="/">Home</Link>
      <ul>
        <li>
          <h2>
            <Link href="products/1">Product 1</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href="products/2">Product 2</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href="products/3" replace>
              Product 3
            </Link>
            {/* replace replaces the current history stake intead of adding to it */}
          </h2>
        </li>
        <li>
          <h2>
            <Link href={`products/${productId}`}>Product {productId}</Link>
          </h2>
        </li>
      </ul>
    </div>
  );
};

export default ProductList;
