import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Star, TreePalmIcon as PalmTree, Compass } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"


import { AnimatedCard } from "@/components/ui/animated-card"

import { ParallaxHero } from "@/components/ui/parallax-hero"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function Home() {
  return (
    <div >
 

      <main className="flex-1">
        {/* Hero Section with Parallax Effect */}
        <ParallaxHero />

        {/* Popular Destinations Section */}
        <section className="py-20 container mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-2">
                  Popular Destinations
                </h2>
                <p className="text-slate-600 dark:text-slate-400">Explore our most sought-after travel spots</p>
              </div>
              <Button
                variant="outline"
                className="mt-4 md:mt-0 border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950/30 dark:hover:border-emerald-700 group transition-all duration-300"
              >
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <AnimatedCard key={destination.id} index={index}>
                <Link href={`/destinations/${destination.slug}`} className="group">
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-white dark:bg-slate-900">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-semibold text-lg text-white">{destination.name}</h3>
                          <div className="flex items-center text-sm text-white/90 mt-1">
                            <MapPin className="mr-1 h-4 w-4" />
                            {destination.country}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center text-amber-500 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(destination.rating) ? "fill-amber-500" : "fill-slate-200 dark:fill-slate-700"}`}
                          />
                        ))}
                        <span className="text-sm font-medium ml-2 text-slate-700 dark:text-slate-300">
                          {destination.rating}
                        </span>
                        <span className="text-xs text-slate-500 ml-1">({destination.reviewCount})</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                        {destination.description}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between items-center">
                      <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        From ${destination.price}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 p-0 hover:bg-transparent group"
                      >
                        Explore
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20  bg-gradient-to-b from-emerald-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-4">
                  Why Choose Us
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  We're dedicated to making your travel experiences unforgettable for all the right reasons
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 100}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-white dark:bg-slate-900 h-full overflow-hidden group">
                    <CardContent className="pt-6 p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Trips Section */}
        <section className="py-20 container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-4">
                Featured Trips
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Curated travel experiences for every type of adventurer
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip, index) => (
              <AnimatedCard key={trip.id} index={index}>
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-white dark:bg-slate-900 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={trip.image || "/placeholder.svg"}
                      alt={trip.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {trip.featured && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-semibold text-lg text-white">{trip.title}</h3>
                        <div className="flex items-center text-sm text-white/90 mt-1">
                          <MapPin className="mr-1 h-4 w-4" />
                          {trip.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-amber-500 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(trip.rating) ? "fill-amber-500" : "fill-slate-200 dark:fill-slate-700"}`}
                        />
                      ))}
                      <span className="text-sm font-medium ml-2 text-slate-700 dark:text-slate-300">{trip.rating}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{trip.description}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4 mt-4">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {trip.duration} days
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Small group
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between items-center">
                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg">
                      ${trip.price}{" "}
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">/ person</span>
                    </div>
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white border-none transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white border-none transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 px-8 py-6 h-auto text-base group">
              Explore All Trips
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-white to-emerald-50 dark:from-slate-900 dark:to-slate-950">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-4">
                  What Our Travelers Say
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Real experiences from our satisfied customers
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-white dark:bg-slate-900 h-full overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-slate-200 dark:text-slate-700"}`}
                            />
                          ))}
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-6 italic leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center mt-auto">
                          <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4 border-2 border-emerald-200 dark:border-emerald-800">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-slate-800 dark:text-slate-200">{testimonial.name}</p>
                            <p className="text-sm text-emerald-600 dark:text-emerald-400">{testimonial.trip}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 container mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-400 rounded-2xl p-10 md:p-16 shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-white/10"></div>
                <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-white/10"></div>
                <div className="absolute bottom-10 left-1/3 w-32 h-32 rounded-full bg-white/10"></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                  Get Inspired for Your Next Adventure
                </h2>
                <p className="text-white/90 mb-8 text-lg">
                  Subscribe to receive exclusive travel deals, insider tips, and personalized recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-white/30"
                  />
                  <Button className="bg-white text-emerald-600 hover:bg-white/90 border-none transition-all duration-300 hover:shadow-lg hover:shadow-emerald-800/20">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

    
    </div>
  )
}

