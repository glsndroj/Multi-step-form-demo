export const StepTwo = ({ errors }) => {
  return (
    <div className=" flex justify-center">
      <div className="w-full flex flex-col  rounded-[8px]">
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="mail" className="flex gap-1 font-bold">
            Email <p className="text-red-500">*</p>
          </label>
          <input
            name="mail"
            id="mail"
            type="email"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
          />
          {errors?.mail && <p className="text-red-500">{errors.mail}</p>}
          <label htmlFor="number" className="flex gap-1 font-bold">
            Phone number <p className="text-red-500">*</p>
          </label>
          <input
            name="number"
            id="number"
            type="text"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
          />
          {errors?.number && <p className="text-red-500">{errors.number}</p>}
          <label htmlFor="pass" className="flex gap-1 font-bold">
            Password <p className="text-red-500">*</p>
          </label>
          <input
            name="pass"
            id="pass"
            type="password"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
          />
          {errors?.pass && <p className="text-red-500">{errors.pass}</p>}
          <label htmlFor="cpass" className="flex gap-1 font-bold">
            Confirm Password <p className="text-red-500">*</p>
          </label>
          <input
            name="cpass"
            id="cpass"
            type="password"
            className="w-full h-10 border-[1px] px-2 rounded-md border-gray-300"
          />
          {errors?.cpass && <p className="text-red-500">{errors.cpass}</p>}
        </div>
      </div>
    </div>
  );
};
