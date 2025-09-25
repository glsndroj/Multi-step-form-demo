export const StepTwo = ({ errors, setErrors, setData }) => {
  return (
    <div className=" flex justify-center">
      <div className="w-full flex flex-col  rounded-[8px]">
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="mail" className="flex gap-1 font-bold">
            Email <p className="text-red-500">*</p>
          </label>
          <input
            value={setData.mail}
            name="mail"
            id="mail"
            type="email"
            className={`w-full h-10 border-[1px] px-2 rounded-md ${
              errors.mail ? "border-red-600" : "border-gray-300"
            } `}
            onChange={() => {
              setErrors({ ...errors, mail: undefined });
            }}
          />
          {errors?.mail && (
            <p className="text-red-500 text-[12px]">{errors.mail}</p>
          )}
          <label htmlFor="number" className="flex gap-1 font-bold">
            Phone number <p className="text-red-500 text-[12px]">*</p>
          </label>
          <input
            value={setData.number}
            name="number"
            id="number"
            type="number"
            className={`w-full h-10 border-[1px] px-2 rounded-md ${
              errors.number ? "border-red-600" : "border-gray-300"
            } `}
            onChange={() => {
              setErrors({ ...errors, number: undefined });
            }}
          />
          {errors?.number && (
            <p className="text-red-500 text-[12px]">{errors.number}</p>
          )}
          <label htmlFor="pass" className="flex gap-1 font-bold">
            Password <p className="text-red-500 text-[12px]">*</p>
          </label>
          <input
            value={setData.pass}
            name="pass"
            id="pass"
            type="password"
            className={`w-full h-10 border-[1px] px-2 rounded-md ${
              errors.pass ? "border-red-600" : "border-gray-300"
            } `}
            onChange={() => {
              setErrors({ ...errors, pass: undefined });
            }}
          />
          {errors?.pass && (
            <p className="text-red-500 text-[12px]">{errors.pass}</p>
          )}
          <label htmlFor="cpass" className="flex gap-1 font-bold">
            Confirm Password <p className="text-red-500 text-[12px]">*</p>
          </label>
          <input
            value={setData.cpass}
            name="cpass"
            id="cpass"
            type="password"
            className={`w-full h-10 border-[1px] px-2 rounded-md ${
              errors.cpass ? "border-red-600" : "border-gray-300"
            } `}
            onChange={() => {
              setErrors({ ...errors, cpass: undefined });
            }}
          />
          {errors?.cpass && (
            <p className="text-red-500 text-[12px]">{errors.cpass}</p>
          )}
        </div>
      </div>
    </div>
  );
};
