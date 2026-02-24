import React from "react"

export default function Home() {
  const navLinks = [
    "Home",
    "About",
    "Markets",
    "Account Types",
    "Trading Platform",
    "Tools",
    "Insights",
    "More",
  ]

  const products = [
    {
      title: "Forex",
      description: "Trade major, minor and exotic currency pairs with competitive spreads.",
      icon: "$",
    },
    {
      title: "Crypto Currency",
      description: "Access a wide range of cryptocurrencies with secure execution.",
      icon: "⟠",
    },
    {
      title: "Stocks",
      description: "Trade global equities and ETFs with real-time market data.",
      icon: "📈",
    },
    {
      title: "Commodities",
      description: "Gold, silver, oil and more with transparent pricing.",
      icon: "🪙",
    },
    {
      title: "Indices",
      description: "Trade world indices with leverage and tight spreads.",
      icon: "📊",
    },
  ]

  const platformFeatures = [
    "Real-time market data",
    "Advanced Charting tools",
    "One-click Trading",
    "Multiple Order Types",
    "Risk Management Tools",
  ]

  const accountTypes = [
    {
      name: "Standard Account",
      deposit: "$100 USD",
      features: [
        "Instant Execution",
        "Raw Spreads (from 0.1)",
        "24/7 Support",
        "Personal Account Manager",
        "Advanced Charting Tools",
      ],
      popular: false,
    },
    {
      name: "Pro Account",
      deposit: "$1,000 USD",
      features: [
        "Instant Execution",
        "Raw Spreads (from 0.0)",
        "24/7 Support",
        "Personal Account Manager",
        "Advanced Charting Tools",
        "Dedicated VPS",
      ],
      popular: true,
    },
    {
      name: "Partner Account",
      deposit: "$10,000 USD",
      features: [
        "Instant Execution",
        "Raw Spreads (from 0.0)",
        "24/7 Support",
        "Personal Account Manager",
        "Advanced Charting Tools",
        "Dedicated VPS",
        "Priority Access",
      ],
      popular: false,
    },
  ]

  const whyChoose = [
    {
      title: "Secure & Reputable",
      description: "Your funds and data are protected with industry-leading security.",
      icon: "🛡️",
    },
    {
      title: "Lightning Fast Execution",
      description: "Experience minimal latency with our advanced infrastructure.",
      icon: "⚡",
    },
    {
      title: "24/7 Expert Support",
      description: "Our team is always available to assist you with any questions.",
      icon: "🎧",
    },
    {
      title: "Educational Resources",
      description: "Learn and grow with our comprehensive trading guides and tools.",
      icon: "📚",
    },
  ]

  const footerProducts = ["Forex", "Crypto", "Stocks", "Commodities", "Indices"]
  const footerFeatures = ["Web Platform", "Mobile Trading", "API Trading"]
  const footerSupport = ["Contact Us", "FAQ"]
  const footerAbout = ["Company", "Careers", "Partners", "Blog"]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="/" className="text-xl font-bold tracking-wider text-white">
            RIGEL
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/90 transition hover:text-white"
              >
                {link}
                {link === "More" && " ▾"}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded border border-white px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
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
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#1a0a0a]" />
        <div className="absolute bottom-0 left-1/2 h-96 w-[120%] -translate-x-1/2 rounded-t-full bg-gradient-to-t from-orange-500/20 via-orange-600/10 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 pt-16 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Trade{" "}
            <span className="text-[#f97316]">Global Markets</span> with Rigel
            Markets
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            International brokerage providing secure, transparent, and high-speed
            market access to Forex, NFTs, Stocks, Options, and many others
            through powerful trading tools.
          </p>
          <button
            type="button"
            className="mt-10 rounded bg-[#f97316] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#ea580c]"
          >
            Start Your Trade Now
          </button>
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {["500 Instruments", "24/7 Support", "0.1 Execution"].map(
              (stat) => (
                <div
                  key={stat}
                  className="rounded-lg border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-sm"
                >
                  <span className="font-medium text-white">{stat}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Our Product */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold">Our Product</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-white/70">
            Explore our range of trading products and opportunities.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-orange-500/30 hover:bg-white/[0.07]"
              >
                <div className="mb-4 text-4xl text-[#f97316]">{product.icon}</div>
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {product.description}
                </p>
                <button
                  type="button"
                  className="mt-6 rounded bg-[#f97316] px-4 py-2 text-sm font-medium text-white hover:bg-[#ea580c]"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Market Insights */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold">
            Live Market Insights
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-white/70">
            Stay informed with real-time market data and advanced charting
            tools.
          </p>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2 text-sm text-white/70">
              <span className="font-medium text-white">BTC/USD</span>
            </div>
            <div className="flex h-[400px] items-center justify-center rounded-lg bg-[#0a0a0a] text-white/40">
              Chart placeholder — integrate TradingView or chart library
            </div>
            <p className="mt-2 text-right text-xs text-white/40">
              Powered by TradingView
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Trading Platform */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold">
              Advanced Trading Platform
            </h2>
            <ul className="mt-8 space-y-4">
              {platformFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-white/90"
                >
                  <span className="text-[#f97316]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="relative">
              <div className="h-80 w-48 rounded-[2rem] border-4 border-white/20 bg-[#111] shadow-2xl">
                <div className="flex h-full flex-col rounded-[1.5rem] bg-[#0a0a0a] p-3">
                  <div className="h-2 w-8 rounded-full bg-white/30" />
                  <div className="mt-4 flex-1 rounded-lg bg-gradient-to-b from-orange-500/20 to-emerald-500/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Account Type */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold">
            Choose Your Account Type
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-white/70">
            Select the account that best fits your trading style and experience
            level.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {accountTypes.map((account) => (
              <div
                key={account.name}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                {account.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-[#f97316] px-4 py-1 text-xs font-medium text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold">{account.name}</h3>
                <p className="mt-2 text-[#f97316] font-medium">
                  {account.deposit}
                </p>
                <ul className="mt-6 space-y-3">
                  {account.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="text-[#f97316]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`mt-8 w-full rounded py-3 text-sm font-medium ${
                    account.popular
                      ? "bg-[#f97316] text-white hover:bg-[#ea580c]"
                      : "border border-white text-white hover:bg-white/10"
                  }`}
                >
                  Create Account
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Rigel Markets */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold">
            Why Choose Rigel Markets?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-white/70">
            Discover the benefits that make Rigel Markets your preferred
            trading partner.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="text-3xl text-[#f97316]">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div>
              <span className="text-lg font-bold tracking-wider text-white">
                RIGEL MARKETS
              </span>
              <p className="mt-4 text-sm text-white/60">
                © 2023 Rigel Markets. All rights reserved.
              </p>
              <p className="mt-1 text-sm text-white/60">
                Trade with confidence, trade with us.
              </p>
              <div className="mt-4 flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-[#f97316] hover:text-[#f97316]"
                  >
                    •
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
                <h4 className="text-sm font-semibold text-white">Features</h4>
                <ul className="mt-3 space-y-2">
                  {footerFeatures.map((link) => (
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
              <div>
                <h4 className="text-sm font-semibold text-white">About</h4>
                <ul className="mt-3 space-y-2">
                  {footerAbout.map((link) => (
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
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
            Terms & Conditions | Privacy Policy | Risk Disclosure
          </div>
        </div>
      </footer>
    </div>
  )
}
