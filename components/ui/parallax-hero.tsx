"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMobile } from "@/hooks/use-mobile"

export function ParallaxHero() {
  // Track scroll position for parallax effect
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Update scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const { top, height } = heroRef.current.getBoundingClientRect()
        // Only update if hero section is visible
        if (top + height > 0 && top < window.innerHeight) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={heroRef} className="relative overflow-hidden ">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image
          src="/placeholder.svg?height=1200&width=1920"
          alt="Beautiful travel destination"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"
          style={{
            transform: `translate(${scrollY * -0.1}px, ${scrollY * 0.05}px)`,
            transition: "transform 0.2s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.05}px)`,
            transition: "transform 0.2s ease-out",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <div
          className="max-w-3xl mx-auto text-center"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
            opacity: 1 - scrollY * 0.001,
            transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
          }}
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-6 drop-shadow-md">
            <span className="block">Discover Your Next</span>
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          <p className="text-lg text-white/90 md:text-xl mb-8 drop-shadow-md max-w-2xl mx-auto">
            Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.
          </p>

          {/* Animated button */}
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white border-none transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 px-8 py-6 h-auto text-lg mb-12 animate-pulse hover:animate-none">
            Start Your Journey
          </Button>
        </div>

        {/* Search box */}
        <div
          className="mt-8 max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-white/20 dark:border-slate-700/30">
            <Tabs defaultValue="flights" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                <TabsTrigger
                  value="flights"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400 rounded-md transition-all duration-300"
                >
                  Flights
                </TabsTrigger>
                <TabsTrigger
                  value="hotels"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400 rounded-md transition-all duration-300"
                >
                  Hotels
                </TabsTrigger>
                <TabsTrigger
                  value="packages"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400 rounded-md transition-all duration-300"
                >
                  Packages
                </TabsTrigger>
                <TabsTrigger
                  value="activities"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400 rounded-md transition-all duration-300"
                >
                  Activities
                </TabsTrigger>
              </TabsList>

              <TabsContent value="flights" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">From</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="City or Airport"
                        className="pl-9 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-300 dark:focus:border-emerald-600 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">To</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="City or Airport"
                        className="pl-9 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-300 dark:focus:border-emerald-600 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Departure</label>
                    <Input
                      type="date"
                      className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-300 dark:focus:border-emerald-600 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Return</label>
                    <Input
                      type="date"
                      className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-300 dark:focus:border-emerald-600 transition-all duration-300"
                    />
                  </div>
                </div>
                <Button className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white border-none transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  Search Flights
                </Button>
              </TabsContent>

              <TabsContent value="hotels" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Destination</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="City or Hotel"
                        className="pl-9 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-300 dark:focus:border-emerald-600 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Check-in</label>
                    <Input
                      type="date"
                      className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-300 dark:focus:border-emerald-600 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Check-out</label>
                    <Input
                      type="date"
                      className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-300 dark:focus:border-emerald-600 transition-all duration-300"
                    />
                  </div>
                </div>
                <Button className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white border-none transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  Search Hotels
                </Button>
              </TabsContent>

              {/* Other tab contents would follow the same pattern */}
              <TabsContent value="packages" className="mt-0">
                {/* Package search form */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Destination</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Where to?"
                        className="pl-9 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-300 dark:focus:border-emerald-600 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Travel Dates</label>
                    <Input
                      type="date"
                      className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-300 dark:focus:border-emerald-600 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Travelers</label>
                    <Input
                      type="number"
                      min="1"
                      defaultValue="2"
                      className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-300 dark:focus:border-emerald-600 transition-all duration-300"
                    />
                  </div>
                </div>
                <Button className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white border-none transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  Search Packages
                </Button>
              </TabsContent>

              <TabsContent value="activities" className="mt-0">
                {/* Activities search form */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Activity or Attraction
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Search activities..."
                        className="pl-9 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-300 dark:focus:border-emerald-600 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Date</label>
                    <Input
                      type="date"
                      className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-300 dark:focus:border-emerald-600 transition-all duration-300"
                    />
                  </div>
                </div>
                <Button className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white border-none transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  Search Activities
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Decorative wave shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="dark:fill-slate-900"
          ></path>
        </svg>
      </div>
    </section>
  )
}
