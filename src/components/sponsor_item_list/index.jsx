import SponsorItem from "@/components/sponsor_items";
import LogoBoomerang from "@/assets/logo-boomerang.png";
import LogoBlimp from "@/assets/logo-blimp.png";
import LogoOpendoor from "@/assets/logo-opendoor.png";
import LogoDroplet from "@/assets/logo-droplet.png";
import "./style.css";

function SponsorItemList() {
  return (
    <div className="sponsor-item-list">
      <SponsorItem logo={LogoBoomerang} text="Boomerang" />
      <SponsorItem logo={LogoBlimp} text="Blimp" />
      <SponsorItem logo={LogoOpendoor} text="Opendoor" />
      <SponsorItem logo={LogoDroplet} text="Droplet" />
    </div>
  );
}

export default SponsorItemList;
