import Link from "next/link";
import { Command } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Command className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              care.ai
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            <Link
              href="#features"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </Link>
          </nav>

          {/* Authentication Section */}
          <div className="flex items-center">
            <SignedOut>
              <SignInButton>
                <button className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Sign up
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
