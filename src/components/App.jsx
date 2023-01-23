import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Navigation from "./Navigation";


function App() {

  return (
    <div>
        {/* <!-- Navigation--> */}
        <Navigation/>


{/* <!-- Header--> */}
<Header/>
<div className="container1">

<div className="container1-1">
        {/* <!-- About section--> */}
        <About/>
        {/* <!-- Services section--> JUST A WHITE GAP */}
        <Services/>
        {/* <!-- Contact section--> */}
        <Contact/>
</div>
<div className="container1-2">
  <p>Google Ads here</p>
  </div>

        </div>
        


        {/* <!-- Footer--> */}
        <Footer/>
    </div>
  );
}

export default App;
