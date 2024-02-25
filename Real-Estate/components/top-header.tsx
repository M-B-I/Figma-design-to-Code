import type { NextPage } from "next";

const TopHeader: NextPage = () => {
  return (
    <div className="self-stretch h-[98px] bg-gray-white flex flex-row items-center justify-center py-[22px] px-20 box-border top-[0] z-[99] sticky max-w-full text-center text-5xl text-primary-500 font-body-large-400 lg:pl-10 lg:pr-10 lg:box-border">
      <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <img className="h-11 w-11 relative" alt="" src="/houseline.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className="w-[53px] h-6 relative leading-[24px] font-semibold inline-block whitespace-nowrap">
              REIS
            </div>
            <div className="w-[68px] h-4 relative text-sm leading-[16px] font-medium inline-block whitespace-nowrap">
              Real State
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[36px] max-w-full text-sm text-primary-900 lg:w-[60px] mq450:gap-[18px]">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full lg:hidden">
            <div className="h-[22px] w-[42px] relative leading-[22px] inline-block">
              HOME
            </div>
            <div className="h-[22px] w-[72px] relative leading-[22px] inline-block whitespace-nowrap">
              ABOUT US
            </div>
            <div className="h-[22px] flex-1 relative leading-[22px] inline-block whitespace-nowrap">
              OUR AGENTS
            </div>
            <div className="h-[22px] flex-1 relative leading-[22px] font-semibold inline-block">
              PROPERTIES
            </div>
            <div className="h-[22px] w-[62px] relative leading-[22px] inline-block">
              GALLERY
            </div>
            <div className="h-[22px] w-[38px] relative leading-[22px] inline-block">
              BLOG
            </div>
            <div className="h-[22px] flex-1 relative leading-[22px] inline-block whitespace-nowrap">
              CONTACT US
            </div>
            <div className="h-[22px] w-[57px] relative leading-[22px] inline-block">
              SEARCH
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/notification.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
