export const StepOne = ({
  errors,
  setErrors,
  setData,
  currentIndex,
  setCurrentIndex,
}) => {
  const validate = (data) => {
    const errors = {};

    if (currentIndex === 0) {
      const fname = data.get("fname");
      const lname = data.get("lname");
      const uname = data.get("uname");
      if (!fname) {
        errors.fname = "Firstname is required";
      }
      if (!lname) {
        errors.lname = "Last name is required";
      }
      if (!uname) {
        errors.uname = "Username is required";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    localStorage.setItem("First name", data.get("fname"));
    localStorage.setItem("Last name", data.get("lname"));
    localStorage.setItem("Username", data.get("uname"));

    if (!validate(data)) {
      return null;
    }
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=" flex justify-center">
        <div className=" w-full flex flex-col p-[32px]rounded-[8px]">
          <div className="flex flex-col gap-2 mt-5">
            <label className="flex gap-1 font-bold" htmlFor="fname">
              First name <p className="text-red-500 text-[12px]">*</p>
            </label>
            <input
              value={setData.fname}
              defaultValue={localStorage.getItem("First name")}
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
              defaultValue={localStorage.getItem("Last name")}
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
              defaultValue={localStorage.getItem("Username")}
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
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gray-800 text-white cursor-pointer mt-5 "
          >
            Continue {currentIndex + 1}/3 {">"}
          </button>
        </div>
      </div>
    </form>
  );
};
