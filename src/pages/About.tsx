
import React from 'react';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl transform -translate-x-1/2 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <Header />
      
      <main className="container px-4 md:px-6 max-w-6xl mx-auto mt-12 md:mt-16">
        <section className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full animate-pulse-subtle">
              Tentang Kami
            </span>
          </div>
          <h1 className="heading-xl mb-6 max-w-3xl mx-auto">
            Tukang Nyinyir <span className="text-accent">AI</span> 🤨
          </h1>
        </section>
        
        <section className="max-w-3xl mx-auto glass-panel rounded-xl p-8 mb-16 animate-slide-up">
          <h2 className="heading-md mb-6">Apa itu Tukang Nyinyir AI?</h2>
          <p className="mb-4">
            Tukang Nyinyir AI adalah aplikasi kecerdasan buatan yang secara khusus dirancang untuk memberikan komentar sarkastik, nyinyir, dan kadang menyebalkan tentang apapun yang kamu minta.
          </p>
          <p className="mb-4">
            Aplikasi ini dibuat untuk hiburan semata. Komentar yang dihasilkan tidak bermaksud menyinggung atau melukai perasaan siapapun, dan seharusnya dianggap sebagai humor ringan saja.
          </p>
          
          <h2 className="heading-md mt-10 mb-6">Cara Menggunakan</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Ketik topik atau hal yang ingin kamu dapatkan komentar nyinyirnya di kotak input</li>
            <li>Klik tombol "Nyinyirin!" untuk mendapatkan respons</li>
            <li>Salin atau bagikan komentar nyinyir yang kamu dapatkan</li>
            <li>Nikmati dan jangan terlalu serius!</li>
          </ol>
          
          <h2 className="heading-md mt-10 mb-6">Peringatan</h2>
          <p className="text-muted-foreground">
            Semua komentar yang dihasilkan oleh Tukang Nyinyir AI adalah murni untuk hiburan.
            Aplikasi ini menggunakan model bahasa AI yang dapat menghasilkan konten yang tidak selalu akurat atau sesuai.
            Jangan gunakan komentar dari aplikasi ini untuk menyakiti orang lain.
          </p>
        </section>
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Tukang Nyinyir AI. Made with <span className="text-accent">♥</span></p>
      </footer>
    </div>
  );
};

export default About;
