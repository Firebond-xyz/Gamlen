import React from "react";
import "semantic-ui-css/semantic.min.css";
import DashboardGrid from "../components/DashboardGrid";
import DashboardTable from "../components/DashboardTable";
const Dashboard = () => {
  return (
    <>
      <style jsx>
        {`
          .App-main {
            background: rgb(27, 18, 118);
            background: linear-gradient(
              148deg,
              rgba(27, 18, 118, 1) 0%,
              rgba(21, 32, 71, 1) 100%
            );
            height: 1000px;
          }
          h1 {
            background: linear-gradient(
              140deg,
              rgba(54, 190, 255, 1) 0%,
              rgba(115, 63, 241, 1) 100%
            );
            background-clip: text;
            color: transparent;
          }
        `}
      </style>
      {/* <Navbar /> */}

      <div className="App-main">
        <div>
          <h1 className="pt-8 text-center font-bold text-5xl">Dashboard</h1>
        </div>
        <DashboardGrid />
        <DashboardTable />
      </div>
    </>
  );
};

export default Dashboard;
