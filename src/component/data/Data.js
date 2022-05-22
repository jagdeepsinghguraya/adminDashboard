import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";


// tempImg 
import img1 from './img1.png';
import img2 from './img2.jpg';

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Analitycs",
  },
  {
    icon: UilUsersAlt,
    heading: "Messages",
  },
  {
    icon: UilPackage,
    heading: 'Collections'
  },
  {
    icon: UilChart,
    heading: 'Users'
  }
];
// Sidebar Contact 
export const SidebarContact = [
  {
    img: img1,
    name: "Robert Fox",
  },
  {
    img: img1,
    name: "Darlene Robertson",
  },
  {
    img: img1,
    name: "Theresa Webb",
  },
  
  {
    img: img1,
    name: "Kristin Watson",
  },
];

// Sidebar SidebarAccount
export const SidebarAccount = [
  {
    icon: UilUsersAlt,
    heading: 'Account'
  },{
    icon: UilSignOutAlt,
    heading: 'Logout'
  }
];


// Analytics Cards Data
export const cardsData = [
  {
    title: "Food",
    value: "₹ 8,470",
    png: img2,
    growth: "32%",
    duration:"since last month"
  },
  {
    title: "Study",
    value: "₹ 41,470",
    png: img2,
    growth: "22%",
    duration:"since last month"
  },
  {
    title: "Shopping",
    value: "₹ 3,850",
    png: img2,
    growth: "12%",
    duration:"since last month"
  },
  {
    title: "Wine",
    value: "₹ 14,470",
    png: img2,
    growth: "18%",
    duration:"since last month"
  },
];
