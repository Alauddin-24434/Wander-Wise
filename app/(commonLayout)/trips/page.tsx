import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, MapPin, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TripsPage() {
  return (
    <div className="flex min-h-screen flex-col">
   
      <main className="flex-1">
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Explore Our Trips</h1>
              <p className="text-muted-foreground">Curated travel experiences for every type of adventurer</p>
            </div>
          </div>
        </section>

        <section className="py-12 container mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Trips</TabsTrigger>
                <TabsTrigger value="adventure">Adventure</TabsTrigger>
                <TabsTrigger value="cultural">Cultural</TabsTrigger>
                <TabsTrigger value="beach">Beach</TabsTrigger>
                <TabsTrigger value="luxury">Luxury</TabsTrigger>
              </TabsList>
              <div className="hidden md:block">
                <Button variant="outline">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Filter by Date
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allTrips.map((trip) => (
                  <Card key={trip.id} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image src={trip.image || "/placeholder.svg"} alt={trip.title} fill className="object-cover" />
                      {trip.discount && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          {trip.discount}% OFF
                        </div>
                      )}
                      <div className="absolute bottom-2 left-2 flex gap-2">
                        <Badge variant="secondary" className="bg-black/60 hover:bg-black/70 text-white">
                          {trip.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg">{trip.title}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                          <span className="text-sm font-medium">{trip.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{trip.description}</p>
                      <div className="flex items-center text-sm mb-2">
                        <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                        {trip.location}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                          {trip.duration} days
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                          Max {trip.groupSize} people
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between items-center">
                      <div>
                        <div className="text-primary font-semibold">
                          ${trip.price} <span className="text-xs text-muted-foreground font-normal">/ person</span>
                        </div>
                        {trip.originalPrice && (
                          <div className="text-xs text-muted-foreground line-through">${trip.originalPrice}</div>
                        )}
                      </div>
                      <Button size="sm">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="adventure" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allTrips
                  .filter((trip) => trip.category === "Adventure")
                  .map((trip) => (
                    <Card key={trip.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image src={trip.image || "/placeholder.svg"} alt={trip.title} fill className="object-cover" />
                        {trip.discount && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                            {trip.discount}% OFF
                          </div>
                        )}
                        <div className="absolute bottom-2 left-2 flex gap-2">
                          <Badge variant="secondary" className="bg-black/60 hover:bg-black/70 text-white">
                            {trip.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-lg">{trip.title}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                            <span className="text-sm font-medium">{trip.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{trip.description}</p>
                        <div className="flex items-center text-sm mb-2">
                          <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                          {trip.location}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                            {trip.duration} days
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                            Max {trip.groupSize} people
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <div>
                          <div className="text-primary font-semibold">
                            ${trip.price} <span className="text-xs text-muted-foreground font-normal">/ person</span>
                          </div>
                          {trip.originalPrice && (
                            <div className="text-xs text-muted-foreground line-through">${trip.originalPrice}</div>
                          )}
                        </div>
                        <Button size="sm">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="cultural" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allTrips
                  .filter((trip) => trip.category === "Cultural")
                  .map((trip) => (
                    <Card key={trip.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image src={trip.image || "/placeholder.svg"} alt={trip.title} fill className="object-cover" />
                        {trip.discount && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                            {trip.discount}% OFF
                          </div>
                        )}
                        <div className="absolute bottom-2 left-2 flex gap-2">
                          <Badge variant="secondary" className="bg-black/60 hover:bg-black/70 text-white">
                            {trip.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-lg">{trip.title}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                            <span className="text-sm font-medium">{trip.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{trip.description}</p>
                        <div className="flex items-center text-sm mb-2">
                          <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                          {trip.location}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                            {trip.duration} days
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                            Max {trip.groupSize} people
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <div>
                          <div className="text-primary font-semibold">
                            ${trip.price} <span className="text-xs text-muted-foreground font-normal">/ person</span>
                          </div>
                          {trip.originalPrice && (
                            <div className="text-xs text-muted-foreground line-through">${trip.originalPrice}</div>
                          )}
                        </div>
                        <Button size="sm">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="beach" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allTrips
                  .filter((trip) => trip.category === "Beach")
                  .map((trip) => (
                    <Card key={trip.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image src={trip.image || "/placeholder.svg"} alt={trip.title} fill className="object-cover" />
                        {trip.discount && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                            {trip.discount}% OFF
                          </div>
                        )}
                        <div className="absolute bottom-2 left-2 flex gap-2">
                          <Badge variant="secondary" className="bg-black/60 hover:bg-black/70 text-white">
                            {trip.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-lg">{trip.title}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                            <span className="text-sm font-medium">{trip.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{trip.description}</p>
                        <div className="flex items-center text-sm mb-2">
                          <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                          {trip.location}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                            {trip.duration} days
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                            Max {trip.groupSize} people
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <div>
                          <div className="text-primary font-semibold">
                            ${trip.price} <span className="text-xs text-muted-foreground font-normal">/ person</span>
                          </div>
                          {trip.originalPrice && (
                            <div className="text-xs text-muted-foreground line-through">${trip.originalPrice}</div>
                          )}
                        </div>
                        <Button size="sm">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="luxury" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allTrips
                  .filter((trip) => trip.category === "Luxury")
                  .map((trip) => (
                    <Card key={trip.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image src={trip.image || "/placeholder.svg"} alt={trip.title} fill className="object-cover" />
                        {trip.discount && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                            {trip.discount}% OFF
                          </div>
                        )}
                        <div className="absolute bottom-2 left-2 flex gap-2">
                          <Badge variant="secondary" className="bg-black/60 hover:bg-black/70 text-white">
                            {trip.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-lg">{trip.title}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                            <span className="text-sm font-medium">{trip.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{trip.description}</p>
                        <div className="flex items-center text-sm mb-2">
                          <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                          {trip.location}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                            {trip.duration} days
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                            Max {trip.groupSize} people
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <div>
                          <div className="text-primary font-semibold">
                            ${trip.price} <span className="text-xs text-muted-foreground font-normal">/ person</span>
                          </div>
                          {trip.originalPrice && (
                            <div className="text-xs text-muted-foreground line-through">${trip.originalPrice}</div>
                          )}
                        </div>
                        <Button size="sm">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Trips
            </Button>
          </div>
        </section>
      </main>
    
    </div>
  )
}

// Sample data
const allTrips = [
  {
    id: 1,
    title: "Greek Island Hopping",
    description:
      "Explore the stunning Cyclades islands with this 10-day adventure through Santorini, Mykonos, and Naxos.",
    location: "Greece",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    price: 1899,
    originalPrice: 2199,
    discount: 15,
    duration: 10,
    groupSize: 12,
    category: "Beach",
  },
  {
    id: 2,
    title: "Japanese Culture Tour",
    description: "Immerse yourself in the rich traditions of Japan with visits to Tokyo, Kyoto, and Osaka.",
    location: "Japan",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    price: 2499,
    originalPrice: null,
    discount: null,
    duration: 14,
    groupSize: 10,
    category: "Cultural",
  },
  {
    id: 3,
    title: "Costa Rican Adventure",
    description: "Rainforests, volcanoes, and beaches in one amazing trip through Costa Rica's diverse landscapes.",
    location: "Costa Rica",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    price: 1699,
    originalPrice: 1999,
    discount: 15,
    duration: 8,
    groupSize: 14,
    category: "Adventure",
  },
  {
    id: 4,
    title: "Maldives Luxury Retreat",
    description:
      "Experience ultimate relaxation in overwater bungalows with pristine beaches and crystal clear waters.",
    location: "Maldives",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    price: 3299,
    originalPrice: null,
    discount: null,
    duration: 7,
    groupSize: 8,
    category: "Luxury",
  },
  {
    id: 5,
    title: "Peruvian Highlights",
    description: "Discover the wonders of Peru including Machu Picchu, Sacred Valley, and Cusco.",
    location: "Peru",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    price: 2099,
    originalPrice: null,
    discount: null,
    duration: 12,
    groupSize: 16,
    category: "Cultural",
  },
  {
    id: 6,
    title: "Thai Beach Escape",
    description: "Relax on the beautiful beaches of Thailand with visits to Phuket, Krabi, and Phi Phi Islands.",
    location: "Thailand",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.6,
    price: 1499,
    originalPrice: 1799,
    discount: 20,
    duration: 9,
    groupSize: 12,
    category: "Beach",
  },
  {
    id: 7,
    title: "Swiss Alps Adventure",
    description: "Experience the breathtaking beauty of the Swiss Alps with hiking, skiing, and mountain excursions.",
    location: "Switzerland",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    price: 2299,
    originalPrice: null,
    discount: null,
    duration: 8,
    groupSize: 10,
    category: "Adventure",
  },
  {
    id: 8,
    title: "Moroccan Discovery",
    description: "Explore the vibrant markets, desert landscapes, and rich culture of Morocco.",
    location: "Morocco",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.5,
    price: 1799,
    originalPrice: null,
    discount: null,
    duration: 10,
    groupSize: 14,
    category: "Cultural",
  },
  {
    id: 9,
    title: "Bali Wellness Retreat",
    description: "Rejuvenate your mind and body with yoga, meditation, and spa treatments in beautiful Bali.",
    location: "Indonesia",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    price: 1899,
    originalPrice: 2199,
    discount: 15,
    duration: 7,
    groupSize: 8,
    category: "Luxury",
  },
]
