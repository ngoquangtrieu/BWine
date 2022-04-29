import { achievements } from "../constants/constants";
import "../scss/scssComponents/Achievement.scss";

function Achievement() {
  return (
    <>
      <div className="achievement">
        <h1>Why choose BWine?</h1>
        <h4>
          Not only brings greatness through secret drinks, but moreover, the
          feeling you enjoy only when you come to BWine.
        </h4>
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement.id}>
              <div className="achievementImage">
                <img src={achievement.image} />
              </div>
              <h2>{achievement.name}</h2>
              <p>{achievement.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Achievement;
