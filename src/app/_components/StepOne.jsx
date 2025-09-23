export const StepOne = (props) => {
  const { currentIndex, setCurrentIndex } = props;
  return (
    <div className=" flex justify-center mt-80">
      <div className="w-[480px] h-[655px] flex flex-col p-[32px] shadow-2xl rounded-[8px]">
        <div className="flex flex-col gap-2">
          <img
            className="w-[60px] h-[60px]"
            src="https://pinecone-academy-multi-step-form.vercel.app/pinecone-logo.svg"
            alt=""
          />
          <h3 className="text-2xl font-[550]">Join Us! 😎</h3>
          <p className="text-gray-400">
            Please provide all current information accurately.
          </p>
        </div>
        <form className="flex flex-col gap-2 mt-5" action="">
          <label className="flex gap-1 font-bold" htmlFor="fname">
            First name <p className="text-red-500">*</p>
          </label>
          <input
            id="fname"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
            type="text"
          />
          <label className="flex gap-1 font-bold" htmlFor="lname">
            Last name <p className="text-red-500">*</p>
          </label>
          <input
            id="lname"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
            type="text"
          />
          <label className="flex gap-1 font-bold" htmlFor="uname">
            Username <p className="text-red-500">*</p>
          </label>
          <input
            id="uname"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
            type="text"
          />
        </form>
        <div className="flex justify-center gap-4 mt-30">
          <button
            onClick={() => {
              setCurrentIndex(currentIndex + 1);
            }}
            className="w-full py-2 rounded-[6px] bg-gray-800 text-white cursor-pointer "
          >
            Continue 1/3 {`>`}
          </button>
        </div>
      </div>
    </div>
  );
};
