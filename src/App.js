import "./App.css";
import Head from "./components/Header/head";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Page from "./components/page/page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/b" element={<Head />} />
      </Routes>
    </>
  );
}

export default App;
