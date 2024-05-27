import "./App.css";
// import Trang1 from "./conponents/Trang1";
import Trang2 from "./conponents/Trang2";

function App() {
  return (
    <div className="bg-[#EEF5FF] h-screen flex justify-center items-center">
      <div className="bg-white flex p-4 rounded-xl w-[1000px]">
        <div className="bg-[url('images/bg-sidebar-desktop.svg')] h-[568px] w-[274px] text-white p-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-transparent w-10 h-10 border-solid border-[1px] border-white">
              1
            </button>
            <div>
              <p className="font-thin">STEP 1</p>
              <p className="font-semibold">YOUR INFO</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-transparent w-10 h-10 border-solid border-[1px] border-white">
              2
            </button>
            <div>
              <p className="font-thin">STEP 2</p>
              <p className="font-semibold">SELECT PLAN</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-transparent w-10 h-10  border-solid border-[1px] border-white">
              3
            </button>
            <div>
              <p className="font-thin">STEP 3</p>
              <p className="font-semibold">ADD-ONS</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-transparent w-10 h-10  border-solid border-[1px] border-white">
              4
            </button>
            <div>
              <p className="font-thin">STEP 4</p>
              <p className="font-semibold">SUNMARY</p>
            </div>
          </div>
        </div>
        {/* <Trang1 /> */}
        <Trang2 />
      </div>
    </div>
  );
}

export default App;
