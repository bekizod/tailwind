/* eslint-disable no-unused-vars */
import { useState } from "react";
import useETG from "../Hooks/useETG";
import useGTE from "../Hooks/useGTE";
import useSound from "use-sound";
import buttonSound from "/src/Click.wav"; // Update with the actual path to your sound file
import buttonSound1 from "/src/Click2.wav";

const Grego_Ethio = () => {
  const [play1] = useSound(buttonSound, { volume: 0.1 });
  const [play2] = useSound(buttonSound1, { volume: 0.01 });
  const [gregorianDate, setGregorianDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  let [y, m, d] = gregorianDate.split("-").map(Number);
  const [etDay, Ed, Em, Ey, EM] = useGTE(y, m, d);
  const [ethiopianDate, setEthiopianDate] = useState("");
  const handleConvert = (e) => {
    play1();
    e.preventDefault();
    const convertedDate = new Date(gregorianDate);
    convertToEthiopian(convertedDate);
  };

  const convertToEthiopian = (convertedDate) => {
    setEthiopianDate(`/${Ed}-${Em}-${Ey}`);
  };
  const [cetDay, cEd, cEm, cEy, cEM] = useGTE();
  const [gregDay, gregd, gregm, gregy] = useETG(cEd, cEM, cEy);
  return (
    <>
      <div className="rounded-xl text-center mb-8  mx-3 bg-gray-300 font-bold border border-black shadow-4xl ">
        <h2 className=" text-lg">
          Current GC:{gregDay} /{gregd}-{gregm}-{gregy}
        </h2>
      </div>

      <div className="bg-slate-300  rounded-lg shadow-xl p-4 mx-3 border-2 border-white-100">
        <form id="From Gregorian to Ethiopian" className="grid object-contain ">
          <h1 className="text-center font-bold rounded-3xl shadow-2xl text-blue-500 text-3xl mb-11 bg-slate-100 border border-black">
            Gregorian to Ethiopian
          </h1>
          <input
            type="date"
            className="justify-center items-center mx-9 bg-white rounded-lg shadow-lg h-10 mb-7"
            id="gregorianDate"
            value={gregorianDate}
            required
            onChange={(e) => setGregorianDate(e.target.value)}
          />

          <button
            className="text-lg EtGbtn rounded-lg"
            onClick={handleConvert}
            onMouseMove={play2}
          >
            Convert
          </button>
        </form>
      </div>
      <div className="shadow-2xl rounded-xl text-center mt-8  mx-3 bg-gray-300 border-2 border-white-100">
        <input
          readOnly
          className="py-4 rounded-xl text-2xl bg-inherit text-center w-full"
          value={ethiopianDate ? `${etDay} ${ethiopianDate}` : ``}
          placeholder="Your Changed Date"
        />
      </div>
    </>
  );
};

export default Grego_Ethio;
