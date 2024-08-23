import Card from '@/components/card';
import Link from 'next/link';

const ArchivedNotifications = () => {
  return (
    <Card>
      <h3>Archived Notifications</h3>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotifications;
