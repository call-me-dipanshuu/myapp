// function Header() {
//   return <div>Helo Guys</div>;
// }
// export default Header;

import React from "react";
import "./Header.css";
const headerStyle = {
  border: "2px solid red",
  padding: "1vmax",
  backgroundColor: "red",
};
const Header = () => {
  return <nav style={headerStyle}>Header</nav>;
};

export default Header;
