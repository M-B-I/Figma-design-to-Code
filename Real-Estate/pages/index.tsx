import type { NextPage } from "next";
import TopHeader from "../components/top-header";
import HeroSection from "../components/hero-section";
import PropertiesByAreaFeatureCar from "../components/properties-by-area-feature-car";
import LatestPropertiesOfRentCard2 from "../components/latest-properties-of-rent-card2";
import LatestPropertiesOfRentCard1 from "../components/latest-properties-of-rent-card1";
import LatestPropertiesOfRentCard from "../components/latest-properties-of-rent-card";
import FooterSection from "../components/footer-section";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-white flex flex-col items-center justify-start tracking-[normal] text-center text-21xl text-primary-800 font-body-large-400">
      <TopHeader />
      <HeroSection />
      <div className="self-stretch flex flex-col items-center justify-start py-[53px] px-[50px] box-border gap-[45px] max-w-full lg:pl-[25px] lg:pr-[25px] lg:box-border mq450:pt-[22px] mq450:pb-[22px] mq450:box-border mq825:gap-[22px] mq825:pt-[34px] mq825:pb-[34px] mq825:box-border">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px]">
          <div className="self-stretch h-12 relative leading-[48px] font-semibold inline-block mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            Properties by Area
          </div>
          <div className="self-stretch h-7 relative text-xl leading-[28px] text-gray-400 inline-block mq450:text-base mq450:leading-[22px]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-full text-left text-5xl text-gray-white">
          <div className="flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px] min-h-[536px] mq1400:max-w-full">
            <div className="self-stretch grid flex-row items-start justify-center gap-[26px] max-w-full grid-cols-[repeat(3,_minmax(312px,_1fr))] lg:justify-center lg:grid-cols-[repeat(2,_minmax(312px,_541px))] mq825:grid-cols-[minmax(312px,_1fr)]">
              <div className="h-[241px] rounded-lg flex flex-row items-start justify-start relative bg-[url('/card-1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="w-32 h-8 relative leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
                    Centerville
                  </div>
                  <div className="w-[77px] h-6 relative text-base leading-[24px] text-center inline-block">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="h-[241px] rounded-lg flex flex-row items-start justify-start relative bg-[url('/card-2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="w-32 h-8 relative leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
                    Centerville
                  </div>
                  <div className="w-[77px] h-6 relative text-base leading-[24px] text-center inline-block">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="h-[241px] rounded-lg flex flex-row items-start justify-start relative bg-[url('/card-3@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="w-32 h-8 relative leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
                    Centerville
                  </div>
                  <div className="w-[77px] h-6 relative text-base leading-[24px] text-center inline-block">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px] max-w-full lg:flex-wrap">
              <div className="h-[241px] flex-1 rounded-lg flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-4@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[415px] max-w-full mq825:min-w-full">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="w-[108px] h-8 relative leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
                    Arlington
                  </div>
                  <div className="w-[77px] h-6 relative text-base leading-[24px] text-center inline-block">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="h-[241px] flex-1 rounded-lg flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-5@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[415px] max-w-full mq825:min-w-full">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="w-32 h-8 relative leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
                    Centerville
                  </div>
                  <div className="w-[77px] h-6 relative text-base leading-[24px] text-center inline-block">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PropertiesByAreaFeatureCar />
      <LatestPropertiesOfRentCard2 />
      <LatestPropertiesOfRentCard1 />
      <LatestPropertiesOfRentCard />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
