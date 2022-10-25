import Navbar from './components/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './styles/style.scss';

import menuItems from "./data/menuItems.json";

function App() {
  return (
    <>
      <Navbar menuItems={menuItems}  />
      {/* Navbar() */}
      <Main />
      {/* <main>Main content</main> */}
      {/* createElement("main") */}
      <Footer />
    </>
  );
}

export default App;
