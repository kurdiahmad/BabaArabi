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
       class="gcse-search" autofocus="on">
       </div>
        </div>

    </div>

    {/* <textarea id="searchterm"></textarea><button 
onclick="search()">Search</button>
<script>
function search() {
var Blah = document.getElementById("searchterm").value;
location.replace("https://www.google.com/search?q=" + searchterm + "");
}
</script> */}
</header>
  );
}


export default Header;
