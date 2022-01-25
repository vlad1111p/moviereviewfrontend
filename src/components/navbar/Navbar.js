import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Navbar, Nav, Form, InputGroup } from "react-bootstrap";

import {
  AlertCircle,
  Bell,
  BellOff,
  Home,
  MessageCircle,
  UserPlus,
  Search,
} from "react-feather";

import useSidebar from "../../hooks/useSidebar";

import NavbarDropdown from "./NavbarDropdown";
import NavbarDropdownItem from "./NavbarDropdownItem";
import NavbarLanguages from "./NavbarLanguages";
import NavbarUser from "./NavbarUser";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../assets/img/avatars/avatar-5.jpg";
import {useFormik} from "formik";
import AuthenticationService from "../auth/service/AuthenticationService";
import {useNavigate} from "react-router-dom";
const NavbarComponent = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const { isOpen, setIsOpen } = useSidebar();

  const formik = useFormik({
    initialValues: {
      movieName: " ",

    },
    async onSubmit(values) {
        await AuthenticationService.findMovieByName(values);
        navigate("/analytics");
        window.location.reload();
    },
  })
    const formik1 = useFormik({
        initialValues: {
            email: " ",

        },
        async onSubmit(values) {
            await AuthenticationService.findUserByEmail(values);
            navigate("/profile1");
            window.location.reload();
        },
    })
  return (
    <Navbar variant="light" expand className="navbar-bg">
      <span
        className="sidebar-toggle d-flex"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <i className="hamburger align-self-center" />
      </span>
      <Form onSubmit={formik.handleSubmit} inline="true" className="d-none d-sm-inline-block">
        <div className="form-group has-feedback has-clear">
          <Form.Control
              type="text"
              name="movieName"
              id="movieName"
              placeholder="First name"
              value={formik.values.movieName}
              onChange={formik.handleChange}
          />
          <Button type="submit" variant=""/>

        </div>

      </Form>
        <Form onSubmit={formik1.handleSubmit} inline="true" className="d-none d-sm-inline-block">
            <div className="form-group has-feedback has-clear">
                <Form.Control
                    type="text"
                    name="email"
                    id="email"
                    placeholder="user Email"
                    value={formik1.values.email}
                    onChange={formik1.handleChange}
                />
                <Button type="submit" variant=""/>

            </div>

        </Form>
      <Navbar.Collapse>
        <Nav className="navbar-align">
          {/*<NavbarDropdown*/}
          {/*  header="New Messages"*/}
          {/*  footer="Show all messages"*/}
          {/*  icon={MessageCircle}*/}
          {/*  count={messages.length}*/}
          {/*  showBadge*/}
          {/*>*/}
          {/*  {messages.map((item, key) => {*/}
          {/*    return (*/}
          {/*      <NavbarDropdownItem*/}
          {/*        key={key}*/}
          {/*        icon={*/}
          {/*          <img*/}
          {/*            className="avatar img-fluid rounded-circle"*/}
          {/*            src={item.avatar}*/}
          {/*            alt={item.name}*/}
          {/*          />*/}
          {/*        }*/}
          {/*        title={item.name}*/}
          {/*        description={item.description}*/}
          {/*        time={item.time}*/}
          {/*        spacing*/}
          {/*      />*/}
          {/*    );*/}
          {/*  })}*/}
          {/*</NavbarDropdown>*/}

          {/*<NavbarDropdown*/}
          {/*  header="New Notifications"*/}
          {/*  footer="Show all notifications"*/}
          {/*  icon={BellOff}*/}
          {/*  count={notifications.length}*/}
          {/*>*/}
          {/*  {notifications.map((item, key) => {*/}
          {/*    let icon = <Bell size={18} className="text-warning" />;*/}

          {/*    if (item.type === "important") {*/}
          {/*      icon = <AlertCircle size={18} className="text-danger" />;*/}
          {/*    }*/}

          {/*    if (item.type === "login") {*/}
          {/*      icon = <Home size={18} className="text-primary" />;*/}
          {/*    }*/}

          {/*    if (item.type === "request") {*/}
          {/*      icon = <UserPlus size={18} className="text-success" />;*/}
          {/*    }*/}

          {/*    return (*/}
          {/*      <NavbarDropdownItem*/}
          {/*        key={key}*/}
          {/*        icon={icon}*/}
          {/*        title={item.title}*/}
          {/*        description={item.description}*/}
          {/*        time={item.time}*/}
          {/*      />*/}
          {/*    );*/}
          {/*  })}*/}
          {/*</NavbarDropdown>*/}


          <NavbarUser />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
