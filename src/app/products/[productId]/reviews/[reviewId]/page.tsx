import { notFound } from 'next/navigation';

const ReviewDetails = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>Review Details</h1>
      <h2>
        Review number {params.reviewId} about product {params.productId}
      </h2>
    </div>
  );
};

export default ReviewDetails;
