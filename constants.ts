
import { LevelConfig, LevelType, Question, Character, Difficulty, GalleryItem } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'c1',
    name: 'Budi',
    role: 'Siswa Rajin',
    image: 'https://cdn-icons-png.flaticon.com/512/2995/2995620.png', 
    perk: 'Semangat Tinggi'
  },
  {
    id: 'c2',
    name: 'Siti',
    role: 'Dokter Kecil',
    image: 'https://cdn-icons-png.flaticon.com/512/2995/2995656.png',
    perk: 'Teliti'
  },
  {
    id: 'c3',
    name: 'Edo',
    role: 'Pramuka',
    image: 'https://cdn-icons-png.flaticon.com/512/2995/2995462.png',
    perk: 'Pemberani'
  },
  {
    id: 'c4',
    name: 'Lani',
    role: 'Seniman Cilik',
    image: 'https://cdn-icons-png.flaticon.com/512/2995/2995658.png',
    perk: 'Kreatif'
  }
];

// Helper for Fast Image Loading (Bing Proxy)
// Removes style prompts to get better search results and loads instantly compared to AI generation
const getAIImage = (prompt: string, seedId: string) => {
    // Strip the style keywords to get a clean search query
    const query = prompt.replace(/, cartoon style, colorful, educational, children book illustration, 8k/g, '').trim();
    // Use Bing Thumbnail Proxy for fast loading
    return `https://tse2.mm.bing.net/th?q=${encodeURIComponent(query)}&w=800&h=600&c=7&rs=1`;
};

// BACKGROUND NUANSA NUSANTARA
export const RANDOM_BACKGROUNDS = [
  "https://iili.io/2uRJleR.jpg", // Candi Borobudur Landscape
  "https://iili.io/2uRJ0np.jpg", // Bali Rice Terrace
  "https://iili.io/2uRJujs.jpg", // Wayang Gunungan Texture
  "https://iili.io/2uRJXxt.jpg", // Batik Mega Mendung Pattern
];

// DATA GALERI JALAN-JALAN NUSANTARA (30 Slide)
export const GALLERY_DATA: GalleryItem[] = [
    { id: 'g1', title: 'Candi Borobudur', category: 'Wisata', description: 'Candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah. Dibangun pada abad ke-9 masa wangsa Syailendra.', image: getAIImage('Borobudur temple indonesia landscape majestic', 'g1') },
    { id: 'g2', title: 'Wayang Kulit', category: 'Budaya', description: 'Seni pertunjukan asli Indonesia yang berkembang di Jawa dan Bali. Diakui UNESCO sebagai Masterpiece of Oral and Intangible Heritage of Humanity.', image: getAIImage('Wayang kulit shadow puppet performance java', 'g2') },
    { id: 'g3', title: 'Rendang', category: 'Kuliner', description: 'Makanan khas Minangkabau yang dinobatkan sebagai salah satu makanan terenak di dunia. Dimasak dengan santan dan rempah-rempah dalam waktu lama.', image: getAIImage('Rendang beef spicy food indonesia delicious', 'g3') },
    { id: 'g4', title: 'Komodo', category: 'Fauna', description: 'Kadal terbesar di dunia yang hanya hidup di Pulau Komodo, Rinca, Flores, Gili Motang, dan Gili Dasami di Nusa Tenggara.', image: getAIImage('Komodo dragon lizard indonesia island', 'g4') },
    { id: 'g5', title: 'Raja Ampat', category: 'Wisata', description: 'Surga bawah laut di Papua Barat. Terkenal dengan keanekaragaman hayati laut terkaya di dunia.', image: getAIImage('Raja ampat islands coral reef papua', 'g5') },
    { id: 'g6', title: 'Rumah Gadang', category: 'Arsitektur', description: 'Rumah adat Minangkabau dengan atap runcing menyerupai tanduk kerbau (Goonjong). Tahan gempa dan unik.', image: getAIImage('Rumah gadang minangkabau traditional house', 'g6') },
    { id: 'g7', title: 'Tari Kecak', category: 'Seni', description: 'Tarian khas Bali yang dimainkan oleh puluhan laki-laki yang duduk melingkar sambil menyerukan "cak cak cak".', image: getAIImage('Kecak dance bali traditional performance fire', 'g7') },
    { id: 'g8', title: 'Batik', category: 'Budaya', description: 'Kain bergambar yang pembuatannya secara khusus dengan menuliskan malam pada kain. Warisan budaya dunia dari Indonesia.', image: getAIImage('Batik pattern cloth making canting indonesia', 'g8') },
    { id: 'g9', title: 'Angklung', category: 'Musik', description: 'Alat musik tradisional dari Jawa Barat yang terbuat dari bambu dan dimainkan dengan cara digoyangkan.', image: getAIImage('Angklung bamboo musical instrument sunda', 'g9') },
    { id: 'g10', title: 'Reog Ponorogo', category: 'Seni', description: 'Tarian tradisional dari Jawa Timur yang menampilkan topeng singa raksasa berhias bulu merak yang sangat berat.', image: getAIImage('Reog ponorogo mask dance java tiger peacock', 'g10') },
    { id: 'g11', title: 'Danau Toba', category: 'Wisata', description: 'Danau vulkanik terbesar di dunia yang terletak di Sumatera Utara. Di tengahnya terdapat Pulau Samosir.', image: getAIImage('Lake Toba samosir island sumatra landscape', 'g11') },
    { id: 'g12', title: 'Gunung Bromo', category: 'Wisata', description: 'Gunung berapi aktif di Jawa Timur yang terkenal dengan pemandangan matahari terbit dan kawahnya yang memukau.', image: getAIImage('Mount Bromo volcano sunrise east java', 'g12') },
    { id: 'g13', title: 'Candi Prambanan', category: 'Wisata', description: 'Kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9 masehi, dipersembahkan untuk Trimurti.', image: getAIImage('Prambanan temple hindu architecture yogyakarta', 'g13') },
    { id: 'g14', title: 'Nasi Tumpeng', category: 'Kuliner', description: 'Nasi kuning berbentuk kerucut yang disajikan dengan lauk-pauk. Simbol rasa syukur dan keselamatan.', image: getAIImage('Nasi tumpeng yellow rice cone indonesian food', 'g14') },
    { id: 'g15', title: 'Keris', category: 'Senjata', description: 'Senjata tikam golongan belati dengan bilah yang berkelok-kelok. Memiliki nilai spiritual dan seni tinggi.', image: getAIImage('Keris javanese dagger traditional weapon', 'g15') },
    { id: 'g16', title: 'Gamelan', category: 'Musik', description: 'Ensambel musik yang menonjolkan metalofon, gambang, gendang, dan gong. Berkembang di Jawa dan Bali.', image: getAIImage('Gamelan orchestra instruments java bali', 'g16') },
    { id: 'g17', title: 'Pura Ulun Danu', category: 'Wisata', description: 'Pura ikonik yang terletak di tepi Danau Beratan, Bedugul, Bali. Tampak seolah mengapung di atas air.', image: getAIImage('Pura ulun danu beratan bali temple lake', 'g17') },
    { id: 'g18', title: 'Labuan Bajo', category: 'Wisata', description: 'Gerbang menuju Taman Nasional Komodo. Terkenal dengan pemandangan laut, bukit, dan matahari terbenam.', image: getAIImage('Labuan bajo landscape sea island flores', 'g18') },
    { id: 'g19', title: 'Lompat Batu', category: 'Budaya', description: 'Tradisi Fahombo di Nias, Sumatera Utara. Pemuda melompati tumpukan batu setinggi 2 meter sebagai tanda kedewasaan.', image: getAIImage('Stone jumping nias fahombo tradition', 'g19') },
    { id: 'g20', title: 'Tari Saman', category: 'Seni', description: 'Tarian suku Gayo, Aceh yang mengandalkan kecepatan tepukan tangan dan gerakan badan yang serempak.', image: getAIImage('Saman dance aceh thousand hands traditional', 'g20') },
    { id: 'g21', title: 'Ir. Soekarno', category: 'Pahlawan', description: 'Proklamator Kemerdekaan Indonesia dan Presiden Pertama Republik Indonesia. Dikenal sebagai orator ulung.', image: getAIImage('Soekarno president indonesia speech historical', 'g21') },
    { id: 'g22', title: 'R.A. Kartini', category: 'Pahlawan', description: 'Pahlawan nasional pelopor kebangkitan perempuan pribumi. Dikenal dengan bukunya "Habis Gelap Terbitlah Terang".', image: getAIImage('Kartini indonesian heroine portrait vintage', 'g22') },
    { id: 'g23', title: 'Jenderal Sudirman', category: 'Pahlawan', description: 'Panglima Besar Tentara Nasional Indonesia pertama. Memimpin perang gerilya meski dalam keadaan sakit.', image: getAIImage('General Sudirman statue indonesia army', 'g23') },
    { id: 'g24', title: 'Masjid Istiqlal', category: 'Arsitektur', description: 'Masjid terbesar di Asia Tenggara yang terletak di Jakarta. Simbol kemerdekaan bangsa Indonesia.', image: getAIImage('Istiqlal mosque jakarta architecture grand', 'g24') },
    { id: 'g25', title: 'Orang Utan', category: 'Fauna', description: 'Kera besar asli Indonesia yang hidup di hutan hujan Kalimantan dan Sumatera. Hewan yang sangat cerdas.', image: getAIImage('Orangutan sumatra borneo jungle forest', 'g25') },
    { id: 'g26', title: 'Tongkonan', category: 'Arsitektur', description: 'Rumah adat masyarakat Toraja, Sulawesi Selatan. Atapnya melengkung menyerupai perahu.', image: getAIImage('Tongkonan toraja traditional house sulawesi', 'g26') },
    { id: 'g27', title: 'Honai', category: 'Arsitektur', description: 'Rumah adat suku di Papua (Dani). Berbentuk kerucut terbuat dari jerami untuk menahan hawa dingin.', image: getAIImage('Honai papua traditional house hut grass', 'g27') },
    { id: 'g28', title: 'Bunga Rafflesia', category: 'Flora', description: 'Bunga terbesar di dunia yang ditemukan di hutan hujan Sumatera dan Kalimantan. Dikenal sebagai bunga bangkai.', image: getAIImage('Rafflesia arnoldii flower giant jungle', 'g28') },
    { id: 'g29', title: 'Monas', category: 'Landmark', description: 'Monumen Nasional di Jakarta Pusat. Tugu setinggi 132 meter dengan lidah api berlapis emas di puncaknya.', image: getAIImage('Monas national monument jakarta landmark', 'g29') },
    { id: 'g30', title: 'Garuda Pancasila', category: 'Simbol', description: 'Lambang negara Indonesia dengan semboyan Bhinneka Tunggal Ika. Melambangkan kekuatan dan persatuan.', image: getAIImage('Garuda pancasila emblem symbol indonesia', 'g30') },
];

