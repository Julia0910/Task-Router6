import { Navigate, Route, Routes } from "react-router";
import MainPage from "./components/main";
import UsersLayout from "./components/users";
import LinkMain from "./components/linkMain";
import Some from "./components/some";
import Edit from "./components/edit";

function App() {
  return (
    <div>
      <h2>App layout</h2>
      <LinkMain />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="users" element={<UsersLayout />} />
        <Route path="/users/:userId" element={<Some />} />
        <Route path="/users/:userId/edit" element={<Edit />} />
        <Route path= "*" element={ <Navigate to="/"/>} />
      </Routes>
    </div>
  );
}

export default App;
