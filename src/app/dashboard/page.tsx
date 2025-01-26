import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "720ed52f",
      amount: 300,
      status: "success",
      email: "aryan@example.com",
    },
    {
      id: "723ed52f",
      amount: 500,
      status: "failed",
      email: "test@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "720ed52f",
      amount: 300,
      status: "success",
      email: "test2@example.com",
    },
    {
      id: "723ed52f",
      amount: 500,
      status: "pending",
      email: "test3@example.com",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container w-[60%] mx-auto py-10">
      {/* Header Section with Auth Buttons */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div>
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      {/* DataTable Section */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}
