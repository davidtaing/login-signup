export const Dashboard = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="h-screen">
      <div className="dashboard-container">
        <div className="dashboard bg-white h-full w-full px-8 grid grid-cols-12 gap-8 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};
