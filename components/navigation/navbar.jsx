import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
        <img
          className={styles.logo}
            src="https://assets.stickpng.com/images/58482f8fcef1014c0b5e4a85.png"
            style={{ width: "100px" }}
        ></img>
      </a>
      <ConnectButton></ConnectButton>
    </nav>
  );
}
