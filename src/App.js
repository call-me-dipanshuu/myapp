import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
// function MyComponent(props) {
//   return <div className={props.nameForClass}>{props.name}</div>;
// }

//Concept of Destructuring in Javascript
// function MyComponent({ nameForClass, name }) {
//   return <div className={nameForClass}>{name}</div>;
// }
// function App() {
//   return (
//     <div>
//       Hello <MyComponent name={"Abhi"} nameForClass="div1" />{" "}
//       <MyComponent name={"Bruh"} nameForClass="div2" />
//       <MyComponent name={"Sachin"} nameForClass="div3" /> Guys
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       Hello <Header />
//       Guys
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}
export default App;
