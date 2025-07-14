import Image from "next/image";

export default function OrganizationalStructure() {
  return (
    <div className="w-full bg-white px-10 md:px-24 lg:px-40 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-2">
        Tentang Kami &rarr; Struktur Organisasi
      </div>

      {/* Title */}
      <h2 className="text-blue-600 font-semibold text-lg">Tentang Kami</h2>
      <h1 className="text-red-700 font-bold text-3xl mb-6">
        Struktur Organisasi
      </h1>

      {/* Struktur Organisasi Image */}
      <div className="w-full flex justify-center">
        <Image
          src="/organiz-structure.png"
          alt="Struktur Organisasi"
          width={1000}
          height={1200}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
