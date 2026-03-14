import React from "react"
import Link from "next/link"

export default function StocksPage() {
  const navLinks = [
    "Home",
    "Platform",
    "Products",
    "Recent News",
    "Zero Trading (PMN)",
    "Tools",
    "Resources",
    "About",
  ]

  const markets = [
    {
      region: "US Stocks",
      flag: "🇺🇸",
      description: "Trade NYSE & NASDAQ",
      stocks: [
        { name: "Apple", change: "+1.5%", positive: true },
        { name: "Microsoft", change: "+0.8%", positive: true },
        { name: "Amazon", change: "+1.2%", positive: true },
        { name: "Google", change: "+0.5%", positive: true },
        { name: "Tesla", change: "+2.1%", positive: true },
      ],
    },
    {
      region: "European Stocks",
      flag: "🇪🇺",
      description: "Trade EU & UK markets",
      stocks: [
        { name: "ASML", change: "+0.9%", positive: true },
        { name: "SAP", change: "-0.3%", positive: false },
        { name: "LVMH", change: "+1.1%", positive: true },
        { name: "Nestle", change: "-1.2%", positive: false },
        { name: "Unilever", change: "+0.4%", positive: true },
      ],
    },
    {
      region: "Asian Stocks",
      flag: "🇮🇳",
      description: "Trade HKEX & NSE markets",
      stocks: [
        { name: "Reliance", change: "+0.7%", positive: true },
        { name: "Tencent", change: "-0.5%", positive: false },
        { name: "Alibaba", change: "-1.2%", positive: false },
        { name: "Samsung", change: "+1.0%", positive: true },
      ],
    },
  ]

  const tradingFeatures = [
    {
      title: "Extended Hours Trading",
      description:
        "Trade during pre-market and after-hours sessions for maximum flexibility.",
      icon: "🕐",
    },
    {
      title: "Real-Time Data",
      description:
        "Access live market data and Level II quotes for informed decision making.",
      icon: "📈",
    },
    {
      title: "Competitive Spreads",
      description:
        "Trade with tight spreads starting from 0.1% on major stocks.",
      icon: "%",
    },
    {
      title: "Risk Management",
      description:
        "Advanced order types, including stop-loss, take-profit, and trailing stops.",
      icon: "🛡️",
    },
  ]

  const sectors = [
    {
      title: "Technology",
      description:
        "Global giants, semiconductor companies, and emerging tech.",
      icon: "🖥️",
    },
    {
      title: "Financial",
      description: "Banks, insurance companies, and fintech innovators.",
      icon: "🏛️",
    },
    {
      title: "Healthcare",
      description: "Pharmaceuticals, biotech, and medical devices companies.",
      icon: "⚕️",
    },
    {
      title: "Consumer",
      description: "Retail, e-commerce, and consumer goods companies.",
      icon: "🛒",
    },
    {
      title: "Automotive",
      description: "Traditional automakers and electric vehicle companies.",
      icon: "🚗",
    },
    {
      title: "Industrial",
      description: "Manufacturing, aerospace, and infrastructure companies.",
      icon: "🏭",
    },
  ]

  const footerProducts = ["Forex", "Commodities", "Stocks", "Indices", "Crypto Currency"]
  const footerPlatform = ["Web Platform", "Mobile Trading", "API Trading"]
  const footerSupport = ["Contact us", "FAQ"]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="text-xl font-bold tracking-wider text-[#f97316]">
            RIGEL
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/90 transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded border border-[#f97316] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#f97316]/10"
            >
              Login
            </button>
            <button
              type="button"
              className="rounded bg-[#f97316] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#ea580c]"
            >
              Open Account
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-emerald-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-6 pt-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Stocks Trading
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Access thousands of stocks from major global exchanges, all in
            real-time pricing. Trade US, European, and Asian stocks with
            competitive spreads and fast execution.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="rounded bg-[#f97316] px-8 py-3.5 text-base font-semibold text-white transition hover:bg-[#ea580c]"
            >
              Start Trading Today
            </button>
            <button
              type="button"
              className="rounded border border-[#f97316] px-8 py-3.5 text-base font-semibold text-white transition hover:bg-[#f97316]/10"
            >
              Learn More
            </button>
          </div>
          {/* Chart card mockup */}
          <div className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>
            <div className="border-b border-white/10 px-4 py-3">
              <input
                type="text"
                placeholder="Look up anything"
                className="w-full rounded-lg bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#f97316]/50"
                readOnly
              />
            </div>
            <div className="relative h-48 bg-[#0a0a0a] p-4">
              <svg
                viewBox="0 0 400 120"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 80 Q 50 60 100 70 T 200 50 T 300 40 T 400 30"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="380" cy="35" r="6" fill="white" />
              </svg>
              <div className="absolute right-4 top-4 rounded bg-[#f97316] px-2 py-1 text-xs font-medium text-white">
                - $25,000 · Drops
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Stock Markets */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">
            Global Stock Markets at your Fingertips
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Trade stocks from the world&apos;s leading exchanges with
            institutional-grade execution and competitive pricing.
          </p>
          <button
            type="button"
            className="mt-6 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
          >
            Available Markets
          </button>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {markets.map((market) => (
              <div
                key={market.region}
                className="rounded-2xl border border-white/10 bg-[#111] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{market.flag}</span>
                  <div>
                    <h3 className="font-semibold">{market.region}</h3>
                    <p className="text-sm text-white/60">{market.description}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {market.stocks.map((stock) => (
                    <li
                      key={stock.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-white/90">{stock.name}</span>
                      <span
                        className={
                          stock.positive
                            ? "text-emerald-400"
                            : "text-red-400"
                        }
                      >
                        {stock.change}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Features */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <button
            type="button"
            className="rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
          >
            Trading Features
          </button>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {tradingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-[#111] p-8"
              >
                <div className="text-2xl text-[#f97316]">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Sectors */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <button
            type="button"
            className="rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
          >
            Popular Sectors
          </button>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className="rounded-2xl border border-white/10 bg-[#111] p-8"
              >
                <div className="text-2xl text-white/80">{sector.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{sector.title}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl bg-[#2c1810] border border-orange-900/30">
            <div className="flex flex-col items-center gap-10 p-10 lg:flex-row lg:justify-between lg:p-12">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold md:text-4xl">
                  <span className="text-[#f97316]">Starts Tradings</span>{" "}
                  <span className="text-white">Global Stocks</span>
                </h2>
                <p className="mt-4 max-w-xl text-white/80">
                  Join thousands of traders who trust Rigel Markets for their
                  forex trading needs.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <button
                    type="button"
                    className="rounded bg-[#f97316] px-6 py-3 font-medium text-white hover:bg-[#ea580c]"
                  >
                    Open Trading Account
                  </button>
                  <button
                    type="button"
                    className="rounded border border-[#f97316] px-6 py-3 font-medium text-white hover:bg-[#f97316]/10"
                  >
                    Contact Support
                  </button>
                </div>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="relative flex h-40 w-48 items-center justify-center rounded-xl border border-white/10 bg-[#111]">
                  <span className="text-5xl">💵</span>
                  <div className="absolute -bottom-2 -right-2 rounded-lg bg-emerald-500/20 p-2 text-2xl">
                    ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div>
              <Link
                href="/"
                className="text-lg font-bold tracking-wider text-[#f97316]"
              >
                RIGEL
              </Link>
              <p className="mt-4 max-w-sm text-sm text-white/60">
                Rigel Markets - Your trusted partner in global financial markets.
                Trade with confidence, trade with us.
              </p>
              <div className="mt-4 flex gap-4">
                {["in", "f", "𝕏", "ig"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-[#f97316] hover:text-[#f97316]"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-12">
              <div>
                <h4 className="text-sm font-semibold text-white">Products</h4>
                <ul className="mt-3 space-y-2">
                  {footerProducts.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/60 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Platform</h4>
                <ul className="mt-3 space-y-2">
                  {footerPlatform.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/60 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Support</h4>
                <ul className="mt-3 space-y-2">
                  {footerSupport.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/60 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
            <span>© 2024 Rigel Markets. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                AML Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
