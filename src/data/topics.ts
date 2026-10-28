// Pusat data untuk halaman topik (panduan turunan) Puri Saren Ubud.
// Setiap topik memiliki konten bahasa Indonesia (id) dan Inggris (en).
// URL lintas bahasa menggunakan slug yang sama persis.
//
// Catatan akurasi: angka operasional (jam, tiket, parkir, pertunjukan,
// transportasi, status usaha) mudah berubah. Halaman ini menyajikan konteks
// dan panduan praktis, lalu menyarankan verifikasi di lokasi / kanal resmi.
// Kami tidak memuat peringkat komersial, ulasan bawaan, atau kemitraan.

export type TopicGroup = 'palace' | 'visit' | 'food' | 'around' | 'itinerary';

export const GROUP_LABELS: Record<TopicGroup, { id: string; en: string }> = {
  palace: { id: 'Istana & Budaya', en: 'Palace & Culture' },
  visit: { id: 'Rencana Kunjungan', en: 'Visit Planning' },
  food: { id: 'Makan & Minum', en: 'Food & Drink' },
  around: { id: 'Sekitar Ubud', en: 'Around Ubud' },
  itinerary: { id: 'Rute Perjalanan', en: 'Itineraries' },
};

export interface TopicSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  title: string;
  description: string;
  h1: string;
  lead: string;
  updated: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  priority: 1 | 2 | 3;
  id: TopicContent;
  en: TopicContent;
}

const CHECK_ID = 'Diperbarui 28 Oktober 2026';
const CHECK_EN = 'Updated 28 October 2026';

