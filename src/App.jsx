import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryList from "./Pages/CountryList";
import CountryPage from "./Pages/CountryPage";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<CountryList />} />
          <Route path="country/" element={<CountryPage />} />
        </Route>
        <Route path="*" element={<p>page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
