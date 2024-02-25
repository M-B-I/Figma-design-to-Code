import type { NextPage } from "next";
import Card1 from "./card1";

const LatestPropertiesOfRentCard2: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start py-[86px] px-0 box-border gap-[39px] max-w-full text-center text-21xl text-primary-800 font-body-large-400 lg:pt-14 lg:pb-14 lg:box-border mq450:pt-9 mq450:pb-9 mq450:box-border mq825:gap-[19px]">
      <div className="flex flex-col items-center justify-start gap-[40px] max-w-full mq825:gap-[20px]">
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
        <div className="w-[] overflow-x-auto flex flex-row flex-wrap items-center justify-center py-0 px-2.5 box-border gap-[32px] max-w-full text-left text-mini-5 text-gray-700 mq825:gap-[16px]">
          <Card1 propertyImage="/property-image@2x.png" />
          <Card1 propertyImage="/property-image@2x.png" />
          <Card1 propertyImage="/property-image@2x.png" />
          <Card1 propertyImage="/property-image@2x.png" />
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

export default LatestPropertiesOfRentCard2;
