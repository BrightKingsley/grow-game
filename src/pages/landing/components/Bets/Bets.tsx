import { AnimateInOut } from "@/components";
import { Menu } from "@headlessui/react";
import { PropsWithChildren, useState } from "react";
import AllBets from "./AllBets";
import clsx from "clsx";
import MyBets from "./MyBets";
import Race from "./Race";
import BigBets from "./BigBets";
import { useAppSelector } from "@/hooks/store";

enum NavOptions {
  ALL_BETS = "All Bets",
  BIG_BETS = "Big Bets",
  MY_BETS = "My Bets",
  RACE = "Race",
}

const navComponents = {
  [NavOptions.ALL_BETS]: <AllBets />,
  [NavOptions.BIG_BETS]: <BigBets />,
  [NavOptions.MY_BETS]: <MyBets />,
  [NavOptions.RACE]: <Race />,
};

const navDropClassnames = "absolute left-0 top-12";

export default function Bets() {
  const auth = useAppSelector((state) => state.auth);
  const [navOption, setNavOption] = useState<NavOptions>(NavOptions.ALL_BETS);

  const TableWrapper = ({ children }: PropsWithChildren) => {
    return (
      <AnimateInOut
        show
        initial={{ translateY: 200, opacity: 0 }}
        exit={{ translateY: 200, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "keyframes", duration: 0.6 }}
        className="max-h-[500px] min-h-[500px] overflow-y-auto overflow-hidden overflow-x-auto  overflow-y-hidden min-h-[100px]"
      >
        <div>
          <table className="pr-1 overflow-x-scroll overflow-y-auto border-separate table-fixed border-spacing-0 border-spacing-y-1 sm:w-full">
            {children}
          </table>
        </div>
      </AnimateInOut>
    );
  };

  return (
    <>
      <div
        className="flex flex-col w-full gap-1 pt-1 text-sm font-semibold rounded-md "
        style={{
          mask: "linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 0px) 100% 50% / 100% 100% repeat-x",
        }}
      >
        <div className="flex justify-between gap-2.5 items-center w-full">
          <span className="flex max-sm:hidden">{navOption}</span>
          <div className="flex gap-1.5">
            {Object.values(NavOptions)
              .filter((option) => {
                if (!auth.isAuthenticated) return option !== NavOptions.MY_BETS;
                return option;
              })
              .map((option, i) => {
                // <Menu key={i}>
                //   {() => {
                //     const currentOption = option;
                //     const isActive = navOption === currentOption;
                //     return (
                //       <>
                //         <Menu.Button
                //           onClick={() => setNavOption(currentOption)}
                //           className={clsx(
                //             "flex py-1 px-2 rounded-sm transition-colors hover:text-white text-gray-400 ",
                //             isActive && "text-white bg-dark-800",
                //           )}
                //         >
                //           <p>{currentOption}</p>
                //         </Menu.Button>

                //         <TableWrapper>
                //           {navComponents[currentOption]}
                //         </TableWrapper>
                //       </>
                //     );
                //   }}
                // </Menu>
                const currentOption = option;
                const isActive = navOption === currentOption;
                // setNavOption(currentOption);
                return (
                  <button
                    onClick={() => setNavOption(currentOption)}
                    className={clsx(
                      "flex py-1 px-2 rounded-sm transition-colors hover:text-white text-gray-400 ",
                      isActive && "text-white bg-dark-800",
                    )}
                    // className="flex px-2 py-1 text-white transition-colors rounded-sm hover:text-white bg-dark-800"
                  >
                    {currentOption}
                  </button>
                );
              })}
            {/* <button className="flex px-2 py-1 text-white transition-colors rounded-sm hover:text-white bg-dark-800">
              All Bets
            </button>
            <button className="flex px-2 py-1 text-gray-500 transition-colors rounded-sm hover:text-white">
              Big Bets
            </button>
            <button className="flex px-2 py-1 text-gray-500 transition-colors rounded-sm hover:text-white">
              Race
            </button> */}
          </div>
        </div>
        {/* <div className="max-h-[500px] min-h-[500px] overflow-y-auto overflow-hidden overflow-x-auto  overflow-y-hidden min-h-[100px]">
          <div>
            <table className="pr-1 overflow-x-scroll overflow-y-auto border-separate table-fixed border-spacing-0 border-spacing-y-1 sm:w-full">
              <thead className="uppercase text-gray-500 text-[0.85rem] bg-dark-800">
                <tr>
                  <th className="rounded-l-sm py-3 pl-3 text-left w-[1/2]">
                    Game
                  </th>
                  <th className="py-2 text-left">Player</th>
                  <th className="py-2 text-center">Bet</th>
                  <th className="py-2 text-center">Profit</th>
                  <th className="w-2/12 py-2 text-center">Multiplier</th>
                  <th className="py-2 pr-3 text-right rounded-r-sm">Time</th>
                </tr>
              </thead>
              <tbody className="border-spacing-y-3"></tbody>
              {navComponents[navOption]}
            </table>
          </div>
        </div> */}
        <TableWrapper>{navComponents[navOption]}</TableWrapper>
      </div>
    </>
  );
}

const test = (
  <div
    className="flex flex-col w-full gap-1 pt-1 text-sm font-semibold rounded-md "
    style={{
      mask: "linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 0px) 100% 50% / 100% 100% repeat-x",
    }}
  >
    <div className="flex justify-between gap-2.5 items-center w-full">
      <span className="flex max-sm:hidden">All Bets</span>
      <div className="flex gap-1.5">
        <button className="flex px-2 py-1 text-white transition-colors rounded-sm hover:text-white bg-dark-800">
          All Bets
        </button>
        <button className="flex px-2 py-1 text-gray-500 transition-colors rounded-sm hover:text-white">
          Big Bets
        </button>
        <button className="flex px-2 py-1 text-gray-500 transition-colors rounded-sm hover:text-white">
          Race
        </button>
      </div>
    </div>
    <div className="max-h-[500px] min-h-[500px] overflow-y-auto overflow-hidden overflow-x-auto  overflow-y-hidden min-h-[100px]">
      <div>
        <table className="pr-1 overflow-x-scroll overflow-y-auto border-separate table-fixed border-spacing-0 border-spacing-y-1 sm:w-full">
          <thead className="uppercase text-gray-500 text-[0.85rem] bg-dark-800">
            <tr>
              <th className="rounded-l-sm py-3 pl-3 text-left w-[1/2]">Game</th>
              <th className="py-2 text-left">Player</th>
              <th className="py-2 text-center">Bet</th>
              <th className="py-2 text-center">Profit</th>
              <th className="w-2/12 py-2 text-center">Multiplier</th>
              <th className="py-2 pr-3 text-right rounded-r-sm">Time</th>
            </tr>
          </thead>
          <tbody className="border-spacing-y-3"></tbody>
        </table>
      </div>
    </div>
  </div>
);
