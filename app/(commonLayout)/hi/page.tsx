import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function DestinationDetails() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src={'/sant.jpg'}
          height={100}
          width={100}
          alt="Santorini coastline with white buildings and blue domes"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Santorini</h1>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4" />
            <span>Greece, Europe</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-white">4.8 (128 reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="md:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">
                Santorini, officially known as Thira, is a stunning volcanic
                island in the Cyclades group of the Greek islands. It's known
                for its breathtaking caldera, dramatic cliffs, white-washed
                buildings with blue domes, stunning sunsets, and crystal-clear
                waters. The island's unique landscape was formed by one of the
                largest volcanic eruptions in recorded history.
              </p>
              <p className="text-gray-700">
                Explore the picturesque villages of Oia and Fira, relax on the
                unique black and red sand beaches, sample exquisite local wines
                from vineyards grown in volcanic soil, and immerse yourself in
                the rich history and culture that dates back thousands of years.
              </p>
            </section>

            {/* Tabs for different sections */}
            <Tabs defaultValue="highlights">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="included">What's Included</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="highlights" className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <div className="bg-teal-100 p-2 rounded-full h-fit">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Oia Sunset</h3>
                      <p className="text-sm text-gray-600">
                        Experience the world-famous sunset from the village of
                        Oia
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-teal-100 p-2 rounded-full h-fit">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Caldera Cruise</h3>
                      <p className="text-sm text-gray-600">
                        Sail around the caldera and visit the volcanic hot
                        springs
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-teal-100 p-2 rounded-full h-fit">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Red Beach</h3>
                      <p className="text-sm text-gray-600">
                        Relax on the unique red sand beach formed by volcanic
                        rocks
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-teal-100 p-2 rounded-full h-fit">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Wine Tasting</h3>
                      <p className="text-sm text-gray-600">
                        Sample local wines from vineyards grown in volcanic soil
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative h-[300px] w-full mt-6 rounded-lg overflow-hidden">
                  {/* <Image
                    src="https://www.sovereign.com/-/media/Bynder/Sovereign…570b58dd227&hash=7193198E49EC77D4C98C04FBE3F3EBC7"
                    alt="Santorini landscape"
                    fill
                    className="object-cover"
                  /> */}
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="space-y-6 pt-4">
                <div className="space-y-4">
                  <div className="border-l-2 border-teal-500 pl-4 pb-6 relative">
                    <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-[7px] top-1"></div>
                    <h3 className="font-bold">
                      Day 1: Arrival & Fira Exploration
                    </h3>
                    <p className="text-gray-700 mt-2">
                      Arrive at Santorini Airport and transfer to your hotel.
                      Spend the afternoon exploring Fira, the island's capital.
                      Wander through narrow streets, visit local shops, and
                      enjoy dinner with a caldera view.
                    </p>
                  </div>

                  <div className="border-l-2 border-teal-500 pl-4 pb-6 relative">
                    <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-[7px] top-1"></div>
                    <h3 className="font-bold">Day 2: Caldera Cruise</h3>
                    <p className="text-gray-700 mt-2">
                      Embark on a full-day cruise around the caldera. Visit the
                      volcanic islands, swim in hot springs, and enjoy lunch on
                      board. Return in the evening for a relaxing dinner.
                    </p>
                  </div>

                  <div className="border-l-2 border-teal-500 pl-4 pb-6 relative">
                    <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-[7px] top-1"></div>
                    <h3 className="font-bold">
                      Day 3: Beach Day & Wine Tasting
                    </h3>
                    <p className="text-gray-700 mt-2">
                      Visit the famous Red Beach and Perissa Black Sand Beach.
                      In the afternoon, tour local wineries and sample
                      Santorini's unique wines made from Assyrtiko grapes.
                    </p>
                  </div>

                  <div className="border-l-2 border-teal-500 pl-4 relative">
                    <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-[7px] top-1"></div>
                    <h3 className="font-bold">Day 4: Oia & Sunset</h3>
                    <p className="text-gray-700 mt-2">
                      Spend the day exploring the picturesque village of Oia.
                      Visit the Maritime Museum, shop for souvenirs, and find
                      the perfect spot to watch Santorini's world-famous sunset.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="included" className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">What's Included</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 p-1 rounded-full mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>4 nights accommodation in a 4-star hotel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 p-1 rounded-full mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>Daily breakfast</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 p-1 rounded-full mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>Airport transfers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 p-1 rounded-full mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>Full-day caldera cruise with lunch</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 p-1 rounded-full mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>Wine tasting tour</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 p-1 rounded-full mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>Local English-speaking guide</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">What's Not Included</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="bg-red-100 p-1 rounded-full mt-0.5">
                          <svg
                            className="w-3 h-3 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <span>International flights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-red-100 p-1 rounded-full mt-0.5">
                          <svg
                            className="w-3 h-3 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <span>Travel insurance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-red-100 p-1 rounded-full mt-0.5">
                          <svg
                            className="w-3 h-3 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <span>Meals not mentioned</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-red-100 p-1 rounded-full mt-0.5">
                          <svg
                            className="w-3 h-3 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <span>Personal expenses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-red-100 p-1 rounded-full mt-0.5">
                          <svg
                            className="w-3 h-3 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <span>Optional activities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="pt-4">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl font-bold">4.8</div>
                    <div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < 4
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">
                        128 verified reviews
                      </div>
                    </div>
                  </div>

                  {/* Review 1 */}
                  <div className="border-b pb-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="font-medium text-gray-600">MJ</span>
                      </div>
                      <div>
                        <div className="font-medium">Maria Johnson</div>
                        <div className="text-sm text-gray-600">
                          Traveled April 2025
                        </div>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      "Absolutely breathtaking! The views from our hotel were
                      incredible, and the sunset in Oia was even better than the
                      pictures. Our guide was knowledgeable and friendly. The
                      caldera cruise was a highlight - swimming in the hot
                      springs was amazing!"
                    </p>
                  </div>

                  {/* Review 2 */}
                  <div className="border-b pb-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="font-medium text-gray-600">TS</span>
                      </div>
                      <div>
                        <div className="font-medium">Thomas Smith</div>
                        <div className="text-sm text-gray-600">
                          Traveled March 2025
                        </div>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      "Great experience overall. The hotel was comfortable and
                      centrally located. The wine tasting tour was excellent -
                      Santorini wines are unique and delicious. Only downside
                      was that some beaches were quite crowded."
                    </p>
                  </div>

                  {/* Review 3 */}
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="font-medium text-gray-600">AL</span>
                      </div>
                      <div>
                        <div className="font-medium">Anna Lee</div>
                        <div className="text-sm text-gray-600">
                          Traveled May 2025
                        </div>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      "This trip exceeded all my expectations! The island is
                      magical - the white buildings against the blue sea create
                      a postcard-perfect scene at every turn. The food was
                      incredible, especially the fresh seafood. Can't wait to
                      return!"
                    </p>
                  </div>

                  <Button variant="outline" className="w-full">
                    View All 128 Reviews
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            {/* Map Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-teal-500" />
                <span className="absolute">
                  Interactive Map Would Appear Here
                </span>
              </div>
            </section>
          </div>

          {/* Right Column - Booking Card */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <Card className="border shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold">$899</span>
                        <span className="text-gray-500"> / person</span>
                      </div>
                      <Badge className="bg-teal-500 hover:bg-teal-600">
                        20% OFF
                      </Badge>
                    </div>

                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Check-in
                          </label>
                          <div className="flex items-center border rounded-md p-3">
                            <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                            <span>06/15/2025</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Check-out
                          </label>
                          <div className="flex items-center border rounded-md p-3">
                            <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                            <span>06/19/2025</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Travelers</label>
                        <div className="flex items-center border rounded-md p-3">
                          <Users className="w-4 h-4 mr-2 text-gray-500" />
                          <span>2 Adults</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          $899 x 2 travelers
                        </span>
                        <span>$1,798</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Discount</span>
                        <span className="text-green-600">-$359.60</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxes & fees</span>
                        <span>$143.84</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between font-bold">
                        <span>Total</span>
                        <span>$1,582.24</span>
                      </div>
                    </div>

                    <Link href="/checkout/santorini">
                      <Button className="w-full bg-teal-500 hover:bg-teal-600">
                        Book Now
                      </Button>
                    </Link>

                    <div className="text-center text-sm text-gray-500">
                      <Clock className="inline w-4 h-4 mr-1" />
                      <span>Limited availability - book soon!</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 bg-teal-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Need Help?
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Our travel experts are available 24/7 to answer your questions
                  and assist with your booking.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Destinations */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Similar Destinations You Might Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Destination 1 */}
            <Link href="/destinations/mykonos" className="group">
              <div className="rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Mykonos"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold">Mykonos</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>Greece</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs ml-1 text-gray-600">4.7 (98)</span>
                  </div>
                  <div className="mt-2">
                    <span className="font-bold">From $799</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Destination 2 */}
            <Link href="/destinations/amalfi-coast" className="group">
              <div className="rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Amalfi Coast"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold">Amalfi Coast</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>Italy</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 5
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs ml-1 text-gray-600">
                      4.9 (112)
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="font-bold">From $949</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Destination 3 */}
            <Link href="/destinations/ibiza" className="group">
              <div className="rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Ibiza"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold">Ibiza</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>Spain</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs ml-1 text-gray-600">4.6 (87)</span>
                  </div>
                  <div className="mt-2">
                    <span className="font-bold">From $829</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Destination 4 */}
            <Link href="/destinations/maldives" className="group">
              <div className="rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Maldives"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold">Maldives</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>Maldives</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 5
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs ml-1 text-gray-600">
                      4.9 (156)
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="font-bold">From $1,299</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
