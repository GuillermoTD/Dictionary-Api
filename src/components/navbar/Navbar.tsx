import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-logo">Dictoglish</div>
        <div className="navbar-buttons">
            <div className="navbar-buttons-fonts">fonts</div>
            <div className="navbar-buttons-darkmodeSwitch">switch</div>
        </div>
    </div>
  )
}

export default Navbar