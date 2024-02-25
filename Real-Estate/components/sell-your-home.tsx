import type { NextPage } from "next";

type SellYourHomeType = {
  icon?: string;
  sellYourHome?: string;
};

const SellYourHome: NextPage<SellYourHomeType> = ({ icon, sellYourHome }) => {
  return (
    <div className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col items-start justify-start p-[22px] box-border min-w-[300px] max-w-[340px] text-left text-base text-gray-700 font-body-large-400 mq450:w-[calc(100%_-_40px)]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <img
          className="w-[78px] h-[78px] relative overflow-hidden shrink-0"
          alt=""
          src={icon}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="w-[173px] h-8 relative text-5xl leading-[32px] font-semibold text-center inline-block mq450:text-lgi mq450:leading-[26px]">
            {sellYourHome}
          </div>
          <div className="self-stretch h-12 relative leading-[24px] text-gray-400 inline-block">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <div className="w-[82px] h-6 relative leading-[24px] text-primary-500 inline-block">
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellYourHome;
