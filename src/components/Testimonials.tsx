const testimonials = [
  {
    name: "Vaidehi Kale",
    role: "Electronics Store Owner",
    company: "Tata Electronics",
    quote:
      "With care.ai I do not have to worry about missing out on customers, they are really good at handling customer queries ❤️.",
  },
  {
    name: "Laukik Marathe",
    role: "Cashier",
    company: "Kirana Store",
    quote:
      "I never have to worry about checking my inventory again the ai just takes care of it, customers have experienced significantly faster responses because of this, Loving it 😁",
  },
  {
    name: "Sakshi Changan",
    role: "Owner",
    company: "Fashion Store",
    quote:
      "Starting my own brand I was worried about how I will handle customer service but care.ai was there for my rescure 🫶",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-16 lg:py-24" id="testimonials">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Hear from our satisfied customers
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Discover how care.ai has transformed businesses and boosted
              productivity for teams around the world.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-600">
                      {testimonial.company}
                    </p>
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-900">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
