"use client";
import { StepOne } from "./_components/StepOne";
import { StepTwo } from "./_components/StepTwo";
import { StepThree } from "./_components/StepThree";
import { Allset } from "./_components/Allset";
import { Button } from "./_components/Button";
import { useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState({});

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

    if (currentIndex === 1) {
      const mail = data.get("mail");
      const number = data.get("number");
      const pass = data.get("pass");
      const cpass = data.get("cpass");
      if (!mail) {
        errors.mail = "Email is required";
      }
      if (!number) {
        errors.number = "Phone number is required";
      }
      if (!pass) {
        errors.pass = "Password is required";
      }
      if (!cpass) {
        errors.cpass = "Password is required";
      }
    }
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
    if (!validate(data)) {
      return null;
    }
    setCurrentIndex(currentIndex + 1);
  };
  if (currentIndex === 3) {
    return <Allset />;
  }

  const CurrentStep = [StepOne, StepTwo, StepThree][currentIndex];

  return (
    <div className="flex justify-center mt-50">
      <div className="flex flex-col w-[480px] h-[655px] p-[32px] rounded-md shadow-2xl">
        <div className="flex flex-col gap-2">
          <img
            className="w-[60px]"
            src="https://pinecone-academy-multi-step-form.vercel.app/pinecone-logo.svg"
          ></img>
          <h1 className="font-bold text-2xl">Join Us! 😎</h1>
          <p className="text-gray-400">
            Please provide all current information accurately.
          </p>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <CurrentStep errors={errors} />
          <button
            type="submit"
            className="w-full py-2 rounded-[6px] bg-gray-800 text-white cursor-pointer mt-20 "
          >
            Continue {currentIndex + 1}/3 {">"}
          </button>
        </form>
      </div>
    </div>
  );
}
