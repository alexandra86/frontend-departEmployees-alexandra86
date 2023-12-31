import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { HomeProvider } from "./contexts/HomeContext";
import { DepartmentsPage } from "./pages/DepartmentsPage";
import { EmployeesPage } from "./pages/EmployeesPage";
import { ProfilePage } from "./pages/ProfilePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/home"
        element={
          <HomeProvider>
            <HomePage />
          </HomeProvider>
        }
      />
      <Route
        path="/department"
        element={
          <HomeProvider>
            <DepartmentsPage />
          </HomeProvider>
        }
      />
      <Route
        path="/employee"
        element={
          <HomeProvider>
            <EmployeesPage />
          </HomeProvider>
        }
      />
      <Route
        path="/profile"
        element={
          <HomeProvider>
            <ProfilePage />
          </HomeProvider>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
