
export interface SarcasticResponse {
  id: string;
  prompt: string;
  response: string;
  timestamp: Date;
}

export const mockHistory: SarcasticResponse[] = [
  {
    id: '1',
    prompt: 'Kasih review nyinyir tentang pekerjaan rumahku',
    response: 'Ah, pekerjaan rumahmu. Kalau berantakan dibilang "aesthetic", kalau bersih pasti mau ada tamu. Standar kebersihan yang konsisten sekali ya, konsisten rendahnya.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
  },
  {
    id: '2',
    prompt: 'Buat caption sarkastik buat mantan',
    response: 'Terima kasih sudah pergi dari hidupku. Akhirnya aku bisa bernafas tanpa mencium bau drama setiap lima menit sekali.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
  },
  {
    id: '3',
    prompt: 'Komentar nyinyir tentang resolusi tahun baru',
    response: 'Resolusi tahun baru? Oh, kamu maksud to-do list yang akan kamu baca sekali lalu lupakan sampai Desember depan? Semangat ya, tahun ini "beda".',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3) // 3 days ago
  }
];

export const mockPromptSuggestions = [
  'Kasih review nyinyir tentang pekerjaan rumahku',
  'Buat caption sarkastik buat mantan',
  'Komentar nyinyir tentang resolusi tahun baru',
  'Komentar sarkastik tentang diet yang gagal',
  'Buat komen nyinyir tentang selfie temanku',
  'Kata-kata sarkastik buat teman yang selalu telat'
];

export function generateMockResponse(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const responses = [
        'Oh, jadi ini yang kamu sebut "usaha"? Aku pernah lihat siput bergerak lebih ambisius.',
        'Wow, benar-benar original. Hampir seperti 10,000 orang lain tidak memikirkan hal yang sama hari ini.',
        'Kalau standarnya serendah ini, aku rasa bahkan kerikil di jalan pun bisa merasa sukses.',
        'Ah, klasik. Persis seperti yang diharapkan dari seseorang dengan ekspektasi sepasrah itu.',
        'Memangnya kamu pikir cuma dengan melakukan itu semua masalah akan selesai? Lucunya, aku hampir percaya kamu benar-benar berpikir begitu.',
        'Selamat! Ini adalah usaha paling minimal yang pernah kulihat seseorang bangga melakukannya.'
      ];
      
      const randomIndex = Math.floor(Math.random() * responses.length);
      resolve(responses[randomIndex]);
    }, 1500); // Simulate network delay
  });
}
