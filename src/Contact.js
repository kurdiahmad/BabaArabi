import React from "react";

const Contact = () => {
  return (
    <main className="greyblock">
      <h2>تواصل معنا</h2>
      <p style={{ marginTop: "1rem" }}>
        بامكانكم التواصل معنا على منصات التواصل الاجتماعي من خلال اسم المستخدم
        الخاص بنا.
      </p>
      <div class="contactIcons">
        <i class="iconsSlash">
          <div class="iconsUsername">BabaArabi</div>/
        </i>
        <i class="features-icon fab fa-facebook"></i>
        <i class="features-icon fab fa-twitter"></i>
        <i class="features-icon fab fa-instagram"></i>
        <i class="features-icon fas fa-envelope"></i>
      </div>
    </main>
  );
};

export default Contact;
