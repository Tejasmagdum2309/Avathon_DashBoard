import React from "react";
import { LuArrowDownWideNarrow } from "react-icons/lu";
import { LuArrowUpWideNarrow } from "react-icons/lu";
import { TiChartPieOutline } from "react-icons/ti";
import { FaRegChartBar } from "react-icons/fa";
import { GiAlienBug } from "react-icons/gi";
import { GiDuration } from "react-icons/gi";
import { TbAlarmAverage } from "react-icons/tb";
import { MdFmdBad } from "react-icons/md";


export const SortAscendingIcon = ({size, color, onClick}) => {
  return <LuArrowUpWideNarrow size={size || 20} color={color || "#000"} onClick={onClick} />;
};

export const SortDescendingIcon = ({size, color, onClick}) => {
  return <LuArrowDownWideNarrow size={size || 20} color={color || "#000"} onClick={onClick} />;
};

export const PieChartIcon = ({ size, color , onClick }) => {
  return <TiChartPieOutline size={size || 24} color={color || "#000"} onClick={onClick} />;
}

export const BarChartIcon = ({ size, color , onClick }) => {
  return <FaRegChartBar size={size || 24} color={color || "#000"} onClick={onClick} />;
}

export const BugIcon = ({ size, color , onClick }) => {
  return <GiAlienBug size={size || 24} color={color || "#000"} onClick={onClick} />;
}

export const TotalDurationIcon = ({ size, color , onClick }) => {
  return <GiDuration size={size || 24} color={color || "#000"} onClick={onClick} />;
}

export const AverageDurationIcon = ({ size, color , onClick }) => {
  return <TbAlarmAverage size={size || 24} color={color || "#000"} onClick={onClick} />;
}

export const DeviceWithMaxDurationIcon = ({ size, color , onClick }) => {
  return <MdFmdBad size={size || 24} color={color || "#000"} onClick={onClick} />;
}
