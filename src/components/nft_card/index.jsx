import "./style.css";
import EthLogo from "@/assets/eth-logo.png";

function NftCard(props) {
  const { image, number, price, daysLeft, name } = props;

  return (
    <div className="nft-card">
      <img className="nft-card_image" src={image} alt={`nft-card-${name}`} />
      <div className="nft-card_details">
        <span className="nft-card_details-series">Cyber canvas</span>
        <span className="nft-card_details-top-bid">Top bid</span>
        <span className="nft-card_details-name">{name}</span>
        <span className="nft-card_details-price">
          <img
            className="nft-card_details-eth-logo"
            src={EthLogo}
            alt="ethereum logo"
          />
          {price}
        </span>
        <span className="nft-card_details-number">#{number}</span>
        <span className="nft-card_details-days-left">{daysLeft} days left</span>
      </div>
    </div>
  );
}

export default NftCard;
