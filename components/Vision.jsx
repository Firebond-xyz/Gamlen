import Image from "next/image";
import Astro from "../public/ape.png";
import Rocket from "../public/vision/rocket.webp";

export default function Vision() {
  return (
    <div
      className="bg-inherit px-8 pt-12 pb-0 h-[45rem] lg:h-[45rem] lg:py-1 lg:pb-0 relative font-fontDM"
      id="vision"
    >
      <div className="rocket">
        <Image src={Rocket} alt="rocket" width={388} height={360} />
        <style jsx>
          {`
            .rocket {
              display: none;
            }
            @media (min-width: 1024px) {
              .rocket {
                display: initial;
                position: absolute;
                left: 30%;
                top: -2rem;
                opacity: 0.5;
              }
            }
          `}
        </style>
      </div>

      <section className="flex flex-col items-center sm:flex-row sm:justify-around lg:flex lg:flex-row lg:justify-between  lg:py-10 lg:z-5">
        <div className="hidden lg:block lg:flex-1 lg:pl-12 animate">
          <style jsx>{`
            .animate {
              animation-name: scale, trans;
              animation-duration: 3s, 3s;
              animation-iteration-count: 0, infinite;
            }

            @keyframes scale {
              20%,
              40%,
              60%,
              80%,
              0%,
              100% {
                animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
              }
              0% {
                opacity: 0;
                transform: scale3d(0.3, 0.3, 0.3);
              }
              40% {
                opacity: 0.5;
                transform: scale3d(0.9, 0.9, 0.9);
              }

              100% {
                opacity: 1;
                transform: scale3d(1, 1, 1);
              }
            }
            @keyframes trans {
              0% {
                transform: translate(2px, 4px);
              }
              20% {
                transform: translate(9px, -8px);
              }
              60% {
                transform: translate(9px, -12px);
              }

              80% {
                transform: translate(10px, 13px);
              }

              100% {
                transform: translate(12px, 15px);
              }
            }
          `}</style>
          <Image src={Astro} alt="astro" width={400} height={680} />
        </div>

        <div className="pl-8 flex-1 lg:hidden animate">
          <style jsx>{`
            .animate {
              animation-name: scale, trans;
              animation-duration: 3s, 3s;
              animation-iteration-count: 0, infinite;
            }

            @keyframes scale {
              20%,
              40%,
              60%,
              80%,
              0%,
              100% {
                animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
              }
              0% {
                opacity: 0;
                transform: scale3d(0.3, 0.3, 0.3);
              }
              40% {
                opacity: 0.5;
                transform: scale3d(0.9, 0.9, 0.9);
              }

              100% {
                opacity: 1;
                transform: scale3d(1, 1, 1);
              }
            }
            @keyframes trans {
              0% {
                transform: translate(2px, 4px);
              }
              20% {
                transform: translate(9px, -8px);
              }
              60% {
                transform: translate(9px, -12px);
              }

              80% {
                transform: translate(10px, 13px);
              }

              100% {
                transform: translate(12px, 15px);
              }
            }
          `}</style>
          <Image src={Astro} alt="astro" width={230} height={400} />
        </div>

        <div className="flex-1 pr-8 lg:flex-1 text-white">
          <h1 className="text-4xl pb-4 font-bold">Vision</h1>
          <article className="text-xl lg:pr-20">
            <p className="pb-8">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              illum deleniti laborum quisquam officia atque, culpa minima fugit
              assumenda amet?
            </p>

            <p className="sm:flex-1 pb-8">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
              fugit nulla. Placeat iusto molestias beatae quasi aperiam
              quibusdam possimus, nemo assumenda, a nulla, perspiciatis nihil
              magnam cumque molestiae exercitationem earum!
            </p>
            <p className="sm:flex-1 pb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              repellendus reiciendis nesciunt sed odit architecto, quo totam!
              Sint quisquam sapiente, corrupti aspernatur ea numquam nisi
              suscipit praesentium doloribus quos possimus qui molestiae libero
              debitis, magni nihil nesciunt cum pariatur? Voluptates voluptas
              reiciendis molestiae. Perspiciatis magni iusto expedita nobis
              atque nisi!
            </p>
            <p className="pb-0"> Welcome to the Gaming DeFi future! </p>
          </article>
        </div>
      </section>
    </div>
  );
}
