'use client';

import { notFound } from 'next/navigation';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ReviewDetails = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error('Error loading the review details');
  }

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
