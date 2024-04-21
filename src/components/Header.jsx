import Image from "./Image.jsx";
import logo from "../assets/images/weather-icon.webp";

export default function Header(props) {
  return (
    <header className={`header ${props.className}`}>
      <div className="container">
        <div className="header__wrap text-center">
          <Image src={logo} alt="Website Logo" />
          <h1 className="header__title">Weather Wise</h1>
          <p className="header__description">
            Stay ahead of the weather with Weather Wise. Real-time updates,
            accurate forecasts, and user-friendly design keep you informed and
            prepared for any conditions.
          </p>
        </div>
      </div>
    </header>
  );
}
