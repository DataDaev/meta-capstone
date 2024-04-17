import logo from "./icons_assets/Logo.svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="" />
        <Nav />
      </div>
    </>
  );
}
