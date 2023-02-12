import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer";
// import Header from "../components/Header";

function RootLayout() {
  return (
    <main className="overflow-x-hidden">
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
}

export default RootLayout;
