import Logo from "../Logo/Logo";

function Navigation() {
  return (
    <nav className="bg-blue-500 py-5">
      <div className="container m-auto flex px-4 md:px-8">
        <Logo />
      </div>
    </nav>
  );
}

export default Navigation;