import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

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
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
