import Image from "next/image";
export default function History() {
    return (
    <div className="relative w-full h-[760px]">
      {/* Background Image */}
      <Image
        src="/sejarah.png"
        alt="Sejarah Perusahaan"
        fill
        style={{ objectFit: "cover", objectPosition: "top"  }}
        className="opacity-60"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-24 lg:px-40">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-2">
          Tentang Kami &rarr; Sejarah
        </div>

        {/* Title */}
        <h2 className="text-blue-600 font-semibold text-lg">Tentang Kami</h2>
        <h1 className="text-red-700 font-bold text-3xl mb-4">Sejarah</h1>

        {/* Description */}
        <p className="text-black max-w-3xl leading-relaxed">
          PT. Lingga Jaya Perkasa Line didirikan pada tanggal 30 bulan Juni tahun 2009 di Cilegon – Banten. Telah disahkan oleh instansi yang berwenang dan dihadiri oleh pemegang saham yang telah berkomitmen untuk membangun suatu perusahaan dengan maksud dan tujuan serta kegiatan usaha dibidang Pertambangan, Kontraktor, Supplier, Jasa, Heavy Duty Rental, General Trading, Perusahaan Bongkar Muat (PBM) dan jasa umum lainnya. Untuk mencapai maksud dan tujuan tersebut diatas perusahaan kami dapat melaksanakan kegiatan usaha dalam segala bidang pada umumnya.
        </p>
      </div>
    </div>
  );
}