export default function Mines() {
  return (
    <div className="w-full  overflow-hidden h-full-app max-sm:max-h-[calc(var(--app-height)-var(--header-height)-var(--bottom-height))]">
      <div className="flex flex-col items-center flex-grow w-full h-full overflow-y-auto">
        <div className="gap-3 p-3 max-w-page">
          <div className="flex flex-col w-full gap-3 p-5 rounded-md bg-dark-800 ">
            <div className="grid grid-cols-6 gap-2">
              <button className="flex items-center justify-center p-2 text-sm font-semibold bg-green-400 rounded-sm bg-dark-700">
                3.31×
              </button>
              <button className="flex items-center justify-center p-2 text-sm font-semibold text-gray-400 rounded-sm bg-dark-700">
                1.14×
              </button>
              <button className="flex items-center justify-center p-2 text-sm font-semibold text-gray-400 rounded-sm bg-dark-700">
                1.14×
              </button>
              <button className="flex items-center justify-center p-2 text-sm font-semibold text-gray-400 rounded-sm bg-dark-700">
                1.04×
              </button>
              <button className="flex items-center justify-center p-2 text-sm font-semibold text-gray-400 rounded-sm bg-dark-700">
                1.33×
              </button>
              <button className="flex items-center justify-center p-2 text-sm font-semibold bg-green-400 rounded-sm bg-dark-700">
                1.95×
              </button>
            </div>
            <div className="flex flex-row-reverse w-full gap-3 max-xl:flex-col-reverse">
              <div className="relative flex flex-col w-full max-w-[350px] max-xl:max-w-full bg-dark-750 rounded-sm p-2.5">
                <div className="flex justify-between w-full text-sm font-semibold">
                  <div className="flex items-center gap-1 text-gray-500">
                    <span className="online-circle"></span>
                    <span>7 players</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500">Total bets:</span>
                    <span className="flex items-center gap-1 text-white">
                      14.21
                      <img
                        src="/assets/dl-2a39d38a.webp"
                        width="18"
                        height="18"
                        className="sc-x7t9ms-0 dnLnNz"
                      />
                    </span>
                  </div>
                </div>
                <div className="max-h-[600px] max-sm:max-h-[300px] overflow-y-auto mt-1.5">
                  <div className="pr-1.5">
                    <table className="w-full border-separate border-spacing-0 border-spacing-y-1">
                      <thead>
                        <tr className="text-sm text-gray-500 uppercase">
                          <th className="h-[20px] rounded-l-sm text-left pl-1.5">
                            Player
                          </th>
                          <th>Multi</th>
                          <th>Bet</th>
                          <th className="rounded-r-sm text-right pr-1.5">
                            Profit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-[0.8rem] text-gray-400 font-semibold cursor-pointer hover:bg-dark-600 transition-colors">
                          <td className="pl-1.5 rounded-l-sm text-left w-[20%]">
                            <div className="flex gap-1.5 items-center">
                              <div className="sc-1nayyv1-1 kAmJof">
                                <img
                                  draggable="false"
                                  src="https://avatar.growdice.lol/0-4182-0-7922-4684-362-00-04-3370516479.png"
                                  alt="Picture"
                                  className="sc-1nayyv1-0 kedPun"
                                />
                              </div>
                              Wup2
                            </div>
                          </td>
                          <td className="text-center">-</td>
                          <td className="text-center">
                            <span className="flex items-center justify-center gap-1">
                              0.65
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                          <td className="rounded-r-sm text-right h-[40px] pr-1.5">
                            <span className="flex items-center justify-end gap-1">
                              -
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                        </tr>
                        <tr className="text-[0.8rem] text-gray-400 font-semibold cursor-pointer hover:bg-dark-600 transition-colors">
                          <td className="pl-1.5 rounded-l-sm text-left w-[20%]">
                            <div className="flex gap-1.5 items-center">
                              <div className="sc-1nayyv1-1 iNqkVN">
                                <img
                                  draggable="false"
                                  src="https://avatar.growdice.lol/710-270-34-8442-256-1672-10-14-3370516479.png"
                                  alt="Picture"
                                  className="sc-1nayyv1-0 kedPun"
                                />
                              </div>
                              boombadeer
                            </div>
                          </td>
                          <td className="text-center">-</td>
                          <td className="text-center">
                            <span className="flex items-center justify-center gap-1">
                              0.11
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                          <td className="rounded-r-sm text-right h-[40px] pr-1.5">
                            <span className="flex items-center justify-end gap-1">
                              -
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                        </tr>
                        <tr className="text-[0.8rem] text-gray-400 font-semibold cursor-pointer hover:bg-dark-600 transition-colors">
                          <td className="pl-1.5 rounded-l-sm text-left w-[20%]">
                            <div className="flex gap-1.5 items-center">
                              <div className="sc-1nayyv1-1 jXwOeI">
                                <img
                                  draggable="false"
                                  src="https://avatar.growdice.lol/0-0-0-0-0-0-00-04-3370516479.png"
                                  alt="Picture"
                                  className="sc-1nayyv1-0 kedPun"
                                />
                              </div>
                              tobatjudi9...
                            </div>
                          </td>
                          <td className="text-center">-</td>
                          <td className="text-center">
                            <span className="flex items-center justify-center gap-1">
                              0.10
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                          <td className="rounded-r-sm text-right h-[40px] pr-1.5">
                            <span className="flex items-center justify-end gap-1">
                              -
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                        </tr>
                        <tr className="text-[0.8rem] text-gray-400 font-semibold cursor-pointer hover:bg-dark-600 transition-colors">
                          <td className="pl-1.5 rounded-l-sm text-left w-[20%]">
                            <div className="flex gap-1.5 items-center">
                              <div className="sc-1nayyv1-1 jXwOeI">
                                <img
                                  draggable="false"
                                  src="https://avatar.growdice.lol/0-0-0-0-0-0-00-04-3370516479.png"
                                  alt="Picture"
                                  className="sc-1nayyv1-0 kedPun"
                                />
                              </div>
                              babalito31...
                            </div>
                          </td>
                          <td className="text-center text-green-400">2.00×</td>
                          <td className="text-center">
                            <span className="flex items-center justify-center gap-1">
                              10.00
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                          <td className="text-green-400 rounded-r-sm text-right h-[40px] pr-1.5">
                            <span className="flex items-center justify-end gap-1">
                              10.00
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                        </tr>
                        <tr className="text-[0.8rem] text-gray-400 font-semibold cursor-pointer hover:bg-dark-600 transition-colors">
                          <td className="pl-1.5 rounded-l-sm text-left w-[20%]">
                            <div className="flex gap-1.5 items-center">
                              <div className="sc-1nayyv1-1 fJPwZo">
                                <img
                                  draggable="false"
                                  src="https://avatar.growdice.lol/1386-2416-2052-1456-0-2642-02-06-3317842431.png"
                                  alt="Picture"
                                  className="sc-1nayyv1-0 kedPun"
                                />
                              </div>
                              mikeygang
                            </div>
                          </td>
                          <td className="text-center text-green-400">2.00×</td>
                          <td className="text-center">
                            <span className="flex items-center justify-center gap-1">
                              3.00
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                          <td className="text-green-400 rounded-r-sm text-right h-[40px] pr-1.5">
                            <span className="flex items-center justify-end gap-1">
                              3.00
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                        </tr>
                        <tr className="text-[0.8rem] text-gray-400 font-semibold cursor-pointer hover:bg-dark-600 transition-colors">
                          <td className="pl-1.5 rounded-l-sm text-left w-[20%]">
                            <div className="flex gap-1.5 items-center">
                              <div className="sc-1nayyv1-1 jXwOeI">
                                <img
                                  draggable="false"
                                  src="https://avatar.growdice.lol/0-0-0-0-0-0-00-04-3370516479.png"
                                  alt="Picture"
                                  className="sc-1nayyv1-0 kedPun"
                                />
                              </div>
                              Houtandhov
                            </div>
                          </td>
                          <td className="text-center text-green-400">1.50×</td>
                          <td className="text-center">
                            <span className="flex items-center justify-center gap-1">
                              0.20
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                          <td className="text-green-400 rounded-r-sm text-right h-[40px] pr-1.5">
                            <span className="flex items-center justify-end gap-1">
                              0.10
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                        </tr>
                        <tr className="text-[0.8rem] text-gray-400 font-semibold cursor-pointer hover:bg-dark-600 transition-colors">
                          <td className="pl-1.5 rounded-l-sm text-left w-[20%]">
                            <div className="flex gap-1.5 items-center">
                              <div className="sc-1nayyv1-1 jXwOeI">
                                <img
                                  draggable="false"
                                  src="https://avatar.growdice.lol/0-0-0-0-0-0-00-04-3370516479.png"
                                  alt="Picture"
                                  className="sc-1nayyv1-0 kedPun"
                                />
                              </div>
                              Nico12
                            </div>
                          </td>
                          <td className="text-center text-green-400">2.00×</td>
                          <td className="text-center">
                            <span className="flex items-center justify-center gap-1">
                              0.15
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                          <td className="text-green-400 rounded-r-sm text-right h-[40px] pr-1.5">
                            <span className="flex items-center justify-end gap-1">
                              0.15
                              <img
                                src="/assets/dl-2a39d38a.webp"
                                width="18"
                                height="18"
                                className="sc-x7t9ms-0 dnLnNz"
                              />
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <div
                  className="min-h-[450px] overflow-hidden relative w-full rounded-md"
                  id="crashRenderer"
                >
                  <div className="absolute top-0 left-0 overflow-hidden rounded-md pointer-events-none z-1 bg-dark-750">
                    <canvas width="827" height="450"></canvas>
                  </div>
                  <div className="absolute w-full flex p-2.5 z-5 gap-2 text-gray-500">
                    <button className="transition-colors hover:text-white font-semibold text-sm flex items-center gap-0.5">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="18"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM694.5 340.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5.1 10.3 7.5 6.5 12.8z"></path>
                      </svg>
                      <span>Provably Fair</span>
                    </button>
                    <button className="text-sm flex gap-0.5 font-semibold">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="18"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z"></path>
                      </svg>
                      Settings
                    </button>
                  </div>
                </div>
                <div
                  // NOTE: Opacity, Relative
                  className="relative flex flex-col gap-2 p-3 text-sm font-medium rounded-sm bg-dark-750 opacity-40"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-white">
                      Bet Amount
                    </span>
                    <div className="bg-dark-700 h-[38px] text-gray-400 rounded-sm py-0.5 border transition-colors px-2 flex items-center gap-1.5 w-full border-dark-650">
                      <div className="flex items-center gap-2">
                        <img
                          src="/assets/dl-2a39d38a.webp"
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 grLtgJ"
                        />
                      </div>
                      <input
                        placeholder="Bet"
                        className="bg-transparent outline-none border-none p-1 text-[0.9rem] flex-grow text-white font-medium font-medium"
                        type="text"
                        value="0.1"
                      />
                      <div className="flex items-center gap-2">
                        <div className="flex gap-2.5 font-semibold">
                          <button className="transition-colors hover:text-white">
                            1/2
                          </button>
                          <button className="transition-colors hover:text-white">
                            2×
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-white">
                      Auto Cashout
                    </span>
                    <div className="bg-dark-700 h-[38px] text-gray-400 rounded-sm py-0.5 border transition-colors px-2 flex items-center gap-1.5 w-full border-dark-650">
                      <div className="flex items-center gap-2">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="0"
                          viewBox="0 0 15 15"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <input
                        className="bg-transparent outline-none border-none p-1 text-[0.9rem] flex-grow text-white font-medium"
                        type="text"
                        value="2"
                      />
                      <div className="flex items-center gap-2">
                        <div className="flex gap-2.5 font-semibold">
                          <button className="transition-colors hover:text-white">
                            1/2
                          </button>
                          <button className="transition-colors hover:text-white">
                            2×
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    aria-disabled="true"
                    id="placeBet"
                    // NOTE: Min-h, Max-h
                    className="sc-1xm9mse-0 fzZXbl min-h-[40px] max-h-[40px] text-sm rounded-sm text-nowrap"
                  >
                    <span>Place Bet</span>
                  </button>
                  <div className="absolute top-0 left-0 w-full h-full cursor-not-allowed z-5"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 p-3 font-semibold text-gray-400 rounded-md bg-dark-800">
            <span className="text-2xl text-white">Crash</span>
            <div className="flex flex-row gap-2 max-md:flex-col">
              <div className="flex flex-col min-w-[300px] max-md:w-full gap-2">
                <div className="text-sm h-[40px] max-h-[40px] rounded-sm bg-dark-750 p-2 flex-grow flex justify-between items-center gap-2">
                  <span className="font-medium text-white">House Edge</span>
                  <span className="flex items-center gap-1.5">4%</span>
                </div>
                <div className="text-sm h-[40px] max-h-[40px] rounded-sm bg-dark-750 p-2 flex-grow flex justify-between items-center gap-2">
                  <span className="font-medium text-white">Max Bet</span>
                  <span className="flex items-center gap-1.5">
                    1,000.00
                    <img
                      src="/assets/dl-2a39d38a.webp"
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </div>
                <div className="text-sm h-[40px] max-h-[40px] rounded-sm bg-dark-750 p-2 flex-grow flex justify-between items-center gap-2">
                  <span className="font-medium text-white">Max Win</span>
                  <span className="flex items-center gap-1.5">
                    10,000.00
                    <img
                      src="/assets/dl-2a39d38a.webp"
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </div>
                <div className="text-sm h-[40px] max-h-[40px] rounded-sm bg-dark-750 p-2 flex-grow flex justify-between items-center gap-2">
                  <span className="font-medium text-white">Max Multiplier</span>
                  <span className="flex items-center gap-1.5">1,000.00×</span>
                </div>
              </div>
              <div className="bg-dark-750 rounded-md  p-2.5 text-sm font-medium w-full text-justify leading-5">
                <span>
                  Predict the multiplier in this quick and simplistic odds-based
                  game, Crash!
                  <br />
                  <br />
                  Take on the house with a variety of different strategies to
                  defeat the house and take home some huge Diamond Lock winnings
                  against the house!
                  <br />
                  <br />
                  Crash is a simple game of chance where the player picks the
                  cashout amount for a betting round as the multiplier flies
                  through a grid. The cashout amount climbs until the multiplier
                  and as long as the player's cashout amount is lower than the
                  crash value, the player can win a payout.
                </span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col w-full gap-1 pt-1 text-sm font-semibold rounded-md "
            style={{
              mask: "linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 0px) 100% 50% / 100% 100% repeat-x;",
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
                      <th className="rounded-l-sm py-3 pl-3 text-left w-[1/2]">
                        Game
                      </th>
                      <th className="py-2 text-left">Player</th>
                      <th className="py-2 text-center">Bet</th>
                      <th className="py-2 text-center">Profit</th>
                      <th className="w-2/12 py-2 text-center">Multiplier</th>
                      <th className="py-2 pr-3 text-right rounded-r-sm">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-spacing-y-3">
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Reme
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">Ndoo66</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.02
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-400">
                        <span className="flex items-center justify-center gap-1">
                          0.02
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-500">
                        2.00×
                      </td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:30
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Slots
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">LaavuNT</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.20
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          -0.20
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">0.00×</td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:30
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Keno
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">JulmaJuice</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.01
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          -0.01
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">0.00×</td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:30
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Towers
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">WMS</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.10
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          -0.10
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">0.00×</td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:30
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Towers
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">X44</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.05
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          -0.05
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">0.00×</td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:30
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Towers
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">Eeliqz</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.25
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          -0.25
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">0.00×</td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:30
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Reme
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">JantiOwner</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          75.00
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-400">
                        <span className="flex items-center justify-center gap-1">
                          75.00
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-500">
                        2.00×
                      </td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:30
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Mines
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">Hormbrogt</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          5.00
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-400">
                        <span className="flex items-center justify-center gap-1">
                          5.00
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-500">
                        2.00×
                      </td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:30
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Mines
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">By200</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          1.20
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-400">
                        <span className="flex items-center justify-center gap-1">
                          2.05
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-500">
                        2.71×
                      </td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:30
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Slots
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">LaavuNT</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.20
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          -0.20
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">0.00×</td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:30
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Limbo
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">UrFavZeus</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          10.00
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          -10.00
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">0.00×</td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:30
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Mines
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">Oalak1</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.25
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          -0.25
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">0.00×</td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:29
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Keno
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">zertson</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.10
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          -0.10
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">0.00×</td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:29
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Keno
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">JulmaJuice</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.01
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          -0.01
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">0.00×</td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:29
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Slots
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">LaavuNT</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.20
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          -0.20
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">0.00×</td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:28
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Reme
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">ariethy</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          1.00
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          -1.00
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px]">0.00×</td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:28
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Slots
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">Vikis</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.25
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-400">
                        <span className="flex items-center justify-center gap-1">
                          -0.20
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-500">
                        0.20×
                      </td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:28
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Mines
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">MehmetAhmed</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.76
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-400">
                        <span className="flex items-center justify-center gap-1">
                          2.55
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-500">
                        4.36×
                      </td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:28
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Slots
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">Tocoolyouknow</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          1.00
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-400">
                        <span className="flex items-center justify-center gap-1">
                          0.28
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-500">
                        1.28×
                      </td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:28
                      </td>
                    </tr>
                    <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                      <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                        Slots
                      </td>
                      <td className="text-left text-white overflow-hidden min-w-[130px]">
                        <a className="cursor-pointer">helvettan</a>
                      </td>
                      <td className="text-center  min-w-[80px]">
                        <span className="flex items-center justify-center gap-1">
                          0.25
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-400">
                        <span className="flex items-center justify-center gap-1">
                          0.03
                          <img
                            src="/assets/dl-2a39d38a.webp"
                            width="18"
                            height="18"
                            className="sc-x7t9ms-0 dnLnNz"
                          />
                        </span>
                      </td>
                      <td className="text-center min-w-[80px] text-green-500">
                        1.12×
                      </td>
                      <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                        13:40:28
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center w-full text-sm font-medium text-gray-400">
        <div className="p-3 max-w-page"></div>
      </footer>
    </div>
  );
}
