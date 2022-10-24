import './App.css';

const pageTitle = "Page title";
const userAge = 42;
const nullVariable = null;
const falseVariable = false;
const trueVariable = true;
const undefinedVariable = undefined;

const arr = ["Ланнистеры", "Баратеоны", "Таргариены"];
const user = {
  name: "Тайвин Ланнистер",
  castle: "Утес Кастерли"
};

function App() {

  return (
    <>
      <div className="App">
        <h1 className="page-title">{pageTitle}</h1>
        <p>User age {userAge}</p>
        {nullVariable}
        {falseVariable}
        {trueVariable}
        {undefinedVariable}
        <p>{arr}</p>
        {/* <p>{user}</p> */}
        <label htmlFor="name">User name</label>
        <input id="name" placeholder="User name" autoComplete="additional-name" required />
        {/* createElement("h1", "Page title") */}
      </div>
      <footer></footer>
    </>
  );
}

export default App;
