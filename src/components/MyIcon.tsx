import React from 'react';
import Home from '../assets/icons/home.svg';
import Heart from '../assets/icons/heart.svg';
import User from '../assets/icons/user.svg';
import Search from '../assets/icons/search.svg';
import ArrowLeft from '../assets/icons/arrow-left.svg';
import ArrowLeft2 from '../assets/icons/arrow-left-2.svg';
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
import UserEdit from '../assets/icons/user-edit.svg';
import Lock from '../assets/icons/lock.svg';
import ReceiptText from '../assets/icons/receipt-text.svg';
import Notification from '../assets/icons/notification.svg';
import MessageQuestion from '../assets/icons/message-question.svg';
import Lifebuoy from '../assets/icons/lifebuoy.svg';
import Logout from '../assets/icons/logout.svg';

const icons = {
  home: Home,
  heart: Heart,
  user: User,
  search: Search,
  'arrow-left': ArrowLeft,
  'arrow-left-2': ArrowLeft2,
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
  'user-edit': UserEdit,
  lock: Lock,
  'receipt-text': ReceiptText,
  notification: Notification,
  'message-question': MessageQuestion,
  lifebuoy: Lifebuoy,
  logout: Logout,
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
