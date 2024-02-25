import type { NextPage } from "next";

const FooterSection: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start p-[50px] box-border max-w-full text-left text-5xl text-gray-black font-body-regular-400 lg:pl-[25px] lg:pr-[25px] lg:box-border mq450:pt-8 mq450:pb-8 mq450:box-border">
      <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full lg:flex-wrap lg:justify-center">
        <div className="w-[312px] flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-large-400">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className="h-11 w-11 relative" alt="" src="/houseline.svg" />
            <div className="flex flex-col items-start justify-start">
              <div className="w-[53px] h-6 relative leading-[24px] font-semibold inline-block mq450:text-lgi mq450:leading-[19px]">
                REIS
              </div>
              <div className="w-[68px] h-4 relative text-sm leading-[16px] font-medium inline-block">
                Real State
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <div className="w-[126px] h-8 relative text-5xl leading-[32px] font-semibold text-gray-black inline-block mq450:text-lgi mq450:leading-[26px]">
              Contact Us
            </div>
            <div className="w-[139px] h-6 relative leading-[24px] inline-block">
              Call : +123 400 123
            </div>
            <div className="self-stretch h-12 relative leading-[24px] inline-block">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className="w-[193px] h-6 relative leading-[24px] text-gray-700 inline-block">
              Email: example@mail.com
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between gap-[16px]">
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 h-5 relative"
                alt=""
                src="/social-media-logo.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-[32px]">
          <div className="w-[101px] h-8 relative leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
            Features
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className="w-11 h-6 relative leading-[24px] inline-block">
              Home
            </div>
            <div className="w-28 h-6 relative leading-[24px] inline-block">
              Become a Host
            </div>
            <div className="w-[53px] h-6 relative leading-[24px] inline-block">
              Pricing
            </div>
            <div className="w-[35px] h-6 relative leading-[24px] inline-block">
              Blog
            </div>
            <div className="w-[59px] h-6 relative leading-[24px] inline-block">
              Contact
            </div>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-[32px]">
          <div className="w-[107px] h-8 relative leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
            Company
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className="w-[69px] h-6 relative leading-[24px] inline-block">
              About Us
            </div>
            <div className="w-[42px] h-6 relative leading-[24px] inline-block">
              Press
            </div>
            <div className="w-[59px] h-6 relative leading-[24px] inline-block">
              Contact
            </div>
            <div className="w-[59px] h-6 relative leading-[24px] inline-block">
              Careers
            </div>
            <div className="w-[35px] h-6 relative leading-[24px] inline-block">
              Blog
            </div>
          </div>
        </div>
        <div className="w-[203px] flex flex-col items-start justify-start gap-[32px]">
          <div className="w-[203px] h-8 relative leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
            Team and policies
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className="w-[121px] h-6 relative leading-[24px] inline-block">
              Terms of servies
            </div>
            <div className="w-[103px] h-6 relative leading-[24px] inline-block">
              Privacy Policy
            </div>
            <div className="w-[63px] h-6 relative leading-[24px] inline-block">
              Security
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
