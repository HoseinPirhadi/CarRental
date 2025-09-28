import React from 'react';
import Home from '../assets/icons/home.svg';
import Heart from '../assets/icons/heart.svg';
import User from '../assets/icons/user.svg';
import Search from '../assets/icons/search.svg';
import ArrowLeft from '../assets/icons/arrow-left.svg';
import ArrowRight from '../assets/icons/arrow-right.svg';
import Gearbox from '../assets/icons/gearbox.svg';
import GasStation from '../assets/icons/gas-station.svg';
import Location from '../assets/icons/location.svg';
import LocationBold from '../assets/icons/location-bold.svg';
import Moneys from '../assets/icons/moneys.svg';
import Speedometer from '../assets/icons/speedometer.svg';
import Bucket from '../assets/icons/bucket.svg';
import HeartFill from '../assets/icons/heart-fill.svg';
import CloseCircle from '../assets/icons/close-circle.svg';

const icons = {
  home: Home,
  heart: Heart,
  user: User,
  search: Search,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  gearbox: Gearbox,
  'gas-station': GasStation,
  location: Location,
  'location-bold': LocationBold,
  moneys: Moneys,
  speedometer: Speedometer,
  bucket: Bucket,
  'heart-fill': HeartFill,
  'close-Circle': CloseCircle,
};

type IconProps = {
  name: keyof typeof icons;
  size?: number;
  color?: string;
};

export default function MyIcon({
  name,
  size = 24,
  color = 'black',
  ...props
}: IconProps) {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    console.warn(`⚠️ Icon "${name}" not found`);
    return null;
  }

  return <SvgIcon width={size} height={size} fill={color} {...props} />;
}
