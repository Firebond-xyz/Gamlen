import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      
      <a href="/" target={""}>
        <img
          className={styles.logo}
            src="fyreland.png"
            style={{ width: "78px" }}
        ></img>
      </a>
      <ConnectButton></ConnectButton>
    </nav>
  );
}
