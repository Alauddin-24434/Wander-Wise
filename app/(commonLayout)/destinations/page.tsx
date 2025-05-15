import Link from "next/link"
import Image from "next/image"
import { MapPin, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function DestinationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
  
      <main className="flex-1">
        <section className="bg-muted/30 py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Explore Destinations</h1>
              <p className="text-muted-foreground">
                Discover amazing places around the world and start planning your next adventure
              </p>
              <div className="mt-6 relative max-w-md mx-auto">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" placeholder="Search destinations..." />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 container mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Regions</h3>
                <div className="space-y-2">
                  {regions.map((region) => (
                    <div key={region} className="flex items-center space-x-2">
                      <Checkbox id={`region-${region}`} />
                      <Label htmlFor={`region-${region}`} className="text-sm cursor-pointer">
                        {region}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-4">
                  <Slider defaultValue={[500, 2000]} min={100} max={5000} step={100} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">$100</span>
                    <span className="text-sm">$5,000+</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Trip Type</h3>
                <div className="space-y-2">
                  {tripTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={`type-${type}`} />
                      <Label htmlFor={`type-${type}`} className="text-sm cursor-pointer">
                        {type}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating}`} />
                      <Label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center">
                        {Array(rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        {Array(5 - rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-muted-foreground" />
                          ))}
                        <span className="ml-1">& Up</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-muted-foreground">Showing 24 of 156 destinations</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort by:</span>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allDestinations.map((destination) => (
                  <Link href={`/destinations/${destination.slug}`} key={destination.id} className="group">
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-48">
                        <Image
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        {destination.trending && (
                          <div className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                            Trending
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{destination.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <MapPin className="mr-1 h-4 w-4" />
                          {destination.country}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{destination.description}</p>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                            <span className="text-sm font-medium">{destination.rating}</span>
                            <span className="text-xs text-muted-foreground ml-1">({destination.reviewCount})</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <div className="text-primary font-semibold">From ${destination.price}</div>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
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
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    3
                  </Button>
                  <span>...</span>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    8
                  </Button>
                  <Button variant="outline" size="icon">
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
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="sr-only">Next</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  )
}

// Sample data
const regions = ["Europe", "Asia", "Africa", "North America", "South America", "Oceania", "Antarctica"]

const tripTypes = ["Beach", "Mountain", "City", "Cultural", "Adventure", "Relaxation", "Family", "Romantic"]

const allDestinations = [
  {
    id: 1,
    name: "Santorini",
    slug: "santorini",
    country: "Greece",
    description: "Famous for its stunning sunsets, white-washed buildings and blue domes that reflect the blue sky.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    reviewCount: 328,
    price: 899,
    trending: true,
  },
  {
    id: 2,
    name: "Bali",
    slug: "bali",
    country: "Indonesia",
    description: "A tropical paradise known for its lush rice terraces, beautiful beaches, and spiritual retreats.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    reviewCount: 427,
    price: 799,
    trending: false,
  },
  {
    id: 3,
    name: "Kyoto",
    slug: "kyoto",
    country: "Japan",
    description:
      "Experience traditional Japanese culture with ancient temples, beautiful gardens, and geisha districts.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    reviewCount: 289,
    price: 1099,
    trending: false,
  },
  {
    id: 4,
    name: "Machu Picchu",
    slug: "machu-picchu",
    country: "Peru",
    description:
      "The ancient Incan citadel set high in the Andes Mountains, offering breathtaking views and rich history.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    reviewCount: 356,
    price: 1299,
    trending: true,
  },
  {
    id: 5,
    name: "Barcelona",
    slug: "barcelona",
    country: "Spain",
    description: "A vibrant city known for its unique architecture, delicious cuisine, and lively atmosphere.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.6,
    reviewCount: 412,
    price: 749,
    trending: false,
  },
  {
    id: 6,
    name: "Maldives",
    slug: "maldives",
    country: "Maldives",
    description: "Paradise on Earth with crystal clear waters, overwater bungalows, and incredible marine life.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    reviewCount: 298,
    price: 1899,
    trending: true,
  },
  {
    id: 7,
    name: "New York City",
    slug: "new-york",
    country: "United States",
    description: "The city that never sleeps, offering world-class entertainment, dining, and iconic landmarks.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    reviewCount: 521,
    price: 999,
    trending: false,
  },
  {
    id: 8,
    name: "Cape Town",
    slug: "cape-town",
    country: "South Africa",
    description: "A stunning coastal city with Table Mountain as its backdrop, offering diverse experiences.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    reviewCount: 267,
    price: 1099,
    trending: false,
  },
  {
    id: 9,
    name: "Venice",
    slug: "venice",
    country: "Italy",
    description: "The floating city with romantic canals, historic architecture, and no cars in sight.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.6,
    reviewCount: 389,
    price: 899,
    trending: false,
  },
]
