export const navigation = [
    { name: "Beranda", href: "/" },
    {   name: "Tentang Kami", 
        href: "/about",
        children: [
            { name: 'Sejarah', href: '/history' },
            { name: 'Visi dan Misi', href: '/vision-mission' },
            { name: 'Struktur Organisasi', href: '/organizational-structure' }
        ]
    },
    { name: "Servis", href: "/service" },
    { name: "Berita", href: "/news" },
    { name: "Kontak", href: "/contact" },
];
