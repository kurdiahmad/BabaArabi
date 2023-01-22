import React from "react";

function Header() {
  return (
    <header id="header" class="bg-gradient text-white">
    <div class="container px-4 text-center">
        <h1 class="fw-bolder">ابحث هنا</h1>
        <p class="lead">قريباً...</p>
        <script 
        async 
        src="https://cse.google.com/cse.js?cx=b34c0eae4471c496e">
       </script>
       <div 
       class="gcse-search">
       </div>
    </div>
</header>
  );
}


export default Header;
