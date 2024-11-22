import React from "react";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>@{year} Pokémon</p>
    </div>
  );
}

export default Footer;
