import { useState } from "react";
import "./index.css";
// import "../tailwind/index.css";
import Navbar from "./components/Navbar";
import Header from "./components/header/Header";

function App() {
  return (
    <div className=''>
      <Navbar />
      <Header />
      {/* <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList />
        <h1 className='homeTitle'>Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
