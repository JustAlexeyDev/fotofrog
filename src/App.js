import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import BatteryList from "./components/BatteryList";
import Home from "./components/Home";
import VideoSendersList from "./components/VideoSendersList";
import CamerasList from "./components/CamersList";
import CabelsList from "./components/CabelsList";
import MonitorsList from "./components/MonitorsList";
import LightList from "./components/LightList";
import CellsList from "./components/CellsList";
import OtherList from "./components/OtherList";
import StabilizationList from "./components/StabilizationList";
import BodyKitsList from "./components/BodyKitsList";

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