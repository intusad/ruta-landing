export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-5xl font-bold tracking-tight mb-4">RUTA COMMUNITY</h1>
      <p className="text-gray-300 mb-8 max-w-2xl text-center">
        Zajednica motociklista, putnika i avanturista. Dijeli rute, trenutke i energiju ceste. 🏍️🔥
      </p>
      <div className="flex gap-4">
        <a href="/auth/register" className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold">
          Registracija
        </a>
        <a href="/auth/login" className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-6 py-3 rounded-lg font-semibold">
          Prijava
        </a>
      </div>
      <footer className="mt-16 text-sm text-gray-500">© {new Date().getFullYear()} RUTA COMMUNITY</footer>
    </main>
  );
}
