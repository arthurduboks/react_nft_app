import "./App.css";
import Header from "@/components/header";
import SponsorItemList from "@/components/sponsor_item_list";
import Hero from "@/components/hero";
import Nft1038 from "@/assets/nft-1038.png";
import Nft1034 from "@/assets/nft-1034.png";
import NftCardList, { nfts } from "@/components/nft_card_list";
import NftCardWithText from "@/components/nft_card_with_text";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Hero heroImage={Nft1038} />
        <NftCardWithText
          nftData={nfts[0]}
          title="Initial Release 12/12"
          descriptionTop="We have released four limited edition NFTs early which can be bid on via OpenSea."
          descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out!"
          color="orange"
        />
        <SponsorItemList />
        <NftCardList />
        <NftCardWithText
          nftData={nfts[0]}
          title="Initial Release 12/12"
          descriptionTop="We have released four limited edition NFTs early which can be bid on via OpenSea."
          descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out!"
          color="green"
          imageOnRight={true}
        />
        <Hero heroImage={Nft1034} />
      </div>
    </div>
  );
}

export default App;
