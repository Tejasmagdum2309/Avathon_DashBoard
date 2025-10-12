import React from "react";
import { filterdCardData } from "../../redux/selectors/cardSeletors";
import { useDispatch, useSelector } from "react-redux";
import { MetricCard } from "./Components/MatricCard";
import { AverageDurationIcon, BugIcon, DeviceWithMaxDurationIcon, TotalDurationIcon } from "../../Icons/Icons";

const DashBoardCards = () => {
  const dispatch = useDispatch();

  const cardData = useSelector(filterdCardData);

  return (
    <>
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard key={cardData[0].title} title={cardData[0].title} icon={<BugIcon />}  value={cardData[0].value} variant={'blue'}/>
            <MetricCard key={cardData[1].title} title={cardData[1].title} icon={<TotalDurationIcon />}  value={cardData[1].value} />
            <MetricCard key={cardData[2].title} title={cardData[2].title} icon={<AverageDurationIcon />}  value={cardData[2].value} variant={'blue'} />
            <MetricCard key={cardData[3].title} title={cardData[3].title} icon={<DeviceWithMaxDurationIcon />}  value={cardData[3].value || '--'} variant={'yellow'}  />

      </div>
    </>
  );
};

export default DashBoardCards;
