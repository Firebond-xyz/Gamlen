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
        <div className="flex flex-row text-center items-center">
          {/* <img
            className={styles.logo}
            src="fyreland.png"
            style={{ width: "250px", height: "250px" }}
            alt="fyreland"
          ></img> */}
          <h1 className="text-2xl font-bold mt-4 ">Fyreland</h1>
        </div>
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

      {/* Vision Page */}
      <Vision />
      {/* News Page */}
      <Recent/>
    </div>
  );
};

export default MainPage;
