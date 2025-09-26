"use client";
import { StepOne } from "./_components/StepOne";
import { StepTwo } from "./_components/StepTwo";
import { StepThree } from "./_components/StepThree";
import { Allset } from "./_components/Allset";
import { Button } from "./_components/Button";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState();

  useEffect(() => {
    const saved = localStorage.getItem("data");
    if (saved) {
      setData(saved);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data", data);
  }, [data]);

  const CurrentStep = [StepOne, StepTwo, StepThree, Allset][currentIndex];

  return (
    <>
      {currentIndex === 3 ? (
        <Allset />
      ) : (
        <div className="flex justify-center mt-50">
          <div className="flex flex-col w-[480px] h-fit p-[32px] rounded-md shadow-2xl">
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

            <CurrentStep
              setData={setData}
              setErrors={setErrors}
              errors={errors}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        </div>
      )}
    </>
  );
}
