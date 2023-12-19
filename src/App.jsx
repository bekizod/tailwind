import "./App.css";
import Nav from "./components/Nav";

import Calendar from "./components/Grid/Calendar";
import Footer from "./components/Paging/Footer";
function App() {
 
  return (
    <>
     
        <Nav />
        <div className="container mx-auto mt-10">
          <Calendar />
        </div>
        <div className="mt-8" id="contact">
          <Footer />
        </div>
      
    </>
  );
}

export default App;
