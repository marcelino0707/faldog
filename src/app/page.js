import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full">
        <h1>test</h1>
        <div className="relative w-full h-full overflow-hidden">
          <h1>test</h1>
          <div className="absolute top-0 left-0">
            <Image
              src="/Foto Banner.png"
              alt={"Home BG"}
              width={1600}
              height={500}
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <h2 className="">text</h2>
          </div>
        </div>
        <h1>test</h1>
      </section>
    </>
  );
}
