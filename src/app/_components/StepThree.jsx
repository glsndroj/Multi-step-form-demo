export const StepThree = ({ errors }) => {
  return (
    <div className=" flex justify-center">
      <div className="w-full flex flex-col rounded-[8px] mt-5">
        <div className="flex flex-col gap-6">
          <div>
            <label className="font-bold" htmlFor="date">
              Date of birth
            </label>
            <input
              name="date"
              id="date"
              className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
              type="date"
            />
            {errors?.date && <p className="text-red-500">{errors.date}</p>}
          </div>
          <div>
            <label className="font-bold" htmlFor="image">
              Profile image
            </label>
            <input
              name="image"
              id="image"
              className="w-full h-[200px] bg-gray-100 rounded-md cursor-pointer border border-gray-200"
              type="file"
            />
            {errors?.image && <p className="text-red-500">{errors.image}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
