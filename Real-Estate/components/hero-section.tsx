import type { NextPage } from "next";

const HeroSection: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] box-border bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-33xl text-gray-white font-body-regular-400 mq825:pt-[78px] mq825:pb-[78px] mq825:box-border">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-full mq450:gap-[15px] mq825:gap-[31px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <div className="self-stretch h-[72px] relative leading-[72px] font-semibold inline-block mq450:text-12xl mq450:leading-[43px] mq825:text-23xl mq825:leading-[58px]">
            Find Your Dream Home
          </div>
          <div className="self-stretch h-7 relative text-xl leading-[28px] font-body-large-400 text-primary-50 inline-block mq450:text-base mq450:leading-[22px]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[17px] max-w-full text-base font-body-large-400">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div className="flex-1 rounded bg-primary-500 overflow-hidden flex flex-row items-start justify-start py-3 px-6">
              <div className="relative leading-[24px] font-medium">Rent</div>
            </div>
            <div className="flex-1 rounded bg-gray-white overflow-hidden flex flex-row items-start justify-start py-3 px-6 text-primary-400">
              <div className="relative leading-[24px] font-medium">Sale</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full text-primary-700 mq825:flex-col">
            <div className="flex-1 rounded-lg bg-gray-white flex flex-row items-center justify-between py-8 px-[62px] box-border max-w-[1400px] gap-[20px] mq825:flex-col mq825:flex-wrap mq825:pl-[31px] mq825:pr-[31px] mq825:box-border mq825:flex-[unset] mq825:self-stretch mq1400:max-w-full">
              <div className="w-[137px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border gap-[16px]">
                <div className="w-[76px] h-6 relative leading-[24px] capitalize font-semibold inline-block">
                  Locations
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-left text-gray-400 mq825:self-stretch mq825:w-auto mq825:min-w-full">
                  <div className="relative leading-[24px]">
                    Select your city
                  </div>
                  <img
                    className="relative w-2.5 h-1.5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px] text-left">
                <div className="w-[150px] h-6 relative leading-[24px] capitalize font-semibold flex items-end">
                  Property Type
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px] text-gray-400 mq825:min-w-full">
                  <div className="relative leading-[24px]">
                    Select property type
                  </div>
                  <img
                    className="relative w-2.5 h-1.5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
              <div className="w-[155px] flex flex-col items-start justify-start gap-[16px] text-left">
                <div className="w-[150px] h-6 relative leading-[24px] capitalize font-semibold flex items-end">
                  Rent Range
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px] text-gray-400 mq825:min-w-full">
                  <div className="relative leading-[24px]">
                    Select rent range
                  </div>
                  <img
                    className="relative w-2.5 h-1.5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
              <div className="w-[102px] rounded bg-primary-500 flex flex-row items-center justify-center py-3 px-6 box-border text-gray-white mq825:text-center mq825:self-stretch mq825:w-auto mq825:min-w-[102]">
                <div className="relative leading-[24px] font-medium">
                  Search
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
