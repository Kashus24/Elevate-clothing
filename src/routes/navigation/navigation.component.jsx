
import { signOut } from "firebase/auth";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as ElevateLogo } from '../../assets/elevate.svg';

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';


const Navigation = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">

        <Link className="logo-container" to="/">
          <ElevateLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutHandler}> SIGN OUT</span>)
              : (
                <Link className="nav-link" to="/auth">
                  SIGN IN
                </Link>
              )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;