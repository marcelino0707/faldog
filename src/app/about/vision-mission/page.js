import Image from "next/image";

export default function VisionMission() {
  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <Image
        src="/visi-misi.png"
        alt="Visi Misi Perusahaan"
        fill
        style={{ objectFit: "cover" }}
        className="opacity-60"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-24 lg:px-40">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-2">
          Tentang Kami &rarr; Visi & Misi
        </div>

        {/* Title */}
        <h2 className="text-blue-600 font-semibold text-lg">Tentang Kami</h2>
        <h1 className="text-red-700 font-bold text-3xl mb-4">Visi & Misi</h1>

        {/* Visi */}
        <div className="mb-4">
          <h3 className="font-bold">Visi Kami</h3>
          <p>
            Visi ingin menciptakan perusahaan yang bonavit dan mampu memberikan
            pelayanan yang terbaik terhadap pelanggan (customer)
          </p>
        </div>

        {/* Misi */}
        <div>
          <h3 className="font-bold">Misi Kami</h3>
          <p>
            Misi perusahaan berperan aktif untuk mengembangkan dan memberikan
            kepuasaan terhadap pelanggan (Customer) dan mampu menciptakan
            lapangan kerja guna membantu khususnya pada masyarakat dan umumnya
            dapat memberikan pemasukan pada negara
          </p>
        </div>
      </div>
    </div>
  );
}
