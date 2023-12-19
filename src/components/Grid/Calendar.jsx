import Ethio_Grego from "./Ethio_Grego";
import Grego_Ethio from "./Grego_Ethio";
import "./styles.css";
const Calendar = () => {
  return (
    <div className="grid grid-cols-1 gap-20 md:grid-cols-1 md:mx-20 md:my-40 sm:grid-cols-2 lg:grid-cols-2 lg:mt-[3%] lg:mb-[10%] xl:mt-[5%] xl:mb-[27%] 2xl:h-[63vh] ">
      <div>
        <Grego_Ethio />
      </div>

      <div>
        <Ethio_Grego />
      </div>
    </div>
  );
};

export default Calendar;
