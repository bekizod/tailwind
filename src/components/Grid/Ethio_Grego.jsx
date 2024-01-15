/* eslint-disable no-unused-vars */
import { useState } from "react";
import useETG from "../Hooks/useETG";
import useGTE from "../Hooks/useGTE";
import useSound from "use-sound";
import buttonSound from "/src/Click.wav"; // Update with the actual path to your sound file
import buttonSound1 from "/src/Click2.wav"; //

const Ethio_Grego = () => {
  const [play1] = useSound(buttonSound, { volume: 0.1 });
  const [play2] = useSound(buttonSound1, { volume: 0.01 });

    const [dayName, ethd, ethmonth, ethy, ethm] = useGTE();
    

  const [gregClander, setGregClander] = useState("");
  const [d, setDay] = useState(ethd);
  const [m, setMonth] = useState(ethm);
  const [y, setYear] = useState(ethy);
  const [gdayName, gregd, gregm, gregy, month] = useETG(d, m, y);

  const convertToGreg = (e) => {
    e.preventDefault();
    play1();
    setGregClander(`${gdayName}/${gregd}-${gregm}-${gregy}`);
  };

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value);
    setYear(selectedYear);
  };

  const handleMonthChange = (event) => {
    const selectedMonth = parseInt(event.target.value);
    setMonth(selectedMonth);
    if (d > getMaxDays(selectedMonth)) {
      setDay(1);
    }
  };

  const handleDayChange = (event) => {
    const selectedDay = parseInt(event.target.value);
    setDay(selectedDay);
  };

  const getMaxDays = (selectedMonth) => {
    if (selectedMonth === 13) {
      if(y %4 === 3){
        return 6;
      }
      return 5;
    } else {
      return 30;
    }
  };

  const renderDayOptions = () => {
    const maxDays = getMaxDays(m);
    const dayOptions = [];

    for (let i = 1; i <= maxDays; i++) {
      dayOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return dayOptions;
  };

  const renderyearOptions = () => {
    const maxDays = 3000;
    const yearOptions = [];

    for (let i = 1; i <= maxDays; i++) {
      yearOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return yearOptions;
  };
  return (
    <>
        <div className="rounded-xl text-center mb-8  mx-3 bg-gray-300 font-bold border border-black shadow-lg">
          <h2 className=" text-lg">Current EC: {dayName} /{ethd}-{ethmonth}-{ethy}</h2>
        </div>

        <div className="bg-slate-300 rounded-lg  shadow-lg p-4  mx-3 border-2 border-white-100">
          <form className="object-contain ">
            <h1 className="text-center font-bold rounded-3xl shadow-2xl text-blue-500 text-3xl mb-2 bg-slate-100 border border-black">
              Ethiopian to Gregorian
            </h1>

            <div className="flex flex-col justify-center text-center ">
              <label htmlFor="Month" className="font-bold">
                Month:
              </label>
              <select className="rounded-lg text-center mx-4 shadow-lg" value={m} onChange={handleMonthChange}>
                <option value={1}>Mäskäräm (መስከረም)</option>
                <option value={2}>Ṭəqəmt(i) (ጥቅምት)</option>
                <option value={3}>Ḫədar (ኅዳር)</option>
                <option value={4}>Taḫśaś ( ታኅሣሥ)</option>
                <option value={5}>Ṭərr(i) (ጥር)</option>
                <option value={6}>Yäkatit (Tn. Läkatit) (የካቲት)</option>
                <option value={7}>Mägabit (መጋቢት)</option>
                <option value={8}>Miyazya (ሚያዝያ)</option>
                <option value={9}>Gənbo(t) (ግንቦት)</option>
                <option value={10}>Säne (ሰኔ)</option>
                <option value={11}>Ḥamle (ሐምሌ)</option>
                <option value={12}>Nähase (ነሐሴ)</option>
                <option value={13}>Ṗagʷəmen/Ṗagume (ጳጐሜን/ጳጉሜ)</option>
              </select>

              <div className="flex flex-row justify-center mt-3 mx-4">
                <label htmlFor="day" className="font-bold">
                  Day:
                </label>
                <select
                  id="day"
                  value={d}
                  onChange={handleDayChange}
                  className="rounded-lg text-center mx-4 shadow-lg px-1"
                >
                    {renderDayOptions()}
                </select>

                <label htmlFor="year" className="font-bold">
                  Year:
                </label>
                <select
                  id="day"
                  value={y}
                  onChange={handleYearChange}
                  className="rounded-lg text-center mx-4 shadow-lg px-5"
                >
                    {renderyearOptions()}
                </select>
              </div>
            </div>

            <div className="mt-5   rounded-lg  flex justify-center items-center">
              <button className="text-lg EtGbtn" onClick={convertToGreg} onMouseMove={play2}>Convert</button>
            </div>
            {/* <div>
            <h1 className="PD">March 20 2024</h1>
          </div> */}
          </form>
        </div>
        <div className="shadow-2xl rounded-xl text-center mt-8  mx-3 bg-gray-300 border-2 border-white-100">
        { (
          <div>
            <input readOnly className="bg-inherit w-full text-center placeholder:text-center py-4 text-2xl" value={gregClander} placeholder="Your Changed Date" />
              
            
          </div>
        )}
         
        </div>
      </>
  )
}

export default Ethio_Grego
