import styles from "./Header.module.css";
import profile from "./profile.jpg";

function Header(props) {
  const { name, surname, nickname } = props.headerInfo;
  return (
    <header>
      <img src={profile} alt={name} />
      <h1>{`${name} ${surname}`}</h1>
      <span>nickname</span>
    </header>
  );
}

export default Header;
