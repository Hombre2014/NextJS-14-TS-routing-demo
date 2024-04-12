import Card from '@/components/card';
import Link from 'next/link';

const ArchivedNotifications = () => {
  return (
    <Card>
      <h2>Archived Notifications</h2>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotifications;
