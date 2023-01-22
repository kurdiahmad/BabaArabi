import React from "react";

function Header() {
  return (
    <header id="header" class="bg-gradient text-white">
    <div class="container px-4 text-center">
    <div class="handp">
    <h1 class="fw-bolder">ابحث هنا</h1>
        <p class="lead">ما الذي تبحث عنه؟</p>
    </div>

        <div class="googleBox">
        <div 
       class="gcse-search" autofocus>
       </div>

        </div>

    </div>
</header>
  );
}


export default Header;
