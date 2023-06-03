import React from "react";
import "semantic-ui-css/semantic.min.css";
import DashboardGrid from "../components/DashboardGrid";
import DashboardTable from "../components/DashboardTable";

const dashboard = () => {
  return (
    <>
      <style jsx>
        {`
          .App-main {
            background: rgb(15, 15, 15);
            background: linear-gradient(
              45deg,
              rgba(15, 15, 15, 1) 0%,
              rgba(253, 29, 29, 1) 87%,
              rgba(255, 149, 0, 1) 100%
            );
            height: 1000px;
          }
          h1 {
            background: linear-gradient(140deg, rgb(174, 186, 192) 0%, rgb(255, 171, 2) 100%);
            background-clip: text;
            color: transparent;
          }
        `}
      </style>
      {/* <Navbar /> */}

      <div className="App-main">
        <div>
          <h1 className="pt-7 text-center font-bold text-5xl">Dashboard</h1>
        </div>
        <DashboardGrid />
        <div>
          <h1 className="pt-7 text-center font-bold text-5xl">
            Transaction Status
          </h1>
        </div>
        <DashboardTable />
      </div>
    </>
  );
};

export default dashboard;
