import { Metadata } from 'next';

type PageProps = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = ({ params }: PageProps): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

// It could also be a async function

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = ({ params }: PageProps) => {
  return (
    <div>
      <h1>Product Details about {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
