import type { NextPage } from "next";
import SellYourHome from "./sell-your-home";

const PropertiesByAreaFeatureCar: NextPage = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0 text-center text-21xl text-primary-800 font-body-large-400 lg:gap-[53px] mq825:gap-[27px] mq825:pt-[45px] mq825:pb-[45px] mq825:box-border">
      <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%] mq825:gap-[27px] mq825:pt-[49px] mq825:box-border">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%]">
          <div className="self-stretch h-12 relative leading-[48px] font-semibold inline-block mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            Properties by Area
          </div>
          <div className="self-stretch h-7 relative text-xl leading-[28px] text-gray-400 inline-block mq450:text-base mq450:leading-[22px]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-left text-base text-gray-700 mq450:gap-[21px] mq825:gap-[43px]">
          <SellYourHome icon="/icon.svg" sellYourHome="Sell your home" />
          <SellYourHome icon="/icon.svg" sellYourHome="Rent your home" />
          <SellYourHome icon="/icon.svg" sellYourHome="Buy a home" />
          <SellYourHome icon="/icon.svg" sellYourHome="Free marketing" />
        </div>
      </div>
    </div>
  );
};

export default PropertiesByAreaFeatureCar;
