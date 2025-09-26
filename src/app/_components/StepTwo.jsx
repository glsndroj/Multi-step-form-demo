export const StepTwo = ({
  errors,
  setErrors,
  setData,
  currentIndex,
  setCurrentIndex,
}) => {
  const validate = (data) => {
    const errors = {};

    if (currentIndex === 1) {
      const mail = data.get("mail");
      const number = data.get("number");
      const pass = data.get("pass");
      const cpass = data.get("cpass");
      let validMail = mail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      if (!validMail) {
        errors.mail = "Email is required";
      }
      let validNumber = number.match(/^\+?\d{8}$/);
      if (!validNumber) {
        errors.number = "Phone number is required";
      }
      if (!pass) {
        errors.pass = "Password is required";
      }
      if (!cpass) {
        errors.cpass = "Password is required";
      }
      if (pass && cpass && pass !== cpass) {
        errors.cpass = "Password not match";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    localStorage.setItem("Email", data.get("mail"));
    localStorage.setItem("Phone number", data.get("number"));
    localStorage.setItem("Password", data.get("pass"));
    localStorage.setItem("Comfirm password", data.get("cpass"));
    if (!validate(data)) {
      return null;
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className=" flex justify-center">
        <div className="w-full flex flex-col  rounded-[8px]">
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="mail" className="flex gap-1 font-bold">
              Email <p className="text-red-500">*</p>
            </label>
            <input
              value={setData.mail}
              defaultValue={localStorage.getItem("Email")}
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
              defaultValue={localStorage.getItem("Phone number")}
              name="number"
              id="number"
              type="text"
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
              defaultValue={localStorage.getItem("Password")}
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
              defaultValue={localStorage.getItem("Confirm password")}
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
          <div className="flex gap-4">
            {currentIndex > 0 && (
              <button
                type="button"
                onClick={() => setCurrentIndex(currentIndex - 1)}
                className="py-2 px-8 border-[1px] border-gray-400 cursor-pointer rounded-md mt-5 bg-gray-200"
              >
                Back
              </button>
            )}

            <button
              type="submit"
              className="w-full py-2 rounded-md bg-gray-800 text-white cursor-pointer mt-5 "
            >
              Continue {currentIndex + 1}/3 {">"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
