import Input from "@/components/Input";
import SubmitButton from "@/components/Submit";
import React from "react";

const StepOne = () => {
  return (
    <form className="flex flex-col gap-y-4 items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] p-10 ">
        <Input label="Business Owner's Name" id="name" type="text" required />
        <Input
          label="Website URL "
          id="link"
          type="text"
          required
          pattern="(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?\/[a-zA-Z0-9]{2,}"
        />
      </div>
      <SubmitButton text="Submit" />
    </form>
  );
};

export default StepOne;
