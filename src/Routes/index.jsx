import React from "react";
import { Route, Routes} from "react-router-dom";
import Dashboard from "../Pages/Dashboard-page/Dashboard";
import DetailsDashboard from "../Pages/User-details-page/Users-detail";
import Layout from "../Components/Layout";
import LoginPage from "../Pages/Login-page/Login";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route
        exact
        path="/users"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        exact
        path="/users/detail"
        element={
          <Layout>
            <DetailsDashboard />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
