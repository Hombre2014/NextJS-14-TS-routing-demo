import Link from 'next/link';
import Card from '@/components/card';

const ArchivedNotifications = () => {
  return (
    <Card>
      <h2>Archived Notifications</h2>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotifications;
