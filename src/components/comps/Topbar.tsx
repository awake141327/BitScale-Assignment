// React Hooks
import { useState } from "react";

// Icons
import { FaArrowLeft } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";

// ShadCN Switch
import { Switch } from "@/components/ui/switch";

const Topbar = () => {
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div className="flex justify-between p-4 border-b border-b-[#E5E5E5]">
      <div className="flex items-center gap-4 max-sm:gap-2">
        <FaArrowLeft className="text-gray-800 text-sm cursor-pointer max-sm:text-xs" />
        <p className="text-sm font-normal text-gray-500 max-sm:text-xs">
          Name of the file
        </p>
      </div>
      <div className="flex items-center gap-6 max-sm:gap-4">
        <div className="flex items-center gap-2">
          <Switch
            className="data-[state=checked]:bg-[#0E9F6E] max-sm:scale-75 data-[state=unchecked]:bg-red-500"
            onClick={() => setAutoSave((prev) => !prev)}
            defaultChecked={true}
          />
          <p
            className={`leading-tight font-medium text-sm max-sm:text-xs ${
              autoSave ? "text-[#0E9F6E]" : "text-red-500"
            }`}
          >
            Auto Save{" "}
            {autoSave ? (
              <span className="text-xs tracking-tighter sr-only">(ON)</span>
            ) : (
              <span className="text-xs tracking-tighter sr-only">(OFF)</span>
            )}
          </p>
        </div>
        <div className="size-8 bg-orange-100 flex justify-center items-center rounded-full cursor-pointer">
          <RiUserLine className="text-orange-600" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
