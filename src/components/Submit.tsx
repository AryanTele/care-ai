import React from "react";

interface SubmitButtonProps {
  text: string;
}

export default function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="mt-2 rounded-lg px-5 py-2 bg-black text-lg text-white disabled::bg-gray lg:py-2 lg:text-xl"
    >
      {text}
    </button>
  );
}
