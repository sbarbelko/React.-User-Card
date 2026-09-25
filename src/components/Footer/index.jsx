import style from "./Footer.module.css";

function Footer(props) {
  const { tweets, followers, following } = props.stats;

  return (
    <>
      <h2>
        Tweets <span>{tweets}</span>
      </h2>
      <h2>
        Followers <span>{followers}</span>
      </h2>
      <h2>
        Following <span>{following}</span>
      </h2>
    </>
  );
}
export default Footer;
