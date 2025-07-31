import React from "react";
import ScrollToTop from "./ScrollToTop";
import { Homepage, Video, Message } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/video_page" element={<Video />} />
        <Route path="/new_month_wishes" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
