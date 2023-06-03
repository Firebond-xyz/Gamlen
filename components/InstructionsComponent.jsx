import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	const scroll = async(e) => {
		e.preventDefault();
		window.scrollTo(0, 1000)
	};

	return (

		
		
		<div className={styles.container}>
			
			
			<header className={styles.header_container}>
				<h1>
				<span>FyreLand</span> Marketplace
				</h1>
				<p>A Gaming Asset Marketplace </p>
          <p>
          Where You can Buy , Sell By verifying claims , Lend and Rent your Nfts<span>powered by zero knowledge proofs</span>
            
           
          </p>
			</header>

			{/* <div className={styles.buttons_container}>
				<a href={"#"} onClick={(e) => {scroll(e)}}>
					<div className={styles.button}>
						<p>Load NFTs</p>
					</div>
				</a>
			</div> */}
		</div>

	

	
	);

	
}
