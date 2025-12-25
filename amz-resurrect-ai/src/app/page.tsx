import Link from "next/link";
import { ArrowRight, BrainCircuit, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Trial",
    price: "Free",
    currency: "",
    description: "One audit of your existing case with risk checklist.",
    meta: "1 Free Audit",
    cta: "Book the free audit",
  },
  {
    name: "Pro",
    price: "299",
    currency: "SAR",
    description: "Full Plan of Action tailored for Amazon KSA/UAE reinstatement.",
    meta: "Full POA | 24h Turnaround",
    cta: "Generate your POA",
    highlight: true,
  },
];

const highlights = [
  {
    title: "Trained on KSA & UAE case data",
    description:
      "We infused compliance patterns from 380+ successfully reinstated Saudi & Emirates accounts.",
    icon: <BrainCircuit className="h-6 w-6 text-emerald-500" />,
  },
  {
    title: "Ex-Amazon Investigator System Prompt",
    description:
      "Every response is reasoned like an internal Amazon MENA investigator—no generic appeal templates.",
    icon: <ShieldCheck className="h-6 w-6 text-slate-700" />,
  },
  {
    title: "Loss recovery urgency baked-in",
    description:
      "Appeal copy references daily revenue loss to emphasise financial urgency in SAR and AED.",
    icon: <Sparkles className="h-6 w-6 text-indigo-500" />,
  },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-60" />
      <div className="relative">
        <header className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-8 lg:px-12">
          <div className="rounded-3xl border border-white/60 bg-white/70 p-10 backdrop-blur-xl shadow-xl text-slate-900">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700 shadow-sm">
                  Amazon KSA & UAE Reinstatement AI
                </span>
              </div>
              <div className="text-sm text-slate-500">
                Losing listings right now? Highlight lost SAR/AED revenue and
                deliver a fact-based POA in minutes.
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Resurrect your Amazon KSA / UAE account with investigator-grade
                  Plans of Action.
                </h1>
                <p className="text-lg leading-8 text-slate-600">
                  AMZ-Resurrect AI combines a reasoning engine, 2024-2025 Amazon
                  compliance updates, and ex-Amazon investigation heuristics. Stop
                  guessing. Build the appeal Amazon actually approves.
                </p>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 text-slate-900 shadow-inner">
                  <p className="text-base font-semibold uppercase tracking-wide text-emerald-700">
                    النسخة العربية
                  </p>
                  <p className="mt-3 text-lg leading-8 text-slate-700">
                    أعد تشغيل حسابك في أمازون السعودية أو الإمارات بخطة عمل دقيقة
                    تعتمد على خبرة محقق سابق في أمازون. الذكاء الاصطناعي لدينا
                    مدرّب على سياسات ٢٠٢٤-٢٠٢٥ وقصص نجاح حقيقية – ليس مجرد
                    قوالب عامة متداولة.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button asChild size="lg">
                    <Link href="/dashboard" className="flex items-center gap-2">
                      Launch the AI appeal builder
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Link
                    href="#pricing"
                    className="text-sm font-semibold text-slate-600 underline-offset-4 hover:underline"
                  >
                    View pricing
                  </Link>
                </div>
              </div>

              <Card className="glass-card border-none">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    High stakes? Calculate the daily bleed.
                  </CardTitle>
                  <p className="text-sm text-slate-500">
                    Example: A suspended seller losing SAR 12,800 / AED 12,400 per
                    day. The agent highlights precise revenue loss to emphasise
                    urgency.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-2xl bg-slate-900/5 p-6">
                    <h3 className="text-base font-semibold text-slate-900">
                      AI Snapshot
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      “On 18 December 2024 you were removed from the Saudi catalog
                      for <strong>IP Infringement</strong>. Inventory worth{" "}
                      <strong>SAR 320,000</strong> is idle, and your average daily
                      revenue of <strong>SAR 12,800</strong> is frozen. We will
                      restore confidence by addressing the critical risk points:
                      authentic documentation, proactive rights-owner outreach, and
                      a compliance playbook built for MENA retail.”
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {highlights.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                      >
                        <div className="rounded-full bg-slate-100 p-2">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-500 leading-5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </header>

        <section className="mx-auto mb-24 max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-6 rounded-3xl bg-white/90 p-12 shadow-2xl shadow-slate-900/5 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-slate-900">
                Why it works
              </h2>
              <p className="mt-3 text-sm text-slate-500 leading-6">
                The “Reasoning AI” agent is chained with compliance checks that
                mimic the manual review workflow inside Amazon RCC (Risk Control
                Centres) for Saudi and UAE marketplaces.
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Case intake tuning",
                  detail:
                    "Structured prompts capture seller name, ASINs, violation type, and root cause narrative before invoking the agent.",
                },
                {
                  title: "Hidden system prompt",
                  detail:
                    "Every completion is forced to think like an Ex-Amazon Investigator: evidence checklist, remorse language, prevention pillars.",
                },
                {
                  title: "Policy tracker feed",
                  detail:
                    "Includes 2024-2025 updates on IP, authenticity, and product quality policies across KSA & UAE marketplaces.",
                },
                {
                  title: "Streamed Markdown output",
                  detail:
                    "Copy streams in real-time so case managers can review and edit before final submission.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm text-slate-600 leading-6">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto mb-32 max-w-6xl px-6 sm:px-8 lg:px-12"
        >
          <div className="rounded-3xl bg-white/95 p-12 shadow-2xl shadow-emerald-100">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold text-slate-900">
                Choose your reinstatement path
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-7">
                Trial mode gives you a single audit checklist. Pro delivers the
                full POA in both English and Arabic ready for Seller Central.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`flex h-full flex-col justify-between border-2 ${
                    plan.highlight
                      ? "border-emerald-300 bg-emerald-50/70"
                      : "border-slate-100"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-4 text-4xl font-bold text-slate-900">
                      {plan.price}
                      {plan.currency ? (
                        <span className="ml-2 text-lg font-medium text-slate-500">
                          {plan.currency}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-4 text-sm text-slate-500">{plan.meta}</p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between gap-6">
                    <p className="text-sm leading-6 text-slate-600">
                      {plan.description}
                    </p>
                    <Button asChild variant={plan.highlight ? "default" : "outline"}>
                      <Link href="/dashboard" className="flex items-center gap-2">
                        {plan.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
