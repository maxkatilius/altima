import { Link } from "react-router"

const Home = () => {
  return (
    <div className="
      text-white
      h-full
      flex
      bg-[url(./assets/coral_reef.webp)] bg-cover
    ">
      <div className="
        w-[50%] my-auto mx-10 
        flex flex-col gap-6 items-center
        text-center 
      ">
        <h1 className="text-[6rem]/26">Drones for the Environment</h1>
        <p className="text-[1.5rem] w-[60%]">Utilising thermal imaging, photogammetry, and insanse greek power to save the oceans</p>
        <Link 
        to='projects' 
        className="
          mt-2 p-4
          w-fit
          flex gap-4
          text-[1.7rem]
          bg-slate-50/40 rounded-sm
        ">
          Get involved
          <span 
          className="
          px-[0.2em] 
          flex justify-center items-center 
          text-2xl text-slate-900 
          bg-white rounded-sm
          hover:bg-slate-900 hover:text-white transition delay-50 duration-200 ease-in-out
        ">
          ➔
        </span>
        </Link>
      </div>
      <Link 
        to='iq'
        className="
        fixed top-7 right-10 
        flex gap-4 items-center
        p-4 rounded-sm
        font-medium text-2xl text-white tracking-wide
        bg-slate-900
        hover:bg-emerald-500 hover:text-black transition delay-50 duration-200 ease-in-out
      ">
        Altima IQ
        <span 
          className="
          px-[0.2em] 
          flex justify-center items-center 
          text-2xl text-slate-900 
          bg-white rounded-sm
          hover:bg-slate-900 hover:text-white transition delay-50 duration-200 ease-in-out
        ">
          ➔
        </span>
      </Link>
    </div>
  )
}

export default Home