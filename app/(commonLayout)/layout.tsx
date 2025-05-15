import { Button } from "@/components/ui/button"

import { MobileNav } from "@/components/ui/mobile-nav";
import Link from "next/link";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
   <div className="flex min-h-screen flex-col ">
         {/* Mobile Navigation - Only visible on small screens */}
      <MobileNav/>

      {/* Desktop Header - Hidden on small screens */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden md:block">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Wander</span>
            <span className="text-slate-700 dark:text-slate-200">Wise</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-emerald-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 text-emerald-600 dark:text-emerald-400"
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-emerald-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              Destinations
            </Link>
            <Link
              href="/trips"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-emerald-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              Trips
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-emerald-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-emerald-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white border-none transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      <main>{children}</main>
        {/* Footer */}
      <footer className="border-t py-16 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-6">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  Wander
                </span>
                <span className="text-slate-700 dark:text-slate-200">Wise</span>
              </Link>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Making travel accessible, enjoyable, and unforgettable for everyone.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-6">Destinations</h3>
              <ul className="space-y-3">
                {["Europe", "Asia", "Africa", "North America", "South America", "Australia"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-6">Travel Types</h3>
              <ul className="space-y-3">
                {[
                  "Adventure Travel",
                  "Beach Vacations",
                  "City Breaks",
                  "Cultural Tours",
                  "Luxury Travel",
                  "Family Trips",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-6">Company</h3>
              <ul className="space-y-3">
                {["About Us", "Careers", "Blog", "Press", "Contact Us", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 text-center text-slate-500 dark:text-slate-400">
            <p>© {new Date().getFullYear()} WanderWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default layout;