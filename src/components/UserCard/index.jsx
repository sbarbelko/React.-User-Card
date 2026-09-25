import styles from "./UserCard.module.css";
import profile from "./profile.jpg";

function UserCard(props) {
  const { name, surname, nickname, sex, isVerified, stats } = props.userInfo;
  const { tweets, followers, following } = stats;

  const nameColor = sex === "female" ? "#4A3E3D" : "#E11D48";

  return (
    <article className={styles.userCard}>
      <header>
        <img src={profile} alt={name} />
        <h1 style={{ color: nameColor }}>{`${name} ${surname}`}</h1>
        <span>{nickname}</span>
        {isVerified && <span className={styles.verif}>Verified</span>}
      </header>
      <footer>
        <h2>
          Tweets <span>{tweets}</span>
        </h2>
        <h2>
          Followers <span>{followers}</span>
        </h2>
        <h2>
          Following <span>{following}</span>
        </h2>
      </footer>
    </article>
  );
}

export default UserCard;
