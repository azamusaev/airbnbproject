import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import { ListCardView } from "../../Components/ListCardView/ListCardView"; 
import { NavbarPage } from "../../Components/NavbarPage/NavbarPage"; 
import Content from "../Content/Content"; 
import ProfileUser from "../ProfileUser/ProfileUser"; 
import { SubmitAds } from "../SubmitAds/SubmitAds"; 
import Successfullpage from "../SubmitAds/SuccessFullPage/SuccessFullPage"; 
import { Cities } from "../../Components/Cities/Cities";
import { Search } from "../../Components/SearchPage/searchPage";
 
export const Home = () => { 
  return ( 
    <BrowserRouter> 
      <Switch> 
        <> 
          <div className="Navbar"> 
            <NavbarPage /> 
          </div> 
          <Route exact path="/" component={Content} /> 
          <Route path="/submitads" component={SubmitAds} /> 
          <Route path="/profile_user" component={ProfileUser} /> 
          <Route path="/product/:id" component={ListCardView} /> 
          <Route path="/successfullpage" component={Successfullpage} /> 
          <Route path="/cityes" component={Cities} /> 
          <Route path="/search" component={Search}/>
        </> 
      </Switch> 
    </BrowserRouter> 
  ); 
};

