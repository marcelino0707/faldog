import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full relative">
        {/* Hero 1 */}
        <div className="relative w-full h-[600px] overflow-hidden mb-4">
          <Image
            src="/Foto Banner.png"
            alt="Home BG"
            fill
            style={{ objectFit: "cover", objectPosition: "top"}}
            priority
          />

          <div className="absolute inset-0 flex items-center justify-start px-10">
            <h2 className="text-white text-lg font-medium max-w-md">
              Kami hadir untuk memberikan kepuasaan kepada pelanggan dan{" "}
              <strong className="font-bold">Masyarakat</strong>
            </h2>
          </div>
        </div>
        {/* Hero 2 */}
        <div className="relative flex justify-around w-full h-full mb-4">
          <div className="container">
            <div className="flex justify-around content-center gap-4">
              <div className="w-1/2 h-[400px] relative overflow-hidden rounded-2xl">
                 <Image
                    src="/Foto Sejarah.png"
                    alt="Home Sejarah"
                    fill
                    style={{ objectFit: "cover", objectPosition: "top"}}
                    priority
                  />
              </div>
              <div className="w-1/2">
                {/* Title */}
                <h2>
                  Sejarah PT Lingga Jaya Perkasa Line
                </h2>
                <p>
                  PT Lingga Jaya Perkasa Line memiliki sejarah yang membanggakan di Indonesia. Didirikan pada tanggal 30 Juni tahun 2009. Pelajari lebih lanjut tentang sejarah perusahaan selama beberapa windu.
                </p>
                <button>Selengkapnya</button>
              </div>
            </div>
          </div>
        </div>
        {/* Hero 3 */}
        <div className="relative flex justify-around w-full h-full mb-4">
          <div className="relative w-full h-[800px] overflow-hidden">
            <Image
              src="/Gambar Servis Kami.png"
              alt="Servis Kami"
              fill
              style={{ objectFit: "cover", objectPosition: "top"}}
              priority
            />
            <div className="absolute items-center inset-0 flex flex-col">
                <h1>Servis Kami</h1>
                <div className="grid grid-cols-3 gap-4 max-w-5xl w-full">
                  <div className="w-full h-[300px] relative overflow-hidden rounded-2xl">
                    <Image
                        src="/services/image 1.png"
                        alt="services 1"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top"}}
                        priority
                      />
                  </div>
                  <div className="w-full h-[300px] relative overflow-hidden rounded-2xl">
                    <Image
                        src="/services/image 2.png"
                        alt="services 2"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top"}}
                        priority
                      />
                  </div>
                  <div className="w-full h-[300px] relative overflow-hidden rounded-2xl">
                    <Image
                        src="/services/image 3.png"
                        alt="services 3"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top"}}
                        priority
                      />
                  </div>
                  <div className="w-full h-[300px] relative overflow-hidden rounded-2xl">
                    <Image
                        src="/services/image 4.png"
                        alt="services 4"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top"}}
                        priority
                      />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
