export const StepThree = ({ errors, setErrors, setData }) => {
  return (
    <div className=" flex justify-center">
      <div className="w-full flex flex-col rounded-[8px] mt-5">
        <div className="flex flex-col gap-6">
          <div>
            <label className="font-bold" htmlFor="date">
              Date of birth
            </label>
            <input
              value={setData.date}
              name="date"
              id="date"
              className={`w-full h-10 border-[1px] px-2 rounded-md ${
                errors.date ? "border-red-600" : "border-gray-300"
              } `}
              type="date"
              onChange={() => {
                setErrors({ ...errors, date: undefined });
              }}
            />
            {errors.date && (
              <p className="text-red-500 text-[12px]">{errors.date}</p>
            )}
          </div>
          <div>
            <label className="font-bold" htmlFor="image">
              Profile image
            </label>
            <input
              name="image"
              id="image"
              className={`w-full h-[200px] border-[1px] px-2 rounded-md cursor-pointer ${
                errors.image ? "border-red-600" : "border-gray-300"
              } `}
              type="file"
            />
            {errors.image && (
              <p className="text-red-500 text-[12px]">{errors.image}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
