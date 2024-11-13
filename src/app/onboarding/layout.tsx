export default function OnBoardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="baseline text-3xl font-bold">
          Lets start onboarding 🚂
        </h1>
      </div>
      <div className="mt-10 mb-28 flex flex-col gap-x-16 text-black lg:flex-row">
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
