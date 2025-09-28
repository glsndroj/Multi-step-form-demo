import { useState } from "react";

export const StepThree = ({
  errors,
  setErrors,
  setData,
  currentIndex,
  setCurrentIndex,
}) => {
  const [preview, setPreview] = useState(null);
  const validate = (data) => {
    const errors = {};

    if (currentIndex === 2) {
      const date = data.get("date");
      const image = data.get("image");

      if (!date) {
        errors.date = "Date is required";
      } else {
        const today = new Date();
        const birthDate = new Date(date);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (
          age < 18 ||
          (age === 18 && monthDiff < 0) ||
          (age === 18 &&
            monthDiff === 0 &&
            today.getDate() < birthDate.getDate())
        ) {
          errors.date = "You must be at least 18 years old";
        }
      }
      if (!image || image.size === 0) {
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
    localStorage.setItem("Image", data.get("image")?.name || "");

    if (!validate(data)) {
      return null;
    }
    setCurrentIndex(currentIndex + 1);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setErrors({ ...errors, image: undefined });
    }
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
              <label className="font-bold">Profile image</label>
              <label
                htmlFor="image"
                className={`w-full h-[200px] border-[1px] bg-gray-100 rounded-md flex items-center justify-center cursor-pointer ${
                  errors.image ? "border-red-600" : "border-gray-300"
                }`}
                style={{
                  backgroundImage: preview ? `url(${preview})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col items-center">
                  <img
                    className="p-3 w-[35px] h-[35px] bg-white rounded-3xl"
                    src="https://pinecone-academy-multi-step-form.vercel.app/icons/add-image-icon.svg"
                    alt=""
                  />
                  {!preview && (
                    <span className="text-black">Browse or Drop image</span>
                  )}
                </div>
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
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
                  className="py-2 px-8 border-[1px] border-gray-400 cursor-pointer rounded-md mt-5 bg-gray-200 hover:bg-gray-100"
                >
                  Back
                </button>
              )}

              <button
                type="submit"
                className="w-full py-2 rounded-md bg-gray-800 text-white cursor-pointer mt-5 hover:opacity-80 "
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
