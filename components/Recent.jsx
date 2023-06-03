import Image from "next/image";
import recentOne from "../public/recentone.webp";
import recentTwo from "../public/recenttwo.webp";
import recentThree from "../public/recentthree.jpg";
import recentFour from "../public/recentfour.jpg";

const cardArr = [
  {
    imgSrc: recentOne,
    content: "NFT Games changing way of playing games",
  },
  {
    imgSrc: recentTwo,
    content: "Syncity NFT Game Review",
  },
  {
    imgSrc: recentThree,
    content: "The best NFT Games in 2023",
  },
  {
    imgSrc: recentFour,
    content: "Top NFT Games",
  },
];

const RecentCard = ({ imgSrc, content }) => {
  return (
    <div className="bg-black p-4 m-4 md:p-4 md:m-14 rounded-lg transition ease-in-out duration-200 delay-75 animate-glow hover:-translate-y-1 hover:scale-110 ">
      <div className="imgWrapper ">
        <style jsx>
          {`
            .imgWrapper {
              box-shadow: 9.899px 9.899px 30px 0 rgb(0 0 0 / 10%);
              transition: all 0.4s ease;
            }
            .uplift-on-hover {
              transition: transform 0.2s ease-out;
            }

            .uplift-on-hover:hover {
              transform: translateY(-5px);
            }
          `}
        </style>

        <Image src={imgSrc} alt="mig" />
      </div>
      <h2 className="text-white md:text-2xl font-bold font-fontJost text-center pt-4">
        {content}
      </h2>
    </div>
  );
};

export default function Recent() {
  return (
    <div className="flex flex-col items-center bg-inherit pl-4 pr-4 sm:mt-40">
      <section className="text-center">
        <h2 className="font-bold text-white text-4xl pt-4">
          Recent News
        </h2>
      </section>

      <div className="grid grid-cols-2">
        {cardArr.map((el) => {
          return (
            <RecentCard
              imgSrc={el.imgSrc}
              content={el.content}
              key={el.content}
            />
          );
        })}
      </div>
    </div>
  );
}
