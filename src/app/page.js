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

          <div className="absolute inset-0 flex items-center justify-start px-20">
            <h2 className="text-white text-2xl max-w-md font-[600]">
              Kami hadir untuk memberikan kepuasaan kepada pelanggan dan{" "}
              <strong className="text-3xl"> Masyarakat</strong>
            </h2>
          </div>
        </div>
        {/* Hero 2 */}
        <div className="relative flex justify-around w-full h-full px-20 my-20">
          <div className="container">
            <div className="flex justify-around content-center gap-4">
              <div className="w-1/2 h-[500px] md: relative overflow-hidden rounded-2xl">
                <Image
                  src="/Foto Sejarah.png"
                  alt="Home Sejarah"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top"}}
                  priority
                />
              </div>
              <div className="w-1/2 flex flex-col justify-center px-8 gap-5">
                {/* Title */}
                <h2 className="text-[#07A6E1] text-2xl font-bold">
                  Sejarah PT Lingga Jaya Perkasa Line
                </h2>
                <p className="text-xl leading-normal text-justify">
                  PT Lingga Jaya Perkasa Line memiliki sejarah yang membanggakan di Indonesia. Didirikan pada tanggal 30 Juni tahun 2009. Pelajari lebih lanjut tentang sejarah perusahaan selama beberapa windu.
                </p>
                <button
                    className="bg-[#E8C547] text-xl font-semibold text-white py-2 rounded-xl shadow hover:scale-105 transition w-1/3"
                >
                    Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Hero 3 */}
        <div className="relative flex justify-around w-full h-full">
          <div className="relative w-full h-[960px] overflow-hidden">
            <Image
              src="/Gambar Servis Kami.png"
              alt="Servis Kami"
              fill
              style={{ objectFit: "cover", objectPosition: "top"}}
              priority
            />
            <div className="absolute text-white items-start inset-0 flex flex-col py-10 px-20">
                <h1 className="font-extrabold text-3xl mb-5">Servis Kami</h1>
                <div className="grid grid-cols-3 gap-4 w-full place-items-center">
                  <div className="w-[350px] h-[350px] flex justify-center relative overflow-hidden rounded-2xl">
                    <Image
                        src="/services/image 1.png"
                        alt="services 1"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top"}}
                        priority
                      />
                  </div>
                  <div className="w-[350px] h-[350px] relative overflow-hidden rounded-2xl">
                    <Image
                        src="/services/image 2.png"
                        alt="services 2"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top"}}
                        priority
                      />
                  </div>
                  <div className="w-[350px] h-[350px] relative overflow-hidden rounded-2xl">
                    <Image
                        src="/services/image 3.png"
                        alt="services 3"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top"}}
                        priority
                      />
                  </div>
                  <div className="w-[350px] h-[350px] relative overflow-hidden rounded-2xl">
                    <Image
                        src="/services/image 4.png"
                        alt="services 4"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center"}}
                        priority
                      />
                  </div>
                </div>
            </div>
          </div>
        </div>
        {/* Hero 4 */}
        <div className="w-full h-full mb-4 text-[#07A6E1] items-center inset-0 flex flex-col">
            <h1 className="font-bold items-start">Berita Terkini</h1>
            <div className="grid grid-cols-3 gap-4 max-w-5xl w-full">
              {[1, 2, 3, 4, 5, 6].map((icon) => (
                <div key={icon} className="w-full h-[300px] relative">
                    <Image
                        src={`/news/Image News ${icon}.png`}
                        alt={`icon-${icon}`}
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </div>
              ))}
            </div>
        </div>
      </section>
    </>
  );
}
