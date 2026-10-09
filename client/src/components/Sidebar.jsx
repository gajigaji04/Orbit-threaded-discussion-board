import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const menuItems = [
  { to: "/", label: "Home", icon: FaHouse },
  { to: "/posts", label: "Posts", icon: IoChatboxEllipses },
  { to: "/about", label: "About", icon: FaUser },
  { to: "/contact", label: "Contact", icon: MdEmail },
];

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "" : "closed"}`}>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {menuItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `sidebarListItem ${isActive ? "active" : ""}`
                  }
                >
                  <Icon className="sidebarIcon" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