// --- 20 LEVEL CONFIGURATION + BONUS ---
export const LEVEL_CONFIGS: LevelConfig[] = [
  { id: 1, title: "BASA JAWA", subtitle: "Krama Inggil", type: LevelType.RAPID_FIRE, description: "Belajar sopan santun bahasa Jawa.", maxScore: 100, image: getAIImage('Javanese culture wayang batik cartoon', '101') },
  { id: 2, title: "ENGLISH", subtitle: "Basic Words", type: LevelType.RAPID_FIRE, description: "Dasar bahasa Inggris sehari-hari.", maxScore: 100, image: getAIImage('English alphabet abc cartoon education', '102') },
  { id: 3, title: "SAINS SERU", subtitle: "IPA Dasar", type: LevelType.RAPID_FIRE, description: "Pengetahuan alam dan lingkungan.", maxScore: 100, image: getAIImage('Science lab biology plants cartoon', '103') },
  { id: 4, title: "RUMAH ADAT", subtitle: "Arsitektur Nusantara", type: LevelType.RAPID_FIRE, description: "Mengenal tempat tinggal suku di Indonesia.", maxScore: 100, image: getAIImage('Traditional indonesian houses minangkabau joglo toraja', '104') },
  { id: 5, title: "DUNIA WAYANG", subtitle: "Tokoh Legenda", type: LevelType.RAPID_FIRE, description: "Mengenal Punakawan dan Pandawa.", maxScore: 100, image: getAIImage('Wayang kulit shadow puppet java character', '105') },
  { id: 6, title: "KOTA KITA", subtitle: "Geografi Indonesia", type: LevelType.RAPID_FIRE, description: "Tebak nama kota di Indonesia.", maxScore: 100, image: getAIImage('Map of indonesia islands cartoon', '106') },
  { id: 7, title: "MATEMATIKA 1", subtitle: "Tambah & Kurang", type: LevelType.RAPID_FIRE, description: "Hitung cepat penjumlahan dan pengurangan.", maxScore: 100, image: getAIImage('Math numbers addition subtraction cartoon', '107') },
  { id: 8, title: "MATEMATIKA 2", subtitle: "Kali & Bagi", type: LevelType.RAPID_FIRE, description: "Tantangan perkalian dan pembagian.", maxScore: 100, image: getAIImage('Multiplication division math symbols', '108') },
  { id: 9, title: "MATA UANG", subtitle: "Ekonomi Global", type: LevelType.RAPID_FIRE, description: "Mengenal mata uang negara dunia.", maxScore: 100, image: getAIImage('Money coins currency bills cartoon', '109') },
  { id: 10, title: "IBU KOTA", subtitle: "Keliling Dunia", type: LevelType.RAPID_FIRE, description: "Tebak ibu kota negara-negara.", maxScore: 100, image: getAIImage('World landmarks eiffel tower statue liberty', '110') },
  { id: 11, title: "AKSARA JAWA", subtitle: "Ha Na Ca Ra Ka", type: LevelType.RAPID_FIRE, description: "Membaca huruf tradisional Jawa.", maxScore: 100, image: getAIImage('Ancient javanese script scroll writing', '111') },
  { id: 12, title: "SANEPAN", subtitle: "Peribahasa Jawa", type: LevelType.RAPID_FIRE, description: "Tebak arti kiasan bahasa Jawa.", maxScore: 100, image: getAIImage('Javanese people talking wisdom cartoon', '112') },
  { id: 13, title: "KULINER", subtitle: "Makanan Khas", type: LevelType.RAPID_FIRE, description: "Lezatnya makanan tradisional Indonesia.", maxScore: 100, image: getAIImage('Indonesian food satay rendang fried rice', '113') },
  { id: 14, title: "LAGU DAERAH", subtitle: "Seni Suara", type: LevelType.RAPID_FIRE, description: "Melestarikan lagu nusantara.", maxScore: 100, image: getAIImage('Children singing choir music notes', '114') },
  { id: 15, title: "IPS DASAR", subtitle: "Pengetahuan Sosial", type: LevelType.RAPID_FIRE, description: "Kehidupan sosial dan lingkungan.", maxScore: 100, image: getAIImage('Social studies community helpers', '115') },
  { id: 16, title: "PAHLAWAN", subtitle: "Jasa Mereka", type: LevelType.RAPID_FIRE, description: "Mengenal pahlawan nasional.", maxScore: 100, image: getAIImage('Indonesian national heroes statue historical', '116') },
  { id: 17, title: "PRESIDEN", subtitle: "Pemimpin Kita", type: LevelType.RAPID_FIRE, description: "Urutan presiden Indonesia.", maxScore: 100, image: getAIImage('Presidential palace indonesia flag', '117') },
  { id: 18, title: "DOA HARIAN", subtitle: "Religi", type: LevelType.RAPID_FIRE, description: "Hafalan doa sehari-hari.", maxScore: 100, image: getAIImage('Children praying peaceful mosque', '118') },
  { id: 19, title: "MAJAPAHIT", subtitle: "Sejarah Kuno", type: LevelType.RAPID_FIRE, description: "Kejayaan kerajaan Majapahit.", maxScore: 100, image: getAIImage('Majapahit temple gajah mada kris', '119') },
  { id: 20, title: "PANCASILA", subtitle: "Dasar Negara", type: LevelType.RAPID_FIRE, description: "Memahami lambang dan sila Pancasila.", maxScore: 100, image: getAIImage('Garuda pancasila emblem shield', '120') },
  // BONUS LEVEL
  { id: 99, title: "BONUS", subtitle: "Jalan-Jalan", type: LevelType.BONUS, description: "Keliling Nusantara mengenal kekayaan Indonesia.", maxScore: 0, image: "https://tse2.mm.bing.net/th?q=Peta+Indonesia+Kartun&w=800&h=600&c=7&rs=1" }
];

