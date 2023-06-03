import styles from "../styles/MainPage.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import Link from "next/link";
import Vision from "./Vision";
import Recent from "./Recent";

const MainPage = () => {
  return (
    <div>
      <nav className={`${styles.navbar} mt-0`}>
        {/* <a href="" target={"_blank"}> */}
        
          <img
            className={styles.logo}
            src="fyreland.png"
            style={{ width: "75px", height: "75px" }}
            alt="fyreland"
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
            <span>FyreLand</span> 
          </h1>
          <p> "Secure. Empowering. Profitable. Unleash the Future of Gaming." </p>
          <p>
          <span>powered by zero knowledge proofs</span>
          </p>
        </header>

        <div className={styles.buttonsContainer}>
          <div className={styles.button}>
            <Link href="/marketplace">Go To Marketplace</Link>
          </div>
          <div className={styles.button}>
            <Link href="/buy">Lend and Rent Assets</Link>
          </div>
        </div>
      </div>

      {/* Vision Page */}
      <Vision />
      {/* News Page */}
      <Recent/>
    </div>
  );
};

export default MainPage;
