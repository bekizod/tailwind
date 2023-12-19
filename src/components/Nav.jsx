import { Links } from "../assets/Links";
import useSound from "use-sound";
import buttonSound from "/src/contact.wav"; // Update with the actual path to your sound file
import buttonSound1 from "/src/hover.wav"; 
const Nav = () => {
  const [play1] = useSound(buttonSound, { volume: 0.1 });
  const [play2] = useSound(buttonSound1, { volume: 0.1 });
  const handlClick=()=>{
    play1();
    window.location.href='#contact'
  }
  return (
    <header className=" w-full text-white  z-10 py-2  bg-gradient-to-r from-gray-300 to-gray-600 bg-opacity-60 backdrop-filter backdrop-blur-2xl 2xl:h-[10vh]">
      <nav className=" flex justify-between items-center mx-8 lg:mx-10 ">
        <img
          src="/images/Logo.jpg"
          className="flex rounded-xl gap-5 ml-[-25px] w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px] "
        />
        <a
          href="/"
          className="flex font-bold md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[18px] gradient-text-white-gray  "
        >
          Ethiopian Calendar Converter
        </a>
        <ul className="flex text-[10px]  gap-16 items-center md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ">
          {Links.map((item, i) => (
            <li key={i}>
              <a href={item.href} className="hover:border-b-2 mr-[-18px]" onClick={handlClick} onMouseOver={play2}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
