import {Outlet} from "react-router-dom";
import Header from "./components/navigarion/Header.jsx";

export default function App() {
  return (
    <>
      <Header/>
      <div className="pt-[75px]">
        <Outlet/>
      </div>
    </>
  );
}