import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="py-5">
    <div class="container px-4">
    <p class="m-0 text-center text-white">
    Copyright &copy; BabaArabi {year}
    </p>
    </div>
    </footer>
  );
}

export default Footer;
