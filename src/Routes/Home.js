import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#20262E] w-screen h-screen text-gray-300 flex flex-col space-x-6  items-center pt-10 px-4">
      <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  ">
        JobJoy
      </h1>
      <p className="mt-10 ">
        Find your job happiness with JobJoy! This innovative app uses career
        assessment technology to help you understand what truly matters in your
        professional life. Whether you're searching for a new job, exploring a
        career change, or simply want to find greater fulfillment in your
        current role, JobJoy is here to guide you. Start your journey to job
        happiness today with JobJoy!
        <h3 className="text-white mt-4">
          Just answer some basic questions and get a new perspective.
        </h3>
      </p>
      <NavLink
        className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  px-4 py-2 rounded-3xl mt-6 shadow-md shadow-gray-400 hover:scale-105 duration-1000"
        to="/questions"
      >
        Let's begin
      </NavLink>
    </div>
  );
}
export default Home;