// --- GENERATOR LOGIC ---

// Simple Key-Value pair for data driven questions
interface DataPair { q: string, a: string }

// DATA BANKS (30 items per category to support Easy/Medium/Hard)
const DATA_BANKS: Record<number, DataPair[]> = {
    1: [ // Basa Jawa (Ngoko -> Krama Inggil)
        {q:"Mangan", a:"Dahar"}, {q:"Turu", a:"Sare"}, {q:"Ngombe", a:"Ngunjuk"}, {q:"Omah", a:"Dalem"}, {q:"Jeneng", a:"Asma"},
        {q:"Lunga", a:"Tindak"}, {q:"Teka", a:"Rawuh"}, {q:"Lara", a:"Gerah"}, {q:"Mandi", a:"Siram"}, {q:"Tuku", a:"Mundhut"}, // Easy
        {q:"Ndeleng", a:"Mirsani"}, {q:"Krungu", a:"Mireng"}, {q:"Ngomong", a:"Ngendika"}, {q:"Wenehi", a:"Paringi"}, {q:"Gawa", a:"Ngasta"},
        {q:"Sikil", a:"Ampeyan"}, {q:"Sirah", a:"Mustaka"}, {q:"Tangan", a:"Asta"}, {q:"Untu", a:"Waja"}, {q:"Mripat", a:"Paningal"}, // Medium
        {q:"Anak", a:"Putra"}, {q:"Bapak", a:"Rama"}, {q:"Ibu", a:"Ibu"}, {q:"Mbah", a:"Eyang"}, {q:"Adhi", a:"Rayi"},
        {q:"Kakak", a:"Kakang"}, {q:"Bojo", a:"Garwa"}, {q:"Awe", a:"Atur"}, {q:"Jaluk", a:"Nyuwun"}, {q:"Lungguh", a:"Pinarak"} // Hard
    ],
    2: [ // English (Indo -> Eng)
        {q:"Kucing", a:"Cat"}, {q:"Anjing", a:"Dog"}, {q:"Buku", a:"Book"}, {q:"Apel", a:"Apple"}, {q:"Merah", a:"Red"},
        {q:"Satu", a:"One"}, {q:"Guru", a:"Teacher"}, {q:"Sekolah", a:"School"}, {q:"Mata", a:"Eye"}, {q:"Pagi", a:"Morning"}, // Easy
        {q:"Meja", a:"Table"}, {q:"Kursi", a:"Chair"}, {q:"Papan Tulis", a:"Blackboard"}, {q:"Kapur", a:"Chalk"}, {q:"Penghapus", a:"Eraser"},
        {q:"Tas", a:"Bag"}, {q:"Sepatu", a:"Shoes"}, {q:"Baju", a:"Clothes"}, {q:"Celana", a:"Pants"}, {q:"Topi", a:"Hat"}, // Medium
        {q:"Perpustakaan", a:"Library"}, {q:"Kantin", a:"Canteen"}, {q:"Lapangan", a:"Field"}, {q:"Upacara", a:"Ceremony"}, {q:"Bendera", a:"Flag"},
        {q:"Kepala Sekolah", a:"Principal"}, {q:"Kamus", a:"Dictionary"}, {q:"Pelajaran", a:"Subject"}, {q:"Istirahat", a:"Break"}, {q:"PR", a:"Homework"} // Hard
    ],
    3: [ // Sains
        {q:"Pemakan Tumbuhan", a:"Herbivora"}, {q:"Pemakan Daging", a:"Karnivora"}, {q:"Pemakan Segala", a:"Omnivora"}, {q:"Bernapas Ikan", a:"Insang"}, {q:"Pusat Tata Surya", a:"Matahari"},
        {q:"Planet Biru", a:"Bumi"}, {q:"Satelit Bumi", a:"Bulan"}, {q:"Reptil", a:"Buaya"}, {q:"Amfibi", a:"Katak"}, {q:"Mamalia Terbang", a:"Kelelawar"},
        {q:"Fotosintesis", a:"Daun"}, {q:"Alat Gerak Burung", a:"Sayap"}, {q:"Pencerna Makanan", a:"Lambung"}, {q:"Pemompa Darah", a:"Jantung"}, {q:"Penyaring Udara", a:"Hidung"},
        {q:"Perubahan Padat ke Cair", a:"Mencair"}, {q:"Cair ke Gas", a:"Menguap"}, {q:"Gas ke Cair", a:"Mengembun"}, {q:"Padat ke Gas", a:"Menyublim"}, {q:"Sumber Energi Utama", a:"Matahari"},
        {q:"Planet Cincin", a:"Saturnus"}, {q:"Planet Merah", a:"Mars"}, {q:"Planet Terbesar", a:"Jupiter"}, {q:"Bintang Fajar", a:"Venus"}, {q:"Planet Terkecil", a:"Merkurius"},
        {q:"Hewan Menyusui", a:"Mamalia"}, {q:"Hewan Bertelur", a:"Ovipar"}, {q:"Melahirkan", a:"Vivipar"}, {q:"Bertelur Melahirkan", a:"Ovovivipar"}, {q:"Tulang Belakang", a:"Vertebrata"}
    ],
    4: [ // Rumah Adat
        {q:"Sumatera Barat", a:"Rumah Gadang"}, {q:"Papua", a:"Honai"}, {q:"Jawa Tengah", a:"Joglo"}, {q:"Toraja", a:"Tongkonan"}, {q:"Aceh", a:"Krong Bade"},
        {q:"Sumatera Utara", a:"Bolon"}, {q:"Riau", a:"Selaso Jatuh Kembar"}, {q:"Jambi", a:"Panggung"}, {q:"Bengkulu", a:"Bubungan Lima"}, {q:"Lampung", a:"Nuwo Sesat"},
        {q:"DKI Jakarta", a:"Rumah Kebaya"}, {q:"Jawa Barat", a:"Kasepuhan"}, {q:"Bali", a:"Gapura Candi Bentar"}, {q:"NTB", a:"Dalam Loka"}, {q:"NTT", a:"Mbaru Niang"},
        {q:"Kalimantan Barat", a:"Rumah Panjang"}, {q:"Kalimantan Tengah", a:"Rumah Betang"}, {q:"Kalimantan Selatan", a:"Bubungan Tinggi"}, {q:"Kalimantan Timur", a:"Lamin"}, {q:"Sulawesi Utara", a:"Walewangko"},
        {q:"Sulawesi Tengah", a:"Souraja"}, {q:"Sulawesi Tenggara", a:"Buton"}, {q:"Sulawesi Selatan", a:"Tongkonan"}, {q:"Gorontalo", a:"Dulohupa"}, {q:"Maluku", a:"Baileo"},
        {q:"Maluku Utara", a:"Sasadu"}, {q:"Papua Barat", a:"Mod Aki Aksa"}, {q:"Banten", a:"Badui"}, {q:"Madura", a:"Taneyan Lanjhang"}, {q:"Sumatera Selatan", a:"Limas"}
    ],
    5: [ // Wayang
        {q:"Punakawan Gemuk", a:"Semar"}, {q:"Punakawan Hidung Panjang", a:"Petruk"}, {q:"Punakawan Mata Juling", a:"Gareng"}, {q:"Punakawan Bibir Dower", a:"Bagong"}, {q:"Pandawa Tertua", a:"Yudhistira"},
        {q:"Pandawa Terkuat", a:"Bima"}, {q:"Pandawa Terganteng", a:"Arjuna"}, {q:"Kembar Pandawa 1", a:"Nakula"}, {q:"Kembar Pandawa 2", a:"Sadewa"}, {q:"Raja Astina", a:"Duryodana"},
        {q:"Ayah Pandawa", a:"Pandu"}, {q:"Ibu Pandawa (3)", a:"Kunti"}, {q:"Ibu Nakula Sadewa", a:"Madrim"}, {q:"Guru Pandawa", a:"Drona"}, {q:"Kakek Pandawa", a:"Abiyasa"},
        {q:"Senjata Bima", a:"Kuku Pancanaka"}, {q:"Senjata Arjuna", a:"Panah Pasopati"}, {q:"Senjata Kresna", a:"Cakra"}, {q:"Senjata Yudhistira", a:"Jamus Kalimasada"}, {q:"Kerajaan Yudhistira", a:"Amarta"},
        {q:"Kerajaan Kresna", a:"Dwarawati"}, {q:"Musuh Pandawa", a:"Kurawa"}, {q:"Jumlah Kurawa", a:"100"}, {q:"Paman Kurawa Licik", a:"Sengkuni"}, {q:"Ksatria Karna", a:"Basukarna"},
        {q:"Istri Arjuna", a:"Sembadra"}, {q:"Anak Bima", a:"Gatotkaca"}, {q:"Anak Arjuna", a:"Abimanyu"}, {q:"Perang Besar", a:"Baratayuda"}, {q:"Penyebar Agama", a:"Walisongo"}
    ],
    6: [ // Kota
        {q:"Ibukota RI", a:"Jakarta"}, {q:"Kota Pahlawan", a:"Surabaya"}, {q:"Kota Pelajar", a:"Yogyakarta"}, {q:"Kota Kembang", a:"Bandung"}, {q:"Kota Hujan", a:"Bogor"},
        {q:"Kota Pempek", a:"Palembang"}, {q:"Kota Gudeg", a:"Yogyakarta"}, {q:"Kota Lumpia", a:"Semarang"}, {q:"Kota Apel", a:"Malang"}, {q:"Serambi Mekkah", a:"Aceh"},
        {q:"Kota Khatulistiwa", a:"Pontianak"}, {q:"Kota Daeng", a:"Makassar"}, {q:"Kota Manise", a:"Ambon"}, {q:"Kota Batik", a:"Pekalongan"}, {q:"Kota Udang", a:"Cirebon"},
        {q:"Kota Brem", a:"Madiun"}, {q:"Kota Tahu", a:"Kediri"}, {q:"Kota Reog", a:"Ponorogo"}, {q:"Kota Wali", a:"Demak"}, {q:"Kota Kretek", a:"Kudus"},
        {q:"Paris van Java", a:"Bandung"}, {q:"Venesia dari Timur", a:"Palembang"}, {q:"Kota Seribu Sungai", a:"Banjarmasin"}, {q:"Kota Minyak", a:"Balikpapan"}, {q:"Kota Tepian", a:"Samarinda"},
        {q:"Kota Susu", a:"Boyolali"}, {q:"Kota Salak", a:"Padangsidimpuan"}, {q:"Kota Bahari", a:"Tegal"}, {q:"Kota Ukir", a:"Jepara"}, {q:"Kota Gaplek", a:"Wonogiri"}
    ],
    // 7 & 8 are Math (Algorithmic)
    9: [ // Mata Uang
        {q:"Indonesia", a:"Rupiah"}, {q:"Malaysia", a:"Ringgit"}, {q:"Singapura", a:"Dolar Singapura"}, {q:"Thailand", a:"Baht"}, {q:"Filipina", a:"Peso"},
        {q:"Jepang", a:"Yen"}, {q:"Korea Selatan", a:"Won"}, {q:"China", a:"Yuan"}, {q:"India", a:"Rupee"}, {q:"Arab Saudi", a:"Riyal"},
        {q:"Amerika Serikat", a:"Dolar AS"}, {q:"Inggris", a:"Poundsterling"}, {q:"Eropa", a:"Euro"}, {q:"Australia", a:"Dolar Australia"}, {q:"Rusia", a:"Rubel"},
        {q:"Turki", a:"Lira"}, {q:"Vietnam", a:"Dong"}, {q:"Laos", a:"Kip"}, {q:"Kamboja", a:"Riel"}, {q:"Myanmar", a:"Kyat"},
        {q:"Brunei", a:"Dolar Brunei"}, {q:"Timor Leste", a:"Dolar AS"}, {q:"Hong Kong", a:"Dolar HK"}, {q:"Mesir", a:"Pound Mesir"}, {q:"Brazil", a:"Real"},
        {q:"Argentina", a:"Peso"}, {q:"Meksiko", a:"Peso"}, {q:"Kanada", a:"Dolar Kanada"}, {q:"Swiss", a:"Franc"}, {q:"Afrika Selatan", a:"Rand"}
    ],
    10: [ // Ibu Kota Dunia
        {q:"Jepang", a:"Tokyo"}, {q:"Korea Selatan", a:"Seoul"}, {q:"China", a:"Beijing"}, {q:"Inggris", a:"London"}, {q:"Perancis", a:"Paris"},
        {q:"Amerika Serikat", a:"Washington D.C."}, {q:"Arab Saudi", a:"Riyadh"}, {q:"Malaysia", a:"Kuala Lumpur"}, {q:"Thailand", a:"Bangkok"}, {q:"Singapura", a:"Singapura"},
        {q:"Filipina", a:"Manila"}, {q:"Vietnam", a:"Hanoi"}, {q:"Rusia", a:"Moskow"}, {q:"Jerman", a:"Berlin"}, {q:"Italia", a:"Roma"},
        {q:"Spanyol", a:"Madrid"}, {q:"Belanda", a:"Amsterdam"}, {q:"Mesir", a:"Kairo"}, {q:"Turki", a:"Ankara"}, {q:"India", a:"New Delhi"},
        {q:"Australia", a:"Canberra"}, {q:"Kanada", a:"Ottawa"}, {q:"Brazil", a:"Brasilia"}, {q:"Argentina", a:"Buenos Aires"}, {q:"Portugal", a:"Lisbon"},
        {q:"Belgia", a:"Brussels"}, {q:"Swiss", a:"Bern"}, {q:"Swedia", a:"Stockholm"}, {q:"Norwegia", a:"Oslo"}, {q:"Iran", a:"Teheran"}
    ],
    11: [ // Aksara Jawa (Transliteration/Types)
        {q:"Huruf Ha", a:"ꦲ"}, {q:"Huruf Na", a:"ꦤ"}, {q:"Huruf Ca", a:"ꦕ"}, {q:"Huruf Ra", a:"ꦫ"}, {q:"Huruf Ka", a:"ꦏ"},
        {q:"Huruf Da", a:"ꦢ"}, {q:"Huruf Ta", a:"ꦠ"}, {q:"Huruf Sa", a:"ꦱ"}, {q:"Huruf Wa", a:"ꦮ"}, {q:"Huruf La", a:"ꦭ"},
        {q:"Sandhangan i", a:"Wulu"}, {q:"Sandhangan u", a:"Suku"}, {q:"Sandhangan é", a:"Taling"}, {q:"Sandhangan e (pepet)", a:"Pepet"}, {q:"Sandhangan o", a:"Taling Tarung"},
        {q:"Sigeg r", a:"Layar"}, {q:"Sigeg ng", a:"Cecak"}, {q:"Sigeg h", a:"Wignyan"}, {q:"Pangkon", a:"Paten"}, {q:"Pasangan Ha", a:"Sejajar"},
        {q:"Jumlah Aksara", a:"20"}, {q:"Legena", a:"Huruf Dasar"}, {q:"Sandhangan Swara", a:"Vokal"}, {q:"Sandhangan Panyigeg", a:"Konsonan Mati"}, {q:"Pada", a:"Tanda Baca"},
        {q:"Adeg-adeg", a:"Awal Kalimat"}, {q:"Pada Lingsa", a:"Koma"}, {q:"Pada Lungsi", a:"Titik"}, {q:"Angka 1", a:"꧑"}, {q:"Angka 5", a:"꧕"}
    ],
    12: [ // Sanepan
        {q:"Abang Dluwang", a:"Pucet"}, {q:"Pait Madu", a:"Legi"}, {q:"Arang Kranjang", a:"Kerep"}, {q:"Landhep Dengkul", a:"Bodho"}, {q:"Jero Tapak Meri", a:"Cethek"},
        {q:"Bunter Tawon", a:"Lonjong"}, {q:"Anteng Kitiran", a:"Polah"}, {q:"Bratawali Gula", a:"Pait"}, {q:"Kecut Gula", a:"Legi"}, {q:"Peret Beton", a:"Lunyu"},
        {q:"Legi Buwere", a:"Pait"}, {q:"Kuru Semangka", a:"Lemu"}, {q:"Kandel Kulit Bawang", a:"Tipis"}, {q:"Gedhe Gurem", a:"Cilik"}, {q:"Resik Got", a:"Kotor"},
        {q:"Padhang Areng", a:"Peteng"}, {q:"Rawis Enceng", a:"Luwes"}, {q:"Amba Godhong Kelor", a:"Ciyut"}, {q:"Anteb Kapas", a:"Enteng"}, {q:"Awet Gedhang Goreng", a:"Cepet"},
        {q:"Banther Keong", a:"Alon"}, {q:"Bening Leri", a:"Buthek"}, {q:"Cagak Omah", a:"Saka"}, {q:"Dhuwur Kencur", a:"Endhek"}, {q:"Ulat Wengi", a:"Peteng"},
        {q:"Wedi Getih", a:"Wani"}, {q:"Utang Nyawa", a:"Paten"}, {q:"Tamba Teka", a:"Lara Lunga"}, {q:"Renggang Gula", a:"Raket"}, {q:"Ndomplong", a:"Ngangong"}
    ],
    13: [ // Kuliner
        {q:"Yogyakarta", a:"Gudeg"}, {q:"Palembang", a:"Pempek"}, {q:"Padang", a:"Rendang"}, {q:"Jakarta", a:"Kerak Telor"}, {q:"Surabaya", a:"Rujak Cingur"},
        {q:"Semarang", a:"Lumpia"}, {q:"Madiun", a:"Pecel"}, {q:"Ponorogo", a:"Sate Ayam"}, {q:"Madura", a:"Sate"}, {q:"Makassar", a:"Coto"},
        {q:"Manado", a:"Bubur Tinutuan"}, {q:"Papua", a:"Papeda"}, {q:"Aceh", a:"Mie Aceh"}, {q:"Medan", a:"Bika Ambon"}, {q:"Bandung", a:"Siomay"},
        {q:"Cirebon", a:"Empal Gentong"}, {q:"Lamongan", a:"Soto"}, {q:"Kudus", a:"Soto Kerbau"}, {q:"Bali", a:"Ayam Betutu"}, {q:"Lombok", a:"Ayam Taliwang"},
        {q:"Banjar", a:"Soto Banjar"}, {q:"Banjarmasin", a:"Ketupat Kandangan"}, {q:"Belitung", a:"Mie Atep"}, {q:"Lampung", a:"Seruit"}, {q:"Banten", a:"Sate Bandeng"},
        {q:"Betawi", a:"Soto Betawi"}, {q:"Solo", a:"Nasi Liwet"}, {q:"Pekalongan", a:"Nasi Megono"}, {q:"Tegal", a:"Sate Kambing"}, {q:"Purwokerto", a:"Mendoan"}
    ],
    14: [ // Lagu Daerah
        {q:"Gundul Pacul", a:"Jawa Tengah"}, {q:"Ampar Pisang", a:"Kalsel"}, {q:"Yamko Rambe", a:"Papua"}, {q:"Manuk Dadali", a:"Jawa Barat"}, {q:"Rasa Sayange", a:"Maluku"},
        {q:"Apuse", a:"Papua"}, {q:"Kicir-Kicir", a:"Jakarta"}, {q:"Soleram", a:"Riau"}, {q:"Bungong Jeumpa", a:"Aceh"}, {q:"Rek Ayo Rek", a:"Jawa Timur"},
        {q:"Suwe Ora Jamu", a:"Jawa Tengah"}, {q:"Bubuy Bulan", a:"Jawa Barat"}, {q:"Cik Cik Periuk", a:"Kalbar"}, {q:"Anak Kambing Saya", a:"NTT"}, {q:"Potong Bebek", a:"NTT"},
        {q:"O Ina Ni Keke", a:"Sulut"}, {q:"Si Patokaan", a:"Sulut"}, {q:"Anging Mamiri", a:"Sulsel"}, {q:"Burung Kakatua", a:"Maluku"}, {q:"Sajojo", a:"Papua"},
        {q:"Jali-Jali", a:"Jakarta"}, {q:"Tokecang", a:"Jawa Barat"}, {q:"Cublak Suweng", a:"Jawa Tengah"}, {q:"Tanduk Majeng", a:"Jawa Timur"}, {q:"Paris Barantai", a:"Kalsel"},
        {q:"Indung-Indung", a:"Kaltim"}, {q:"Kampuang Nan Jauh", a:"Sumbar"}, {q:"Ayam Den Lapeh", a:"Sumbar"}, {q:"Sinanggar Tullo", a:"Sumut"}, {q:"Butet", a:"Sumut"}
    ],
    15: [ // IPS Dasar
        {q:"Bentuk Negara", a:"Republik"}, {q:"Kepala Negara", a:"Presiden"}, {q:"Dasar Negara", a:"Pancasila"}, {q:"Hukum Dasar", a:"UUD 1945"}, {q:"Semboyan", a:"Bhinneka Tunggal Ika"},
        {q:"Lagu Kebangsaan", a:"Indonesia Raya"}, {q:"Warna Bendera", a:"Merah Putih"}, {q:"Hari Merdeka", a:"17 Agustus"}, {q:"Ibukota", a:"Jakarta"}, {q:"Mata Uang", a:"Rupiah"},
        {q:"Benua Kita", a:"Asia"}, {q:"Samudra Selatan", a:"Hindia"}, {q:"Samudra Timur", a:"Pasifik"}, {q:"Negara Tetangga", a:"Malaysia"}, {q:"Jumlah Provinsi", a:"38"},
        {q:"Pulau Terpadat", a:"Jawa"}, {q:"Pulau Terbesar", a:"Kalimantan"}, {q:"Gunung Tertinggi", a:"Jaya Wijaya"}, {q:"Danau Terbesar", a:"Toba"}, {q:"Candi Buddha", a:"Borobudur"},
        {q:"Candi Hindu", a:"Prambanan"}, {q:"Suku Jakarta", a:"Betawi"}, {q:"Suku Jabar", a:"Sunda"}, {q:"Suku Jateng", a:"Jawa"}, {q:"Suku Sulsel", a:"Bugis"},
        {q:"Suku Sumut", a:"Batak"}, {q:"Suku Sumbar", a:"Minang"}, {q:"Suku Papua", a:"Asmat"}, {q:"Kerajaan Islam 1", a:"Samudra Pasai"}, {q:"Kerajaan Hindu 1", a:"Kutai"}
    ],
    16: [ // Pahlawan
        {q:"Proklamator", a:"Soekarno"}, {q:"Wakil Proklamator", a:"Hatta"}, {q:"Pendidikan", a:"Ki Hajar Dewantara"}, {q:"Emansipasi", a:"Kartini"}, {q:"Surabaya", a:"Bung Tomo"},
        {q:"Gerilya", a:"Sudirman"}, {q:"Maluku", a:"Pattimura"}, {q:"Makassar", a:"Hasanuddin"}, {q:"Diponegoro", a:"Pangeran Diponegoro"}, {q:"Padri", a:"Imam Bonjol"},
        {q:"Aceh Wanita", a:"Cut Nyak Dien"}, {q:"Bandung Lautan Api", a:"Moh Toha"}, {q:"Sumpah Pemuda", a:"M. Yamin"}, {q:"Lagu Indonesia Raya", a:"WR Supratman"}, {q:"Batak", a:"Sisingamangaraja"},
        {q:"Banjar", a:"Pangeran Antasari"}, {q:"Puputan Margarana", a:"Ngurah Rai"}, {q:"Wanita Manado", a:"Maria Walanda Maramis"}, {q:"Dewi Sartika", a:"Jawa Barat"}, {q:"Martha Tiahahu", a:"Maluku"},
        {q:"Jenderal Revolusi", a:"Ahmad Yani"}, {q:"Supersemar", a:"Soeharto"}, {q:"Bapak Koperasi", a:"Hatta"}, {q:"Pahlawan Revolusi", a:"Pierre Tendean"}, {q:"Supriyadi", a:"PETA"},
        {q:"Teuku Umar", a:"Aceh"}, {q:"Dr Sutomo", a:"Budi Utomo"}, {q:"HOS Cokroaminoto", a:"Sarekat Islam"}, {q:"KH Ahmad Dahlan", a:"Muhammadiyah"}, {q:"KH Hasyim Asyari", a:"NU"}
    ],
    17: [ // Presiden
        {q:"Ke-1", a:"Soekarno"}, {q:"Ke-2", a:"Soeharto"}, {q:"Ke-3", a:"Habibie"}, {q:"Ke-4", a:"Gus Dur"}, {q:"Ke-5", a:"Megawati"},
        {q:"Ke-6", a:"SBY"}, {q:"Ke-7", a:"Jokowi"}, {q:"Wakil ke-1", a:"Hatta"}, {q:"Wakil ke-2", a:"Hamengkubuwono IX"}, {q:"Wanita Pertama", a:"Megawati"},
        {q:"Bapak Pembangunan", a:"Soeharto"}, {q:"Bapak Teknologi", a:"Habibie"}, {q:"Bapak Pluralisme", a:"Gus Dur"}, {q:"Reformasi", a:"1998"}, {q:"Pemilu Pertama", a:"1955"},
        {q:"Lama Jabatan", a:"5 Tahun"}, {q:"Maksimal Periode", a:"2 Periode"}, {q:"Istana Bogor", a:"Jawa Barat"}, {q:"Istana Merdeka", a:"Jakarta"}, {q:"Istana Tampaksiring", a:"Bali"},
        {q:"Wakil Jokowi 1", a:"Jusuf Kalla"}, {q:"Wakil Jokowi 2", a:"Maruf Amin"}, {q:"Wakil SBY 1", a:"Jusuf Kalla"}, {q:"Wakil SBY 2", a:"Boediono"}, {q:"Wakil Soekarno", a:"Hatta"},
        {q:"Kabinet", a:"Menteri"}, {q:"Melantik Presiden", a:"MPR"}, {q:"G30S/PKI", a:"1965"}, {q:"Dekrit Presiden", a:"5 Juli 1959"}, {q:"Tritura", a:"1966"}
    ],
    18: [ // Doa
        {q:"Makan", a:"Allahumma barik lana"}, {q:"Tidur", a:"Bismika Allahumma"}, {q:"Bangun", a:"Alhamdulillahil ladzi"}, {q:"WC Masuk", a:"Allahumma inni audzubika"}, {q:"WC Keluar", a:"Ghufranaka"},
        {q:"Cermin", a:"Kama hassanta khalqi"}, {q:"Orang Tua", a:"Rabbighfirli waliwalidayya"}, {q:"Dunia Akhirat", a:"Rabbana atina"}, {q:"Ilmu", a:"Rabbi zidni ilma"}, {q:"Kendaraan", a:"Subhanalladzi sakhkhara"},
        {q:"Hujan", a:"Allahumma soyyiban"}, {q:"Masjid Masuk", a:"Allahummaftah li"}, {q:"Masjid Keluar", a:"Allahumma inni as'aluka"}, {q:"Pakaian", a:"Alhamdulillahil ladzi"}, {q:"Sakit", a:"Allahumma rabbannas"},
        {q:"Bersin", a:"Alhamdulillah"}, {q:"Jawab Bersin", a:"Yarhamukallah"}, {q:"Lupa", a:"Subhanaman la yanamu"}, {q:"Mau Belajar", a:"Rodhitu billahi rabba"}, {q:"Selamat", a:"Allahumma inna nas'aluka"},
        {q:"Mimpi Buruk", a:"Audzubillah"}, {q:"Mandi", a:"Nawaitul ghusla"}, {q:"Wudhu", a:"Nawaitul wudhu"}, {q:"Puasa", a:"Nawaitu sauma"}, {q:"Buka Puasa", a:"Allahumma laka sumtu"},
        {q:"Rumah Keluar", a:"Bismillahi tawakkaltu"}, {q:"Rumah Masuk", a:"Assalamu'alaina"}, {q:"Naik Kapal", a:"Bismillahi majreha"}, {q:"Senja", a:"Allahumma hadza iqbalu"}, {q:"Pagi", a:"Allahumma bika asbahna"}
    ],
    19: [ // Majapahit
        {q:"Pendiri", a:"Raden Wijaya"}, {q:"Raja Terkenal", a:"Hayam Wuruk"}, {q:"Patih", a:"Gajah Mada"}, {q:"Sumpah", a:"Palapa"}, {q:"Semboyan", a:"Bhinneka Tunggal Ika"},
        {q:"Kitab Sutasoma", a:"Mpu Tantular"}, {q:"Kitab Negarakertagama", a:"Mpu Prapanca"}, {q:"Pusat Kerajaan", a:"Trowulan"}, {q:"Agama", a:"Hindu Buddha"}, {q:"Abad ke", a:"13-15"},
        {q:"Pemberontakan", a:"Kuti"}, {q:"Perang", a:"Bubat"}, {q:"Raja Wanita", a:"Tribhuwana"}, {q:"Raja Terakhir", a:"Brawijaya V"}, {q:"Putra Raden Wijaya", a:"Jayanegara"},
        {q:"Patih Nala", a:"Panglima Laut"}, {q:"Candi Penataran", a:"Blitar"}, {q:"Candi Tikus", a:"Trowulan"}, {q:"Gapura Bajang Ratu", a:"Trowulan"}, {q:"Surya Majapahit", a:"Lambang"},
        {q:"Mata Uang", a:"Gobog"}, {q:"Pelabuhan", a:"Ujung Galuh"}, {q:"Sungai", a:"Brantas"}, {q:"Runtuh", a:"Demak"}, {q:"Tahun Runtuh", a:"1478"},
        {q:"Sirna Ilang", a:"1400 Saka"}, {q:"Gajah Mada Wafat", a:"1364"}, {q:"Hayam Wuruk Wafat", a:"1389"}, {q:"Paregreg", a:"Perang Saudara"}, {q:"Dhammacikitsa", a:"Hukum"}
    ],
    20: [ // Pancasila
        {q:"Sila 1", a:"Bintang"}, {q:"Sila 2", a:"Rantai"}, {q:"Sila 3", a:"Pohon Beringin"}, {q:"Sila 4", a:"Kepala Banteng"}, {q:"Sila 5", a:"Padi dan Kapas"},
        {q:"Warna Bintang", a:"Emas"}, {q:"Latar Bintang", a:"Hitam"}, {q:"Latar Banteng", a:"Merah"}, {q:"Latar Pohon", a:"Putih"}, {q:"Jumlah Bulu Sayap", a:"17"},
        {q:"Bulu Ekor", a:"8"}, {q:"Bulu Pangkal Ekor", a:"19"}, {q:"Bulu Leher", a:"45"}, {q:"Kaki Garuda", a:"Pita"}, {q:"Tulisan Pita", a:"Bhinneka Tunggal Ika"},
        {q:"Ketuhanan", a:"Maha Esa"}, {q:"Kemanusiaan", a:"Adil Beradab"}, {q:"Persatuan", a:"Indonesia"}, {q:"Kerakyatan", a:"Hikmat Kebijaksanaan"}, {q:"Keadilan", a:"Sosial"},
        {q:"Burung", a:"Garuda"}, {q:"Perisai", a:"Dada"}, {q:"Pencipta Lambang", a:"Sultan Hamid II"}, {q:"Tanggal Lahir", a:"1 Juni"}, {q:"Pengusul Nama", a:"Soekarno"},
        {q:"Piagam", a:"Jakarta"}, {q:"BPUPKI", a:"Dokuritsu Junbi Cosakai"}, {q:"PPKI", a:"Dokuritsu Junbi Inkai"}, {q:"Ketua BPUPKI", a:"Radjiman"}, {q:"Panitia Sembilan", a:"Perumus"}
    ]
};

