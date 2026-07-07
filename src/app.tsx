import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import ResumePage from "@/pages/ResumePage/ResumePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ResumePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
