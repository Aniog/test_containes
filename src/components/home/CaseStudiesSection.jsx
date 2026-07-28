import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/siteData";

export default function CaseStudiesSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Case Studies
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Results for real importers
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            See how we have helped businesses source better, reduce risk, and ship on time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.id} className="flex flex-col transition hover:shadow-md">
              <CardHeader>
                <Badge variant="default">{study.industry}</Badge>
                <CardTitle className="mt-3">{study.client}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="font-medium text-blue-800">{study.result}</p>
                <CardDescription className="mt-3 flex-1 text-base leading-relaxed">
                  {study.summary}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/case-studies">Read All Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
