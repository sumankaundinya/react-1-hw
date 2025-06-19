"use client";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Navbar.module.css";

export const NavItem = ({ title, link, index, isActive }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>
        <b>{String(index).padStart(2, "0")}</b> {title}
      </Link>
    </li>
  );
};
export default NavItem;
