import {NavLink} from "react-router-dom";

export default function Header() {

  return (
    <header className="w-full bg-header fixed top-0 left-0">
      <nav className="px-4 py-5">
        <NavLink to="/users">
          Користувачі
        </NavLink>
      </nav>
    </header>
  );
}