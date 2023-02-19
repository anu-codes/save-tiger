import './App.css';
import Team from './components/team';
import Collection from './components/collection';
import About from './components/about';
import Home from './components/home';
import Minting from './components/minting';
import { Link, animateScroll as scroll } from "react-scroll";

export default function App() {

  return (
    <>
    <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
          <li>
              <Link activeClass="active" smooth spy to="home">
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="team">
                Team
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="collection">
                Collection
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="minting">
                Minting
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="home"><Home/></section>
      <section id="about"><About/></section>
      <section id="team"><Team/></section>
      <section id="collection"><Collection/></section>
      <section id="minting"><Minting/></section>
    </div>

       
    {/* <div class="bg-hero  bg-no-repeat bg-cover bg-center bg-fixed">
      <Team/>
    </div>
    <div>     
      <Collection/>
      </div> */}
    </>

  )
}