// --- QUESTION GENERATOR FUNCTION ---
// Creates 10 questions based on difficulty level from the data bank
const generateFromBank = (levelId: number, difficulty: Difficulty): Question[] => {
    const bank = DATA_BANKS[levelId];
    if (!bank) return []; // Should not happen for handled levels

    let startIndex = 0;
    let endIndex = 10;

    if (difficulty === Difficulty.MEDIUM) {
        startIndex = 10;
        endIndex = 20;
    } else if (difficulty === Difficulty.HARD || difficulty === Difficulty.ETHICS) {
        startIndex = 20;
        endIndex = 30;
    }

    // Get the slice of 10 items for this difficulty
    // Fallback: If bank is smaller than 30, wrap around or randomize from all
    const items = bank.slice(startIndex, endIndex);
    if (items.length < 10) {
        // Fill remaining from random items in bank
        while(items.length < 10) {
            items.push(bank[Math.floor(Math.random() * bank.length)]);
        }
    }

    return items.map((item, idx) => {
        // Generate options: 1 Correct + 3 Wrong (from other items in the SAME bank to be relevant)
        const options = new Set<string>();
        options.add(item.a);
        
        let safetyCounter = 0;
        while (options.size < 4 && safetyCounter < 50) {
            const randomItem = bank[Math.floor(Math.random() * bank.length)];
            if (randomItem.a !== item.a) {
                options.add(randomItem.a);
            }
            safetyCounter++;
        }
        
        // Shuffle options
        const shuffledOptions = Array.from(options).sort(() => Math.random() - 0.5);

        return {
            id: `q-${levelId}-${difficulty}-${idx}`,
            text: `Soal: ${item.q}`, // Format standard
            options: shuffledOptions,
            correctIndex: shuffledOptions.indexOf(item.a)
        };
    });
};

