import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* gradient glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.35)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.25)_0,_transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 md:flex md:items-center md:gap-10 md:pt-20 md:pb-24">
        {/* LEFT */}
        <div className="flex-1 space-y-6">
         

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Rayat Shikshan Sanstha,{" "}
            <span className="text-orange-400">Satara</span>
            <span className="block text-lg md:text-xl text-slate-200 mt-2">
              Empowering students through{" "}
              <span className="text-emerald-300">Education, Equity &amp; Earn–and–Learn.</span>
            </span>
          </h1>

          <p className="max-w-xl text-sm md:text-base text-slate-200/90">
            With hundreds of schools and colleges across Maharashtra, Rayat
            Shikshan Sanstha carries forward the vision of Karmaveer Bhaurao
            Patil – quality education for the masses, especially in rural areas.
          </p>

          <div className="flex flex-wrap gap-3">
           <Link
  href="/admissions"
  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.02] transition"
  style={{ 
    backgroundColor: "#d3632c",
    boxShadow: "0 4px 12px #d3632c60"
  }}
>
  🎓 Explore Admissions
</Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-2.5 text-sm font-semibold text-slate-50 hover:bg-white/10 transition"
            >
              📖 Know Our Legacy
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-200/90">
            <div>
              <p className="font-semibold text-white">100+ Years</p>
              <p>of continuous educational service</p>
            </div>
            <div>
              <p className="font-semibold text-white">Rural Focus</p>
              <p>Majority institutions in semi-urban &amp; rural belts</p>
            </div>
          </div>
        </div>

        {/* RIGHT – glassmorphism stats card */}
        <div className="mt-10 md:mt-0 md:flex-1">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-orange-500 via-amber-400 to-emerald-400 opacity-60 blur-2" />
            <div className="relative rounded-3xl bg-white/10 p-6 md:p-7 shadow-2xl ring-1 ring-white/20 backdrop-blur-xl">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-orange-200 mb-4">
                Rayat at a Glance
              </h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <HeroStat label="Founded" value="1919" />
                <HeroStat label="Institutions" value="800+" />
                <HeroStat label="Colleges" value="30+" />
                <HeroStat label="Students" value="4.5L+" />
                <HeroStat label="States / Districts" value="Multiple" />
                <HeroStat label="Core Motto" value="Earn &amp; Learn" />
              </div>
              <p className="mt-4 text-[11px] text-slate-200/80">
                *Numbers are indicative and may vary across academic years.
              </p>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-black/30 px-4 py-3 text-[11px]">
                <span className="text-2xl">⭐</span>
                <p>
                  Celebrating a century of inclusive education – connecting
                  rural talent to global opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom curve */}
      <div className="h-10 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}

function HeroStat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/10 px-3 py-3">
      <p className="text-[10px] font-medium uppercase tracking-wide text-slate-200">
        {label}
      </p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
