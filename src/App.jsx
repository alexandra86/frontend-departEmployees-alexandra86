import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { HomeProvider } from "./contexts/HomeContext";

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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
