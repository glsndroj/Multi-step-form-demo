"use client";
import { StepOne } from "./_components/StepOne";
import { StepTwo } from "./_components/StepTwo";
import { StepThree } from "./_components/StepThree";
import { Allset } from "./_components/Allset";
import { Button } from "./_components/Button";
import { useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const CurrentStep = [StepOne, StepTwo, StepThree, Allset][currentIndex];

  return (
    <div>
      <CurrentStep
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      ></CurrentStep>
    </div>
  );
}
