import "./Content.css";
import BigCities from "../../Components/BigCities/BigCities";
import { ListingCards } from "../../Components/ListingCards/ListingCards";
import { BtnPopular } from "../../Components/BtnPopular/BtnPopular";
import TwoCities from "../../Components/TwoCities/TwoCities";
import Profile from "../Profile/Profile";

const MyContent = () => {
  return (
    <>
      <BigCities />
      <BtnPopular />
      <div className="list">
        <ListingCards />
      </div>
      <TwoCities />
      <Profile />
    </>
  );
};

export default MyContent;
