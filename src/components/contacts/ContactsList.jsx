import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trash2, Mail, Phone, User, MessageSquare, Users } from 'lucide-react'
import { format, parseISO } from 'date-fns'

export default function ContactsList({ contacts, onDelete, onClear }) {
  if (contacts.length === 0) {
    return (
      <Card className="w-full max-w-2xl">
        <CardContent className="flex flex-col items-center justify-center py-16 gap-4">
          <Users className="w-16 h-16 text-slate-300" />
          <p className="text-lg font-medium text-slate-700">No contacts yet</p>
          <p className="text-sm text-slate-500">
            Fill out the contact form to see submissions appear here.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-2xl space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">
          Saved Contacts ({contacts.length})
        </h2>
        <Button variant="destructive" size="sm" onClick={onClear} className="gap-2">
          <Trash2 className="w-3.5 h-3.5" />
          Clear All
        </Button>
      </div>

      <div className="space-y-3">
        {contacts.map((contact) => (
          <Card key={contact.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <span className="font-medium text-slate-900">{contact.name}</span>
                    <span className="text-xs text-slate-400 ml-auto">
                      {format(parseISO(contact.createdAt), 'MMM d, yyyy h:mm a')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">{contact.email}</span>
                  </div>
                  {contact.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-600">{contact.phone}</span>
                    </div>
                  )}
                  {contact.message && (
                    <div className="flex items-start gap-2 mt-1">
                      <MessageSquare className="w-4 h-4 text-slate-400 mt-0.5" />
                      <p className="text-sm text-slate-600">{contact.message}</p>
                    </div>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(contact.id)}
                  className="text-slate-400 hover:text-red-500 hover:bg-red-50 shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
