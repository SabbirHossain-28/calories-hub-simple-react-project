import "./App.css";
import Banner from "./Banner/Banner";
import Nav from "./Navbar/Nav";
import CardCointainer from "./RecipyCardCointainer/CardCointainer";
import RecipyTitle from "./RecipyTitle/RecipyTitle";

function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <RecipyTitle></RecipyTitle>
      <CardCointainer></CardCointainer>
    </>
  );
}

export default App;
