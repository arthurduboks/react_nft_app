import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./App.css";
import Header from "@/components/header";
import SponsorItemList from "@/components/sponsor_item_list";
import Hero from "@/components/hero";
import Nft1038 from "@/assets/nft-1038.png";
import Nft1034 from "@/assets/nft-1034.png";
import NftCardList, { nfts } from "@/components/nft_card_list";
import NftCardWithText from "@/components/nft_card_with_text";

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Hero heroImage={Nft1038} />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <NftCardWithText
            nftData={nfts[0]}
            title="Initial Release 12/12"
            descriptionTop="We have released four limited edition NFTs early which can be bid on via OpenSea."
            descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out!"
            color="orange"
          />
        </motion.div>

        <motion.div
          ref={ref}
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <SponsorItemList />
        </motion.div>

        <motion.div
          ref={ref}
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <NftCardList />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <NftCardWithText
            nftData={nfts[0]}
            title="Initial Release 12/12"
            descriptionTop="We have released four limited edition NFTs early which can be bid on via OpenSea."
            descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out!"
            color="green"
            imageOnRight={true}
          />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Hero heroImage={Nft1034} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
