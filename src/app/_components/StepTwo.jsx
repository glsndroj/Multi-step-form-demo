export const StepTwo = (props) => {
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
          <label htmlFor="mail" className="flex gap-1 font-bold">
            Email <p className="text-red-500">*</p>
          </label>
          <input
            id="mail"
            type="text"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
          />
          <label htmlFor="number" className="flex gap-1 font-bold">
            Phone number <p className="text-red-500">*</p>
          </label>
          <input
            id="number"
            type="text"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
          />
          <label htmlFor="pass" className="flex gap-1 font-bold">
            Password <p className="text-red-500">*</p>
          </label>
          <input
            id="pass"
            type="password"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
          />
          <label htmlFor="cpass" className="flex gap-1 font-bold">
            Confirm Password <p className="text-red-500">*</p>
          </label>
          <input
            id="cpass"
            type="password"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
          />
        </form>
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => {
              setCurrentIndex(currentIndex - 1);
            }}
            className="px-4 py-2 rounded-[10px] border-1 text-black cursor-pointer"
          >
            Back
          </button>
          <button
            onClick={() => {
              setCurrentIndex(currentIndex + 1);
            }}
            className="px-6 py-2 rounded-[10px] bg-gray-800 text-white cursor-pointer"
          >
            Continue 2/3 {`>`}
          </button>
        </div>
      </div>
    </div>
  );
};
