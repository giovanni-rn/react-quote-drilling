import { Link } from "react-router-dom";
import SimpleBadge from "./style/SimpleBadge";
import HomeIcon from "@mui/icons-material/Home";

const Navigation = ({ favQuotes }) => {
  return (
    <nav>
      <Link to={"/"}>
        <HomeIcon />
        Home
      </Link>
      <Link to={"/favorites"}>
        <SimpleBadge favQuotes={favQuotes} />
        Favorites
      </Link>
    </nav>
  );
};

export default Navigation;
