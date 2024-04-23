import React from "react";
import TopLeagues from "./TopLeagues";

const DashboardLayout = () => {
  return (
    <div className="flex flex-row gap-4 justify-evenly pt-4">
      <div className="flex flex-col gap-4">
        <TopLeagues />
        <div>All leagues</div>
      </div>
      <div>matches</div>
      <div>news</div>
    </div>
  );
};

export default DashboardLayout;
