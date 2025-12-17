import { CardContent } from "@/components/ui/card";
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
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="product-card bg-muted">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
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
