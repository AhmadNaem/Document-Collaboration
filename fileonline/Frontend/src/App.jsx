import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import DoceditPage from "./pages/DoceditPage";
import DocmanagePage from "./pages/DocmanagePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/logout" element={<LoginPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/manage" element={<DocmanagePage />}></Route>
      <Route path="/manage/keyword?" element={<SearchPage />}></Route>
      <Route path="/create-document" element={<CreatePage />}></Route>
      <Route path="/edit-document/:id" element={<EditPage />}></Route>
      <Route path="/edit/:id" element={<DoceditPage />}></Route>
      <Route path="/detail/:id" element={<DetailPage />}></Route>
      
    </Routes>
  );
}

export default App;