export const TOPICS: Topic[] = [
  // ───────────────────────── A. ISTANA & BUDAYA ─────────────────────────
  {
    slug: 'panduan-kunjungan',
    group: 'visit',
    priority: 1,
    id: {
      title: 'Panduan Kunjungan Puri Saren Agung: Rute & Etika',
      description: 'Panduan lengkap mengunjungi Puri Saren Agung (Ubud Palace): ruang yang boleh masuk, urutan berjalan, dan etika di area kerajaan yang masih hidup.',
      h1: 'Panduan kunjungan lengkap Puri Saren Agung',
      lead: 'Puri Saren Agung bukan museum tertutup, melainkan puri kerajaan yang masih berfungsi. Panduan ini membantu Anda masuk dengan ekspektasi tepat: bagian mana yang terbuka, bagaimana bergerak, dan batas apa yang harus dihormati.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'ruang-terbuka',
          heading: 'Bagian yang biasanya terbuka',
          paragraphs: [
            'Pengunjung umumnya dapat menikmati halaman depan, gerbang, beberapa bale (paviliun terbuka), dan area lanskap air di sekitar puri. Bagian dalam yang masih terkait kehidupan keluarga kerajaan dan persiapan upacara biasanya tertutup bagi publik.',
            'Jangan menganggap seluruh kompleks dapat dijelajahi bebas. Rambu, pagar, dan arahan petugas menandai batas akses yang sah.'
          ]
        },
        {
          id: 'urutan',
          heading: 'Urutan yang nyaman',
          paragraphs: [
            'Mulailah dari gerbang utama di Jl. Raya Ubud, amati susunan batu paras dan ukiran, lalu bergerak pelan menyusuri halaman. Pagi hari setelah pembukaan memberi cahaya lebih baik untuk melihat detail arsitektur.'
          ],
          bullets: [
            'Masuk dari Jl. Raya Ubud No.8 dan ikuti alur pejalan kaki yang sudah ada.',
            'Berikan ruang bagi warga, petugas, musisi, dan rombongan upacara.',
            'Jika ada persiapan pertunjukan malam, sebagian jalur mungkin digunakan untuk persiapan.'
          ]
        },
        {
          id: 'etika',
          heading: 'Etika dasar di tempat kerajaan',
          paragraphs: [
            'Gunakan pakaian sopan, jangan memanjat struktur, jangan duduk di altar atau bale ritual, dan jangan memindahkan sesajen. Saat upacara atau pertunjukan, ikuti pembatas dan arahan di tempat.'
          ],
          callout: 'Kegiatan adat dapat menutup sebagian jalur tanpa pemberitahuan jauh hari. Hormati keputusan akses di lapangan.'
        }
      ],
      faqs: [
        { q: 'Apakah seluruh istana bisa dimasuki?', a: 'Tidak. Sebagian area publik dapat dikunjungi, sementara bagian yang masih terkait keluarga kerajaan dan upacara tetap tertutup. Halaman ini membedakan area publik dari area privat.' },
        { q: 'Berapa lama waktu yang ideal?', a: 'Kunjungan siang singkat biasanya cukup 30–60 menit untuk observasi arsitektur dan lanskap. Tambahkan waktu jika Anda juga menonton pertunjukan malam sebagai agenda terpisah.' },
        { q: 'Apakah puri aman dikunjungi keluarga?', a: 'Ya, area publik puri cukup ramah pejalan kaki, tetapi permukaan tidak selalu rata. Baca halaman "Anak" dan "Akses kursi roda" untuk persiapan lebih lanjut.' }
      ],
      related: ['jam-buka', 'tiket', 'arsitektur', 'etika-foto']
    },
    en: {
      title: 'Puri Saren Agung Visit Guide: Routes & Etiquette',
      description: 'A complete guide to visiting Puri Saren Agung (Ubud Palace): which areas are open, how to move through them, and etiquette inside a living royal palace.',
      h1: 'Complete visit guide to Puri Saren Agung',
      lead: 'Puri Saren Agung is not a closed museum but a royal palace that still functions. This guide helps you arrive with the right expectations: which parts are open, how to move, and what boundaries to respect.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'ruang-terbuka',
          heading: 'Areas usually open',
          paragraphs: [
            'Visitors can generally enjoy the front courtyard, the gateway, several open bale (pavilions), and the water landscape around the palace. Inner sections still tied to the royal family’s life and ceremony preparation are usually closed to the public.',
            'Do not assume the whole complex is freely explorable. Signs, fences, and staff directions mark the legitimate access boundary.'
          ]
        },
        {
          id: 'urutan',
          heading: 'A comfortable order',
          paragraphs: [
            'Start at the main gate on Jl. Raya Ubud, observe the paras stone and carvings, then move slowly through the courtyards. Early after opening gives better light for architectural detail.'
          ],
          bullets: [
            'Enter from Jl. Raya Ubud No.8 and follow the existing pedestrian flow.',
            'Give space to residents, staff, musicians, and ceremony groups.',
            'If an evening performance is being prepared, some paths may be used for setup.'
          ]
        },
        {
          id: 'etika',
          heading: 'Basic etiquette in a royal place',
          paragraphs: [
            'Dress modestly, do not climb structures, do not sit on altars or ritual bale, and do not move offerings. During ceremonies or performances, follow the barriers and on-site directions.'
          ],
          callout: 'Custom activities can close some paths without advance notice. Respect access decisions made on the ground.'
        }
      ],
      faqs: [
        { q: 'Can the whole palace be entered?', a: 'No. Some public areas are visitable, while sections still tied to the royal family and ceremonies remain closed. This page distinguishes public from private areas.' },
        { q: 'How long is ideal?', a: 'A short daytime visit is usually 30–60 minutes for architectural observation and landscape. Add time if you also watch an evening performance as a separate plan.' },
        { q: 'Is the palace safe for families?', a: 'Yes, the public areas are fairly walkable, but surfaces are not always even. See the "Kids" and "Wheelchair access" pages for more preparation.' }
      ],
      related: ['jam-buka', 'tiket', 'arsitektur', 'etika-foto']
    }
  },
  {
    slug: 'sejarah',
    group: 'palace',
    priority: 1,
    id: {
      title: 'Sejarah Puri Saren Agung & Latar Belakang Keluarga Kerajaan Ubud',
      description: 'Kontekst sejarah Puri Saren Agung: bagaimana puri ini tumbuh sebagai kediaman keluarga kerajaan Ubud dan pusat seni budaya Bali.',
      h1: 'Sejarah Puri Saren Agung',
      lead: 'Memahami Puri Saren Agung lebih tepat bila membacanya sebagai puri yang hidup daripada sekadar bangunan tua. Perannya sebagai kediaman kerajaan, pusat pertunjukan, dan ruang adat membentuk cara tempat ini dipahami hingga sekarang.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'kerajaan-ubud',
          heading: 'Kediaman keluarga kerajaan Ubud',
          paragraphs: [
            'Sumber pariwisata resmi Indonesia menyebut Istana Ubud atau Puri Saren Agung sebagai kediaman resmi keluarga kerajaan Ubud. Karena itu, kompleks ini bukan objek pameran mati, melainkan bagian dari kehidupan kota Ubud.'
          ]
        },
        {
          id: 'seni',
          heading: 'Ubud sebagai ruang pertemuan seni',
          paragraphs: [
            'Ubud tumbuh sebagai pusat seni Bali. Lingkungan puri ikut menjadi bagian ekosistem seni pertunjukan, gamelan, upacara, dan patronase budaya yang membentuk citra Ubud.'
          ]
        },
        {
          id: 'metodologi',
          heading: 'Menghindari tanggal tunggal yang sering berbeda',
          paragraphs: [
            'Sumber populer sering memberikan tahun pembangunan yang berbeda-beda. Untuk konteks publik, halaman ini memprioritaskan sumber pemerintah dan pariwisata resmi daripada menetapkan satu tanggal pembangunan yang dipersengketakan.'
          ],
          callout: 'Halaman ini memberikan konteks sejarah dan budaya yang relatif stabil, bukan jadwal pertunjukan terkini. Verifikasi kegiatan hari itu di lokasi.'
        }
      ],
      faqs: [
        { q: 'Siapa yang membangun Puri Saren Agung?', a: 'Sumber resmi merujuknya sebagai kediaman keluarga kerajaan Ubud. Detail tahun pembangunan bervariasi antar-sumber; kami tidak menetapkan satu tanggal tunggal yang dipersengketakan.' },
        { q: 'Apakah puri masih dihuni?', a: 'Ya, sumber resmi pariwisata Indonesia menyebut sebagian kompleks masih digunakan keluarga kerajaan, sehingga tidak semua bagian terbuka untuk umum.' },
        { q: 'Mengapa puri penting bagi Ubud?', a: 'Puri menghubungkan kekuasaan lokal, tata ruang Bali, pertunjukan, dan kehidupan adat — inti dari identitas budaya Ubud.' }
      ],
      related: ['arsitektur', 'seni-ubud', 'pertunjukan-tari', 'saraswati']
    },
    en: {
      title: 'History of Puri Saren Agung & the Ubud Royal Family',
      description: 'Historical context of Puri Saren Agung: how this palace grew as the residence of Ubud’s royal family and a center of Balinese art and culture.',
      h1: 'History of Puri Saren Agung',
      lead: 'Puri Saren Agung is better understood as a living palace than as an old building. Its role as a royal residence, performance stage, and customary space shapes how the place is understood today.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'kerajaan-ubud',
          heading: 'Residence of the Ubud royal family',
          paragraphs: [
            'Official Indonesian tourism sources describe Ubud Palace / Puri Saren Agung as the official residence of the Ubud royal family. The complex is therefore not a dead exhibit but part of Ubud’s living city.'
          ]
        },
        {
          id: 'seni',
          heading: 'Ubud as a meeting point for the arts',
          paragraphs: [
            'Ubud grew as a center of Balinese art. The palace environment became part of an ecosystem of performances, gamelan, ceremonies, and cultural patronage that shaped Ubud’s image.'
          ]
        },
        {
          id: 'metodologi',
          heading: 'Avoiding a single disputed date',
          paragraphs: [
            'Popular sources often give different construction years. For public context, this page prioritizes government and official tourism sources rather than fixing one contested founding date.'
          ],
          callout: 'This page gives relatively stable historical and cultural context, not today’s performance schedule. Verify the day’s activities on site.'
        }
      ],
      faqs: [
        { q: 'Who built Puri Saren Agung?', a: 'Official sources refer to it as the residence of the Ubud royal family. Construction years vary between sources; we do not fix one contested date.' },
        { q: 'Is the palace still inhabited?', a: 'Yes, official tourism sources say part of the complex is still used by the royal family, so not all sections are open to the public.' },
        { q: 'Why is the palace important to Ubud?', a: 'The palace links local power, Balinese spatial order, performance, and adat life — the core of Ubud’s cultural identity.' }
      ],
      related: ['arsitektur', 'seni-ubud', 'pertunjukan-tari', 'saraswati']
    }
  },
  {
    slug: 'arsitektur',
    group: 'palace',
    priority: 2,
    id: {
      title: 'Arsitektur Bali Puri Saren: Gerbang, Bale & Material',
      description: 'Cara membaca arsitektur Puri Saren Agung: gerbang, ambang, bale, halaman, dan material serta etika mengamatinya.',
      h1: 'Membaca arsitektur Puri Saren Agung',
      lead: 'Arsitektur puri Bali dibentuk oleh urutan ruang, bukan satu bangunan tertutup. Memahami gerbang, ambang, bale, dan material membantu Anda melihat nilai puri di balik ukiran dekoratif.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'gerbang',
          heading: 'Gerbang dan ambang',
          paragraphs: [
            'Dalam arsitektur Bali, ambang menandai perpindahan dari ruang luar menuju ruang dengan tata, fungsi, dan tingkat kesakralan berbeda. Perhatikan susunan bata, batu paras, dan ukiran pada pintu masuk.'
          ]
        },
        {
          id: 'bale',
          heading: 'Bale dan halaman',
          paragraphs: [
            'Paviliun terbuka (bale) mengandalkan hubungan antara atap, tiang, halaman, dan sirkulasi udara. Pengalaman ruang terbentuk dari urutan halaman, bukan dari satu ruangan tertutup seperti istana Eropa.'
          ]
        },
        {
          id: 'material',
          heading: 'Bata merah dan batu paras',
          paragraphs: [
            'Warna terakota, batu abu-abu, ukiran floral, serta detail figuratif memberi ritme pada dinding dan gerbang. Material tampak dekoratif sekaligus menunjukkan keterampilan tukang tradisional Bali.'
          ]
        },
        {
          id: 'fungsi',
          heading: 'Ruang yang tetap berfungsi',
          paragraphs: [
            'Jangan membaca seluruh kompleks sebagai objek pameran. Area tertentu masih berhubungan dengan kediaman, upacara, persiapan pertunjukan, dan aktivitas adat; rambu pembatas perlu dipatuhi.'
          ]
        }
      ],
      faqs: [
        { q: 'Apa ciri khas arsitektur puri Bali?', a: 'Susunan halaman, gerbang bertingkat, bale terbuka, dan penggunaan bata merah serta batu paras dengan ukiran tradisional.' },
        { q: 'Mengapa tidak ada satu bangunan utama?', a: 'Tata ruang Bali bersifat kolektif: nilai terbentuk dari urutan halaman dan paviliun, bukan dari satu gedung besar.' },
        { q: 'Apakah boleh memotret detail ukiran?', a: 'Ya untuk dokumentasi pribadi, dengan hormat. Baca halaman "Etika fotografi" untuk batasannya.' }
      ],
      related: ['sejarah', 'etika-foto', 'panduan-kunjungan', 'saraswati']
    },
    en: {
      title: 'Balinese Architecture of Puri Saren: Gates, Bale & Materials',
      description: 'How to read the architecture of Puri Saren Agung: gates, thresholds, bale, courtyards, materials, and how to observe them respectfully.',
      h1: 'Reading the architecture of Puri Saren Agung',
      lead: 'Balinese palace architecture is shaped by the sequence of space, not one enclosed building. Understanding gates, thresholds, bale, and materials helps you see the palace’s value beyond decorative carving.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'gerbang',
          heading: 'Gates and thresholds',
          paragraphs: [
            'In Balinese architecture, a threshold marks the transition from outer space to a space with different order, function, and degree of sacredness. Note the brickwork, paras stone, and carvings at the entrance.'
          ]
        },
        {
          id: 'bale',
          heading: 'Bale and courtyards',
          paragraphs: [
            'Open pavilions (bale) rely on the relationship between roof, columns, courtyard, and air flow. The spatial experience comes from the sequence of courtyards, not a single enclosed room like a European palace.'
          ]
        },
        {
          id: 'material',
          heading: 'Red brick and paras stone',
          paragraphs: [
            'Terracotta tones, grey stone, floral carving, and figurative detail give rhythm to walls and gates. Materials look decorative yet show the skill of traditional Balinese artisans.'
          ]
        },
        {
          id: 'fungsi',
          heading: 'Spaces that still function',
          paragraphs: [
            'Do not read the whole complex as an exhibit. Some areas still relate to residence, ceremony, performance preparation, and adat activity; respect the boundary markers.'
          ]
        }
      ],
      faqs: [
        { q: 'What characterizes Balinese palace architecture?', a: 'A sequence of courtyards, tiered gates, open bale, and the use of red brick and paras stone with traditional carving.' },
        { q: 'Why is there no single main building?', a: 'Balinese spatial order is collective: value comes from the sequence of courtyards and pavilions, not one large structure.' },
        { q: 'May I photograph the carvings?', a: 'Yes for personal documentation, respectfully. See the "Photography etiquette" page for limits.' }
      ],
      related: ['sejarah', 'etika-foto', 'panduan-kunjungan', 'saraswati']
    }
  },
  {
    slug: 'seni-ubud',
    group: 'palace',
    priority: 3,
    id: {
      title: 'Hubungan Puri Saren dengan Seni Ubud',
      description: 'Bagaimana Puri Saren Agung terhubung dengan perkembangan seni pertunjukan, gamelan, dan patronase budaya di Ubud.',
      h1: 'Puri Saren dan ekosistem seni Ubud',
      lead: 'Puri bukan hanya tempat tinggal, tetapi juga ruang di mana seni pertunjukan dan patronase budaya Ubud tumbuh. Memahami hubungan ini membantu Anda menikmati pertunjukan malam sebagai kelanjutan sejarah, bukan atraksi terpisah.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'pertunjukan',
          heading: 'Panggung seni pertunjukan',
          paragraphs: [
            'Lingkungan puri ikut menjadi bagian dari ekosistem seni pertunjukan dan gamelan Ubud. Pertunjukan malam di halaman depan dapat dibaca sebagai kelanjutan peran budaya puri, bukan sekadar pertunjukan wisata.'
          ]
        },
        {
          id: 'patronase',
          heading: 'Patronase dan pelestarian',
          paragraphs: [
            'Dokumentasi pemerintah Kabupaten Gianyar menggambarkan peran Puri Saren dalam seni dan kebudayaan Ubud. Catatan tersebut bukan jadwal pertunjukan terkini; verifikasi jenis, waktu, dan tiket di lokasi.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah puri terkait dengan seni rupa Ubud?', a: 'Ya, puri berada dalam ekosistem budaya Ubud yang mencakup pertunjukan, gamelan, dan seni rupa, meskipun museum seni rupa memiliki ruang tersendiri (lihat "Museum Puri Lukisan").' },
        { q: 'Apakah pertunjukan malam bagian dari tradisi?', a: 'Pertunjukan tari dan gamelan malam merujuk pada tradisi seni puri, tetapi jadwal dan jenisnya berubah; konfirmasikan di lokasi.' }
      ],
      related: ['pertunjukan-tari', 'tari-gamelan', 'museum-puri-lukisan', 'sejarah']
    },
    en: {
      title: 'How Puri Saren Connects to Ubud’s Arts',
      description: 'How Puri Saren Agung connects to the growth of performance art, gamelan, and cultural patronage in Ubud.',
      h1: 'Puri Saren and Ubud’s art ecosystem',
      lead: 'The palace is not only a residence but also a space where Ubud’s performance art and cultural patronage grew. Understanding this helps you enjoy evening performances as a continuation of history, not a separate attraction.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'pertunjukan',
          heading: 'A stage for performing arts',
          paragraphs: [
            'The palace environment is part of Ubud’s performance and gamelan ecosystem. Evening performances in the front courtyard can be read as a continuation of the palace’s cultural role, not merely a tourist show.'
          ]
        },
        {
          id: 'patronase',
          heading: 'Patronage and preservation',
          paragraphs: [
            'Gianyar Regency documents describe Puri Saren’s role in Ubud art and culture. That is context, not today’s schedule; verify type, time, and tickets on site.'
          ]
        }
      ],
      faqs: [
        { q: 'Is the palace linked to Ubud visual art?', a: 'Yes, the palace sits within Ubud’s cultural ecosystem covering performance, gamelan, and visual art, though art museums have their own space (see "Museum Puri Lukisan").' },
        { q: 'Are evening performances traditional?', a: 'Evening dance and gamelan refer to palace art traditions, but schedules and types change; confirm on site.' }
      ],
      related: ['pertunjukan-tari', 'tari-gamelan', 'museum-puri-lukisan', 'sejarah']
    }
  },
  {
    slug: 'pertunjukan-tari',
    group: 'palace',
    priority: 1,
    id: {
      title: 'Panduan Pertunjukan Tari Puri Saren: Cara Cek & Tiket',
      description: 'Cara memverifikasi pertunjukan tari di Puri Saren Agung: jenis pertunjukan, lokasi, pembelian tiket, dan membedakannya dari kunjungan siang.',
      h1: 'Panduan pertunjukan tari malam',
      lead: 'Pertunjukan tari dan gamelan malam di halaman Puri Saren Agung sering menjadi alasan utama wisatawan datang. Karena jadwal dan harga mudah berubah, halaman ini fokus pada cara memverifikasi dengan benar, bukan menjanjikan jadwal pasti.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'jenis',
          heading: 'Jenis pertunjukan',
          paragraphs: [
            'Indonesia.travel menyebut pertunjukan tari tradisional pada malam hari di area puri. Sumber ini tidak memastikan pertunjukan setiap malam atau jenis tari tertentu. Verifikasi tanggal, waktu mulai, dan lokasi pertunjuan pada hari yang sama.'
          ]
        },
        {
          id: 'tiket',
          heading: 'Tiket dan pembelian',
          paragraphs: [
            'Harga tiket dan cara pembelian dapat berubah. Hindari situs yang mengaku sebagai satu-satunya penjual resmi. Konfirmasikan harga dan lokasi penjualan tiket kepada penyelenggara atau petugas di lokasi.'
          ],
          callout: 'Jadwal kunjungan siang dan jadwal pertunjukan malam adalah dua hal berbeda. Tiket siang gratis (cuplikan Maps) tidak menjamin akses pertunjukan, dan sebaliknya.'
        }
      ],
      faqs: [
        { q: 'Apakah ada pertunjukan setiap malam?', a: 'Sumber resmi tidak menjamin pertunjukan setiap malam. Konfirmasikan tanggal dan waktu kepada penyelenggara sebelum membeli tiket.' },
        { q: 'Di mana membeli tiket?', a: 'Verifikasi lokasi penjualan tiket di lokasi. Kami tidak menautkan ke penjual tiket tertentu dan tidak menerima komisi.' },
        { q: 'Berapa harga tiket pertunjukan?', a: 'Harga dapat berubah; konfirmasikan kepada penyelenggara pada hari pertunjukan. Jangan menganggap tiket siang gratis berlaku untuk pertunjukan.' }
      ],
      related: ['tari-gamelan', 'jam-buka', 'tiket', 'makan-malam']
    },
    en: {
      title: 'Puri Saren Dance Performance Guide: How to Check & Tickets',
      description: 'How to verify dance performances at Puri Saren Agung: performance types, venue, ticket purchase, and how they differ from daytime visits.',
      h1: 'Evening dance performance guide',
      lead: 'Evening dance and gamelan performances in Puri Saren Agung’s courtyard are often the main reason visitors come. Because schedules and prices change, this page focuses on how to verify correctly rather than promising a fixed schedule.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'jenis',
          heading: 'Performance types',
          paragraphs: [
            'Indonesia.travel mentions traditional dance performances at night in the palace area. The source does not guarantee a show every night or a specific dance. Verify the date, start time, and venue on the same day.'
          ]
        },
        {
          id: 'tiket',
          heading: 'Tickets and purchase',
          paragraphs: [
            'Ticket prices and how to buy can change. Avoid sites claiming to be the only official seller. Confirm price and ticket outlet with the organizer or staff on site.'
          ],
          callout: 'Daytime visiting hours and evening performance schedules are two different things. Free daytime entry (per a Maps snippet) does not guarantee performance access, and vice versa.'
        }
      ],
      faqs: [
        { q: 'Is there a show every night?', a: 'Official sources do not guarantee a nightly show. Confirm date and time with the organizer before buying a ticket.' },
        { q: 'Where to buy tickets?', a: 'Verify the ticket outlet on site. We do not link to a specific ticket seller and receive no commission.' },
        { q: 'How much are performance tickets?', a: 'Prices can change; confirm with the organizer on the performance day. Do not assume free daytime entry applies to performances.' }
      ],
      related: ['tari-gamelan', 'jam-buka', 'tiket', 'makan-malam']
    }
  },
  {
    slug: 'tari-gamelan',
    group: 'palace',
    priority: 3,
    id: {
      title: 'Pengantar Tari & Gamelan Bali untuk Pengunjung',
      description: 'Hal dasar tentang tari dan gamelan Bali yang membantu pengunjung menikmati pertunjukan di Puri Saren tanpa salah paham.',
      h1: 'Pengantar tari dan gamelan Bali',
      lead: 'Menonton pertunjukan di Ubud lebih nyaman bila Anda mengenal sedikit konteks tari dan gamelan Bali. Halaman ini bukan kursus lengkap, melainkan panduan praktis agar Anda tidak melewatkan makna di balik gerakan dan musik.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'tari',
          heading: 'Membaca gerak tari',
          paragraphs: [
            'Tari Bali sering menyampaikan kisah (pertiwi, Ramayana, atau legenda lokal) melalui gerak tangan, mata, dan aras. Anda tidak perlu mengenal kisahnya untuk menikmati, tetapi memperhatikan ekspresi wajah dan gerak tangan membantu merasakan ritme pertunjukan.'
          ]
        },
        {
          id: 'gamelan',
          heading: 'Peran gamelan',
          paragraphs: [
            'Gamelan adalah ansambel alat tabuh logam yang mengiringi tari. Nada dan tempo gamelan membentuk suasana; dengarkan perubahan tempo sebagai petunjuk bagian pertunjukan.'
          ]
        },
        {
          id: 'etika',
          heading: 'Etika menonton',
          paragraphs: [
            'Matikan lampu layar, hindari berbicara saat tari sedang berlangsung, dan jangan menggunakan lampu kilat. Penonton duduk di area yang disediakan; jangan berdiri di depan penari.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah saya harus paham cerita?', a: 'Tidak. Anda dapat menikmati gerak, musik, dan suasana. Mengenal sedikit konteks membantu, tetapi tidak wajib.' },
        { q: 'Apakah boleh merekam?', a: 'Rekam secara tidak mengganggu tanpa lampu kilat; hormati penonton dan penari. Aturan tempat mungkin membatasi perekaman.' }
      ],
      related: ['pertunjukan-tari', 'seni-ubud', 'makan-malam']
    },
    en: {
      title: 'Introduction to Balinese Dance & Gamelan for Visitors',
      description: 'Basics of Balinese dance and gamelan that help visitors enjoy performances at Puri Saren without misunderstanding.',
      h1: 'Introduction to Balinese dance and gamelan',
      lead: 'Watching performances in Ubud is more comfortable when you know a little context about Balinese dance and gamelan. This is not a full course but a practical guide so you don’t miss the meaning behind movement and music.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'tari',
          heading: 'Reading dance movement',
          paragraphs: [
            'Balinese dance often tells a story (pertiwi, Ramayana, or local legend) through hand, eye, and body movement. You need not know the story to enjoy it, but noticing facial expression and hand gestures helps you feel the rhythm.'
          ]
        },
        {
          id: 'gamelan',
          heading: 'The role of gamelan',
          paragraphs: [
            'Gamelan is a metal percussion ensemble accompanying the dance. Its pitch and tempo shape the mood; listen for tempo changes as cues for sections of the show.'
          ]
        },
        {
          id: 'etika',
          heading: 'Watching etiquette',
          paragraphs: [
            'Turn off screen lights, avoid talking during the dance, and do not use flash. Sit in the provided area; do not stand in front of dancers.'
          ]
        }
      ],
      faqs: [
        { q: 'Do I need to understand the story?', a: 'No. You can enjoy the movement, music, and mood. Some context helps but is not required.' },
        { q: 'May I record?', a: 'Record unobtrusively without flash; respect performers and audience. Venue rules may limit recording.' }
      ],
      related: ['pertunjukan-tari', 'seni-ubud', 'makan-malam']
    }
  },
  {
    slug: 'etika-foto',
    group: 'palace',
    priority: 2,
    id: {
      title: 'Etika Fotografi di Puri Saren & Ruang Sakral',
      description: 'Batas fotografi di Puri Saren Agung: hormati area privat, upacara, dan sesajen; dokumentasikan dengan sopan.',
      h1: 'Etika fotografi di Puri Saren',
      lead: 'Foto membantu mengenang kunjungan, tetapi puri adalah ruang hidup dengan area privat dan ritual. Halaman ini merangkum batas yang wajar agar dokumentasi Anda tidak mengganggu warga atau upacara.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'batas',
          heading: 'Batas yang wajar',
          paragraphs: [
            'Jangan memanjat gerbang, duduk di struktur ritual, menghalangi prosesi, atau memindahkan sesajen demi komposisi foto. Saat ada upacara atau pertunjukan, ikuti pembatas dan arahan di tempat.'
          ]
        },
        {
          id: 'orang',
          heading: 'Foto orang dan keluarga kerajaan',
          paragraphs: [
            'Hindari memotret area privat keluarga kerajaan atau aktivitas adat tanpa izin. Untuk foto yang melibatkan warga atau penampil, minta izin singkat bila memungkinkan.'
          ]
        },
        {
          id: 'drone',
          heading: 'Drone dan alat tertentu',
          paragraphs: [
            'Penggunaan drone di area publik Bali tunduk pada aturan setempat dan sering dibatasi di sekitar ruang sakral dan keramaian. Verifikasi aturan sebelum terbang.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah boleh memotret arsitektur?', a: 'Ya untuk area publik, dengan hormat. Jangan memanjat atau mengganggu upacara demi foto.' },
        { q: 'Bolehkah memotret pertunjukan?', a: 'Biasanya diperbolehkan tanpa lampu kilat dan tanpa mengganggu, tetapi ikuti aturan penyelenggara setempat.' },
        { q: 'Apakah boleh pakai drone?', a: 'Aturan drone di Bali sering membatasi area keramaian dan ruang sakral; verifikasi sebelum terbang.' }
      ],
      related: ['arsitektur', 'panduan-kunjungan', 'pertunjukan-tari']
    },
    en: {
      title: 'Photography Etiquette at Puri Saren & Sacred Spaces',
      description: 'Photography limits at Puri Saren Agung: respect private areas, ceremonies, and offerings; document respectfully.',
      h1: 'Photography etiquette at Puri Saren',
      lead: 'Photos help you remember the visit, but the palace is a living space with private and ritual areas. This page summarizes reasonable boundaries so your documentation does not disturb residents or ceremonies.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'batas',
          heading: 'Reasonable limits',
          paragraphs: [
            'Do not climb gates, sit on ritual structures, block processions, or move offerings for a photo composition. During ceremonies or performances, follow barriers and on-site directions.'
          ]
        },
        {
          id: 'orang',
          heading: 'Photos of people and the royal family',
          paragraphs: [
            'Avoid photographing the royal family’s private areas or adat activity without permission. For photos involving residents or performers, ask briefly if possible.'
          ]
        },
        {
          id: 'drone',
          heading: 'Drones and specific gear',
          paragraphs: [
            'Drone use in public Bali follows local rules and is often restricted near sacred spaces and crowded areas. Verify rules before flying.'
          ]
        }
      ],
      faqs: [
        { q: 'May I photograph the architecture?', a: 'Yes in public areas, respectfully. Do not climb or disturb ceremonies for a photo.' },
        { q: 'May I photograph performances?', a: 'Usually allowed without flash and without disturbing, but follow the organizer’s local rules.' },
        { q: 'May I use a drone?', a: 'Bali drone rules often restrict crowded areas and sacred spaces; verify before flying.' }
      ],
      related: ['arsitektur', 'panduan-kunjungan', 'pertunjukan-tari']
    }
  },
  {
    slug: 'saraswati',
    group: 'palace',
    priority: 2,
    id: {
      title: 'Puri Saren & Pura Taman Saraswati: Beda & Lintasan Bersama',
      description: 'Perbedaan antara Puri Saren Agung dan Pura Taman Saraswati, serta cara menyusun lintasan budaya singkat keduanya.',
      h1: 'Puri Saren dan Pura Taman Saraswati',
      lead: 'Dua tempat ini sering dibingungkan karena berdekatan dan sama-sama berbau budaya. Puri Saren Agung adalah puri kerajaan, sedangkan Pura Taman Saraswati adalah pura (tempat ibadah Hindu Bali) dengan lanskap air teratai. Memahami bedanya membantu Anda menghormati masing-masing.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'beda',
          heading: 'Dua fungsi berbeda',
          paragraphs: [
            'Puri Saren Agung adalah kediaman kerajaan dan ruang budaya. Pura Taman Saraswati adalah pura yang dipersembahkan untuk dewi saraswati, dengan kolam teratai sebagai ciri khas. Satu adalah ruang istana, lainnya adalah ruang ibadah.'
          ]
        },
        {
          id: 'lintasan',
          heading: 'Lintasan singkat',
          paragraphs: [
            'Keduanya berada di pusat Ubud dan dapat dihubungkan dengan berjalan kaki singkat. Anda dapat mengunjungi puri di siang hari, lalu menyusuri jalan ke arah kolam teratai Saraswati yang biasanya hanya beberapa menit berjalan.'
          ],
          bullets: [
            'Mulai dari gerbang Puri Saren Agung di Jl. Raya Ubud.',
            'Berjalan ke arah barat/laut mengikuti trotoar pusat Ubud ke area Saraswati.',
            'Di pura, ikuti etika tempat ibadah: pakaian sopan, jangan naik ke struktur suci, hormati jemaat.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah Saraswati bagian dari puri?', a: 'Tidak. Pura Taman Saraswati adalah pura terpisah, bukan bagian dari Puri Saren Agung, meskipun keduanya berdekatan di pusat Ubud.' },
        { q: 'Berapa lama jalan kaki antarkeduanya?', a: 'Biasanya beberapa menit berjalan kaki di pusat Ubud, tergantung titik awal dan keramaian jalan. Waktu nyata dapat berbeda.' },
        { q: 'Apakah Saraswati gratis?', a: 'Area pura umumnya dapat dikunjungi dengan sopan; verifikasi aturan setempat saat tiba. Jangan menyamakan dengan tiket pertunjukan puri.' }
      ],
      related: ['sejarah', 'arsitektur', 'sekitar-jalan-kaki', 'panduan-kunjungan']
    },
    en: {
      title: 'Puri Saren & Pura Taman Saraswati: Differences & a Shared Walk',
      description: 'The difference between Puri Saren Agung and Pura Taman Saraswati, and how to plan a short cultural walk covering both.',
      h1: 'Puri Saren and Pura Taman Saraswati',
      lead: 'These two are often confused because they are close and both feel cultural. Puri Saren Agung is a royal palace, while Pura Taman Saraswati is a temple (Balinese Hindu place of worship) with a lotus-water landscape. Understanding the difference helps you respect each.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'beda',
          heading: 'Two different functions',
          paragraphs: [
            'Puri Saren Agung is a royal residence and cultural space. Pura Taman Saraswati is a temple dedicated to the goddess Saraswati, known for its lotus pond. One is a palace space, the other a place of worship.'
          ]
        },
        {
          id: 'lintasan',
          heading: 'A short walk',
          paragraphs: [
            'Both are in central Ubud and can be linked by a short walk. You can visit the palace in the daytime, then follow the road toward the Saraswati lotus pond, usually a few minutes on foot.'
          ],
          bullets: [
            'Start at the Puri Saren Agung gate on Jl. Raya Ubud.',
            'Walk west/north along the central Ubud sidewalk toward the Saraswati area.',
            'At the temple, follow worship-etiquette: modest dress, do not climb sacred structures, respect worshippers.'
          ]
        }
      ],
      faqs: [
        { q: 'Is Saraswati part of the palace?', a: 'No. Pura Taman Saraswati is a separate temple, not part of Puri Saren Agung, though both are close in central Ubud.' },
        { q: 'How long is the walk between them?', a: 'Usually a few minutes on foot in central Ubud, depending on your start point and road crowding. Actual time may vary.' },
        { q: 'Is Saraswati free?', a: 'The temple area is generally visitable respectfully; verify local rules on arrival. Do not equate it with palace performance tickets.' }
      ],
      related: ['sejarah', 'arsitektur', 'sekitar-jalan-kaki', 'panduan-kunjungan']
    }
  },

  // ───────────────────────── B. RENCANA KUNJUNGAN ─────────────────────────
  {
    slug: 'jam-buka',
    group: 'visit',
    priority: 1,
    id: {
      title: 'Jam Buka Puri Saren: Siang vs Pertunjukan Malam',
      description: 'Perbedaan jam kunjungan siang dan pertunjukan malam di Puri Saren Agung, serta mengapa keduanya tidak boleh dicampur.',
      h1: 'Jam buka: siang dan malam',
      lead: 'Kesalahpahaman paling umum adalah menyamakan jam kunjungan siang dengan jadwal pertunjukan malam. Halaman ini memisahkan keduanya dengan jelas agar rencana Anda tidak bentrok.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'siang',
          heading: 'Jam kunjungan siang',
          paragraphs: [
            'Listing Google Maps yang diperiksa 19 Oktober 2026 mencantumkan jam sekitar 07.00–17.00 setiap hari untuk kunjungan area publik. Ini bukan jadwal pertunjukan malam dan tidak menjamin semua bagian istana terbuka. Konfirmasikan akses dengan petugas pada hari kunjungan.'
          ]
        },
        {
          id: 'malam',
          heading: 'Pertunjukan malam',
          paragraphs: [
            'Pertunjukan tari dan gamelan malam memiliki jadwal sendiri yang berbeda dari jam kunjungan siang. Verifikasi jenis pertunjukan, waktu mulai, lokasi, dan tiket pada hari yang sama sebelum membeli.'
          ],
          callout: 'Jam siang dan jadwal malam adalah dua hal berbeda. Jangan menyusun rencana seolah keduanya otomatis berlaku bersamaan.'
        }
      ],
      faqs: [
        { q: 'Jam berapa Puri Saren buka?', a: 'Listing Maps per 19 Oktober 2026 mencantumkan sekitar 07.00–17.00 untuk area publik. Konfirmasikan dengan petugas karena kegiatan adat dapat mengubah akses.' },
        { q: 'Apakah pertunjukan setiap malam?', a: 'Tidak dijamin. Verifikasi tanggal dan waktu kepada penyelenggara di lokasi.' },
        { q: 'Apakah semua bagian terbuka di jam buka?', a: 'Tidak. Sebagian area tetap privat atau digunakan untuk upacara; ikuti rambu dan arahan petugas.' }
      ],
      related: ['tiket', 'waktu-terbaik', 'pertunjukan-tari', 'panduan-kunjungan']
    },
    en: {
      title: 'Puri Saren Opening Hours: Daytime vs Evening Shows',
      description: 'The difference between daytime visiting hours and evening performances at Puri Saren Agung, and why they must not be mixed up.',
      h1: 'Opening hours: day and night',
      lead: 'The most common misunderstanding is equating daytime visiting hours with the evening performance schedule. This page separates the two clearly so your plan does not clash.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'siang',
          heading: 'Daytime visiting hours',
          paragraphs: [
            'The Google Maps listing checked on 19 October 2026 shows around 07.00–17.00 daily for public-area visits. This is not the evening show schedule and does not guarantee all palace sections are open. Confirm access with staff on the visit day.'
          ]
        },
        {
          id: 'malam',
          heading: 'Evening performances',
          paragraphs: [
            'Evening dance and gamelan shows have their own schedule, different from daytime hours. Verify the performance type, start time, venue, and tickets on the same day before buying.'
          ],
          callout: 'Daytime hours and evening schedule are two different things. Do not plan as if both automatically apply together.'
        }
      ],
      faqs: [
        { q: 'What time does Puri Saren open?', a: 'The Maps listing per 19 Oct 2026 shows around 07.00–17.00 for public areas. Confirm with staff, as adat activities can change access.' },
        { q: 'Are there shows every night?', a: 'Not guaranteed. Verify date and time with the organizer on site.' },
        { q: 'Is everything open during visiting hours?', a: 'No. Some areas remain private or are used for ceremonies; follow signs and staff directions.' }
      ],
      related: ['tiket', 'waktu-terbaik', 'pertunjukan-tari', 'panduan-kunjungan']
    }
  },
  {
    slug: 'tiket',
    group: 'visit',
    priority: 1,
    id: {
      title: 'Tiket & Biaya Puri Saren: Siang, Pertunjukan & Pengeluaran',
      description: 'Informasi tiket dan biaya Puri Saren Agung: kunjungan siang, pertunjukan, dan pengeluaran tambahan yang mungkin dijumpai.',
      h1: 'Tiket dan biaya',
      lead: 'Biaya adalah bagian yang paling sering salah paham. Halaman ini memisahkan kunjungan siang, pertunjukan malam, dan pengeluaran lain agar Anda tidak menganggap satu ketentuan berlaku untuk semua.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'siang',
          heading: 'Kunjungan siang',
          paragraphs: [
            'Google Maps yang diperiksa 19 Oktober 2026 menampilkan tiket umum siang gratis. Ini hanya cuplikan listing, bukan jaminan semua area dapat dimasuki, dan tidak berlaku untuk pertunjukan. Konfirmasikan ketentuan di lokasi.'
          ]
        },
        {
          id: 'pertunjukan',
          heading: 'Pertunjukan malam',
          paragraphs: [
            'Tiket pertunjukan adalah hal terpisah dengan harganya sendiri. Harga dan cara pembelian dapat berubah; konfirmasikan kepada penyelenggara pada hari pertunjukan.'
          ]
        },
        {
          id: 'tambahan',
          heading: 'Pengeluaran tambahan',
          paragraphs: [
            'Pengeluaran lain biasanya berada di luar puri: makanan, minuman, parkir umum, transportasi, atau jasa di pusat Ubud. Anggarakan terpisah dari tiket puri.'
          ],
          callout: 'Kami tidak menjual tiket dan tidak menerima komisi. Hindari situs yang mengaku sebagai penjual resmi tunggal.'
        }
      ],
      faqs: [
        { q: 'Apakah masuk Puri Saren gratis?', a: 'Maps per 19 Oktober 2026 menampilkan tiket umum siang gratis sebagai cuplikan listing, bukan jaminan semua area dapat diakses, dan tidak berlaku untuk pertunjukan.' },
        { q: 'Berapa tiket pertunjukan?', a: 'Harga pertunjukan berbeda dan dapat berubah; konfirmasikan kepada penyelenggara di lokasi.' },
        { q: 'Apakah ada biaya tersembunyi?', a: 'Kunjungan siang umumnya gratis per listing, tetapi parkir, makan, dan transportasi adalah biaya terpisah di pusat Ubud.' }
      ],
      related: ['jam-buka', 'pertunjukan-tari', 'parkir', 'panduan-kunjungan']
    },
    en: {
      title: 'Puri Saren Tickets & Costs: Day, Shows & Extras',
      description: 'Ticket and cost information for Puri Saren Agung: daytime visit, performances, and possible extra expenses.',
      h1: 'Tickets and costs',
      lead: 'Costs are the most misunderstood part. This page separates daytime visit, evening show, and other expenses so you don’t assume one rule applies to all.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'siang',
          heading: 'Daytime visit',
          paragraphs: [
            'Google Maps checked on 19 October 2026 shows free general daytime entry. This is only a listing snippet, not a guarantee that all areas are accessible, and does not apply to performances. Confirm on site.'
          ]
        },
        {
          id: 'pertunjukan',
          heading: 'Evening performances',
          paragraphs: [
            'Performance tickets are separate with their own price. Price and how to buy can change; confirm with the organizer on the performance day.'
          ]
        },
        {
          id: 'tambahan',
          heading: 'Extra expenses',
          paragraphs: [
            'Other costs are usually outside the palace: food, drinks, public parking, transport, or services in central Ubud. Budget these separately from palace tickets.'
          ],
          callout: 'We do not sell tickets and receive no commission. Avoid sites claiming to be the only official seller.'
        }
      ],
      faqs: [
        { q: 'Is Puri Saren free to enter?', a: 'Maps per 19 Oct 2026 shows free general daytime entry as a listing snippet, not a guarantee that all areas are accessible, and not valid for performances.' },
        { q: 'How much are performance tickets?', a: 'Performance prices differ and can change; confirm with the organizer on site.' },
        { q: 'Are there hidden fees?', a: 'Daytime visits are generally free per listing, but parking, food, and transport are separate costs in central Ubud.' }
      ],
      related: ['jam-buka', 'pertunjukan-tari', 'parkir', 'panduan-kunjungan']
    }
  },
  {
    slug: 'cara-ke-sana',
    group: 'visit',
    priority: 1,
    id: {
      title: 'Cara ke Puri Saren Agung dari Berbagai Titik',
      description: 'Perbandingan cara menuju Puri Saren Agung dari pusat Ubud, bandara, dan titik keberangkatan umum lainnya.',
      h1: 'Cara ke Puri Saren Agung',
      lead: 'Alamat yang aman disebutkan kepada pengemudi adalah Puri Saren Agung, Jl. Raya Ubud No.8, Ubud, Kabupaten Gianyar. Waktu perjalanan sangat dipengaruhi kemacetan pusat Ubud, sehingga fleksibilitas penting.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'pusat-ubud',
          heading: 'Dari pusat Ubud',
          paragraphs: [
            'Bila menginap di pusat Ubud, berjalan kaki sering menjadi pilihan paling sederhana. Perhatikan trotoar yang tidak selalu rata, penyeberangan sibuk, hujan, dan panas siang hari.'
          ]
        },
        {
          id: 'bandara',
          heading: 'Dari Bandara Ngurah Rai (DPS)',
          paragraphs: [
            'Pilihan darat meliputi taksi resmi bandara, taksi berizin, kendaraan sewaan dengan pengemudi, atau transportasi berbasis aplikasi sesuai zona jemput. Perjalanan ke Ubud dapat memanjang tajam pada jam sibuk; jangan membuat jadwal lanjutan terlalu rapat.'
          ]
        },
        {
          id: 'umum',
          heading: 'Angkutan umum',
          paragraphs: [
            'Layanan Trans Metro Dewata dan pengembangan konektivitas mobilitas Ubud dapat membantu perjalanan ke wilayah Gianyar/Ubud, tetapi rute, titik berhenti, dan pola layanan pengumpan berubah. Gunakan kanal Dinas Perhubungan Provinsi Bali untuk memeriksa jaringan aktif pada hari perjalanan.'
          ]
        }
      ],
      faqs: [
        { q: 'Alamat apa yang diberikan ke sopir?', a: 'Puri Saren Agung, Jl. Raya Ubud No.8, Ubud, Kabupaten Gianyar, Bali 80571.' },
        { q: 'Berapa lama dari bandara?', a: 'Sangat bervariasi tergantung kemacetan; perjalanan dapat memanjang pada jam sibuk. Jangan menyusun jadwal berikutnya terlalu rapat.' },
        { q: 'Apakah bisa naik angkutan umum?', a: 'Trans Metro Dewata dan layanan terkait dapat membantu, tetapi rute dan pola berubah; verifikasi melalui Dinas Perhubungan Provinsi Bali.' }
      ],
      related: ['taksi', 'parkir', 'waktu-terbaik']
    },
    en: {
      title: 'How to Get to Puri Saren Agung from Common Starting Points',
      description: 'Comparing ways to reach Puri Saren Agung from central Ubud, the airport, and other common departure points.',
      h1: 'How to get to Puri Saren Agung',
      lead: 'The safe address to give a driver is Puri Saren Agung, Jl. Raya Ubud No.8, Ubud, Gianyar Regency. Travel time is strongly affected by central Ubud congestion, so flexibility matters.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'pusat-ubud',
          heading: 'From central Ubud',
          paragraphs: [
            'If you stay in central Ubud, walking is often the simplest option. Watch for uneven sidewalks, busy crossings, rain, and midday heat.'
          ]
        },
        {
          id: 'bandara',
          heading: 'From Ngurah Rai Airport (DPS)',
          paragraphs: [
            'Overland options include official airport taxis, licensed taxis, hired vehicles with driver, or app-based transport per pickup zones. The trip to Ubud can stretch sharply at peak hours; don’t schedule tight follow-ups.'
          ]
        },
        {
          id: 'umum',
          heading: 'Public transport',
          paragraphs: [
            'Trans Metro Dewata and Ubud mobility links can help reach the Gianyar/Ubud area, but routes, stops, and feeder patterns change. Use the Bali Provincial Transportation Office channel to check the active network on your travel day.'
          ]
        }
      ],
      faqs: [
        { q: 'What address do I give the driver?', a: 'Puri Saren Agung, Jl. Raya Ubud No.8, Ubud, Gianyar Regency, Bali 80571.' },
        { q: 'How long from the airport?', a: 'Highly variable with congestion; the trip can stretch at peak hours. Don’t schedule the next activity too tightly.' },
        { q: 'Can I use public transport?', a: 'Trans Metro Dewata and related services can help, but routes and patterns change; verify via the Bali Provincial Transportation Office.' }
      ],
      related: ['taksi', 'parkir', 'waktu-terbaik']
    }
  },
  {
    slug: 'parkir',
    group: 'visit',
    priority: 2,
    id: {
      title: 'Parkir Dekat Puri Saren: Mobil, Motor & Jalan Kaki',
      description: 'Pertimbangan parkir di pusat Ubud dekat Puri Saren Agung: keterbatasan di gerbang, parkir umum, dan opsi berjalan kaki.',
      h1: 'Parkir dekat Puri Saren',
      lead: 'Pusat Ubud sangat padat, dan parkir tepat di gerbang puri tidak dapat dijamin. Halaman ini merangkum opsi realistis: parkir umum resmi, turun di titik aman, atau berjalan dari akomodasi pusat kota.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'gerbang',
          heading: 'Jangan mengandalkan parkir di gerbang',
          paragraphs: [
            'Area pusat Ubud padat; parkir tepat di depan gerbang Puri Saren tidak dapat dijamin. Hindari berhenti sembarangan di depan gerbang karena dapat menghalangi arus lalu lintas.'
          ]
        },
        {
          id: 'umum',
          heading: 'Parkir umum resmi',
          paragraphs: [
            'Rencanakan parkir di fasilitas parkir umum resmi di pusat Ubud, lalu berjalan ke puri. Lokasi, kapasitas, dan tarif parkir umum berubah; ikuti petunjuk setempat dan verifikasi saat tiba.'
          ],
          callout: 'Query "parkir umum ubud" muncul di Search Console sebagai minat awal. Kami tidak mencantumkan satu nama tempat parkir tertentu karena status dan lokasi dapat berubah; gunakan parkir umum resmi terdekat yang Anda temukan saat tiba.'
        },
        {
          id: 'jalan',
          heading: 'Opsi berjalan kaki',
          paragraphs: [
            'Jika menginap di pusat Ubud, berjalan kaki sering lebih sederhana daripada membawa kendaraan ke dalam keramaian. Ini juga menghindari pencarian parkir sama sekali.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah ada parkir di depan puri?', a: 'Tidak dijamin. Pusat Ubud sangat padat; lebih aman menggunakan parkir umum resmi lalu berjalan.' },
        { q: 'Di mana parkir mobil?', a: 'Gunakan fasilitas parkir umum resmi di pusat Ubud; lokasi dan tarif berubah, verifikasi saat tiba.' },
        { q: 'Apakah lebih baik jalan kaki?', a: 'Jika menginap di pusat Ubud, berjalan kaki sering lebih sederhana dan menghindari pencarian parkir.' }
      ],
      related: ['cara-ke-sana', 'taksi', 'waktu-terbaik', 'panduan-kunjungan']
    },
    en: {
      title: 'Parking Near Puri Saren: Car, Motorbike & Walking',
      description: 'Parking considerations near Puri Saren Agung in central Ubud: gate limits, public parking, and walking options.',
      h1: 'Parking near Puri Saren',
      lead: 'Central Ubud is very congested, and parking right at the palace gate cannot be guaranteed. This page summarizes realistic options: official public parking, dropping off at a safe point, or walking from central accommodation.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'gerbang',
          heading: 'Don’t rely on gate parking',
          paragraphs: [
            'Central Ubud is congested; parking right in front of the Puri Saren gate cannot be guaranteed. Avoid random stops in front of the gate as they block traffic flow.'
          ]
        },
        {
          id: 'umum',
          heading: 'Official public parking',
          paragraphs: [
            'Plan to park at an official public parking facility in central Ubud, then walk to the palace. Location, capacity, and rates change; follow local signs and verify on arrival.'
          ],
          callout: 'The query "parkir umum ubud" appeared in Search Console as an early signal. We do not list one specific parking lot because status and location can change; use the nearest official public parking you find on arrival.'
        },
        {
          id: 'jalan',
          heading: 'Walking options',
          paragraphs: [
            'If you stay in central Ubud, walking is often simpler than bringing a vehicle into the congestion. It also avoids the parking search entirely.'
          ]
        }
      ],
      faqs: [
        { q: 'Is there parking in front of the palace?', a: 'Not guaranteed. Central Ubud is very congested; safer to use official public parking then walk.' },
        { q: 'Where to park a car?', a: 'Use an official public parking facility in central Ubud; location and rates change, verify on arrival.' },
        { q: 'Is walking better?', a: 'If staying in central Ubud, walking is often simpler and avoids the parking search.' }
      ],
      related: ['cara-ke-sana', 'taksi', 'waktu-terbaik', 'panduan-kunjungan']
    }
  },
  {
    slug: 'taksi',
    group: 'visit',
    priority: 3,
    id: {
      title: 'Taksi, Rideshare & Chartered Car ke Puri Saren',
      description: 'Saran turun naik dengan taksi, transportasi berbasis aplikasi, atau kendaraan sewaan berpengemudi menuju Puri Saren.',
      h1: 'Taksi, rideshare, dan chartered car',
      lead: 'Banyak pengunjung tiba dengan taksi, aplikasi transportasi, atau mobil sewaan berpengemudi. Kunci kenyamanan adalah titik turun naik yang aman dan konfirmasi tarif sebelum berangkat.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'aplikasi',
          heading: 'Transportasi berbasis aplikasi',
          paragraphs: [
            'Minta turun di titik tepi jalan yang aman dan tidak menghalangi arus pusat Ubud. Beberapa area memiliki aturan titik jemput lokal; ikuti rambu dan arahan petugas. Konfirmasikan tarif atau estimasi aplikasi sebelum berangkat.'
          ]
        },
        {
          id: 'charter',
          heading: 'Kendaraan sewaan berpengemudi',
          paragraphs: [
            'Charter harian berguna bila Anda menyusun rute Ubud yang lebih luas (misalnya Monkey Forest, Campuhan Ridge, atau perjalanan keluar kota). Sepakati titik jemput dan durasi sebelum perjalanan.'
          ]
        },
        {
          id: 'titik',
          heading: 'Titik turun yang aman',
          paragraphs: [
            'Hindari meminta turun tepat di depan gerbang puri saat jam ramai. Turun di titik aman di tepi Jl. Raya Ubud, lalu berjalan sebentar ke gerbang.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah rideshare menjemput di depan gerbang?', a: 'Tidak selalu. Gunakan titik jemput lokal yang ditandai dan ikuti arahan petugas; lebih aman turun di tepi jalan lalu berjalan.' },
        { q: 'Apakah perlu chartered car?', a: 'Tidak untuk kunjungan puri saja, tetapi berguna bila menggabungkan objek lebih luas di Ubud.' },
        { q: 'Bagaimana konfirmasi harga?', a: 'Konfirmasikan estimasi aplikasi atau kesepakatan charter sebelum berangkat untuk menghindari salah paham.' }
      ],
      related: ['cara-ke-sana', 'parkir', 'satu-hari-ubud', 'setengah-hari']
    },
    en: {
      title: 'Taxi, Rideshare & Chartered Car to Puri Saren',
      description: 'Drop-off advice for taxis, app-based transport, or hired vehicles with driver going to Puri Saren.',
      h1: 'Taxi, rideshare, and chartered car',
      lead: 'Many visitors arrive by taxi, transport apps, or hired cars with a driver. The key to comfort is a safe drop-off point and confirming fare before departure.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'aplikasi',
          heading: 'App-based transport',
          paragraphs: [
            'Ask to be dropped at a safe roadside point that does not block central Ubud flow. Some areas have local pickup rules; follow signs and staff. Confirm the app fare or estimate before departure.'
          ]
        },
        {
          id: 'charter',
          heading: 'Hired vehicle with driver',
          paragraphs: [
            'A daily charter helps when building a broader Ubud route (e.g., Monkey Forest, Campuhan Ridge, or out-of-town trips). Agree on pickup point and duration before the trip.'
          ]
        },
        {
          id: 'titik',
          heading: 'A safe drop-off point',
          paragraphs: [
            'Avoid asking to be dropped right at the palace gate at busy times. Alight at a safe point along Jl. Raya Ubud, then walk briefly to the gate.'
          ]
        }
      ],
      faqs: [
        { q: 'Does rideshare pick up at the gate?', a: 'Not always. Use marked local pickup points and follow staff; safer to alight roadside then walk.' },
        { q: 'Do I need a chartered car?', a: 'Not for the palace alone, but useful when combining broader Ubud sights.' },
        { q: 'How to confirm price?', a: 'Confirm the app estimate or charter agreement before departure to avoid misunderstanding.' }
      ],
      related: ['cara-ke-sana', 'parkir', 'satu-hari-ubud', 'setengah-hari']
    }
  },
  {
    slug: 'waktu-terbaik',
    group: 'visit',
    priority: 2,
    id: {
      title: 'Kapan Waktu Terbaik ke Puri Saren',
      description: 'Memilih waktu kunjungan Puri Saren berdasarkan cuaca, keramaian, dan slot siang vs malam.',
      h1: 'Kapan waktu terbaik',
      lead: 'Waktu terbaik bergantung tujuan Anda: observasi arsitektur lebih nyaman pagi, sementara pertunjukan tari hanya tersedia malam. Halaman ini memisahkan keduanya dan memperhitungkan cuaca Bali.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'pagi',
          heading: 'Pagi setelah pembukaan',
          paragraphs: [
            'Pagi setelah jam buka biasanya lebih nyaman untuk mengamati detail arsitektur dan mengurangi paparan panas. Pusat Ubud semakin padat menjelang siang.'
          ]
        },
        {
          id: 'sore',
          heading: 'Sore dan pertunjukan',
          paragraphs: [
            'Sore memberi suasana berbeda dan menjadi waktu mendekati pertunjukan malam. Jangan menyamakan jam kunjungan siang dengan jadwal pertunjukan malam.'
          ]
        },
        {
          id: 'cuaca',
          heading: 'Cuaca Bali',
          paragraphs: [
            'Bali umumnya hangat dan lembap sepanjang tahun dengan pola musim kemarau dan hujan. Hujan dapat turun tiba-tiba; siapkan payung atau pelindung, dan permukaan batu dapat licin.'
          ]
        }
      ],
      faqs: [
        { q: 'Hari apa paling sepi?', a: 'Keramaian berubah; pagi umumnya lebih tenang untuk observasi. Kami tidak menjanjikan hari tertentu karena tergantung musim dan acara lokal.' },
        { q: 'Apakah malam lebih baik?', a: 'Malam cocok untuk pertunjukan tari, bukan kunjungan area siang yang sama. Anggap keduanya sebagai agenda terpisah.' },
        { q: 'Bagaimana dengan cuaca hujan?', a: 'Siapkan pelindung; permukaan dapat licin. Baca halaman "Hari hujan" untuk rencana cadangan.' }
      ],
      related: ['jam-buka', 'hujan', 'durasi', 'panduan-kunjungan']
    },
    en: {
      title: 'Best Time to Visit Puri Saren',
      description: 'Choosing when to visit Puri Saren based on weather, crowds, and daytime vs evening slots.',
      h1: 'Best time to visit',
      lead: 'The best time depends on your goal: architecture observation is more comfortable in the morning, while dance shows are only in the evening. This page separates the two and accounts for Bali weather.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'pagi',
          heading: 'Morning after opening',
          paragraphs: [
            'Early after opening is usually more comfortable for observing architectural detail and reducing heat exposure. Central Ubud gets busier toward midday.'
          ]
        },
        {
          id: 'sore',
          heading: 'Afternoon and shows',
          paragraphs: [
            'Late afternoon gives a different mood and is close to evening performances. Do not equate daytime visiting hours with the evening show schedule.'
          ]
        },
        {
          id: 'cuaca',
          heading: 'Bali weather',
          paragraphs: [
            'Bali is generally warm and humid year-round with dry and wet season patterns. Rain can fall suddenly; bring an umbrella or cover, and stone surfaces can be slippery.'
          ]
        }
      ],
      faqs: [
        { q: 'Which day is quietest?', a: 'Crowds vary; mornings are generally calmer for observation. We do not promise a specific day as it depends on season and local events.' },
        { q: 'Is evening better?', a: 'Evening suits dance shows, not the same daytime-area visit. Treat them as separate plans.' },
        { q: 'What about rainy weather?', a: 'Bring cover; surfaces can be slippery. See the "Rainy day" page for backup plans.' }
      ],
      related: ['jam-buka', 'hujan', 'durasi', 'panduan-kunjungan']
    }
  },
  {
    slug: 'durasi',
    group: 'visit',
    priority: 3,
    id: {
      title: 'Berapa Lama di Puri Saren? Durasi per Minat',
      description: 'Cara menentukan lama kunjungan Puri Saren berdasarkan minat: observasi singkat, foto, atau gabungan pertunjukan.',
      h1: 'Berapa lama waktu yang diperlukan',
      lead: 'Puri Saren bukan objek yang memakan waktu seharian untuk area siangnya. Durasi terbaik disesuaikan dengan minat Anda: observasi arsitektur, foto singkat, atau gabungan dengan pertunjukan malam.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'singkat',
          heading: 'Kunjungan singkat',
          paragraphs: [
            'Observasi arsitektur dan lanskap di area publik biasanya cukup 30–60 menit. Ini cocok bila Anda menyusuri pusat Ubud dan mampir sebentar.'
          ]
        },
        {
          id: 'gabung',
          heading: 'Gabungan dengan pertunjukan',
          paragraphs: [
            'Jika Anda juga menonton pertunjukan malam, jangan hitung keduanya sebagai satu kunjungan berurutan otomatis. Pertunjukan memiliki jadwal sendiri; Anda mungkin kembali di malam hari secara terpisah.'
          ]
        },
        {
          id: 'minat',
          heading: 'Sesuaikan dengan minat',
          paragraphs: [
            'Pengunjung dengan minat fotografi atau arsitektur mungkin ingin lebih lama di siang hari. Pengunjung yang hanya lewat dapat lebih singkat.'
          ]
        }
      ],
      faqs: [
        { q: 'Berapa menit cukup?', a: '30–60 menit untuk area publik siang biasanya cukup, tergantung minat.' },
        { q: 'Apakah perlu setengah hari?', a: 'Tidak untuk puri saja. Setengah hari lebih cocok bila menggabungkan objek lain di pusat Ubud (lihat "Setengah hari").' },
        { q: 'Apakah pertunjukan dihitung dalam durasi?', a: 'Pertunjukan malam memiliki jadwal sendiri; anggap sebagai agenda terpisah, bukan lanjutan otomatis kunjungan siang.' }
      ],
      related: ['waktu-terbaik', 'panduan-kunjungan', 'setengah-hari', 'pertunjukan-tari']
    },
    en: {
      title: 'How Long at Puri Saren? Duration by Interest',
      description: 'How to decide visit length at Puri Saren based on interest: short observation, photos, or combined with a show.',
      h1: 'How much time you need',
      lead: 'Puri Saren is not an all-day object for its daytime area. Best duration matches your interest: architecture observation, a short photo stop, or combined with an evening show.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'singkat',
          heading: 'Short visit',
          paragraphs: [
            'Observing architecture and landscape in public areas is usually enough in 30–60 minutes. This suits strolling central Ubud and dropping by briefly.'
          ]
        },
        {
          id: 'gabung',
          heading: 'Combined with a show',
          paragraphs: [
            'If you also watch an evening show, don’t count both as one automatically sequential visit. Shows have their own schedule; you may return separately at night.'
          ]
        },
        {
          id: 'minat',
          heading: 'Match your interest',
          paragraphs: [
            'Visitors interested in photography or architecture may want longer in daytime. Those just passing through can be shorter.'
          ]
        }
      ],
      faqs: [
        { q: 'How many minutes is enough?', a: '30–60 minutes for the daytime public area is usually enough, depending on interest.' },
        { q: 'Do I need half a day?', a: 'Not for the palace alone. Half a day fits better when combining other central Ubud sights (see "Half day").' },
        { q: 'Is the show counted in duration?', a: 'Evening shows have their own schedule; treat as a separate plan, not an automatic continuation of the daytime visit.' }
      ],
      related: ['waktu-terbaik', 'panduan-kunjungan', 'setengah-hari', 'pertunjukan-tari']
    }
  },
  {
    slug: 'anak',
    group: 'visit',
    priority: 3,
    id: {
      title: 'Berkunjung ke Puri Saren dengan Anak',
      description: 'Catatan membawa anak ke Puri Saren Agung: kenyamanan, pengawasan, dan menggabungkan dengan aktivitas ramah anak di Ubud.',
      h1: 'Kunjungan dengan anak',
      lead: 'Puri Saren dapat dikunjungi keluarga, tetapi area terbuka dengan permukaan tidak rata menuntut pengawasan. Halaman ini merangkum persiapan dan cara menyambung ke aktivitas ramah anak di Ubud.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'pengawasan',
          heading: 'Pengawasan dan permukaan',
          paragraphs: [
            'Beberapa permukaan tidak rata, terdapat ambang, dan ruang sirkulasi dapat sempit. Awasi anak saat bergerak antar-halaman dan jangan biarkan mereka memanjat struktur.'
          ]
        },
        {
          id: 'aktivitas',
          heading: 'Menyambung ke aktivitas ramah anak',
          paragraphs: [
            'Ubud memiliki pilihan ramah anak seperti jalan kaki singkat, melihat seni, atau mengunjungi area lain yang lebih luas. Sesuaikan durasi dengan usia dan energi anak.'
          ]
        },
        {
          id: 'istirahat',
          heading: 'Istirahat dan hidrasi',
          paragraphs: [
            'Cuaca hangat dan lembap; bawa air minum, topi, dan gunakan suasana teduh di halaman puri. Perhatikan tanda kelelahan anak saat keramaian.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah puri cocok untuk balita?', a: 'Area publik cukup ramah pejalan kaki, tetapi awasi permukaan tidak rata dan ambang. Bawa kebutuhan dasar anak.' },
        { q: 'Aktivitas apa setelah puri?', a: 'Jalan kaki singkat di pusat Ubud, seni, atau objek lain yang lebih luas dapat disesuaikan dengan usia anak.' },
        { q: 'Apakah ada fasilitas khusus anak?', a: 'Tidak ada fasilitas khusus anak di dalam puri; perencanakan kebutuhan (air, teduh, toilet) dari pusat Ubud.' }
      ],
      related: ['akses-kursi-roda', 'hujan', 'sekitar-jalan-kaki', 'setengah-hari']
    },
    en: {
      title: 'Visiting Puri Saren with Kids',
      description: 'Notes on bringing children to Puri Saren Agung: comfort, supervision, and linking to kid-friendly activities in Ubud.',
      h1: 'Visiting with kids',
      lead: 'Puri Saren can be visited by families, but open areas with uneven surfaces require supervision. This page summarizes preparation and how to connect to kid-friendly activities in Ubud.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'pengawasan',
          heading: 'Supervision and surfaces',
          paragraphs: [
            'Some surfaces are uneven, there are thresholds, and circulation can be narrow. Supervise children moving between courtyards and don’t let them climb structures.'
          ]
        },
        {
          id: 'aktivitas',
          heading: 'Linking to kid-friendly activities',
          paragraphs: [
            'Ubud has kid-friendly options like short walks, seeing art, or visiting broader sights. Adjust duration to the child’s age and energy.'
          ]
        },
        {
          id: 'istirahat',
          heading: 'Rest and hydration',
          paragraphs: [
            'The weather is warm and humid; bring water, a hat, and use shade in the palace courtyards. Watch for child fatigue in crowds.'
          ]
        }
      ],
      faqs: [
        { q: 'Is the palace suitable for toddlers?', a: 'Public areas are fairly walkable, but watch uneven surfaces and thresholds. Bring the child’s basics.' },
        { q: 'What to do after the palace?', a: 'Short walks in central Ubud, art, or broader sights can be adjusted to the child’s age.' },
        { q: 'Are there child-specific facilities?', a: 'No child-specific facilities inside the palace; plan needs (water, shade, toilet) from central Ubud.' }
      ],
      related: ['akses-kursi-roda', 'hujan', 'sekitar-jalan-kaki', 'setengah-hari']
    }
  },
  {
    slug: 'akses-kursi-roda',
    group: 'visit',
    priority: 3,
    id: {
      title: 'Akses Kursi Roda di Puri Saren',
      description: 'Fasilitas yang dikonfirmasi dan belum dikonfirmasi untuk pengunjung kursi roda di Puri Saren Agung, serta cara bertanya.',
      h1: 'Akses kursi roda',
      lead: 'Akses mobilitas di puri bersifat parsial. Halaman ini jujur memisahkan apa yang diketahui, apa yang belum pasti, dan cara memverifikasi sebelum datang.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'diketahui',
          heading: 'Yang diketahui',
          paragraphs: [
            'Area publik puri memiliki permukaan batu, ambang, dan anak tangga yang membuat rute tidak sepenuhnya bebas hambatan. Beberapa halaman relatif datar tetapi akses antar-ruang dapat terputus oleh ambang.'
          ]
        },
        {
          id: 'belum',
          heading: 'Yang belum dikonfirmasi',
          paragraphs: [
            'Kami tidak memiliki daftar ramp resmi, toilet akses disabilitas, atau jalur kursi roda terverifikasi di dalam puri. Informasi ini dapat berubah dan harus diverifikasi di lokasi.'
          ]
        },
        {
          id: 'cara',
          heading: 'Cara memverifikasi',
          paragraphs: [
            'Tanyakan kepada petugas di gerbang mengenai rute yang dapat dilalui kursi roda pada hari kunjungan. Datang dengan pendamping dan pertimbangkan puri sebagai kunjungan singkat, bukan rute panjang.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah puri ramah kursi roda?', a: 'Tidak sepenuhnya. Permukaan tidak rata, ada ambang dan anak tangga; rute tidak sepenuhnya bebas hambatan.' },
        { q: 'Apakah ada toilet akses disabilitas?', a: 'Belum kami verifikasi di dalam puri; tanyakan petugas di lokasi.' },
        { q: 'Bagaimana cara terbaik datang?', a: 'Datang dengan pendamping, tanya rute kursi roda ke petugas, dan pertimbangkan kunjungan singkat.' }
      ],
      related: ['anak', 'panduan-kunjungan', 'cara-ke-sana']
    },
    en: {
      title: 'Wheelchair Access at Puri Saren',
      description: 'Confirmed and unconfirmed facilities for wheelchair visitors at Puri Saren Agung, and how to ask.',
      h1: 'Wheelchair access',
      lead: 'Mobility access at the palace is partial. This page honestly separates what is known, what is uncertain, and how to verify before coming.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'diketahui',
          heading: 'What is known',
          paragraphs: [
            'The palace public area has stone surfaces, thresholds, and steps that make routes not fully barrier-free. Some courtyards are relatively flat but access between spaces can be broken by thresholds.'
          ]
        },
        {
          id: 'belum',
          heading: 'What is unconfirmed',
          paragraphs: [
            'We do not have a verified list of official ramps, accessible toilets, or wheelchair routes inside the palace. This can change and must be verified on site.'
          ]
        },
        {
          id: 'cara',
          heading: 'How to verify',
          paragraphs: [
            'Ask staff at the gate about wheelchair-passable routes on your visit day. Come with a companion and consider the palace a short visit, not a long route.'
          ]
        }
      ],
      faqs: [
        { q: 'Is the palace wheelchair friendly?', a: 'Not fully. Surfaces are uneven, with thresholds and steps; routes are not fully barrier-free.' },
        { q: 'Is there an accessible toilet?', a: 'We have not verified one inside the palace; ask staff on site.' },
        { q: 'Best way to come?', a: 'Come with a companion, ask staff about wheelchair routes, and consider a short visit.' }
      ],
      related: ['anak', 'panduan-kunjungan', 'cara-ke-sana']
    }
  },
  {
    slug: 'hujan',
    group: 'visit',
    priority: 3,
    id: {
      title: 'Kunjungan Saat Hujan ke Puri Saren',
      description: 'Rencana cadangan saat hujan: area terbuka puri, pelindung, dan aktivitas dalam ruangan di sekitar Ubud.',
      h1: 'Kunjungan saat hujan',
      lead: 'Sebagian kunjungan puri berada di ruang terbuka, sehingga hujan memengaruhi kenyamanan. Halaman ini memberi rencana cadangan tanpa mengarang fasilitas dalam ruangan yang tidak ada.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'terbuka',
          heading: 'Kunjungan terbuka',
          paragraphs: [
            'Halaman dan bale puri sebagian terbuka. Saat hujan, permukaan batu dapat licin; gunakan alas kaki dengan cengkeraman baik dan bergerak pelan.'
          ]
        },
        {
          id: 'cadangan',
          heading: 'Rencana cadangan dalam ruangan',
          paragraphs: [
            'Ubud memiliki pilihan dalam ruangan seperti kafe, museum (misalnya Museum Puri Lukisan), dan toko kerajinan di sekitar pusat kota. Ini bukan fasilitas di dalam puri, melainkan alternatif di sekitar.'
          ]
        },
        {
          id: 'pelindung',
          heading: 'Pelindung dan persiapan',
          paragraphs: [
            'Bawa payung atau jas hujan, dan manfaatkan atap bale serta selasar puri untuk berteduh sementara. Perhatikan rambu saat hujan deras.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah puri tutup saat hujan?', a: 'Tidak otomatis; area terbuka tetap dapat dikunjungi dengan hati-hati. Pertunjukan malam mengikuti jadwal sendiri.' },
        { q: 'Aktivitas dalam ruangan apa di dekat?', a: 'Kafe, museum, dan toko kerajinan di pusat Ubud dapat menjadi alternatif; bukan fasilitas di dalam puri.' },
        { q: 'Apakah permukaan licin?', a: 'Ya, batu dapat licin saat hujan; gunakan alas kaki dengan cengkeraman dan bergerak pelan.' }
      ],
      related: ['waktu-terbaik', 'museum-puri-lukisan', 'kedai-kopi', 'anak']
    },
    en: {
      title: 'Visiting Puri Saren on a Rainy Day',
      description: 'Backup plans for rain: the palace open areas, cover, and indoor activities around Ubud.',
      h1: 'Visiting on a rainy day',
      lead: 'Part of the palace visit is outdoors, so rain affects comfort. This page gives backup plans without inventing indoor facilities that don’t exist.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'terbuka',
          heading: 'Outdoor visit',
          paragraphs: [
            'The palace courtyards and bale are partly open. In rain, stone surfaces can be slippery; wear footwear with good grip and move slowly.'
          ]
        },
        {
          id: 'cadangan',
          heading: 'Indoor backup plans',
          paragraphs: [
            'Ubud has indoor options like cafes, museums (e.g., Museum Puri Lukisan), and craft shops around the town center. These are not facilities inside the palace but alternatives nearby.'
          ]
        },
        {
          id: 'pelindung',
          heading: 'Cover and preparation',
          paragraphs: [
            'Bring an umbrella or raincoat, and use the bale roofs and palace verandas for temporary shelter. Watch signage during heavy rain.'
          ]
        }
      ],
      faqs: [
        { q: 'Does the palace close in rain?', a: 'Not automatically; open areas can still be visited carefully. Evening shows follow their own schedule.' },
        { q: 'What indoor activities nearby?', a: 'Cafes, museums, and craft shops in central Ubud can be alternatives; not facilities inside the palace.' },
        { q: 'Are surfaces slippery?', a: 'Yes, stone can be slippery in rain; wear grippy footwear and move slowly.' }
      ],
      related: ['waktu-terbaik', 'museum-puri-lukisan', 'kedai-kopi', 'anak']
    }
  },
  {
    slug: 'pakaian',
    group: 'visit',
    priority: 2,
    id: {
      title: 'Pakaian & Etika Tempat Ibadah di Puri Saren',
      description: 'Aturan pakaian dan etika budaya di Puri Saren Agung serta perbedaan dengan pura (tempat ibadah).',
      h1: 'Pakaian dan etika budaya',
      lead: 'Puri Saren adalah ruang kerajaan yang masih hidup, bukan pura, tetapi sopan santun berpakaian tetap penting. Halaman ini merangkum aturan yang berlaku dan yang perlu dikonfirmasi di lokasi.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'sopan',
          heading: 'Pakaian sopan',
          paragraphs: [
            'Gunakan pakaian yang menutupi bahu dan lutut secara wajar. Puri bukan pura, tetapi sebagai ruang budaya Bali, pakaian sopan menunjukkan rasa hormat dan membuat Anda lebih nyaman berinteraksi dengan warga.'
          ]
        },
        {
          id: 'upacara',
          heading: 'Saat ada upacara',
          paragraphs: [
            'Jika ada upacara atau area yang meminta ketentuan khusus, ikuti arahan petugas dan masyarakat setempat. Jangan memindahkan sesajen atau memasuki area yang dibatasi.'
          ]
        },
        {
          id: 'beda-pura',
          heading: 'Beda dengan pura',
          paragraphs: [
            'Di pura (tempat ibadah Hindu Bali) seperti Saraswati, etika lebih ketat: selain pakaian sopan, hormati jemaat dan jangan naik ke struktur suci. Puri lebih longgar tetapi tetap hormati batas.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah wajib pakai kain/saput?', a: 'Tidak diwajibkan di puri seperti di pura, tetapi pakaian sopan sangat disarankan. Di pura, ikuti etika tempat ibadah.' },
        { q: 'Apakah boleh baju singkat?', a: 'Hindari untuk menghormati ruang budaya; lebih nyaman dengan bahu dan lutut tertutup.' },
        { q: 'Apa beda puri dan pura?', a: 'Puri adalah kediaman kerajaan; pura adalah tempat ibadah dengan etika lebih ketat. Baca halaman "Saraswati" untuk detail.' }
      ],
      related: ['etika-foto', 'saraswati', 'panduan-kunjungan', 'pertunjukan-tari']
    },
    en: {
      title: 'Dress & Temple Etiquette at Puri Saren',
      description: 'Dress rules and cultural etiquette at Puri Saren Agung and how they differ from a pura (temple).',
      h1: 'Dress and cultural etiquette',
      lead: 'Puri Saren is a living royal space, not a temple, but modest dress still matters. This page summarizes the rules that apply and what to confirm on site.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'sopan',
          heading: 'Modest dress',
          paragraphs: [
            'Wear clothing that reasonably covers shoulders and knees. The palace is not a temple, but as a Balinese cultural space, modest dress shows respect and helps you interact comfortably with residents.'
          ]
        },
        {
          id: 'upacara',
          heading: 'During ceremonies',
          paragraphs: [
            'If there is a ceremony or an area asking for specific rules, follow staff and local directions. Do not move offerings or enter restricted areas.'
          ]
        },
        {
          id: 'beda-pura',
          heading: 'Difference from a temple',
          paragraphs: [
            'At a pura (Balinese Hindu place of worship) like Saraswati, etiquette is stricter: beyond modest dress, respect worshippers and do not climb sacred structures. The palace is more relaxed but still respect boundaries.'
          ]
        }
      ],
      faqs: [
        { q: 'Is a sarong required?', a: 'Not required at the palace as at a temple, but modest dress is strongly advised. At a temple, follow worship etiquette.' },
        { q: 'May I wear shorts?', a: 'Avoid them to respect the cultural space; shoulders and knees covered is more comfortable.' },
        { q: 'What is the difference between palace and temple?', a: 'The palace is a royal residence; a temple is a place of worship with stricter etiquette. See the "Saraswati" page for details.' }
      ],
      related: ['etika-foto', 'saraswati', 'panduan-kunjungan', 'pertunjukan-tari']
    }
  },

  // ───────────────────────── C. MAKAN & MINUM ─────────────────────────
  {
    slug: 'restoran',
    group: 'food',
    priority: 2,
    id: {
      title: 'Restoran Dekat Puri Saren: Memilih Berdasar Rute',
      description: 'Cara memilih restoran dekat Puri Saren Agung berdasarkan jalur pejalan kaki, waktu makan siang, dan makan malam, tanpa peringkat komersial.',
      h1: 'Restoran dekat Puri Saren',
      lead: 'Sebagai panduan nonkomersial, kami tidak mengurutkan atau mempromosikan usaha tertentu. Halaman ini membantu Anda memilih tipe restoran berdasarkan rute pejalan kaki dan waktu makan, serta cara memverifikasi bahwa usaha masih buka.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'rute',
          heading: 'Pilih berdasarkan rute',
          paragraphs: [
            'Pusat Ubud padat dan dapat dijelajahi dengan berjalan kaki. Pilih restoran di sekitar Jl. Raya Ubud dan jalan penghubung, sehingga tidak perlu kembali ke puri lalu keluar lagi.'
          ]
        },
        {
          id: 'siang',
          heading: 'Makan siang',
          paragraphs: [
            'Untuk makan siang setelah kunjungan siang, cari warung atau rumah makan dengan menu harian di radius jalan kaki singkat. Periksa jam buka karena beberapa tempat tutup di waktu tertentu.'
          ]
        },
        {
          id: 'malam',
          heading: 'Makan malam',
          paragraphs: [
            'Makan malam sebelum atau sesudah pertunjukan lebih nyaman bila dipesan dekat puri. Verifikasi jam buka malam karena tidak semua tempat melayani larut malam.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verifikasi sebelum datang',
          paragraphs: [
            'Status buka, harga, dan menu dapat berubah. Kami tidak menyediakan daftar nama tertentu sebagai jaminan; gunakan peta atau sumber terkini saat tiba, dan tanyakan kepada penduduk setempat bila ragu.'
          ],
          callout: 'Halaman ini menjelaskan tipe pilihan, bukan peringkat usaha. Kami tidak menerima komisi dari restoran mana pun.'
        }
      ],
      faqs: [
        { q: 'Restoran apa yang terdekat?', a: 'Banyak pilihan dalam jalan kaki singkat di pusat Ubud; kami tidak memeringkatkan tertentu. Pilih berdasarkan rute dan waktu makan.' },
        { q: 'Apakah perlu reservasi?', a: 'Tergantung tempat dan musim; verifikasi langsung atau melalui sumber terkini saat tiba.' },
        { q: 'Apakah ada restoran halal?', a: 'Ubud memiliki banyak warung muslim dan pilihan halal; tanyakan bahan dan sertifikasi saat memesan.' }
      ],
      related: ['masakan-bali', 'kedai-kopi', 'vegetarian', 'makan-malam']
    },
    en: {
      title: 'Restaurants Near Puri Saren: Choosing by Route',
      description: 'How to choose restaurants near Puri Saren Agung by walking route, lunch time, and dinner, without commercial ranking.',
      h1: 'Restaurants near Puri Saren',
      lead: 'As a non-commercial guide, we do not rank or promote specific businesses. This page helps you choose restaurant types by walking route and meal time, and how to verify a place is still open.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'rute',
          heading: 'Choose by route',
          paragraphs: [
            'Central Ubud is dense and walkable. Pick restaurants around Jl. Raya Ubud and connecting streets so you don’t return to the palace and leave again.'
          ]
        },
        {
          id: 'siang',
          heading: 'Lunch',
          paragraphs: [
            'For lunch after a daytime visit, look for warung or eateries with daily menus within a short walk. Check opening hours as some close at certain times.'
          ]
        },
        {
          id: 'malam',
          heading: 'Dinner',
          paragraphs: [
            'Dinner before or after a show is easier when booked near the palace. Verify late-night hours as not all places serve very late.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verify before going',
          paragraphs: [
            'Open status, prices, and menus change. We do not provide specific names as a guarantee; use a map or recent sources on arrival, and ask locals when unsure.'
          ],
          callout: 'This page explains types of choices, not a business ranking. We receive no commission from any restaurant.'
        }
      ],
      faqs: [
        { q: 'What restaurant is closest?', a: 'Many options within a short walk in central Ubud; we do not rank any. Choose by route and meal time.' },
        { q: 'Do I need a reservation?', a: 'Depends on the place and season; verify directly or via recent sources on arrival.' },
        { q: 'Are there halal restaurants?', a: 'Ubud has many Muslim warung and halal options; ask about ingredients and certification when ordering.' }
      ],
      related: ['masakan-bali', 'kedai-kopi', 'vegetarian', 'makan-malam']
    }
  },
  {
    slug: 'masakan-bali',
    group: 'food',
    priority: 3,
    id: {
      title: 'Masakan Bali & Indonesia di Sekitar Puri Saren',
      description: 'Jenis masakan Bali dan Indonesia di sekitar Ubud, serta tips memilih dan menanyakan bahan bagi pengunjung.',
      h1: 'Masakan Bali dan Indonesia',
      lead: 'Mengenal jenis masakan membantu Anda memilih tanpa bergantung pada satu daftar "terbaik". Halaman ini merangkum hidangan umum, batasan makanan, dan cara bertanya dengan hormat.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'jenis',
          heading: 'Hidangan umum',
          paragraphs: [
            'Nasi campur, ayam betutu, sate lilit, lawar, dan pepes adalah contoh hidangan Bali yang sering ditemui di warung dan rumah makan Ubud. Masakan Indonesia yang lebih luas seperti nasi goreng dan soto juga mudah ditemui.'
          ]
        },
        {
          id: 'batasan',
          heading: 'Batasan makanan',
          paragraphs: [
            'Beberapa hidangan menggunakan bumbu pedas, kacang, atau bahan laut. Tanyakan kandungan bila Anda memiliki alergi atau batasan makanan tertentu.'
          ]
        },
        {
          id: 'cara',
          heading: 'Cara memilih',
          paragraphs: [
            'Pilih berdasarkan jenis hidangan yang ingin dicoba, bukan nama tempat. Warung dengan omzet stabil dan menu harian sering menjadi pilihan aman bagi pengunjung yang ingin mencicipi masakan lokal.'
          ]
        }
      ],
      faqs: [
        { q: 'Apa hidangan Bali wajib coba?', a: 'Nasi campur, ayam betutu, dan sate lilit sering disebut sebagai contoh khas; pilihan tergantung selera Anda.' },
        { q: 'Apakah pedas?', a: 'Beberapa hidangan pedas; tanyakan level bumbu bila tidak menyukai pedas.' },
        { q: 'Bagaimana memilih warung?', a: 'Berdasarkan jenis hidangan dan kenyamanan, bukan peringkat. Tanyakan bahan bila ada alergi.' }
      ],
      related: ['restoran', 'vegetarian', 'sarapan', 'makan-malam']
    },
    en: {
      title: 'Balinese & Indonesian Food Around Puri Saren',
      description: 'Types of Balinese and Indonesian food around Ubud, plus tips for choosing and asking about ingredients.',
      h1: 'Balinese and Indonesian food',
      lead: 'Knowing dish types helps you choose without relying on a single "best" list. This page summarizes common dishes, dietary limits, and how to ask respectfully.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'jenis',
          heading: 'Common dishes',
          paragraphs: [
            'Nasi campur, ayam betutu, sate lilit, lawar, and pepes are examples of Balinese dishes often found in Ubud warung and eateries. Broader Indonesian food like nasi goreng and soto is also easy to find.'
          ]
        },
        {
          id: 'batasan',
          heading: 'Dietary limits',
          paragraphs: [
            'Some dishes use spicy seasoning, peanuts, or seafood. Ask about contents if you have allergies or specific dietary restrictions.'
          ]
        },
        {
          id: 'cara',
          heading: 'How to choose',
          paragraphs: [
            'Choose by the type of dish you want to try, not by a place name. Warung with steady turnover and daily menus are often a safe choice for tasting local food.'
          ]
        }
      ],
      faqs: [
        { q: 'What Balinese dish must I try?', a: 'Nasi campur, ayam betutu, and sate lilit are often cited as typical examples; choice depends on your taste.' },
        { q: 'Is it spicy?', a: 'Some dishes are spicy; ask about the seasoning level if you dislike heat.' },
        { q: 'How to pick a warung?', a: 'By dish type and comfort, not ranking. Ask about ingredients if allergic.' }
      ],
      related: ['restoran', 'vegetarian', 'sarapan', 'makan-malam']
    }
  },
  {
    slug: 'kedai-kopi',
    group: 'food',
    priority: 3,
    id: {
      title: 'Kedai Kopi Dekat Puri Saren',
      description: 'Memilih kedai kopi di sekitar Puri Saren untuk istirahat singkat sebelum atau sesudah kunjungan.',
      h1: 'Kedai kopi di sekitar',
      lead: 'Ubud dikenal dengan budaya kopi yang kuat. Halaman ini membantu memilih kedai kopi sebagai tempat istirahat, bukan peringkat usaha.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'istirahat',
          heading: 'Istirahat singkat',
          paragraphs: [
            'Kedai kopi, roti, dan makanan ringan berguna untuk istirahat sebelum atau sesudah kunjungan puri. Pilih yang berada di jalur pejalan kaki Anda agar tidak perlu memutar.'
          ]
        },
        {
          id: 'kopi',
          heading: 'Kopi Bali dan Indonesia',
          paragraphs: [
            'Anda dapat menemukan kopi lokal Bali maupun jenis Indonesia lainnya. Tanyakan cara penyajian bila ingin menghindari gula tinggi atau susu tertentu.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verifikasi',
          paragraphs: [
            'Jam buka dan jenis kedai berubah; gunakan peta atau sumber terkini saat tiba. Kami tidak memeringkatkan kedai tertentu.'
          ]
        }
      ],
      faqs: [
        { q: 'Di mana kedai kopi terdekat?', a: 'Banyak dalam jalan kaki singkat di pusat Ubud; pilih berdasarkan rute Anda.' },
        { q: 'Apakah ada kopi lokal?', a: 'Ya, kopi Bali dan Indonesia umum ditemui; tanyakan penyajian bila perlu.' },
        { q: 'Apakah cocok untuk kerja?', a: 'Beberapa kedai nyaman untuk istirahat singkat, tetapi verifikasi wifi dan ketenangan saat tiba.' }
      ],
      related: ['restoran', 'sarapan', 'vegetarian', 'makan-malam']
    },
    en: {
      title: 'Cafes Near Puri Saren',
      description: 'Choosing cafes around Puri Saren for a short break before or after the visit.',
      h1: 'Cafes around the palace',
      lead: 'Ubud is known for a strong coffee culture. This page helps choose a cafe as a rest spot, not a business ranking.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'istirahat',
          heading: 'Short break',
          paragraphs: [
            'Cafes, bakeries, and light food are useful for a break before or after the palace visit. Pick one on your walking route so you don’t backtrack.'
          ]
        },
        {
          id: 'kopi',
          heading: 'Bali and Indonesian coffee',
          paragraphs: [
            'You can find local Balinese coffee as well as other Indonesian types. Ask about preparation if you want to avoid high sugar or certain milk.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verify',
          paragraphs: [
            'Opening hours and cafe types change; use a map or recent sources on arrival. We do not rank specific cafes.'
          ]
        }
      ],
      faqs: [
        { q: 'Where is the nearest cafe?', a: 'Many within a short walk in central Ubud; choose by your route.' },
        { q: 'Is local coffee available?', a: 'Yes, Balinese and Indonesian coffee are common; ask about preparation if needed.' },
        { q: 'Good for working?', a: 'Some cafes are comfortable for a short break, but verify wifi and quiet on arrival.' }
      ],
      related: ['restoran', 'sarapan', 'vegetarian', 'makan-malam']
    }
  },
  {
    slug: 'sarapan',
    group: 'food',
    priority: 3,
    id: {
      title: 'Sarapan & Brunch Dekat Puri Saren',
      description: 'Menyambungkan sarapan atau brunch dengan kunjungan pagi ke Puri Saren dan rute pusat Ubud.',
      h1: 'Sarapan dan brunch',
      lead: 'Bila Anda ingin datang pagi ke puri, sarapan di sekitar pusat Ubud dapat disusun lebih dulu. Halaman ini membantu menyambungkan waktu makan pagi dengan kunjungan tanpa peringkat usaha.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'waktu',
          heading: 'Waktu pagi',
          paragraphs: [
            'Beberapa kedai dan warung di pusat Ubud mulai melayani pagi. Verifikasi jam buka karena tidak semua tempat menyediakan sarapan sangat awal.'
          ]
        },
        {
          id: 'rute',
          heading: 'Rute pagi',
          paragraphs: [
            'Sarapan di akomodasi atau kedai dekat puri, lalu berjalan ke gerbang setelah pembukaan, memberi cahaya baik untuk foto arsitektur.'
          ]
        },
        {
          id: 'pilihan',
          heading: 'Jenis pilihan',
          paragraphs: [
            'Pilihan berkisar dari sarapan lokal sederhana hingga brunch gaya kafe. Sesuaikan dengan rencana hari dan mobilitas Anda.'
          ]
        }
      ],
      faqs: [
        { q: 'Di mana sarapan dekat puri?', a: 'Banyak kedai dan warung di pusat Ubud; pilih berdasarkan jam buka dan rute.' },
        { q: 'Apakah puri buka saat sarapan?', a: 'Area publik biasanya mulai sekitar 07.00 per listing Maps; verifikasi dengan petugas.' },
        { q: 'Bagaimana menyusun rute?', a: 'Sarapan dekat puri lalu berjalan ke gerbang setelah buka, lebih nyaman untuk foto pagi.' }
      ],
      related: ['kedai-kopi', 'restoran', 'waktu-terbaik', 'jalan-kaki-2-3-jam']
    },
    en: {
      title: 'Breakfast & Brunch Near Puri Saren',
      description: 'Linking breakfast or brunch with a morning visit to Puri Saren and central Ubud routes.',
      h1: 'Breakfast and brunch',
      lead: 'If you want to come early to the palace, breakfast around central Ubud can be planned first. This page links the morning meal with the visit without ranking businesses.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'waktu',
          heading: 'Morning hours',
          paragraphs: [
            'Some cafes and warung in central Ubud start serving early. Verify hours as not all offer very early breakfast.'
          ]
        },
        {
          id: 'rute',
          heading: 'Morning route',
          paragraphs: [
            'Breakfast at your accommodation or a cafe near the palace, then walk to the gate after opening, gives good light for architecture photos.'
          ]
        },
        {
          id: 'pilihan',
          heading: 'Type of choices',
          paragraphs: [
            'Options range from simple local breakfast to cafe-style brunch. Match them to your day plan and mobility.'
          ]
        }
      ],
      faqs: [
        { q: 'Where to breakfast near the palace?', a: 'Many cafes and warung in central Ubud; choose by hours and route.' },
        { q: 'Is the palace open at breakfast time?', a: 'Public areas usually start around 07.00 per Maps listing; verify with staff.' },
        { q: 'How to plan the route?', a: 'Breakfast near the palace then walk to the gate after opening, more comfortable for morning photos.' }
      ],
      related: ['kedai-kopi', 'restoran', 'waktu-terbaik', 'jalan-kaki-2-3-jam']
    }
  },
  {
    slug: 'vegetarian',
    group: 'food',
    priority: 3,
    id: {
      title: 'Pilihan Vegetarian & Vegan Dekat Puri Saren',
      description: 'Cara menemukan pilihan vegetarian dan vegan di Ubud serta memverifikasi bahan dan menghindari salah paham.',
      h1: 'Vegetarian dan vegan',
      lead: 'Ubud memiliki banyak pilihan nabati, tetapi istilah "vegetarian" dan "vegan" dapat berbeda makna antar-tempat. Halaman ini membantu memverifikasi bahan, bukan memeringkatkan usaha.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'pilihan',
          heading: 'Pilihan nabati di Ubud',
          paragraphs: [
            'Ubud dikenal dengan banyak rumah makan vegetarian dan vegan. Beberapa warung juga menyediakan lauk nabati di samping menu daging.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verifikasi bahan',
          paragraphs: [
            'Tanyakan apakah hidangan menggunakan kaldu hewani, telur, atau produk susu bila Anda membatasi hal tersebut. Di Bali, beberapa bumbu dapat mengandung terasi (udang) atau bahan lain yang perlu dikonfirmasi.'
          ]
        },
        {
          id: 'hindari',
          heading: 'Hindari salah paham',
          paragraphs: [
            'Jangan menganggap menu "sayur" otomatis vegan. Konfirmasikan penyediaan dan proses sesuai kebutuhan Anda.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah mudah vegetarian di Ubud?', a: 'Ya, banyak pilihan nabati, tetapi verifikasi bahan sesuai batasan Anda.' },
        { q: 'Apakah terasi digunakan?', a: 'Beberapa bumbu Bali menggunakan terasi; tanyakan bila menghindari produk hewani.' },
        { q: 'Bagaimana memilih tempat?', a: 'Berdasarkan jenis hidangan dan konfirmasi bahan, bukan peringkat.' }
      ],
      related: ['masakan-bali', 'restoran', 'kedai-kopi', 'makan-malam']
    },
    en: {
      title: 'Vegetarian & Vegan Options Near Puri Saren',
      description: 'How to find vegetarian and vegan options in Ubud and verify ingredients to avoid misunderstandings.',
      h1: 'Vegetarian and vegan',
      lead: 'Ubud has many plant-based options, but "vegetarian" and "vegan" can mean different things per place. This page helps verify ingredients, not rank businesses.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'pilihan',
          heading: 'Plant-based options in Ubud',
          paragraphs: [
            'Ubud is known for many vegetarian and vegan eateries. Some warung also offer plant sides alongside meat menus.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verify ingredients',
          paragraphs: [
            'Ask whether a dish uses animal stock, egg, or dairy if you restrict those. In Bali, some seasonings may contain shrimp paste (terasi) or other items worth confirming.'
          ]
        },
        {
          id: 'hindari',
          heading: 'Avoid misunderstandings',
          paragraphs: [
            'Do not assume a "vegetable" menu is automatically vegan. Confirm preparation and sourcing per your needs.'
          ]
        }
      ],
      faqs: [
        { q: 'Is vegetarian easy in Ubud?', a: 'Yes, many plant options, but verify ingredients per your restrictions.' },
        { q: 'Is shrimp paste used?', a: 'Some Balinese seasonings use terasi; ask if avoiding animal products.' },
        { q: 'How to choose a place?', a: 'By dish type and ingredient confirmation, not ranking.' }
      ],
      related: ['masakan-bali', 'restoran', 'kedai-kopi', 'makan-malam']
    }
  },
  {
    slug: 'makan-malam',
    group: 'food',
    priority: 3,
    id: {
      title: 'Makan Malam Sekitar Pertunjukan Puri Saren',
      description: 'Mengatur makan malam sebelum atau sesudah pertunjukan tari di Puri Saren, dengan catatan verifikasi.',
      h1: 'Makan malam sekitar pertunjukan',
      lead: 'Bila Anda menonton pertunjukan malam, makan malam dapat disusun sebelum atau sesudahnya. Halaman ini memberi kerangka waktu tanpa menjanjikan jadwal pertunjukan pasti.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'sebelum',
          heading: 'Sebelum pertunjukan',
          paragraphs: [
            'Makan malam lebih awal di sekitar puri memberi waktu santai sebelum pertunjukan. Verifikasi jam buka tempat dan waktu mulai pertunjukan di lokasi.'
          ]
        },
        {
          id: 'sesudah',
          heading: 'Sesudah pertunjukan',
          paragraphs: [
            'Beberapa tempat di pusat Ubud melayani malam, tetapi jam bervariasi. Jika pertunjukan selesai larut, cek ketersediaan sebelum mengandalkan satu tempat.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verifikasi jadwal',
          paragraphs: [
            'Kami tidak menjamin jadwal pertunjukan. Verifikasi jenis, waktu mulai, dan tiket kepada penyelenggara pada hari yang sama sebelum mengunci rencana makan.'
          ]
        }
      ],
      faqs: [
        { q: 'Kapan makan malam terbaik?', a: 'Lebih awal sebelum pertunjukan lebih santai; sesudah pertunjukan tergantung jam buka tempat.' },
        { q: 'Apakah tempat makan buka larut?', a: 'Bervariasi; verifikasi saat tiba.' },
        { q: 'Apakah pertunjukan setiap malam?', a: 'Tidak dijamin; verifikasi kepada penyelenggara.' }
      ],
      related: ['pertunjukan-tari', 'restoran', 'kedai-kopi']
    },
    en: {
      title: 'Dinner Around Puri Saren Performances',
      description: 'Planning dinner before or after a dance performance at Puri Saren, with verification notes.',
      h1: 'Dinner around the performance',
      lead: 'If you watch an evening show, dinner can be planned before or after. This page gives a time framework without promising a fixed show schedule.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'sebelum',
          heading: 'Before the show',
          paragraphs: [
            'An earlier dinner around the palace gives relaxed time before the performance. Verify the place’s hours and the show’s start time on site.'
          ]
        },
        {
          id: 'sesudah',
          heading: 'After the show',
          paragraphs: [
            'Some central Ubud places serve late, but hours vary. If the show ends late, check availability before relying on one spot.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verify schedule',
          paragraphs: [
            'We do not guarantee the show schedule. Verify type, start time, and tickets with the organizer on the same day before locking your meal plan.'
          ]
        }
      ],
      faqs: [
        { q: 'When is the best dinner?', a: 'Earlier before the show is more relaxed; after the show depends on place hours.' },
        { q: 'Are eateries open late?', a: 'Varies; verify on arrival.' },
        { q: 'Are there shows every night?', a: 'Not guaranteed; verify with the organizer.' }
      ],
      related: ['pertunjukan-tari', 'restoran', 'kedai-kopi']
    }
  },

  // ───────────────────────── D. SEKITAR UBUD ─────────────────────────
  {
    slug: 'sekitar-jalan-kaki',
    group: 'around',
    priority: 2,
    id: {
      title: 'Objek Jalan Kaki di Sekitar Puri Saren',
      description: 'Ikhtisar tempat yang dapat dicapai dengan berjalan kaki dari Puri Saren di pusat Ubud.',
      h1: 'Objek jalan kaki di sekitar',
      lead: 'Pusat Ubud padat dan dapat dijelajahi dengan berjalan kaki. Halaman ini merangkum tempat dalam jarak jalan kaki singkat dari puri, dengan catatan bahwa waktu nyata bervariasi.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'dekat',
          heading: 'Dalam jalan kaki singkat',
          paragraphs: [
            'Pasar Seni Ubud, Pura Taman Saraswati, dan beberapa galeri serta kafe berada dalam jalan kaki singkat dari puri. Waktu tempuh bervariasi dengan keramaian jalan.'
          ]
        },
        {
          id: 'lebih-jauh',
          heading: 'Lebih jauh namun masih jalan kaki',
          paragraphs: [
            'Campuhan Ridge Walk dan Monkey Forest berada dalam radius lebih jauh yang masih mungkin dijangkau berjalan kaki, tergantung energi dan cuaca. Baca halaman masing-masing untuk pertimbangan.'
          ]
        },
        {
          id: 'catatan',
          heading: 'Catatan jarak',
          paragraphs: [
            'Waktu berjalan di sini diestimasikan dari rute jalan nyata, bukan garis lurus. Kondisi trotoar, keramaian, dan cuaca dapat mengubah estimasi.'
          ],
          callout: 'Kami tidak mengukur ulang setiap rute secara independen; gunakan peta dan verifikasi saat tiba. Jangan menyamakan jarak garis lurus dengan waktu berjalan.'
        }
      ],
      faqs: [
        { q: 'Apa yang dekat puri?', a: 'Pasar Seni Ubud, Saraswati, galeri, dan kafe dalam jalan kaki singkat.' },
        { q: 'Apakah Monkey Forest jalan kaki?', a: 'Lebih jauh tetapi masih mungkin dijangkau berjalan kaki; baca halaman khusus.' },
        { q: 'Berapa lama ke Saraswati?', a: 'Beberapa menit berjalan kaki; waktu nyata bervariasi dengan keramaian.' }
      ],
      related: ['pasar-seni', 'saraswati', 'museum-puri-lukisan', 'campuhan-ridge']
    },
    en: {
      title: 'Walkable Sights Around Puri Saren',
      description: 'An overview of places reachable on foot from Puri Saren in central Ubud.',
      h1: 'Walkable sights around',
      lead: 'Central Ubud is dense and walkable. This page summarizes places within a short walk of the palace, noting that real time varies.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'dekat',
          heading: 'Within a short walk',
          paragraphs: [
            'Ubud Art Market, Pura Taman Saraswati, and several galleries and cafes are within a short walk of the palace. Travel time varies with road crowding.'
          ]
        },
        {
          id: 'lebih-jauh',
          heading: 'Farther but still walkable',
          paragraphs: [
            'Campuhan Ridge Walk and the Monkey Forest are at a farther radius still possibly reached on foot, depending on energy and weather. See each page for considerations.'
          ]
        },
        {
          id: 'catatan',
          heading: 'Distance notes',
          paragraphs: [
            'Walking times here are estimated from real road routes, not straight lines. Sidewalk condition, crowds, and weather can change estimates.'
          ],
          callout: 'We do not independently re-measure each route; use a map and verify on arrival. Do not equate straight-line distance with walking time.'
        }
      ],
      faqs: [
        { q: 'What is near the palace?', a: 'Ubud Art Market, Saraswati, galleries, and cafes within a short walk.' },
        { q: 'Is Monkey Forest walkable?', a: 'Farther but still possibly reached on foot; see the dedicated page.' },
        { q: 'How long to Saraswati?', a: 'A few minutes on foot; real time varies with crowds.' }
      ],
      related: ['pasar-seni', 'saraswati', 'museum-puri-lukisan', 'campuhan-ridge']
    }
  },
  {
    slug: 'pasar-seni',
    group: 'around',
    priority: 2,
    id: {
      title: 'Pasar Seni Ubud & Puri Saren: Belanja & Urutan',
      description: 'Hubungan Puri Saren dengan Pasar Seni Ubud, serta cara menyusun urutan kunjungan dan berbelanja dengan hormat.',
      h1: 'Pasar Seni Ubud dan puri',
      lead: 'Pasar Seni Ubud berada dekat puri dan sering dikunjungi bersama. Halaman ini menjelaskan hubungan keduanya, cara berbelanja dengan hormat, dan urutan yang nyaman.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'hubungan',
          heading: 'Hubungan pusat kota',
          paragraphs: [
            'Pasar Seni Ubud dan Puri Saren Agung berada dalam pusat kota yang sama. Membaca hubungan antara puri, pasar, kerajinan, dan ruang kota membantu Anda memahami konteks Ubud.'
          ]
        },
        {
          id: 'urut',
          heading: 'Urutan kunjungan',
          paragraphs: [
            'Anda dapat mengunjungi puri di siang hari, lalu menyusuri ke arah pasar yang biasanya beberapa menit berjalan. Sesuaikan dengan cuaca dan keramaian.'
          ]
        },
        {
          id: 'belanja',
          heading: 'Belanja dengan hormat',
          paragraphs: [
            'Tawar-menawar adalah praktik umum di pasar; lakukan dengan ramah. Hargai karya pengrajin dan hindari klaim berlebihan soal asal produk.'
          ]
        }
      ],
      faqs: [
        { q: 'Berapa jauh pasar dari puri?', a: 'Dalam jalan kaki singkat di pusat Ubud; waktu nyata bervariasi.' },
        { q: 'Apakah harus tawar?', a: 'Tawar-menawar umum di pasar; lakukan dengan ramah.' },
        { q: 'Apakah puri dan pasar satu tiket?', a: 'Tidak. Keduanya tempat terpisah dengan akses masing-masing.' }
      ],
      related: ['sekitar-jalan-kaki', 'kerajinan', 'saraswati', 'panduan-kunjungan']
    },
    en: {
      title: 'Ubud Art Market & Puri Saren: Shopping & Order',
      description: 'The link between Puri Saren and Ubud Art Market, and how to plan the visit order and shop respectfully.',
      h1: 'Ubud Art Market and the palace',
      lead: 'Ubud Art Market is near the palace and often visited together. This page explains their relationship, how to shop respectfully, and a comfortable order.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'hubungan',
          heading: 'A city-center link',
          paragraphs: [
            'Ubud Art Market and Puri Saren Agung sit in the same town center. Reading the relationship between palace, market, crafts, and city space helps you understand Ubud’s context.'
          ]
        },
        {
          id: 'urut',
          heading: 'Visit order',
          paragraphs: [
            'You can visit the palace in daytime, then stroll toward the market, usually a few minutes on foot. Adjust to weather and crowds.'
          ]
        },
        {
          id: 'belanja',
          heading: 'Shop respectfully',
          paragraphs: [
            'Bargaining is common at the market; do it friendlily. Respect artisans’ work and avoid overclaiming a product’s origin.'
          ]
        }
      ],
      faqs: [
        { q: 'How far is the market from the palace?', a: 'Within a short walk in central Ubud; real time varies.' },
        { q: 'Must I bargain?', a: 'Bargaining is common at markets; do it friendlily.' },
        { q: 'Is the palace and market one ticket?', a: 'No. They are separate places with their own access.' }
      ],
      related: ['sekitar-jalan-kaki', 'kerajinan', 'saraswati', 'panduan-kunjungan']
    }
  },
  {
    slug: 'museum-puri-lukisan',
    group: 'around',
    priority: 3,
    id: {
      title: 'Museum Puri Lukisan & Puri Saren: Seni Satu Hari',
      description: 'Menghubungkan Puri Saren dengan Museum Puri Lukisan untuk pengenalan seni Ubud半 hari.',
      h1: 'Museum Puri Lukisan dan puri',
      lead: 'Museum Puri Lukisan adalah museum seni di pusat Ubud yang melengkapi konteks seni puri. Halaman ini membantu menyusun kunjungan singkat antarkeduanya, dengan catatan verifikasi tiket dan jam.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'peran',
          heading: 'Peran museum',
          paragraphs: [
            'Museum Puri Lukisan membantu memahami seni lukis Ubud yang juga berakar pada ekosistem budaya puri. Ini bukan bagian dari puri, melainkan ruang tersendiri dengan tiket dan jam sendiri.'
          ]
        },
        {
          id: 'urut',
          heading: 'Urutan半 hari',
          paragraphs: [
            'Anda dapat mengunjungi puri di siang hari, lalu menyusuri ke arah museum yang berada dalam jalan kaki di pusat Ubud. Verifikasi jam dan tiket museum saat tiba.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verifikasi',
          paragraphs: [
            'Jam buka dan tiket museum dapat berubah; jangan menganggap sama dengan puri. Konfirmasikan melalui kanal resmi museum saat tiba.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah museum dekat puri?', a: 'Ya, dalam jalan kaki di pusat Ubud; waktu nyata bervariasi.' },
        { q: 'Apakah satu tiket?', a: 'Tidak. Museum memiliki tiket dan jam sendiri.' },
        { q: 'Berapa lama di museum?', a: 'Tergantung minat; 45–90 menit umumnya cukup untuk pengenalan.' }
      ],
      related: ['seni-ubud', 'sekitar-jalan-kaki', 'setengah-hari', 'pasar-seni']
    },
    en: {
      title: 'Museum Puri Lukisan & Puri Saren: Art in a Half Day',
      description: 'Linking Puri Saren with Museum Puri Lukisan for a half-day Ubud art intro.',
      h1: 'Museum Puri Lukisan and the palace',
      lead: 'Museum Puri Lukisan is an art museum in central Ubud that complements the palace’s art context. This page helps plan a short visit between them, with ticket and hour verification notes.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'peran',
          heading: 'The museum’s role',
          paragraphs: [
            'Museum Puri Lukisan helps understand Ubud painting, which also roots in the palace’s cultural ecosystem. It is not part of the palace but a separate space with its own ticket and hours.'
          ]
        },
        {
          id: 'urut',
          heading: 'Half-day order',
          paragraphs: [
            'You can visit the palace in daytime, then stroll toward the museum within central Ubud. Verify the museum’s hours and tickets on arrival.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verify',
          paragraphs: [
            'Museum hours and tickets can change; do not assume they match the palace. Confirm via the museum’s official channel on arrival.'
          ]
        }
      ],
      faqs: [
        { q: 'Is the museum near the palace?', a: 'Yes, within a walk in central Ubud; real time varies.' },
        { q: 'Is it one ticket?', a: 'No. The museum has its own ticket and hours.' },
        { q: 'How long at the museum?', a: 'Depends on interest; 45–90 minutes is generally enough for an intro.' }
      ],
      related: ['seni-ubud', 'sekitar-jalan-kaki', 'setengah-hari', 'pasar-seni']
    }
  },
  {
    slug: 'hutan-monyet',
    group: 'around',
    priority: 2,
    id: {
      title: 'Puri Saren & Monkey Forest: Rute & Waktu',
      description: 'Menghubungkan Puri Saren dengan Mandala Suci Wenara Wana (Monkey Forest) dengan pertimbangan rute, transportasi, dan waktu.',
      h1: 'Puri Saren dan Monkey Forest',
      lead: 'Monkey Forest adalah destinasi tersendiri dengan aturan satwa dan tiketnya sendiri. Halaman ini membantu menyusun rute dan waktu bila ingin menggabungkan keduanya, tanpa mengarang jarak pasti.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'status',
          heading: 'Destinasi tersendiri',
          paragraphs: [
            'Mandala Suci Wenara Wana (Monkey Forest) adalah kawasan hutan dan pura dengan aturan satwa serta tiketnya sendiri. Perlakukan sebagai destinasi terpisah, bukan sekadar perluasan puri.'
          ]
        },
        {
          id: 'rute',
          heading: 'Rute dan transportasi',
          paragraphs: [
            'Jarak dari puri ke Monkey Forest berada dalam radius yang dapat ditempuh berjalan kaki maupun kendaraan singkat tergantung titik awal. Waktu nyata bervariasi; verifikasi rute dengan peta saat tiba.'
          ]
        },
        {
          id: 'waktu',
          heading: 'Pertimbangan waktu',
          paragraphs: [
            'Monkey Forest memerlukan waktu tersendiri. Jangan menyusun keduanya sebagai kunjungan berurutan otomatis tanpa mempertimbangkan energi, cuaca, dan tiket Monkey Forest.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah Monkey Forest dekat puri?', a: 'Dalam radius Ubud yang dapat dijangkau berjalan kaki atau kendaraan singkat; waktu nyata bervariasi.' },
        { q: 'Apakah satu tiket?', a: 'Tidak. Monkey Forest memiliki tiket dan aturan satwa sendiri.' },
        { q: 'Berapa lama di sana?', a: 'Tergantung minat; alokasikan waktu tersendiri, bukan sekadar tambahan puri.' }
      ],
      related: ['sekitar-jalan-kaki', 'setengah-hari', 'satu-hari-ubud', 'cara-ke-sana']
    },
    en: {
      title: 'Puri Saren & Monkey Forest: Route & Time',
      description: 'Linking Puri Saren with Mandala Suci Wenara Wana (Monkey Forest) with route, transport, and time considerations.',
      h1: 'Puri Saren and Monkey Forest',
      lead: 'The Monkey Forest is a separate destination with its own wildlife rules and ticket. This page helps plan route and time if combining both, without inventing exact distance.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'status',
          heading: 'A separate destination',
          paragraphs: [
            'Mandala Suci Wenara Wana (Monkey Forest) is a forest and temple area with its own wildlife rules and ticket. Treat it as a separate destination, not merely a palace extension.'
          ]
        },
        {
          id: 'rute',
          heading: 'Route and transport',
          paragraphs: [
            'The distance from the palace to the Monkey Forest is within a radius reachable on foot or by a short vehicle ride depending on your start point. Real time varies; verify the route with a map on arrival.'
          ]
        },
        {
          id: 'waktu',
          heading: 'Time considerations',
          paragraphs: [
            'The Monkey Forest needs its own time. Do not plan both as an automatically sequential visit without considering energy, weather, and the Monkey Forest ticket.'
          ]
        }
      ],
      faqs: [
        { q: 'Is Monkey Forest near the palace?', a: 'Within a Ubud radius reachable on foot or by a short vehicle ride; real time varies.' },
        { q: 'Is it one ticket?', a: 'No. The Monkey Forest has its own ticket and wildlife rules.' },
        { q: 'How long there?', a: 'Depends on interest; allocate separate time, not just a palace add-on.' }
      ],
      related: ['sekitar-jalan-kaki', 'setengah-hari', 'satu-hari-ubud', 'cara-ke-sana']
    }
  },
  {
    slug: 'campuhan-ridge',
    group: 'around',
    priority: 3,
    id: {
      title: 'Campuhan Ridge Walk dari Puri Saren',
      description: 'Apakah Campuhan Ridge Walk cocok disambung dari Puri Saren, dengan pertimbangan jalan kaki dan cuaca.',
      h1: 'Campuhan Ridge Walk',
      lead: 'Campuhan Ridge Walk adalah lintasan alam di luar kepadatan pusat kota. Halaman ini menimbang apakah masuk akal disambung dari puri, dengan catatan jarak dan cuaca.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'jarak',
          heading: 'Jarak dari pusat',
          paragraphs: [
            'Campuhan Ridge Walk berada di luar pusat Ubud yang padat. Dari puri, ini memerlukan jalan kaki lebih jauh atau kendaraan singkat ke titik awal lintasan. Waktu nyata bervariasi.'
          ]
        },
        {
          id: 'cuaca',
          heading: 'Cuaca dan waktu',
          paragraphs: [
            'Lintasan terbuka lebih nyaman pagi atau sore untuk menghindari panas. Hujan membuat jalur licin; verifikasi kondisi sebelum berangkat.'
          ]
        },
        {
          id: 'sesuai',
          heading: 'Apakah cocok disambung?',
          paragraphs: [
            'Ini cocok bila Anda menginginkan lanskap hijau setelah kunjungan budaya puri, dan memiliki energi serta waktu. Baca halaman "Setengah hari" atau "Satu hari Ubud" untuk penyusunan rute.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah jalan kaki dari puri?', a: 'Lebih jauh dari pusat padat; mungkin butuh kendaraan singkat ke titik awal. Waktu nyata bervariasi.' },
        { q: 'Kapan terbaik?', a: 'Pagi atau sore untuk menghindari panas; hati-hati bila hujan.' },
        { q: 'Apakah gratis?', a: 'Lintasan umumnya dapat diakses, tetapi verifikasi aturan setempat saat tiba.' }
      ],
      related: ['sekitar-jalan-kaki', 'setengah-hari', 'satu-hari-ubud', 'hujan']
    },
    en: {
      title: 'Campuhan Ridge Walk from Puri Saren',
      description: 'Whether Campuhan Ridge Walk fits after Puri Saren, with walking and weather considerations.',
      h1: 'Campuhan Ridge Walk',
      lead: 'Campuhan Ridge Walk is a nature trail outside the dense town center. This page weighs whether it makes sense to combine with the palace, noting distance and weather.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'jarak',
          heading: 'Distance from center',
          paragraphs: [
            'Campuhan Ridge Walk is outside the dense Ubud center. From the palace, it needs a farther walk or a short vehicle ride to the trailhead. Real time varies.'
          ]
        },
        {
          id: 'cuaca',
          heading: 'Weather and time',
          paragraphs: [
            'The open trail is more comfortable in the morning or late afternoon to avoid heat. Rain makes the path slippery; verify conditions before going.'
          ]
        },
        {
          id: 'sesuai',
          heading: 'Does it fit together?',
          paragraphs: [
            'It fits if you want green landscape after the palace’s cultural visit and have energy and time. See "Half day" or "Full day Ubud" for route planning.'
          ]
        }
      ],
      faqs: [
        { q: 'Walkable from the palace?', a: 'Farther from the dense center; may need a short vehicle ride to the start. Real time varies.' },
        { q: 'When is best?', a: 'Morning or late afternoon to avoid heat; be careful if raining.' },
        { q: 'Is it free?', a: 'The trail is generally accessible, but verify local rules on arrival.' }
      ],
      related: ['sekitar-jalan-kaki', 'setengah-hari', 'satu-hari-ubud', 'hujan']
    }
  },
  {
    slug: 'kerajinan',
    group: 'around',
    priority: 3,
    id: {
      title: 'Kerajinan & Suvenir di Sekitar Puri Saren',
      description: 'Memilih kerajinan dan suvenir di sekitar Ubud dengan menghormati pembuat dan menghindari klaim asal berlebihan.',
      h1: 'Kerajinan dan suvenir',
      lead: 'Ubud dikenal dengan kerajinan. Halaman ini membantu memilih secara hormat tanpa memeringkatkan toko dan tanpa mengarang asal produk.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'jenis',
          heading: 'Jenis kerajinan',
          paragraphs: [
            'Sekitar pusat Ubud Anda dapat menemukan ukiran kayu, tekstil, perhiasan, dan kerajinan tangan lain. Pilihan tersebar di pasar dan toko di sekitar puri.'
          ]
        },
        {
          id: 'penemu',
          heading: 'Menghormati pembuat',
          paragraphs: [
            'Hargai karya pengrajin; tanya dengan ramah bila ingin memahami proses. Hindari toko yang menjamin "asli" tanpa penjelasan yang masuk akal.'
          ]
        },
        {
          id: 'asli',
          heading: 'Hati-hati klaim asal',
          paragraphs: [
            'Beberapa produk mungkin diproduksi di tempat lain di Indonesia atau impor. Kami tidak memverifikasi asal setiap produk; tanyakan penjual dan jangan menganggap label otomatis benar.'
          ]
        }
      ],
      faqs: [
        { q: 'Apa kerajinan khas Ubud?', a: 'Ukiran kayu, tekstil, dan kerajinan tangan sering ditemui; pilihan bervariasi.' },
        { q: 'Apakah semua "asli" Ubud?', a: 'Tidak selalu; beberapa produk dari tempat lain. Tanyakan penjual dan jangan menganggap label otomatis benar.' },
        { q: 'Di mana berbelanja?', a: 'Pasar Seni Ubud dan toko di sekitar pusat; pilih dengan hormat, bukan peringkat.' }
      ],
      related: ['pasar-seni', 'sekitar-jalan-kaki', 'restoran', 'makan-malam']
    },
    en: {
      title: 'Crafts & Souvenirs Around Puri Saren',
      description: 'Choosing crafts and souvenirs around Ubud while respecting makers and avoiding overclaiming origin.',
      h1: 'Crafts and souvenirs',
      lead: 'Ubud is known for crafts. This page helps choose respectfully without ranking shops and without inventing product origins.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'jenis',
          heading: 'Types of crafts',
          paragraphs: [
            'Around central Ubud you can find wood carving, textiles, jewelry, and other handcrafts. Options spread across the market and shops near the palace.'
          ]
        },
        {
          id: 'penemu',
          heading: 'Respect makers',
          paragraphs: [
            'Value artisans’ work; ask politely if you want to understand the process. Avoid shops that guarantee "authentic" without a sensible explanation.'
          ]
        },
        {
          id: 'asli',
          heading: 'Careful with origin claims',
          paragraphs: [
            'Some products may be made elsewhere in Indonesia or imported. We do not verify each product’s origin; ask the seller and don’t assume a label is automatically true.'
          ]
        }
      ],
      faqs: [
        { q: 'What are typical Ubud crafts?', a: 'Wood carving, textiles, and handcrafts are common; options vary.' },
        { q: 'Is everything "authentic" Ubud?', a: 'Not always; some products are from elsewhere. Ask the seller and don’t assume a label is true.' },
        { q: 'Where to shop?', a: 'Ubud Art Market and shops around the center; choose respectfully, not by ranking.' }
      ],
      related: ['pasar-seni', 'sekitar-jalan-kaki', 'restoran', 'makan-malam']
    }
  },
  {
    slug: 'malam',
    group: 'around',
    priority: 3,
    id: {
      title: 'Aktivitas Malam di Sekitar Puri Saren',
      description: 'Malam hari di pusat Ubud: pertunjukan puri, jalan kaki malam, dan catatan keamanan serta verifikasi.',
      h1: 'Aktivitas malam di sekitar',
      lead: 'Malam di pusat Ubud melibatkan pertunjukan puri dan suasana jalan yang lebih tenang. Halaman ini merangkum pilihan malam tanpa mengarang jadwal pertunjukan pasti.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'pertunjukan',
          heading: 'Pertunjukan puri',
          paragraphs: [
            'Pertunjukan tari dan gamelan malam di puri adalah inti aktivitas malam. Verifikasi jenis, waktu, dan tiket kepada penyelenggara pada hari yang sama.'
          ]
        },
        {
          id: 'jalan',
          heading: 'Jalan kaki malam',
          paragraphs: [
            'Pusat Ubud relatif nyaman untuk berjalan kaki malam di area padat, tetapi perhatikan trotoar dan pencahayaan. Kembali ke akomodasi dengan rute yang sudah Anda kenal.'
          ]
        },
        {
          id: 'aman',
          heading: 'Catatan keamanan',
          paragraphs: [
            'Jaga barang, gunakan jalur ramai, dan hindari area sepi yang tidak Anda kenal. Verifikasi jam operasional tempat sebelum mengandalkannya.'
          ]
        }
      ],
      faqs: [
        { q: 'Apa kegiatan malam utama?', a: 'Pertunjukan puri adalah inti; verifikasi jadwal di lokasi.' },
        { q: 'Apakah aman jalan kaki malam?', a: 'Area padat relatif nyaman; jaga barang dan gunakan jalur ramai.' },
        { q: 'Apakah pertunjukan setiap malam?', a: 'Tidak dijamin; verifikasi kepada penyelenggara.' }
      ],
      related: ['pertunjukan-tari', 'makan-malam', 'sekitar-jalan-kaki', 'pakaian']
    },
    en: {
      title: 'Evening Activities Around Puri Saren',
      description: 'Nighttime in central Ubud: palace performances, evening walks, and safety and verification notes.',
      h1: 'Evening activities around',
      lead: 'Night in central Ubud involves palace performances and a calmer street mood. This page summarizes evening options without inventing a fixed show schedule.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'pertunjukan',
          heading: 'Palace performances',
          paragraphs: [
            'Evening dance and gamelan at the palace are the core of night activity. Verify type, time, and tickets with the organizer on the same day.'
          ]
        },
        {
          id: 'jalan',
          heading: 'Evening walks',
          paragraphs: [
            'Central Ubud is relatively comfortable to walk at night in dense areas, but watch sidewalks and lighting. Return to accommodation via a route you know.'
          ]
        },
        {
          id: 'aman',
          heading: 'Safety notes',
          paragraphs: [
            'Keep belongings secure, use busy paths, and avoid unfamiliar quiet areas. Verify a place’s hours before relying on it.'
          ]
        }
      ],
      faqs: [
        { q: 'What is the main night activity?', a: 'Palace performances are the core; verify schedule on site.' },
        { q: 'Is walking at night safe?', a: 'Dense areas are relatively comfortable; secure belongings and use busy paths.' },
        { q: 'Are there shows every night?', a: 'Not guaranteed; verify with the organizer.' }
      ],
      related: ['pertunjukan-tari', 'makan-malam', 'sekitar-jalan-kaki', 'pakaian']
    }
  },

  // ───────────────────────── E. RUTE PERJALANAN ─────────────────────────
  {
    slug: 'jalan-kaki-2-3-jam',
    group: 'itinerary',
    priority: 2,
    id: {
      title: 'Rute Jalan Kaki 2–3 Jam dari Puri Saren',
      description: 'Contoh rute jalan kaki 2–3 jam dari Puri Saren menelusuri pusat Ubud: puri, Saraswati, pasar, dan kafe.',
      h1: 'Rute jalan kaki 2–3 jam',
      lead: 'Bila Anda hanya punya beberapa jam, rute berjalan kaki padat dari puri sudah cukup untuk merasakan inti budaya Ubud. Halaman ini memberi kerangka, bukan jadwal kaku.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'kerangka',
          heading: 'Kerangka rute',
          paragraphs: [
            'Mulai dari puri di siang hari, lalu ke Pura Taman Saraswati, menyusuri ke arah Pasar Seni Ubud, dan berhenti di kedai kopi untuk istirahat. Semua dalam jalan kaki singkat di pusat Ubud.'
          ],
          bullets: [
            'Puri Saren Agung (30–60 menit observasi siang).',
            'Pura Taman Saraswati (beberapa menit jalan kaki).',
            'Pasar Seni Ubud (sesuai minat belanja).',
            'Kedai kopi atau warung untuk istirahat.'
          ]
        },
        {
          id: 'waktu',
          heading: 'Manajemen waktu',
          paragraphs: [
            'Total 2–3 jam masuk akal bila tidak terburu-buru. Sesuaikan dengan cuaca dan keramaian; jangan mengunci waktu tepat karena jalanan pusat Ubud padat.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah cukup 2 jam?', a: 'Ya untuk puri, Saraswati, dan pasar secara singkat, tanpa rushed.' },
        { q: 'Apakah perlu tiket?', a: 'Kunjungan siang puri umumnya gratis per listing; pasar dan Saraswati tidak memerlukan tiket masuk puri.' },
        { q: 'Kapan terbaik?', a: 'Pagi atau sore; baca "Waktu terbaik" dan "Saraswati".' }
      ],
      related: ['sekitar-jalan-kaki', 'saraswati', 'pasar-seni', 'kedai-kopi']
    },
    en: {
      title: 'A 2–3 Hour Walking Route from Puri Saren',
      description: 'A sample 2–3 hour walking route from Puri Saren through central Ubud: palace, Saraswati, market, and cafe.',
      h1: 'A 2–3 hour walking route',
      lead: 'If you only have a few hours, a dense walk from the palace is enough to feel Ubud’s cultural core. This page gives a framework, not a rigid schedule.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'kerangka',
          heading: 'Route framework',
          paragraphs: [
            'Start at the palace in daytime, then go to Pura Taman Saraswati, stroll toward Ubud Art Market, and stop at a cafe for a break. All within a short walk in central Ubud.'
          ],
          bullets: [
            'Puri Saren Agung (30–60 min daytime observation).',
            'Pura Taman Saraswati (a few minutes walk).',
            'Ubud Art Market (as shopping interest allows).',
            'Cafe or warung for a break.'
          ]
        },
        {
          id: 'waktu',
          heading: 'Time management',
          paragraphs: [
            'A total of 2–3 hours is reasonable without rushing. Adjust to weather and crowds; don’t fix exact times as central Ubud streets are dense.'
          ]
        }
      ],
      faqs: [
        { q: 'Is 2 hours enough?', a: 'Yes for the palace, Saraswati, and market briefly, without rushing.' },
        { q: 'Are tickets needed?', a: 'Daytime palace is generally free per listing; market and Saraswati do not need a palace entry ticket.' },
        { q: 'When is best?', a: 'Morning or late afternoon; see "Best time" and "Saraswati".' }
      ],
      related: ['sekitar-jalan-kaki', 'saraswati', 'pasar-seni', 'kedai-kopi']
    }
  },
  {
    slug: 'setengah-hari',
    group: 'itinerary',
    priority: 2,
    id: {
      title: 'Setengah Hari Budaya dari Puri Saren',
      description: 'Rute setengah hari menggabungkan Puri Saren dengan Museum Puri Lukisan, Saraswati, dan Pasar Seni Ubud.',
      h1: 'Setengah hari budaya',
      lead: 'Setengah hari memungkinkan Anda menambah Museum Puri Lukisan ke rute jalan kaki inti. Halaman ini menyusun urutan yang nyaman dengan catatan verifikasi tiket museum.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'urut',
          heading: 'Urutan yang nyaman',
          paragraphs: [
            'Puri Saren (siang) → Saraswati → Museum Puri Lukisan → Pasar Seni Ubud → istirahat kafe. Semua dalam radius jalan kaki pusat Ubud.'
          ]
        },
        {
          id: 'waktu',
          heading: 'Alokasi waktu',
          paragraphs: [
            'Sediakan 45–90 menit untuk museum, sisanya untuk puri, Saraswati, pasar, dan istirahat. Total sekitar setengah hari dengan ritme santai.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verifikasi',
          paragraphs: [
            'Museum memiliki tiket dan jam sendiri; verifikasi saat tiba. Jangan menganggap semua tempat dalam rute ini gratis atau satu tiket.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah setengah hari cukup?', a: 'Ya untuk puri, Saraswati, museum, dan pasar secara santai.' },
        { q: 'Apakah butuh kendaraan?', a: 'Tidak untuk rute inti ini; semua dapat dijelajahi berjalan kaki.' },
        { q: 'Kapan mulai?', a: 'Pagi lebih nyaman untuk foto dan menghindari panas siang.' }
      ],
      related: ['museum-puri-lukisan', 'saraswati', 'pasar-seni', 'jalan-kaki-2-3-jam']
    },
    en: {
      title: 'A Half Day of Culture from Puri Saren',
      description: 'A half-day route combining Puri Saren with Museum Puri Lukisan, Saraswati, and Ubud Art Market.',
      h1: 'Half day of culture',
      lead: 'A half day lets you add Museum Puri Lukisan to the core walking route. This page plans a comfortable order with museum ticket verification notes.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'urut',
          heading: 'A comfortable order',
          paragraphs: [
            'Puri Saren (daytime) → Saraswati → Museum Puri Lukisan → Ubud Art Market → cafe break. All within the central Ubud walking radius.'
          ]
        },
        {
          id: 'waktu',
          heading: 'Time allocation',
          paragraphs: [
            'Allow 45–90 minutes for the museum, the rest for palace, Saraswati, market, and a break. About half a day at a relaxed pace.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verify',
          paragraphs: [
            'The museum has its own ticket and hours; verify on arrival. Don’t assume all places on this route are free or one ticket.'
          ]
        }
      ],
      faqs: [
        { q: 'Is half a day enough?', a: 'Yes for the palace, Saraswati, museum, and market at a relaxed pace.' },
        { q: 'Need a vehicle?', a: 'No for this core route; all walkable.' },
        { q: 'When to start?', a: 'Morning is more comfortable for photos and avoiding midday heat.' }
      ],
      related: ['museum-puri-lukisan', 'saraswati', 'pasar-seni', 'jalan-kaki-2-3-jam']
    }
  },
  {
    slug: 'satu-hari-ubud',
    group: 'itinerary',
    priority: 2,
    id: {
      title: 'Satu Hari Ubud dari Puri Saren: Jalan Kaki & Kendaraan',
      description: 'Rute satu hari Ubud dari Puri Saren dengan pertimbangan berjalan kaki vs kendaraan untuk objek lebih jauh.',
      h1: 'Satu hari Ubud',
      lead: 'Satu hari memungkinkan puri digabung dengan objek lebih jauh seperti Monkey Forest atau Campuhan Ridge. Halaman ini menimbang kompromi jalan kaki dan kendaraan tanpa mengarang jadwal kaku.',
      updated: CHECK_ID,
      sections: [
        {
          id: 'kompromi',
          heading: 'Kompromi jalan kaki vs kendaraan',
          paragraphs: [
            'Objek dalam pusat Ubud dapat dijelajahi berjalan kaki. Objek lebih jauh seperti Monkey Forest atau Campuhan Ridge mungkin butuh kendaraan singkat. Pertimbangkan energi, cuaca, dan tiket.'
          ]
        },
        {
          id: 'kerangka',
          heading: 'Kerangka satu hari',
          paragraphs: [
            'Pagi: puri dan Saraswati berjalan kaki. Siang: museum atau pasar. Sore: objek lebih jauh dengan kendaraan singkat, lalu kembali ke pusat untuk makan malam dekat puri.'
          ],
          bullets: [
            'Pagi: Puri Saren + Saraswati (jalan kaki).',
            'Siang: Museum Puri Lukisan atau Pasar Seni Ubud.',
            'Sore: Monkey Forest / Campuhan Ridge (kendaraan singkat).',
            'Malam: pertunjukan puri + makan malam dekat puri.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verifikasi',
          paragraphs: [
            'Tiket Monkey Forest dan jadwal pertunjukan memiliki aturan sendiri. Verifikasi sebelum mengunci rencana, dan jangan menyamakan dengan akses puri siang.'
          ]
        }
      ],
      faqs: [
        { q: 'Apakah satu hari cukup?', a: 'Cukup untuk puri, Saraswati, satu objek lebih jauh, dan pertunjukan, dengan ritme santai.' },
        { q: 'Perlu kendaraan?', a: 'Untuk objek lebih jauh seperti Monkey Forest atau Campuhan Ridge, kendaraan singkat membantu.' },
        { q: 'Bagaimana dengan cuaca?', a: 'Rencanakan objek terbuka di pagi/sore; baca "Hari hujan" untuk cadangan.' }
      ],
      related: ['hutan-monyet', 'campuhan-ridge', 'setengah-hari', 'makan-malam']
    },
    en: {
      title: 'A Full Day in Ubud from Puri Saren: Walk & Ride',
      description: 'A full-day Ubud route from Puri Saren weighing walk vs ride for farther sights.',
      h1: 'Full day in Ubud',
      lead: 'A full day lets the palace combine with farther sights like the Monkey Forest or Campuhan Ridge. This page weighs the walk-vs-ride tradeoff without inventing a rigid schedule.',
      updated: CHECK_EN,
      sections: [
        {
          id: 'kompromi',
          heading: 'Walk vs ride tradeoff',
          paragraphs: [
            'Central Ubud sights are walkable. Farther sights like the Monkey Forest or Campuhan Ridge may need a short vehicle ride. Consider energy, weather, and tickets.'
          ]
        },
        {
          id: 'kerangka',
          heading: 'Full-day framework',
          paragraphs: [
            'Morning: palace and Saraswati on foot. Midday: museum or market. Afternoon: a farther sight by short vehicle, then back to center for dinner near the palace.'
          ],
          bullets: [
            'Morning: Puri Saren + Saraswati (walk).',
            'Midday: Museum Puri Lukisan or Ubud Art Market.',
            'Afternoon: Monkey Forest / Campuhan Ridge (short ride).',
            'Evening: palace show + dinner near the palace.'
          ]
        },
        {
          id: 'verifikasi',
          heading: 'Verify',
          paragraphs: [
            'Monkey Forest tickets and show schedules have their own rules. Verify before locking the plan, and don’t equate with daytime palace access.'
          ]
        }
      ],
      faqs: [
        { q: 'Is one day enough?', a: 'Enough for the palace, Saraswati, one farther sight, and a show, at a relaxed pace.' },
        { q: 'Need a vehicle?', a: 'For farther sights like Monkey Forest or Campuhan Ridge, a short ride helps.' },
        { q: 'What about weather?', a: 'Plan open sights in morning/afternoon; see "Rainy day" for backup.' }
      ],
      related: ['hutan-monyet', 'campuhan-ridge', 'setengah-hari', 'makan-malam']
    }
  }
];

// ── Helper functions ──────────────────────────────────────────────
export type Lang = 'id' | 'en';

export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

export function getTopic(lang: Lang, slug: string): Topic | undefined {
  const topic = TOPICS.find((t) => t.slug === slug);
  if (!topic) return undefined;
  return topic;
}

export function topicContent(lang: Lang, slug: string): TopicContent | undefined {
  const topic = TOPICS.find((t) => t.slug === slug);
  if (!topic) return undefined;
  return lang === 'en' ? topic.en : topic.id;
}

export function topicExists(slug: string): boolean {
  return TOPICS.some((t) => t.slug === slug);
}

export function topicsByGroup(lang: Lang): Record<TopicGroup, Topic[]> {
  const out = {} as Record<TopicGroup, Topic[]>;
  for (const g of Object.keys(GROUP_LABELS) as TopicGroup[]) out[g] = [];
  for (const t of TOPICS) out[t.group].push(t);
  return out;
}
