import { CheckCircle, Zap, Users, TrendingUp } from "lucide-react";

const features = [
  {
    name: "24/7 Support",
    description:
      "There is no need for work life balance when it comes to our AI buddy.",
    icon: CheckCircle,
  },
  {
    name: "Best-In-Class AI",
    description: "Throw a question and hear our AI answer it for you.",
    icon: Users,
  },
  {
    name: "Automation",
    description: "Automate repetitive tasks and workflows to save time.",
    icon: Zap,
  },
  {
    name: "Analytics",
    description: "A intuitive dashboard that captures all the information.",
    icon: TrendingUp,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to streamline your work
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            care.ai offers a comprehensive set of features to help you manage
            your customer service infrastructure.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
