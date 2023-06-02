// import MainPage from "../components/MainPage";
import 'tailwindcss/tailwind.css';
import "../styles/globals.css";
import "../styles/MainPage.module.css";
import "../styles/LaunchApp.module.css";
import "../components/DashboardGrid/DashboardGrid.css";
import "../components/DashboardTable/DashboardTable.css";
// // import { useRouter } from "next/router";
import "@rainbow-me/rainbowkit/styles.css";
import ContextProvider from "../utils/Context";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  goerli,
  polygonMumbai,
  optimismGoerli,
  arbitrumGoerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

// // import MainPage from "../components/MainPage";
// // import MainLayout from "../layout/mainLayout";

const { chains, provider } = configureChains(
  [
    mainnet,
    goerli,
    polygon,
    polygonMumbai,
    optimism,
    optimismGoerli,
    arbitrum,
    arbitrumGoerli,
  ],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My Alchemy DApp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { WagmiConfig, RainbowKitProvider };

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        modalSize="compact"
        initialChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN}
        chains={chains}
      >
        {/* <MainPage /> */}
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;

// import React from "react";
// import MainPage from "../components/MainPage";

// const MyApp = () => {
//   return <div><MainPage/></div>;
// };

// export default MyApp
