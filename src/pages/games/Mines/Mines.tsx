import { GearIcon, ShieldIcon } from "@/assets/svgs";
import { Button, Select } from "@/components";
import clsx from "clsx";
import SilverLockIcon from "@/assets/icons/silver-lock.webp";
import { Bets } from "@/pages/landing/components";

export default function Mines() {
  const Box = () => (
    <button className="bg-dark-750 mines-tile cursor-pointer hover:-translate-y-1 hover:brightness-95 active:translate-y-0.5 w-full h-full max-sm:max-h[55px] max-sm:max-w-[55px] max-h-[100px] max-w-[100px]  max-sm:p-2 transition-transform p-4 ease-out rounded-sm relative aspect-square text-gray-500 text-[1.1rem] max-sm:text-sm font-semibold">
      <span>1.09×</span>
    </button>
  );

  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="min-h-[50px] bg-dark-800 flex overflow-hidden flex-col-reverse w-full items-center rounded-t-md border-b border-gray-700" />
        <div className="flex w-full h-full flex-row max-md:flex-col-reverse">
          <div
            className={clsx(
              "bg-dark-800 flex justify-start flex-col max-md:w-full w-[400px]"
            )}
          >
            <form className="w-[94%] mx-auto p-3 flex flex-col gap-2 font-medium  text-sm">
              <fieldset>
                <label className="text-sm capitalize font-semibold">
                  bet amount
                </label>
                <div
                  tabIndex={0}
                  className="w-full relative flex items-center rounded "
                >
                  <input
                    type="text"
                    className="focus:border-none focus:outline-none bg-dark-700 w-full rounded p-2 focus:border-[1px] focus:outline focus:outline-[1px] focus:outline-primary focus:border-primary border-gray-500 outline-gray-500"
                  />
                  {/* <img src={SilverLockIcon} className="w-4 aspect-square" /> */}
                  <div className="absolute flex gap-2 items-center right-2">
                    <span className="text-sm text-gray-600 font-semibold">
                      1/2
                    </span>
                    <span className="text-sm text-gray-600 font-semibold">
                      2x
                    </span>
                  </div>
                </div>
              </fieldset>
              <fieldset className="relative h-20 mt-2">
                <label className="text-sm capitalize font-semibold">
                  mines
                </label>
                <div className="absolute w-full bg-dark-800">
                  <Select
                    label="3"
                    data={Array(24)
                      .fill(0)
                      .map((_, i) => ({
                        label: (i + 1).toString(),
                        value: (i + 1).toString(),
                      }))}
                  />
                </div>
              </fieldset>
              <Button type="button" className="capitalize w-full">
                insufficient funds
              </Button>
            </form>
          </div>
          <div className="overflow-hidden bg-dark-850 w-full h-full min-h-[400px] max-sm:min-h-[300px] flex justify-center relative">
            <div className="w-full p-3 flex items-center justify-center">
              <div className="w-full grid grid-cols-[repeat(5,1fr)] max-w-[540px] max-sm:max-w-[300px] h-full max-sm:gap-1.5 gap-2.5">
                {Array(25)
                  .fill(0)
                  .map((_, i) => (
                    <Box key={i} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center min-h-[50px] bg-dark-800 rounded-b-md border-t border-gray-700">
          <div className="flex gap-3 items-center capitalize w-[98%] mx-auto">
            <div className="flex gap-1 group items-center">
              <ShieldIcon className="!stroke-gray-500 !fill-gray-500 group-hover:!fill-white group-hover:!stoke-white" />
              <p className="text-gray-500 font-semibold group-hover:text-white">
                provably fair
              </p>
            </div>
            <div className="flex gap-1 group items-center">
              <GearIcon className="!stroke-gray-500 !fill-gray-500 group-hover:!fill-white group-hover:!stoke-white" />
              <p className="text-gray-500 font-semibold group-hover:text-white">
                settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-800 gap-2 mt-3 text-gray-400 rounded-md flex flex-col font-semibold w-full p-3">
        <span className="text-2xl text-white">Mines</span>
        <div className="flex flex-row max-md:flex-col gap-2">
          <div className="flex flex-col min-w-[300px] max-md:w-full gap-2">
            <div className="text-sm h-[40px] max-h-[40px] rounded-sm bg-dark-750 p-2 flex-grow flex justify-between items-center gap-2">
              <span className="text-white font-medium">House Edge</span>
              <span className="flex items-center gap-1.5">4%</span>
            </div>
            <div className="text-sm h-[40px] max-h-[40px] rounded-sm bg-dark-750 p-2 flex-grow flex justify-between items-center gap-2">
              <span className="text-white font-medium">Max Bet</span>

              <span className="flex items-center gap-1.5">
                1,000.00
                <img
                  src={SilverLockIcon}
                  width="18"
                  height="18"
                  className="sc-x7t9ms-0 dnLnNz"
                />
              </span>
            </div>
            <div className="text-sm h-[40px] max-h-[40px] rounded-sm bg-dark-750 p-2 flex-grow flex justify-between items-center gap-2">
              <span className="text-white font-medium">Max Win</span>
              <span className="flex items-center gap-1.5">
                10,000.00
                <img
                  src={SilverLockIcon}
                  width="18"
                  height="18"
                  className="sc-x7t9ms-0 dnLnNz"
                />
              </span>
            </div>
          </div>
          <div className="bg-dark-750 rounded-md  p-2.5 text-sm font-medium w-full text-justify leading-5">
            <span>
              In this action-packed game, you'll be going up against the casino.
              <br />
              <br />
              Make sure to avoid the mines at all costs, as they will make it
              very difficult for you to reach the maximum win.
            </span>
          </div>
        </div>
      </div>
      <Bets />
    </div>
  );
}
