// import UserAnalytics from '@/components/UserAnalytics';
// import Notifications from '@/components/Notifications';
// import RevenueMetrics from '@/components/RevenueMetrics';

export default function ComplexDashboardLayout({
  children,
  users,
  notifications,
  revenue,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <>
      <h1>{children}</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
      {/* <UserAnalytics />
      <RevenueMetrics />
      <Notifications /> */}
    </>
  ) : (
    login
  );
}
