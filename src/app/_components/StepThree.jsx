export const StepThree = ({
  errors,
  setErrors,
  setData,
  currentIndex,
  setCurrentIndex,
}) => {
  const validate = (data) => {
    const errors = {};

    if (currentIndex === 2) {
      const date = data.get("date");
      const image = data.get("image");

      if (!date) {
        errors.date = "Date is required";
      }
      if (!image) {
        errors.image = "Image is required";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    localStorage.setItem("Date", data.get("date"));
    localStorage.setItem("Image", data.get("image"));

    if (!validate(data)) {
      return null;
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
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
      </div>
    </form>
  );
};
