import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import Card from "./components/Card/Card.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Data from "./data/data.ts";

const App: React.FC = () => {
  const cards = Data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })


  return (
    <div className="App">
      <Navbar />
      <main>
        {cards}
      </main>
      <Footer />
    </div>
  );
}

export default App;