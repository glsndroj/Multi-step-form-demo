
export const StepOne = ({ errors }) => {
  return (
    <div className=" flex justify-center">
      <div className=" w-full flex flex-col p-[32px]rounded-[8px]">
        <div className="flex flex-col gap-2 mt-5">
          <label className="flex gap-1 font-bold" htmlFor="fname">
            First name <p className="text-red-500">*</p>
          </label>
          <input
            name="fname"
            id="fname"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300 focus:border-blue-600"
            type="text"
          />
          {errors?.fname && <p className="text-red-500">{errors.fname}</p>}

          <label className="flex gap-1 font-bold" htmlFor="lname">
            Last name <p className="text-red-500">*</p>
          </label>
          <input
            name="lname"
            id="lname"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
            type="text"
          />
          {errors?.lname && <p className="text-red-500">{errors.lname}</p>}
          <label className="flex gap-1 font-bold" htmlFor="uname">
            Username <p className="text-red-500">*</p>
          </label>
          <input
            name="uname"
            id="uname"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
            type="text"
          />
          {errors?.uname && <p className="text-red-500">{errors.uname}</p>}
        </div>
      </div>
    </div>
  );
};
