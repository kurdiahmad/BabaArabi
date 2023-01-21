import React from "react";

function Navigation() {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark  fixed-top" id="mainNav">
        <div class="container px-4">
            <a class="navbar-brand" href="#page-top">بابا عربي !</a>
            <div className="navItems">
                 <a class="nav-item nav-link" href="#about">من نحن؟</a>
                  <a class="nav-item nav-link" href="#contact">اتصل بنا</a>
            </div>

        </div>
    </nav>
    );
}

export default Navigation;
