import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Inbox, Shield, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-sm font-medium text-card-foreground shadow-sm">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            Simple contact management
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Keep track of every message in one place.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            A clean landing page with a contact form that saves submissions right in your browser.
            Review them anytime on the Saved Contacts page.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border bg-card p-4 shadow-sm">
              <Inbox className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold text-card-foreground">Organized inbox</h3>
                <p className="text-sm text-muted-foreground">Every contact is stored with a timestamp.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border bg-card p-4 shadow-sm">
              <Shield className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold text-card-foreground">Private by default</h3>
                <p className="text-sm text-muted-foreground">Data stays in your browser local storage.</p>
              </div>
            </div>
          </div>
        </section>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
            <CardDescription>Fill out the form below and we will save your details.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
