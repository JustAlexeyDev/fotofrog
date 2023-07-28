// Import JSLIB
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Import components
import Header from "./components/pages/Header";
// import Nav from "./components/Nav";
import BatteryList from "./components/Lists/BatteryList";
import Home from "./components/Home";
import VideoSendersList from "./components/Lists/VideoSendersList";
import CamerasList from "./components/Lists/CamersList";
import CabelsList from "./components/Lists/CabelsList";
import MonitorsList from "./components/Lists/MonitorsList";
import LightList from "./components/Lists/LightList";
import CellsList from "./components/Lists/CellsList";
import OtherList from "./components/Lists/OtherList";
import StabilizationList from "./components/Lists/StabilizationList";
import BodyKitsList from "./components/Lists/BodyKitsList";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="BatteryList" element={<BatteryList />} />
        <Route path="VideoSendersList" element={<VideoSendersList />} />
        <Route path="CamerasList" element={<CamerasList />} />
        <Route path="VideoSendersList" element={<VideoSendersList />} />
        <Route path="CabelsList" element={<CabelsList />} />
        <Route path="MonitorsList" element={<MonitorsList />} />
        <Route path="LightList" element={<LightList />} />
        <Route path="CellsList" element={<CellsList />} />
        <Route path="OtherList" element={<OtherList />} />
        <Route path="StabilizationList" element={<StabilizationList />} />
        <Route path="BodyKitsList" element={<BodyKitsList />} />
      </Routes>
    </div>
  );
}