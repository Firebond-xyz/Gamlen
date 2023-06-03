import Image from "next/image";
import Link from "next/link";
import Logo from "../public/fyreland.png";
import twitIcon from "../public/social/Twitter.webp";
import linkIcon from "../public/social/linkedin.webp";

const FooterLink = ({ linkName }) => {
  return (
    <a href="#" className=" text-white-400 hover:text-[#dc680f]">
      {linkName}
    </a>
  );
};

export default function Footer() {
  return (
    <div className="bg-black p-8 lg:pt-3 pb-6 lg:flex lg:flex-row lg:justify-between rounded-t-xl">
      <div className="flex lg:flex-col content-center align-middle sm:flex flex-row items-center ml-24">
        <Image src={Logo} width={78} height={45} alt="Logo" />
        <p className="font-fontDM pt-2 text-white text-2xl ml-6">
          Welcome to the Gaming DeFi future!
        </p>
      </div>

      <div className="flex lg:flex-col font-fontDM pt-0 text-xl text-white justify-center align-middle sm:flex flex-col items-center">
        <h2 className="font-bold font-xl">Company</h2>
        <div className="flex flex-col items-center">
        <FooterLink linkName="Home" />
        <FooterLink linkName="Vision" />
        <FooterLink linkName="News" />
        </div>
      </div>

      <div className="flex lg:flex-col font-fontDM pt-8 text-xl text-white sm:flex-col items-center">
        <h2 className="font-bold font-xl pt-1">Follow Us</h2>
        <div className="flex flex-col ">
        <span className="flex flex-row items-center justify-content-between">
          <Image
            src={twitIcon}
            width={26}
            height={26}
            alt="twit"
            className="mr-2"
          />
          <FooterLink linkName="Twitter" />
        </span>
        <span className="flex flex-row items-center">
          <Image
            src={linkIcon}
            width={26}
            height={26}
            alt="link"
            className="mr-2"
          />
          <FooterLink linkName="Linkedin" />
        </span>
        </div>
      </div>

      <div className="flex flex-col font-fontDM pt-8 pb-4 lg:mr-7 sm:p-6">
        <h2 className="font-bold font-2xl pb-4 text-white">Signup for the Newsletter</h2>
        <input type="text" className="rounded-lg" />
        <button className="bg-[#374A5E] mt-4 rounded-lg">Sign up</button>
      </div>
    </div>
  );
}