// --- HELPER UNTUK MEMBUAT SOAL MATEMATIKA OTOMATIS (Tetap Algoritmik) ---
const generateMathQuestions = (op: '+' | '-' | 'x' | ':', difficulty: string): Question[] => {
  const questions: Question[] = [];
  const count = 10;
  
  for (let i = 0; i < count; i++) {
    let a=0, b=0, res=0;
    if (difficulty === Difficulty.EASY) { 
        a = Math.floor(Math.random()*10)+1; 
        b = Math.floor(Math.random()*10)+1; 
    } else if (difficulty === Difficulty.MEDIUM) { 
        a = Math.floor(Math.random()*50)+10; 
        b = Math.floor(Math.random()*50)+1; 
    } else { 
        a = Math.floor(Math.random()*100)+50; 
        b = Math.floor(Math.random()*100)+20; 
    }

    if (op === '+') res = a + b;
    if (op === '-') { if(a < b) [a,b] = [b,a]; res = a - b; } 
    if (op === 'x') { 
        if(difficulty === Difficulty.EASY) { a = Math.floor(Math.random()*10)+1; b = Math.floor(Math.random()*5)+1; }
        else if (difficulty === Difficulty.MEDIUM) { a = Math.floor(Math.random()*12)+2; b = Math.floor(Math.random()*10)+2; }
        else { a = Math.floor(Math.random()*20)+5; b = Math.floor(Math.random()*20)+5; }
        res = a * b; 
    }
    if (op === ':') { 
        if(difficulty === Difficulty.EASY) { b = Math.floor(Math.random()*5)+1; res = Math.floor(Math.random()*10)+1; a = b * res; }
        else if(difficulty === Difficulty.MEDIUM) { b = Math.floor(Math.random()*9)+2; res = Math.floor(Math.random()*20)+2; a = b * res; }
        else { b = Math.floor(Math.random()*15)+5; res = Math.floor(Math.random()*30)+10; a = b * res; }
    }

    const correct = res.toString();
    const opts = new Set<string>();
    opts.add(correct);
    
    while(opts.size < 4) {
        let wrong = res + Math.floor(Math.random() * 20) - 10;
        if (wrong !== res && wrong >= 0) opts.add(wrong.toString());
    }
    
    const shuffledOptions = Array.from(opts).sort(() => Math.random() - 0.5);

    questions.push({
        id: `math-${op}-${difficulty}-${i}`,
        text: `${a} ${op === 'x' ? 'x' : op === ':' ? ':' : op} ${b} = ...`,
        options: shuffledOptions,
        correctIndex: shuffledOptions.indexOf(correct)
    });
  }
  return questions;
};

type GameData = Record<Difficulty, Record<number, Question[]>>;

// --- MAIN DATA POPULATION ---
export const GAME_DATA: GameData = {
    [Difficulty.EASY]: {},
    [Difficulty.MEDIUM]: {},
    [Difficulty.HARD]: {},
    [Difficulty.ETHICS]: {}
};

// Populate using generators
[Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD, Difficulty.ETHICS].forEach(diff => {
    LEVEL_CONFIGS.forEach(level => {
        if (level.type === LevelType.BONUS) return; // Skip generator for bonus levels

        if (level.id === 7) {
            GAME_DATA[diff][level.id] = generateMathQuestions('+', diff);
        } else if (level.id === 8) {
            if (diff === Difficulty.EASY) GAME_DATA[diff][level.id] = generateMathQuestions('x', diff);
            else if (diff === Difficulty.MEDIUM) GAME_DATA[diff][level.id] = generateMathQuestions(':', diff);
            else GAME_DATA[diff][level.id] = generateMathQuestions('x', diff); // Mix it up
        } else {
            // General Knowledge from Data Bank
            GAME_DATA[diff][level.id] = generateFromBank(level.id, diff);
        }
    });
});
