import Header from "./components/Layout/DefaultLayout/Header";
import Footer from "./components/Layout/DefaultLayout/Footer";

import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
