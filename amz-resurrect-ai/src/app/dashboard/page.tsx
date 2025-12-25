'use client';

import { FormEvent, useState } from "react";
import { useCompletion } from "@ai-sdk/react";
import {
  BadgeCheck,
  Clock,
  FileText,
  Loader2,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const violationTypes = [
  "IP Infringement",
  "Counterfeit",
  "Trademark Misuse",
  "Restricted Product",
  "Used Sold as New",
  "Product Authenticity",
  "Safety Complaints",
];

export default function DashboardPage() {
  const [sellerName, setSellerName] = useState("");
  const [asin, setAsin] = useState("");
  const [violation, setViolation] = useState(violationTypes[0]);
  const [story, setStory] = useState("");

  const { complete, completion, isLoading, setCompletion } = useCompletion({
    api: "/api/generate-appeal",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!sellerName || !asin || !story) {
      return;
    }

    const payload = {
      sellerName,
      asin,
      violationType: violation,
      rootCause: story,
    };

    await complete(JSON.stringify(payload));
  };

  const handleReset = () => {
    setSellerName("");
    setAsin("");
    setViolation(violationTypes[0]);
    setStory("");
    setCompletion("");
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface)] pb-20">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-6 pb-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Badge tone="default" className="mb-4">
              AMZ-Resurrect AI | Investigator Mode
            </Badge>
            <h1 className="text-3xl font-semibold text-slate-900">
              Build a reinstatement Plan of Action in minutes
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-600 leading-7">
              Feed in the complete story. The reasoning agent will craft Root Cause,
              Corrective, and Preventive actions aligned with Amazon Saudi & UAE
              policy language.
            </p>
          </div>
          <div className="grid gap-2 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-500" />
              <span>
                Typical investigation turnaround:{" "}
                <strong className="text-slate-800">6 minutes</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-slate-700" />
              <span>
                Optimised for{" "}
                <strong className="text-slate-800">2024-2025 MENA policies</strong>
              </span>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
          <Card className="border-slate-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-slate-900">
                Seller narrative intake
              </CardTitle>
              <p className="mt-2 text-sm text-slate-500">
                Provide as much colour as possible. Investigators expect detailed
                chronology, evidence references, and prevention steps already in
                motion.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="sellerName" requiredIndicator>
                      Seller legal name
                    </Label>
                    <Input
                      id="sellerName"
                      placeholder="e.g. Riyadh Commerce LLC"
                      value={sellerName}
                      onChange={(event) => setSellerName(event.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="asin" requiredIndicator>
                      ASIN(s)
                    </Label>
                    <Input
                      id="asin"
                      placeholder="Separate multiple ASINs with commas"
                      value={asin}
                      onChange={(event) => setAsin(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="violation">Violation type</Label>
                  <Select
                    id="violation"
                    value={violation}
                    onChange={(event) => setViolation(event.target.value)}
                  >
                    {violationTypes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="story" requiredIndicator>
                    The story — root cause narrative
                  </Label>
                  <Textarea
                    id="story"
                    placeholder="Detail the timeline, supplier info, corrective actions already taken, and any supporting documents."
                    value={story}
                    onChange={(event) => setStory(event.target.value)}
                    required
                    minLength={120}
                  />
                  <p className="text-xs text-slate-500">
                    Tip: Mention financial loss per day (SAR / AED), supplier
                    verifications, and prevention investments already underway.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" size="lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating appeal…
                      </>
                    ) : (
                      <>
                        <FileText className="mr-2 h-4 w-4" />
                        Generate Plan of Action
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                    disabled={isLoading}
                  >
                    Reset form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-slate-900">
                  Appeal preview
                </CardTitle>
                <p className="mt-2 text-sm text-slate-500">
                  Markdown formatted output streaming live from the investigator
                  agent. Copy and refine before submitting in Seller Central.
                </p>
              </CardHeader>
              <CardContent>
                <div className="poa-paper relative max-h-[600px] overflow-y-auto bg-white p-8">
                  {isLoading && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Reasoning like an ex-Amazon investigator…
                      </div>
                    </div>
                  )}
                  {completion ? (
                    <div className="space-y-4 text-sm leading-6 text-slate-700 whitespace-pre-wrap">
                      {completion}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 text-center text-sm text-slate-500">
                      <ShieldAlert className="h-8 w-8 text-slate-400" />
                      <p>No Plan of Action generated yet.</p>
                      <p>Complete the form and hit generate to preview the copy.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-emerald-50/70">
              <CardContent className="flex flex-col gap-4 p-6 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-semibold">
                      Investigator-grade Plan of Action checklist
                    </p>
                    <p>
                      ✅ Root cause acknowledges the policy breach and evidence gaps{" "}
                      <br />
                      ✅ Corrective actions reference invoices, rights-owner outreach,
                      and product removals <br />
                      ✅ Preventive actions cover SOPs, compliance audits, and KSA/UAE
                      localisation <br />✅ Financial urgency cited in SAR/AED to
                      justify expedited review
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
