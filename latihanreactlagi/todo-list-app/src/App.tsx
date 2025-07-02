import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodo from "./pages/AddTodo"
import ListTodo from "./pages/ListTodo"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListTodo />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  );
}