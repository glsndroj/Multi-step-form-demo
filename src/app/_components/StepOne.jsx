export const StepOne = ({ errors, setErrors, setData }) => {
  return (
    <div className=" flex justify-center">
      <div className=" w-full flex flex-col p-[32px]rounded-[8px]">
        <div className="flex flex-col gap-2 mt-5">
          <label className="flex gap-1 font-bold" htmlFor="fname">
            First name <p className="text-red-500 text-[12px]">*</p>
          </label>
          <input
            value={setData.fname}
            name="fname"
            id="fname"
            className={`w-full h-10 border-[1px] px-2 rounded-md ${
              errors.fname ? "border-red-600" : "border-gray-300"
            } `}
            type="text"
            onChange={() => {
              setErrors({ ...errors, fname: undefined });
            }}
          />
          {errors?.fname && (
            <p className="text-red-500 text-[12px]">{errors.fname}</p>
          )}

          <label className="flex gap-1 font-bold" htmlFor="lname">
            Last name <p className="text-red-500 text-[12px]">*</p>
          </label>
          <input
            value={setData.lname}
            name="lname"
            id="lname"
            className={`w-full h-10 border-[1px] px-2 rounded-md ${
              errors.lname ? "border-red-600" : "border-gray-300"
            } `}
            type="text"
            onChange={() => {
              setErrors({ ...errors, lname: undefined });
            }}
          />
          {errors?.lname && (
            <p className="text-red-500 text-[12px]">{errors.lname}</p>
          )}
          <label className="flex gap-1 font-bold" htmlFor="uname">
            Username <p className="text-red-500 text-[12px]">*</p>
          </label>
          <input
            value={setData.uname}
            name="uname"
            id="uname"
            className={`w-full h-10 border-[1px] px-2 rounded-md ${
              errors.uname ? "border-red-600" : "border-gray-300"
            } `}
            type="text"
            onChange={() => {
              setErrors({ ...errors, uname: undefined });
            }}
          />
          {errors?.uname && (
            <p className="text-red-500 text-[12px]">{errors.uname}</p>
          )}
        </div>
      </div>
    </div>
  );
};
