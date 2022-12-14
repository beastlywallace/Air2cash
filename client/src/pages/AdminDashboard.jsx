import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Admin_Dashboard/Layout";
import Overview from "../components/Admin_Dashboard/Overview";
import Transactions from "../components/Admin_Dashboard/Transactions";
import TransactionDetails from "../components/Admin_Dashboard/TransactionDetails";
import { Error } from "./ErrorPage";


const AdminDashboard = () => {


  return (
  <>
       <Layout> 
          <Routes>
            <Route path="/" element={<Overview />}></Route>
            <Route path="/transactions" element={<Transactions />}></Route>
            <Route path="/transactions_details/:id" element={<TransactionDetails />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Layout> 
  </>
  );
};

export default AdminDashboard;
