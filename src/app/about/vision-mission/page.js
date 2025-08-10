import Image from "next/image";

export default function VisionMission() {
  return (
    <div className="relative w-full h-[760px]">
      {/* Background Image */}
      <Image
        src="/visi-misi.png"
        alt="Visi Misi Perusahaan"
        fill
        style={{ objectFit: "cover", objectPosition: "top" }}
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
            Menjadi perusahaan Niaga  BBM terkemuka di tingkat Nasional dan mampu bersaing dalam pasar bebas di tingkat Internasional, karena keberhasilannya menyediakan dan mendistribusikan kebutuhan BBM kepada pelanggan dengan tepat waktu, tepat mutu dan tepat jumlah serta didukung sumber daya yang handal dna professional
          </p>
        </div>

        {/* Misi */}
        <div>
          <h3 className="font-bold">Misi Kami</h3>
          <p>
            Perusahaan mampu berperan dan berkontribusi dalam mengisi pembangunan masyarakat, bangsa, dan Negara Republik Indonesia, dengan turut serta memperkokoh kegiatan industri, transportasi dan pembangunan infrastruktur serta meningkatkan devisa melalui supply BBM
          </p>
        </div>
      </div>
    </div>
  );
}
