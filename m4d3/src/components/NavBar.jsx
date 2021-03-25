import fantasy from "../assets/fantasy.json";
import history from "../assets/history.json";
import horror from "../assets/horror.json";
import romance from "../assets/romance.json";
import scifi from "../assets/scifi.json";
import { Container } from "react-bootstrap";
function NavBar(props) {
  return (
    <div className="navbarr">
      <button
        className="category start"
        onClick={() => props.currentBooksHandler(fantasy)}
      >
        /fantasy/
      </button>
      <button
        className="category"
        onClick={() => props.currentBooksHandler(history)}
      >
        /history/
      </button>
      <button
        className="category"
        onClick={() => props.currentBooksHandler(horror)}
      >
        /horror/
      </button>
      <button
        className="category"
        onClick={() => props.currentBooksHandler(romance)}
      >
        /romance/
      </button>
      <button
        className="category end"
        onClick={() => props.currentBooksHandler(scifi)}
      >
        /scifi/
      </button>
    </div>
  );
}
export default NavBar;
