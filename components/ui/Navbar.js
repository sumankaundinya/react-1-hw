"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navbarItems } from "../ui/navigationLinks";
import { NavItem } from "../ui/NavItem";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((item, index) => (
            <NavItem
              key={item.link}
              title={item.title}
              link={item.link}
              index={index + 1}
              isActive={item.link === currentPath}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
