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
    </section>
  );
}

export default HomePage;
