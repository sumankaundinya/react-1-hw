"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import SocialMediaItem from "../ui/SocialMediaItem";
import { navbarItems } from "../ui/navigationLinks";

export const Footer = () => {
  const path = usePathname().split("?")[0];

  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          {navbarItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem
            url="https://facebook.com"
            title="Facebook"
            icon="/socialmedia/facebook.png"
          />
          <SocialMediaItem
            url="https://instagram.com"
            title="Instagram"
            icon="/socialmedia/instagram.png"
          />
          <SocialMediaItem
            url="https://tiktok.com"
            title="Tiktok"
            icon="/socialmedia/tik-tok.png"
          />
          <SocialMediaItem
            url="https://google.com"
            title="Google"
            icon="/socialmedia/google.png"
          />
          <SocialMediaItem
            url="https://linkedin.com"
            title="LinkedIn"
            icon="/socialmedia/linkedin.png"
          />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
