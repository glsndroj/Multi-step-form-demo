export const StepThree = (props) => {
  const { currentIndex, setCurrentIndex } = props;
  return (
    <div className=" flex justify-center mt-80">
      <div className="w-[480px] h-[655px] flex flex-col p-[32px] shadow-2xl rounded-[8px] gap-10">
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

        <form className="flex flex-col gap-6" action="">
          <div>
            <label className="font-bold" htmlFor="date">
              Date of birth
            </label>
            <input
              id="date"
              className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
              type="date"
            />
          </div>
          <div>
            <label className="font-bold" htmlFor="image">
              Profile image
            </label>
            <input
              id="image"
              className="w-full h-[200px] bg-gray-100 rounded-md cursor-pointer border border-gray-200"
              type="file"
            />
          </div>
          <div className="flex justify-center gap-4">
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
