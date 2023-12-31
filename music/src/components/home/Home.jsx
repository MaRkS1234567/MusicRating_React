import { useState } from "react";
import styles from "./Home.module.scss";
import Header from "./header/Header";
import Adjustments from "./adjustments/Adjustments";
import Multy from "./multy/Multy";
// import Bottom from "./v1/bottom/Bottom";
// import Header from "./v1/header/Header";
// import RatingLeft from "./v1/ratings/RatingLeft";
// import RatingRight from "./v1/ratings/RatingRight";
// import Ratings from "./v1/ratings/Ratings";
// import Reverso from "./reverso/Reverso";

const Home = () => {
  // const [phrases, setPhrases] = useState(5);
  // const [ritm, setRitm] = useState(5);
  // const [real, setReal] = useState(5);
  // const [harism, setHarism] = useState(5);
  // const [actualy, setActualy] = useState(5);
  // const [vaib, setVaib] = useState(5);

  // let sum = Math.round(
  //   (Number(ritm) +
  //     Number(real) +
  //     Number(harism) +
  //     Number(actualy) +
  //     Number(phrases) +
  //     Number(vaib)) *
  //     1.66
  // );
  const [text, setText] = useState(500);
  const [ritm, setRitm] = useState(500);
  const [reo, setReo] = useState(500);
  const [idea, setIdea] = useState(500);
  const [trend, setTrend] = useState(3);
  const [feel, setFeel] = useState(3);

  return (
    <div className={styles.home}>
      {/* <Header />
      <Ratings
        ritm={ritm}
        setRitm={setRitm}
        phrases={phrases}
        setPhrases={setPhrases}
        real={real}
        setReal={setReal}
        harism={harism}
        setHarism={setHarism}
      />
      <div className={styles.flex}>
        <RatingLeft actualy={actualy} setActualy={setActualy} />
        <RatingRight vaib={vaib} setVaib={setVaib} />
      </div>
      <Bottom sum={sum} /> */}
      {/* <Reverso /> */}
      <Header />
      <div className={styles.flex}>
        <Adjustments
          text={text}
          setText={setText}
          ritm={ritm}
          setRitm={setRitm}
          reo={reo}
          setReo={setReo}
          idea={idea}
          setIdea={setIdea}
        />
        <Multy
          text={text}
          ritm={ritm}
          reo={reo}
          idea={idea}
          trend={trend}
          setTrend={setTrend}
          feel={feel}
          setFeel={setFeel}
        />
      </div>
    </div>
  );
};

export default Home;
