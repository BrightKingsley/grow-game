import clsx from "clsx";
// import React from "react";

// interface KenoBoardProps {
//   selectedNumbers: number[];
//   onSelectNumber: (num: number) => void;
// }

// const KenoBoard: React.FC<KenoBoardProps> = ({
//   selectedNumbers,
//   onSelectNumber,
// }) => {
//   const numbers = Array.from({ length: 40 }, (_, i) => i + 1);

//   return (
//     <div className="grid grid-cols-10 gap-2">
//       {numbers.map((num) => (
//         <>
//           {/* <button
//             key={num}
//             onClick={() => onSelectNumber(num)}
//             className={`p-2 border rounded ${selectedNumbers.includes(num) ? "bg-blue-500 text-white" : "bg-white text-black"}`}
//           >
//             {num}
//           </button> */}
//           <button
//             key={num}
//             onClick={() => onSelectNumber(num)}
//             className={clsx(
//               "relative flex items-center justify-center text-xl font-semibold text-gray-200 transition-all rounded-md drop-shadow-md  shadow-[0_-6px_#0d0e1329_inset] aspect-square max-md:text-sm",
//               selectedNumbers.includes(num)
//                 ? "bg-accent keno-tile-accent shadow-[#2c5aab78]"
//                 : "bg-dark-750 keno-tile-dark",
//             )}
//           >
//             <span className="">{num}</span>
//           </button>
//         </>
//       ))}
//     </div>
//   );
// };

// export default KenoBoard;

import React from "react";

interface KenoBoardProps {
  selectedNumbers: number[];
  onSelectNumber: (num: number) => void;
}

const KenoBoard: React.FC<KenoBoardProps> = ({
  selectedNumbers,
  onSelectNumber,
}) => {
  const numbers = Array.from({ length: 40 }, (_, i) => i + 1);

  return (
    // <div className="grid grid-cols-10 gap-2">
    //   {numbers.map((num) => (
    //     <button
    //       key={num}
    //       onClick={() => onSelectNumber(num)}
    //       className={`p-2 border rounded ${selectedNumbers.includes(num) ? "bg-blue-500 text-white" : "bg-gray-800 text-white"}`}
    //     >
    //       {num}
    //     </button>
    //   ))}
    // </div>
    numbers.map((num) => (
      <button
        //             key={num}
        onClick={() => onSelectNumber(num)}
        className={clsx(
          "relative flex items-center justify-center text-xl font-semibold text-gray-200 transition-all rounded-md drop-shadow-md  shadow-[0_-6px_#0d0e1329_inset] aspect-square max-md:text-sm",
          selectedNumbers.includes(num)
            ? "bg-accent keno-tile-accent shadow-[#2c5aab78]"
            : "bg-dark-750 keno-tile-dark",
        )}
      >
        <span className="">{num}</span>
      </button>
    ))
  );
};

export default KenoBoard;
