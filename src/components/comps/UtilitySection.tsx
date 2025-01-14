// Icons
import { LuRows3, LuColumns3 } from "react-icons/lu";
import { PiFunnelBold } from "react-icons/pi";
import { TbArrowsUpDown } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { FiShare2, FiTrash2 } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";

// ShadCN Input
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const UtilitySection = () => {
  return (
    <div className="p-6 flex gap-6 justify-between items-center max-xl:flex-col max-xl:items-start">
      {/* Input & Filters */}
      <div className="flex items-center gap-9 max-lg:flex-col max-lg:gap-6">
        <div className="flex items-center">
          <Input
            className="pl-8 w-[364px] border border-gray-300 bg-[url('https://static.thenounproject.com/png/101791-200.png')] bg-no-repeat bg-[10px] bg-[length:17px_17px]"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center gap-9">
          <div className="flex items-center gap-2 cursor-pointer">
            <LuRows3 className="text-lg" />
            <p className="text-xs font-medium text-gray-800">1/1 Row</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <LuColumns3 className="text-lg" />
            <p className="text-xs font-medium text-gray-800">3/3 Column</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <PiFunnelBold className="text-lg" />
            <p className="text-xs font-medium text-gray-800">0 Filter</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <TbArrowsUpDown className="text-lg" />
            <p className="text-xs font-medium text-gray-800">Sort</p>
          </div>
        </div>
      </div>
      {/* Share and Download */}
      <div className="flex items-center gap-7">
        <div>
          <Button className="font-medium text-xs bg-gray-800">
            <BsStars /> Enrich
          </Button>
        </div>
        <div className="flex gap-5">
          <FiShare2 className="text-lg cursor-pointer" />
          <MdOutlineFileDownload className="text-xl cursor-pointer" />
          <FiTrash2 className="text-lg cursor-pointer text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default UtilitySection;
