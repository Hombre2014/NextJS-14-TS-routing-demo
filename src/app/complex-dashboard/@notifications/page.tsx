import Card from '@/components/card';
import Link from 'next/link';

const Notifications = () => {
  return (
    <Card>
      <h2>Notifications</h2>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
};

export default Notifications;
