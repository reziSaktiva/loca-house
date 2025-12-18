import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

function HomePage() {
  return (
    <section className="w-full">
      <div className="relative min-h-screen flex items-center justify-center -mt-20">
        <Image
          src="/home-hero-2.png"
          alt="Home Page"
          quality={100}
          fill
          className="object-cover z-0"
          priority
        />
        <div className="relative">
          <Image src="/logo-no-bg.svg" alt="Logo" width={500} height={500} />
        </div>
      </div>
      <div className="wrapper flex flex-col gap-10 w-full justify-center py-10">
        <h2 className="text-4xl font-medium font-display">
          Our Products
        </h2>
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: "auto",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/3 lg:basis-1/4">
                <Card className="overflow-hidden">
                  <CardHeader className="relative aspect-4/5 overflow-hidden rounded-t-xl">
                    <Image
                      src="/products/product-1.png"
                      alt={`Product Image - ${index + 1}`}
                      quality={100}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110 pt-0 dark:brightness-90"
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    <CardTitle>Product {index + 1}</CardTitle>
                    <CardDescription>Product {index + 1} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-end px-2">
                    <Button className="w-full" size="sm">View Product</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default HomePage;
