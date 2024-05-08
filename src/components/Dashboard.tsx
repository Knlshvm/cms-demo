import React from "react";
import Sidebar from "./Sidebar";
import DashboardTable from "./DashboardTable";

const Dashboard: React.FC = () => {
    return (
        <div className="flex">
            {/* <h1 className="text-white text-3xl font-bold p-5">Hello World!</h1> */}
            <Sidebar />
            <DashboardTable/>   
        </div>
    );
};

export default Dashboard;
