import styles from "../styles/MainPage.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import Link from "next/link";

const MainPage = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        {/* <a href="" target={"_blank"}> */}
        <img
          className={styles.logo}
          src="https://assets.stickpng.com/images/58482f8fcef1014c0b5e4a85.png"
          style={{ width: "100px" }}
        ></img>
        {/* </a> */}
        {/* <ConnectButton /> */}
        {/* <ul>
          <li>Buy</li>
          <li>Borrow</li>
        </ul> */}
      </nav>
      <div className={styles.container}>
        <div>
          <img
            src="nft.gif"
            style={{ width: "200px", height: "200px", marginBottom: "6px" }}
          ></img>
        </div>
        <header className={styles.header_container}>
          <h1>
            Buy and Lend <span>Verified NFTs</span> Here
          </h1>
          <p>By leveraging the power of zero knowledge proofs, </p>
          <p>
            we're able to <span>establish verifiable claims</span>
            about NFT game character attributes without compromising user
            privacy or security.
          </p>
        </header>

        <div className={styles.buttonsContainer}>
          <div className={styles.button}>
            <Link href="/marketplace">Show NFT</Link>
          </div>
          <div className={styles.button}>
            <Link href="/buy">Lend NFT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
