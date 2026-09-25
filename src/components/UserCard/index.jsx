import Footer from "../Footer";
import Header from "../Header";
import styles from "./UserCard.module.css";

function UserCard(props) {
  const { name, surname, nickname, sex, isVerified, stats } = props.userInfo;

  const headerInfo = {
    nameInf: name,
    surnameInf: surname,
    nicknameInf: nickname,
  };

  return (
    <article className={styles.userCard}>
      <Header headerInfo={headerInfo} />
      <p>
        Emma Watson is a British actress and activist who rose to global fame
        playing Hermione Granger in the Harry Potter film series. Beyond her
        iconic debut, she starred in hit films such as Beauty and the Beast and
        Little Women, earned an English literature degree from Brown University,
        and serves as a UN Women Goodwill Ambassador leading gender equality
        initiatives like the HeForShe campaign.
      </p>
      <Footer stats={stats} />
    </article>
  );
}

export default UserCard;
