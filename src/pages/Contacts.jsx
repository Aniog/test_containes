import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft, Trash2, User } from "lucide-react";

const STORAGE_KEY = "contact-keeper-contacts";

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString();
}

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setContacts(stored);
  }, []);

  const handleDelete = (id) => {
    const nextContacts = contacts.filter((c) => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextContacts));
    setContacts(nextContacts);
    toast.success("Contact removed.");
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-20">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Saved Contacts</h1>
          <p className="text-muted-foreground">Review and manage contacts submitted through the form.</p>
        </div>
        <Button asChild variant="outline">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to form
          </Link>
        </Button>
      </div>

      {contacts.length === 0 ? (
        <Card className="text-center py-16">
          <CardContent>
            <User className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <h2 className="mt-4 text-xl font-semibold text-card-foreground">No contacts yet</h2>
            <p className="mt-2 text-muted-foreground">
              Submissions from the contact form will appear here.
            </p>
            <Button asChild className="mt-6">
              <Link to="/">Go to contact form</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <Card key={contact.id} className="shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                    <CardDescription>{formatDate(contact.createdAt)}</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(contact.id)}
                    aria-label={`Delete ${contact.name}`}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium text-muted-foreground">Email:</span>{" "}
                  <a href={`mailto:${contact.email}`} className="text-foreground hover:underline">
                    {contact.email}
                  </a>
                </p>
                {contact.company && (
                  <p className="text-sm">
                    <span className="font-medium text-muted-foreground">Company:</span>{" "}
                    <span className="text-foreground">{contact.company}</span>
                  </p>
                )}
                <p className="text-sm">
                  <span className="font-medium text-muted-foreground">Message:</span>
                </p>
                <p className="whitespace-pre-wrap text-sm text-foreground">{contact.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
