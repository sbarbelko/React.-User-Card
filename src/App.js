import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const user = {
    name: "Emma",
    surname: "Watson",
    nickname: "@EmWatson",
    sex: "female",
    isVerified: true,
    stats: {
      tweets: 1000,
      followers: 271,
      following: 50,
    },
  };

  return <UserCard userInfo={user} />;
}

export default App;
