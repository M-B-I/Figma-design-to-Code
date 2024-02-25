import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type CardType = {
  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const Card: NextPage<CardType> = ({ propBackgroundImage }) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="h-[426px] flex-1 rounded-md flex flex-col items-center justify-end p-6 box-border bg-[url('/card-11@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px] text-left text-base text-gray-white font-body-large-400 mq450:w-[calc(100%_-_40px)]"
      style={card1Style}
    >
      <div className="self-stretch flex flex-row items-end justify-center gap-[32px]">
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/mappin.svg"
          />
          <div className="h-6 w-[91px] relative leading-[24px] font-medium inline-block">
            Washington
          </div>
        </div>
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/arrowsout.svg"
          />
          <div className="h-6 w-[49px] relative leading-[24px] font-medium inline-block">
            12000
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
