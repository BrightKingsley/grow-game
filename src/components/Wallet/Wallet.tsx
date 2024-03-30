import { useSearchParams } from "react-router-dom";
import Deposit from "./Deposit";
import Tip from "./Tip";
import Withdraw from "./Withdraw";
import clsx from "clsx";
import "./wallet.css";

type WalletView = "deposit" | "withdraw" | "tip";

export default function Wallet() {
  const [searchParams, setSearchParams] = useSearchParams();

  const changeWalletView = (view: WalletView) => {
    setSearchParams((searchParams) => {
      const prevParams = {};
      searchParams.forEach((value, key) => {
        prevParams[key] = value;
      });
      return { ...prevParams, ...{ modal: view } };
    });
  };

  const walletView = searchParams.get("modal") as WalletView | null;

  let WalletComponent = Deposit;

  switch (walletView) {
    case "deposit":
      WalletComponent = Deposit;
      break;
    case "tip":
      WalletComponent = Tip;
      break;

    case "withdraw":
      WalletComponent = Withdraw;
      break;

    default:
      WalletComponent = Withdraw;
      break;
  }

  if (walletView === "deposit") {
  }
  return (
    <div className="sm:min-w-[40rem] max-w-[700px] p-3 w-auto_ flex flex-col overflow-y-auto max-h-[var(--app-height)] font-medium bg-dark-850 gap-2 rounded-md w-full max-sm:max-w-full max-sm:w-full text-sm text-gray-400 transform-none">
      <div className="flex justify-start relative items-center font-semibold text-[1rem] text-gray-400">
        <div className="flex gap-1.5 items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 256 256"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm-36,80a12,12,0,1,1,12-12A12,12,0,0,1,180,152Z"></path>
          </svg>
          Wallet
        </div>
        <button className="absolute right-0">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="21"
            width="21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-2 py-1">
          <button
            onClick={() => changeWalletView("deposit")}
            className={clsx(
              "text-sm font-semibold rounded-md px-3 py-1.5 transition-colors hover:bg-dark-800",
              walletView === "deposit" && "text-white bg-dark-800"
            )}
          >
            Deposit
          </button>
          <button
            onClick={() => changeWalletView("withdraw")}
            className={clsx(
              "text-sm font-semibold rounded-md px-3 py-1.5 transition-colors hover:bg-dark-800",
              walletView === "withdraw" && "text-white bg-dark-800"
            )}
          >
            Withdraw
          </button>
          <button
            onClick={() => changeWalletView("tip")}
            className={clsx(
              "text-sm font-semibold rounded-md px-3 py-1.5 transition-colors hover:bg-dark-800",
              walletView === "tip" && "text-white bg-dark-800"
            )}
          >
            Tip
          </button>
        </div>
        <div>{<WalletComponent />}</div>
      </div>
    </div>
  );
}
