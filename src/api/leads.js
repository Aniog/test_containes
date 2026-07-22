// In-memory lead store with mock data for frontend preview
import { useState, useCallback } from "react"

const INITIAL_LEADS = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@techcorp.com",
    phone: "+1 (555) 234-5678",
    company: "TechCorp Inc.",
    source: "Website",
    status: "Qualified",
    notes: "Interested in enterprise plan. Follow up next week.",
    createdAt: "2026-07-15T09:30:00Z",
  },
  {
    id: "2",
    name: "Marcus Williams",
    email: "m.williams@growthco.io",
    phone: "+1 (555) 876-5432",
    company: "GrowthCo",
    source: "Referral",
    status: "Contacted",
    notes: "Referred by John Smith. Needs demo.",
    createdAt: "2026-07-16T14:00:00Z",
  },
  {
    id: "3",
    name: "Priya Patel",
    email: "priya@startupxyz.com",
    phone: "+1 (555) 345-6789",
    company: "StartupXYZ",
    source: "LinkedIn",
    status: "New",
    notes: "",
    createdAt: "2026-07-17T11:15:00Z",
  },
  {
    id: "4",
    name: "David Chen",
    email: "dchen@enterprise.com",
    phone: "+1 (555) 456-7890",
    company: "Enterprise Solutions",
    source: "Cold Outreach",
    status: "Proposal",
    notes: "Sent proposal for 50-seat license. Awaiting response.",
    createdAt: "2026-07-18T08:45:00Z",
  },
  {
    id: "5",
    name: "Emily Rodriguez",
    email: "emily.r@mediagroup.com",
    phone: "+1 (555) 567-8901",
    company: "Media Group",
    source: "Website",
    status: "Won",
    notes: "Closed! Annual plan, 20 seats.",
    createdAt: "2026-07-19T16:20:00Z",
  },
  {
    id: "6",
    name: "James Thompson",
    email: "j.thompson@oldschool.biz",
    phone: "+1 (555) 678-9012",
    company: "OldSchool Biz",
    source: "Trade Show",
    status: "Lost",
    notes: "Went with competitor. Price was the issue.",
    createdAt: "2026-07-20T10:00:00Z",
  },
]

let leadsStore = [...INITIAL_LEADS]
let listeners = []

const notify = () => listeners.forEach((fn) => fn([...leadsStore]))

export const leadsApi = {
  getAll: () => [...leadsStore],
  add: (lead) => {
    const newLead = {
      ...lead,
      id: String(Date.now()),
      status: "New",
      createdAt: new Date().toISOString(),
    }
    leadsStore = [newLead, ...leadsStore]
    notify()
    return newLead
  },
  update: (id, updates) => {
    leadsStore = leadsStore.map((l) => (l.id === id ? { ...l, ...updates } : l))
    notify()
  },
  delete: (id) => {
    leadsStore = leadsStore.filter((l) => l.id !== id)
    notify()
  },
  subscribe: (fn) => {
    listeners.push(fn)
    return () => { listeners = listeners.filter((l) => l !== fn) }
  },
}

export const LEAD_STATUSES = ["New", "Contacted", "Qualified", "Proposal", "Won", "Lost"]
export const LEAD_SOURCES = ["Website", "Referral", "LinkedIn", "Cold Outreach", "Trade Show", "Other"]
