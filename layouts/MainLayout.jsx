import React from "react";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function MainLayout(props) {
  return (
    <div
      style={{
        backgroundImage: `url("/images/pexels-pixabay-358528.jpg")`,
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vh",
        // height: "100vh",
      }}
      className="text-white"
    >
      {/* <Link rel="stylesheet" href="/styles/styles.css" /> */}
      {/* <Header /> */}
      <Navbar />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
}
