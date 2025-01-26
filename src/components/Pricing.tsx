import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 29,
    features: [
      "Up to 2000 minutes of incoming calls",
      "Basic task management",
      "Limited file storage",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: 79,
    features: [
      "Unlimited outgoing calls",
      "Advanced task management",
      "Unlimited file storage",
      "Priority email support",
      "Advanced analytics",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited outgoing calls",
      "Custom workflows",
      "Dedicated account manager",
      "24/7 phone support",
      "Advanced security features",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="bg-white" id="pricing">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-center">
            Pricing Plans
          </h2>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Choose the perfect plan for your business needs
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
            >
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm text-gray-500">
                  All the basics for getting started with StreamLine.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-base font-medium text-gray-500">
                      /mo
                    </span>
                  )}
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700"
                >
                  Get started
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What&apos;s included
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
