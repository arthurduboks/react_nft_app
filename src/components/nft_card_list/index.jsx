import "./style.css";
import NftCard from "@/components/nft_card";
import Nft1038 from "@/assets/nft-1038.png";
import Nft1035 from "@/assets/nft-1035.png";
import Nft1034 from "@/assets/nft-1034.png";
import Nft1031 from "@/assets/nft-1031.png";

export const nfts = [
  {
    image: Nft1038,
    name: "Cyber Seraph",
    price: 1.25,
    daysLeft: 12,
    number: 1038,
  },
  {
    image: Nft1035,
    name: "Cyber Seraph",
    price: 1.55,
    daysLeft: 12,
    number: 1035,
  },
  {
    image: Nft1034,
    name: "Tech Titaness",
    price: 1.75,
    daysLeft: 12,
    number: 1034,
  },
  {
    image: Nft1031,
    name: "Cyber Seraph",
    price: 1.15,
    daysLeft: 12,
    number: 1031,
  },
];

function NftCardList() {
  return (
    <div className="nft-card-list">
      {nfts.map((nft) => {
        return (
          <NftCard
            image={nft.image}
            name={nft.name}
            price={nft.price}
            daysLeft={nft.daysLeft}
            number={nft.number}
          />
        );
      })}
    </div>
  );
}

export default NftCardList;
