import type { NextPage } from "next";
import Card from "./card";

const LatestPropertiesOfRentCard1: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 box-border gap-[39px] max-w-full text-center text-21xl text-primary-800 font-body-large-400 lg:pt-14 lg:pb-14 lg:box-border mq450:pt-9 mq450:pb-9 mq450:box-border mq825:gap-[19px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-full mq825:gap-[20px]">
        <div className="w-[728px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[24px] max-w-full">
          <div className="self-stretch h-12 relative leading-[48px] font-semibold inline-block mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            Latest Properties of Rent
          </div>
          <div className="self-stretch h-14 relative text-xl leading-[28px] text-gray-400 inline-block mq450:text-base mq450:leading-[22px]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full text-left text-base text-gray-white mq825:gap-[20px]">
          <Card propBackgroundImage="url('/card-11@3x.png')" />
          <Card propBackgroundImage="url('/card-21@3x.png')" />
          <Card propBackgroundImage="url('/card-31@3x.png')" />
          <Card propBackgroundImage="url('/card-41@3x.png')" />
        </div>
      </div>
      <div className="rounded bg-primary-500 flex flex-row items-start justify-start py-3 px-6 text-base text-gray-white mq450:w-[calc(100%_-_40px)]">
        <div className="relative leading-[24px] font-medium">
          Load more listing
        </div>
      </div>
    </div>
  );
};

export default LatestPropertiesOfRentCard1;
