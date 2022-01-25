import React, {Component} from "react";
import {Dropdown} from "react-bootstrap";
import {Settings} from "react-feather";
import {NavLink} from 'react-router-dom';

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import AuthenticationService from "../auth/service/AuthenticationService";
import {UserProfile} from "../../fetchClient/fetchUser";


class NavbarUser extends Component {

    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);

        this.state = {
            showUser: false,
            showPM: false,
            showAdmin: false,
            username: undefined,
            login: false
        };
    }

    componentDidMount() {
        const user = AuthenticationService.getCurrentUser();

        if (user) {
            const roles = [];

            user.authorities.forEach(authority => {
                roles.push(authority.authority)
            });

            this.setState({
                showUser: true,
                showPM: roles.includes("ROLE_PM") || roles.includes("ROLE_ADMIN"),
                showAdmin: roles.includes("ROLE_ADMIN"),
                login: true,
                username: user.username
            });
        }
    }


    signOut = () => {
        AuthenticationService.signOut();
        window.location.reload();
    }
    // navigateToProfile =()=>{
    //     let navigate = useNavigate();
    //     navigate("/");
    // }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {


        return (
            <Dropdown className="nav-item" align="end">
                {/*<NavLink href="#" onClick={this.signOut}>SignOut</NavLink>*/}
                <span className="d-inline-block d-sm-none">
        <Dropdown.Toggle as="a" className="nav-link">
          <Settings size={18} className="align-middle"/>
        </Dropdown.Toggle>

      </span>

                <span className="d-none d-sm-inline-block">
        <Dropdown.Toggle as="a" className="nav-link">
                        <UserProfile />

            {/*<img*/}
          {/*    src={avatar1}*/}
          {/*    className="avatar img-fluid rounded-circle me-1"*/}
          {/*    alt="Chris Wood"*/}
          {/*/>*/}
          <span className="text-dark"> {this.state.username}</span>
        </Dropdown.Toggle>
      </span>


                <Dropdown.Menu drop="end">


                    <NavLink to="/pages/profile" className="nav-link false align-content-center"> Profile</NavLink>


                    <Dropdown.Divider/>
                    <NavLink to="/auth/sign-in" className="nav-link false align-content-center">
                        sign in</NavLink>

                    <NavLink  to="#" className="nav-link false align-content-center">
                        help</NavLink>
                    
                    <NavLink to="#"  className="nav-link false align-content-center" onClick={this.signOut}>Sign out</NavLink>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default NavbarUser;
