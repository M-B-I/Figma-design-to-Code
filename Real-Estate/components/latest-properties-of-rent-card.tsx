import type { NextPage } from "next";

const LatestPropertiesOfRentCard: NextPage = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px] box-border max-w-full text-center text-21xl text-primary-800 font-body-large-400 mq450:pt-9 mq450:pb-9 mq450:box-border mq825:gap-[19px] mq825:pt-14 mq825:pb-14 mq825:box-border">
      <div className="flex-1 flex flex-col items-center justify-start py-0 px-5 box-border gap-[40px] max-w-[900px] lg:max-w-full mq450:gap-[20px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-full">
          <div className="self-stretch h-12 relative leading-[48px] font-semibold inline-block mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            Contact us
          </div>
          <div className="self-stretch h-14 relative text-xl leading-[28px] text-gray-400 inline-block mq450:text-base mq450:leading-[22px]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] box-border gap-[17px] max-w-full text-left text-5xl text-darkslategray font-poppins mq450:pt-5 mq450:pb-5 mq450:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
            <b className="self-stretch h-9 relative leading-[36px] inline-block mq450:text-lgi mq450:leading-[29px]">
              Enquiry Form
            </b>
            <div className="self-stretch h-[30px] relative text-lg leading-[30px] font-components-input-text text-slategray inline-block">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px] max-w-full text-base text-darkgray font-components-input-text">
            <div className="self-stretch flex flex-row items-start justify-center gap-[10px] max-w-full mq825:flex-wrap">
              <div className="h-[] flex-1 rounded box-border flex flex-col items-start justify-start py-4 px-3 min-w-[263px] max-w-full border-[1px] border-solid border-gray">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  First name
                </div>
              </div>
              <div className="h-[] flex-1 rounded box-border flex flex-col items-start justify-center py-4 px-3 min-w-[263px] max-w-full border-[1px] border-solid border-gray">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Last name
                </div>
              </div>
            </div>
            <div className="self-stretch rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray">
              <div className="relative tracking-[0.15px] leading-[24px]">
                Email id
              </div>
            </div>
            <div className="self-stretch h-[105px] rounded box-border flex flex-col items-start justify-start p-3 border-[1px] border-solid border-gray">
              <div className="w-[174px] h-6 relative tracking-[0.15px] leading-[24px] inline-block">
                Comments or questions
              </div>
            </div>
            <div className="w-[222px] h-[46px] rounded bg-primary-500 flex flex-col items-center justify-center text-center text-gray-white hover:bg-steelblue">
              <div className="w-[203.1px] h-[19px] relative inline-block">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPropertiesOfRentCard;
