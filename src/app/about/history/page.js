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
          PT. Lingga Perdana didirikan pada 13 Mei 2002 dan awalnya bergerak di bidang pengelolaan limbah B3. Seiring perkembangan usaha dan didukung fasilitas yang memadai, perusahaan melebarkan sayap ke bidang jasa, supplier, shipping agent, serta niaga umum dan pengangkutan BBM darat/lautan, dengan perizinan resmi dari Dirjen Migas. Saat ini, PT. Lingga Perdana melayani pasokan BBM seperti Solar HSD dan Minyak Bakar MFO untuk industri, mobile bunker, serta kebutuhan masyarakat, dengan mutu produk yang sesuai standar. Berkantor pusat di Merak, Cilegon, Banten, perusahaan telah beroperasi di berbagai wilayah Indonesia dan menjangkau hingga tingkat internasional.
        </p>
      </div>
    </div>
  );
}