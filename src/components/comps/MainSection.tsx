// Icons
import EC from "../../assets/EnrichCompany.svg";
import GPT from "../../assets/GPT.svg";
import Play from "../../assets/Play.svg";
import { FiPlus } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";

// ShadCN Table
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Data
import { data } from "./constants.ts";

const MainSection = () => {
  return (
    <div>
      <Table>
        <TableHeader className="bg-[#f6f6f6]">
          <TableRow>
            <TableHead className="min-w-10 w-10 border-r"></TableHead>
            <TableHead className="min-w-10 w-10 border-r"></TableHead>
            <TableHead className="max-w-[267px] w-[267px] border-r">
              <div className="flex items-center gap-1.5">
                <div className="bg-black px-1.5 py-[1.5px] max-lg:text-xs text-white">
                  A
                </div>
                <p className="text-[#1c1b1f] text-sm max-lg:text-xs font-medium truncate">
                  Input Column
                </p>
              </div>
            </TableHead>
            <TableHead className="w-[267px] border-r text-nowrap max-lg:text-xs">
              <div className="flex items-center gap-1.5 ">
                <img src={GPT} alt="GPT" />
                <p className="text-[#1c1b1f] text-sm max-lg:text-xs font-medium">
                  Action Column
                </p>
              </div>
            </TableHead>
            <TableHead className="w-[267px] border-r text-nowrap">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 ">
                  <img src={EC} alt="Enrich Company" />
                  <p className="text-[#1c1b1f] text-sm font-medium max-lg:text-xs">
                    Enrich Company
                  </p>
                </div>
                <CiPlay1 />
              </div>
            </TableHead>
            <TableHead className="text-nowrap">
              <div className="flex items-center gap-1 text-[#1c1b1f] cursor-pointer max-lg:text-xs">
                <FiPlus />
                <p>Add Column</p>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow>
              <TableCell className="min-w-10 w-10 text-center border-r border-b max-lg:text-xs">
                {item.id}
              </TableCell>
              <TableCell className="min-w-10 w-10 border-r border-b">
                <div className="flex justify-center">
                  <img src={Play} alt="Play" className="ml-0.5" />
                </div>
              </TableCell>
              <TableCell className="max-w-[267px] w-[267px] border-r border-b truncate max-lg:text-xs">
                {item.dateTime}
              </TableCell>
              <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate max-lg:text-xs">
                <div className="flex gap-2">
                  {item.actionIcon && (
                    <img src={item.actionIcon} alt="Action Icon" />
                  )}
                  <p className={`truncate ${item.classes}`}>{item.action}</p>
                </div>
              </TableCell>
              <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate max-lg:text-xs">
                <div className="flex gap-2">
                  {item.companyIcon && (
                    <img src={item.companyIcon} alt={"Company Icon"} />
                  )}
                  <p className="truncate">{item.enrichCompany}</p>
                </div>
              </TableCell>
              <TableCell className="border-b overflow-auto"></TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="min-w-10 text-center border-r border-b"></TableCell>
            <TableCell className="min-w-10 mx-auto border-r border-b"></TableCell>
            <TableCell className="border-r border-b w-[267px]">
              <div className="flex items-center gap-1 cursor-pointer max-lg:text-xs">
                <FiPlus /> <p>Add Row</p>
              </div>
            </TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-b w-[267px]"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default MainSection;