// Sample data with enhanced descriptions
const destinations = [
  {
    id: 1,
    name: "Santorini",
    slug: "santorini",
    country: "Greece",
    description:
      "Iconic white-washed buildings perched on cliffs overlooking the crystal-clear Aegean Sea, offering the world's most breathtaking sunsets.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    reviewCount: 328,
    price: 899,
  },
  {
    id: 2,
    name: "Bali",
    slug: "bali",
    country: "Indonesia",
    description:
      "A tropical paradise with lush rice terraces, sacred temples, vibrant coral reefs, and a spiritual atmosphere that rejuvenates the soul.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    reviewCount: 427,
    price: 799,
  },
  {
    id: 3,
    name: "Kyoto",
    slug: "kyoto",
    country: "Japan",
    description:
      "Ancient temples, serene gardens, and geisha districts that preserve Japan's cultural heritage in a modern world.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    reviewCount: 289,
    price: 1099,
  },
  {
    id: 4,
    name: "Machu Picchu",
    slug: "machu-picchu",
    country: "Peru",
    description:
      "The mystical Incan citadel set high in the Andes Mountains, shrouded in clouds and ancient mysteries waiting to be discovered.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    reviewCount: 356,
    price: 1299,
  },
]

const features = [
  {
    title: "Curated Experiences",
    description:
      "Our travel experts handpick every destination and activity for exceptional quality and authenticity, ensuring memories that last a lifetime.",
    icon: Compass,
  },
  {
    title: "24/7 Support",
    description:
      "Travel with peace of mind knowing our dedicated support team is always just a call away, no matter where you are in the world.",
    icon: ({ className }: { className?: string }) => (
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
        className={className}
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
  {
    title: "Sustainable Travel",
    description:
      "We're committed to responsible tourism that respects local cultures, supports communities, and preserves natural environments for future generations.",
    icon: PalmTree,
  },
]

const trips = [
  {
    id: 1,
    title: "Greek Island Hopping",
    description:
      "Explore the stunning Cyclades islands with this 10-day adventure through Santorini, Mykonos, and Naxos. Enjoy crystal-clear waters, ancient ruins, and authentic Greek cuisine.",
    location: "Greece",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    price: 1899,
    featured: true,
    duration: 10,
  },
  {
    id: 2,
    title: "Japanese Culture Tour",
    description:
      "Immerse yourself in the rich traditions of Japan with visits to Tokyo, Kyoto, and Osaka. Experience tea ceremonies, stay in a traditional ryokan, and explore ancient temples.",
    location: "Japan",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    price: 2499,
    featured: false,
    duration: 14,
  },
  {
    id: 3,
    title: "Costa Rican Adventure",
    description:
      "Discover rainforests, volcanoes, and pristine beaches in one amazing trip through Costa Rica's diverse landscapes. Spot exotic wildlife, zip-line through canopies, and relax in natural hot springs.",
    location: "Costa Rica",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    price: 1699,
    featured: true,
    duration: 8,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Our trip to Japan was flawlessly organized. Every detail was taken care of, and the local guides were exceptional. WanderWise made our dream vacation a reality!",
    trip: "Japanese Culture Tour",
  },
  {
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The Greek Island Hopping tour exceeded all our expectations. The accommodations were perfect and the itinerary was well-balanced between activities and relaxation time.",
    trip: "Greek Island Hopping",
  },
  {
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "Costa Rica was an adventure of a lifetime! The zip-lining and wildlife tours were incredible. Our guide was knowledgeable and passionate about conservation.",
    trip: "Costa Rican Adventure",
  },
]
