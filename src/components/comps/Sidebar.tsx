// Icons
import { FiTable } from "react-icons/fi";
import { TbPuzzle } from "react-icons/tb";
import { PiIntersectDuotone } from "react-icons/pi";
import { GoCreditCard } from "react-icons/go";
import { BiCoinStack } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="px-5 pt-6 pb-4 h-[calc(100vh-65px)] gap-10 flex flex-col justify-between items-center border-r border-r-[#E5E5E5] max-w-14 max-lg:hidden">
      <div className="flex flex-col gap-6">
        <FiTable className="text-xl text-gray-800 cursor-pointer hover:opacity-70" />
        <TbPuzzle className="text-xl text-gray-800 cursor-pointer hover:opacity-70" />
        <PiIntersectDuotone className="text-xl text-gray-800 cursor-pointer hover:opacity-70" />
      </div>
      <div className="flex flex-col gap-6">
        <GoCreditCard className="text-xl text-gray-800 cursor-pointer hover:opacity-70" />
        <BiCoinStack className="text-xl text-pink-800 cursor-pointer hover:opacity-70" />
      </div>
    </div>
  );
};

export default Sidebar;
