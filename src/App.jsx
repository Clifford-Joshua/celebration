import React from "react";
import { Homepage, Video, Message } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/video_page" element={<Video />} />
        <Route path="/new_month_wishes" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
