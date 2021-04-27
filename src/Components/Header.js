import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
        <User userName="Pauline" />
      </div>
    </header>
  );
};

export default Header;
