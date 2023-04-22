import AsideMenuContainer from "./containers/AsideMenuContainer";
import WeekContainer from "./containers/WeekContainer";
import "./styles/styles.scss";
// import { useStore } from "./utils/store";

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>Drag and Drop</h1>
      </header>

      <main className="main">
        <div className="container">
          <AsideMenuContainer />
          <WeekContainer />
        </div>
      </main>
    </div>
  );
}

// function BearCounter() {
//   const bears = useStore((state) => state.bears);
//   return <h1>{bears} around here...</h1>;
// }

// function Controls() {
//   const increasePopulation = useStore((state) => state.increasePopulation);
//   return <button onClick={increasePopulation}>one up</button>;
// }
