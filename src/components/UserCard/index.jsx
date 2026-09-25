import Footer from "../Footer";
import style from "./UserCard.module.css";

function UserCard(props) {
  const { name, surname, nickname, sex, isVerified, stats } = props.userInfo;

  return (
    <article className="userCard">
      <h1>{`${name} ${surname}`}</h1>
      <span>{nickname}</span>
      <span>{sex}</span>
      <Footer stats={stats} />
    </article>
  );
}

export default UserCard;
