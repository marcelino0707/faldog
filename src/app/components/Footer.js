import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative">
        <div className="w-full h-[600px] overflow-hidden mb-4 relative">
            <Image
            src="/footer.png"
            alt="Home BG"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            />
            <div className="absolute inset-0 flex items-center justify-around w-full">
                <h2 className="text-white text-lg font-medium max-w-md">
                    Kami hadir untuk memberikan kepuasaan kepada pelanggan dan{" "}
                    <strong className="font-bold">Masyarakat</strong>
                </h2>
                <h2 className="text-white text-lg font-medium max-w-md">
                    Kami hadir untuk memberikan kepuasaan kepada pelanggan dan{" "}
                    <strong className="font-bold">Masyarakat</strong>
                </h2>
            </div>
        </div>
        </footer>
    );
}
