import { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { FileText, PlusCircle, X, Check, Sparkles, Heart, MessageCircle, Share2, Trash2, Filter } from 'lucide-react'
import { cn } from '@/lib/utils'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const statusColors = { idea: 'default', draft: 'warning', scheduled: 'cyan', published: 'success', archived: 'danger' }
const platformColors = { instagram: 'active', tiktok: 'danger', youtube: 'danger', twitter: 'cyan', twitch: 'active', spotify: 'success', discord: 'active', linkedin: 'cyan' }

const PLATFORMS = ['instagram', 'tiktok', 'youtube', 'twitter', 'twitch', 'spotify', 'discord', 'linkedin']
const CONTENT_TYPES = ['photo', 'video', 'reel', 'story', 'tweet', 'blog', 'podcast', 'stream']
const STATUSES = ['idea', 'draft', 'scheduled', 'published', 'archived']

const defaultForm = {
  celebrity_id: '',
  celebrity_name: '',
  title: '',
  content: '',
  platform: '',
  content_type: '',
  status: 'idea',
  hashtags: [],
  ai_generated: false,
}

export default function ContentHub() {
  const [posts, setPosts] = useState([])
  const [celebrities, setCelebrities] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(defaultForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [hashtagInput, setHashtagInput] = useState('')
  const [filterPlatform, setFilterPlatform] = useState('')
  const [filterStatus, setFilterStatus] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const [postsRes, celebRes] = await Promise.all([
        client.from('Content Posts').select('*').order('created_at', { ascending: false }),
        client.from('Virtual Celebrities').select('*').order('name', { ascending: true }),
      ])
      setPosts(postsRes?.data?.list ?? [])
      setCelebrities(celebRes?.data?.list ?? [])
    } catch (e) {
      console.error('Content hub load error:', e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load])

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const handleCelebrityChange = (e) => {
    const id = e.target.value
    const celeb = celebrities.find(c => String(c.id) === id)
    setForm(f => ({ ...f, celebrity_id: id, celebrity_name: celeb?.data?.name || '' }))
  }

  const addHashtag = () => {
    const tag = hashtagInput.trim().replace(/^#/, '')
    if (tag && !form.hashtags.includes(tag)) {
      set('hashtags', [...form.hashtags, tag])
    }
    setHashtagInput('')
  }

  const removeHashtag = (tag) => set('hashtags', form.hashtags.filter(t => t !== tag))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      const { data: response, error: err } = await client
        .from('Content Posts')
        .insert({
          data: {
            ...form,
            celebrity_id: parseInt(form.celebrity_id) || 0,
            likes: 0,
            comments: 0,
            shares: 0,
          }
        })
        .select()
        .single()

      if (err || response?.success === false) {
        setError(response?.errors?.join(', ') || err?.message || 'Failed to create post')
        return
      }
      setShowForm(false)
      setForm(defaultForm)
      await load()
    } catch (e) {
      setError(e.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (post) => {
    if (!confirm('Delete this post?')) return
    await client.from('Content Posts').delete().eq('id', post.id).maybeSingle()
    setPosts(prev => prev.filter(p => p.id !== post.id))
  }

  const handleStatusChange = async (post, newStatus) => {
    const { data: response } = await client
      .from('Content Posts')
      .update({ data: { ...post.data, status: newStatus } })
      .eq('id', post.id)
      .select()
      .single()
    if (response?.data) {
      setPosts(prev => prev.map(p => p.id === post.id ? response.data : p))
    }
    await load()
  }

  const filtered = posts.filter(p => {
    const d = p.data || {}
    return (!filterPlatform || d.platform === filterPlatform) && (!filterStatus || d.status === filterStatus)
  })

  const grouped = STATUSES.reduce((acc, s) => {
    acc[s] = filtered.filter(p => p.data?.status === s)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Content Hub</h1>
          <p className="text-slate-500 text-sm mt-1">{posts.length} posts across all celebrities</p>
        </div>
        <Button variant="gradient" onClick={() => setShowForm(true)}>
          <PlusCircle className="w-4 h-4" />
          New Post
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <Select value={filterPlatform} onChange={e => setFilterPlatform(e.target.value)} className="w-44">
          <option value="">All Platforms</option>
          {PLATFORMS.map(p => <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>)}
        </Select>
        <Select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="w-40">
          <option value="">All Statuses</option>
          {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
        </Select>
      </div>

      {/* Create Post Form */}
      {showForm && (
        <Card className="border-violet-500/30">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-400" />
              Create New Post
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setShowForm(false)}>
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Celebrity</Label>
                  <Select value={form.celebrity_id} onChange={handleCelebrityChange} required>
                    <option value="">Select celebrity...</option>
                    {celebrities.map(c => (
                      <option key={c.id} value={c.id}>{c.data?.name}</option>
                    ))}
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Platform *</Label>
                  <Select value={form.platform} onChange={e => set('platform', e.target.value)} required>
                    <option value="">Select platform...</option>
                    {PLATFORMS.map(p => <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>)}
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Content Type *</Label>
                  <Select value={form.content_type} onChange={e => set('content_type', e.target.value)} required>
                    <option value="">Select type...</option>
                    {CONTENT_TYPES.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={form.status} onChange={e => set('status', e.target.value)}>
                    {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input value={form.title} onChange={e => set('title', e.target.value)} placeholder="Post title or headline..." required />
              </div>
              <div className="space-y-2">
                <Label>Content / Caption</Label>
                <Textarea value={form.content} onChange={e => set('content', e.target.value)} placeholder="Write the post content or caption..." rows={4} />
              </div>
              <div className="space-y-2">
                <Label>Hashtags</Label>
                <div className="flex gap-2">
                  <Input
                    value={hashtagInput}
                    onChange={e => setHashtagInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addHashtag())}
                    placeholder="Add hashtag (press Enter)..."
                  />
                  <Button type="button" variant="secondary" onClick={addHashtag}>Add</Button>
                </div>
                {form.hashtags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {form.hashtags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 bg-violet-600/20 text-violet-300 border border-violet-500/30 text-xs px-2 py-1 rounded-full">
                        #{tag}
                        <button type="button" onClick={() => removeHashtag(tag)} className="hover:text-red-400 transition-colors">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="ai_generated"
                  checked={form.ai_generated}
                  onChange={e => set('ai_generated', e.target.checked)}
                  className="w-4 h-4 accent-violet-600"
                />
                <label htmlFor="ai_generated" className="text-sm text-slate-400">AI-generated content</label>
              </div>
              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>
              )}
              <div className="flex gap-3 pt-2">
                <Button type="submit" variant="gradient" disabled={saving}>
                  {saving ? 'Creating...' : 'Create Post'}
                  <Check className="w-4 h-4" />
                </Button>
                <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Kanban Board */}
      {loading ? (
        <div className="text-center py-12 text-slate-500">Loading posts...</div>
      ) : filtered.length === 0 && !showForm ? (
        <Card className="border-dashed border-violet-500/20">
          <CardContent className="p-16 text-center">
            <FileText className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-200 mb-2">No posts yet</h3>
            <p className="text-slate-500 text-sm mb-6">Start creating content for your virtual celebrities.</p>
            <Button variant="gradient" onClick={() => setShowForm(true)}>
              <PlusCircle className="w-4 h-4" />
              Create First Post
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
          {STATUSES.map(status => (
            <div key={status} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant={statusColors[status]}>{status}</Badge>
                  <span className="text-xs text-slate-600">{grouped[status].length}</span>
                </div>
              </div>
              <div className="space-y-3">
                {grouped[status].map(post => {
                  const d = post.data || {}
                  return (
                    <Card key={post.id} className="hover:border-violet-500/30 transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <p className="text-sm font-medium text-slate-200 leading-tight line-clamp-2">{d.title}</p>
                          <button
                            type="button"
                            onClick={() => handleDelete(post)}
                            className="text-slate-600 hover:text-red-400 transition-colors flex-shrink-0"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        {d.celebrity_name && (
                          <p className="text-xs text-violet-400 mb-2">@{d.celebrity_name}</p>
                        )}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {d.platform && <Badge variant={platformColors[d.platform] || 'default'} className="text-xs">{d.platform}</Badge>}
                          {d.content_type && <Badge variant="default" className="text-xs">{d.content_type}</Badge>}
                          {d.ai_generated && <Badge variant="cyan" className="text-xs">AI</Badge>}
                        </div>
                        {d.hashtags?.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {d.hashtags.slice(0, 3).map(tag => (
                              <span key={tag} className="text-xs text-violet-400">#{tag}</span>
                            ))}
                            {d.hashtags.length > 3 && <span className="text-xs text-slate-600">+{d.hashtags.length - 3}</span>}
                          </div>
                        )}
                        <div className="flex items-center gap-3 text-xs text-slate-600 mb-3">
                          <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{d.likes || 0}</span>
                          <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" />{d.comments || 0}</span>
                          <span className="flex items-center gap-1"><Share2 className="w-3 h-3" />{d.shares || 0}</span>
                        </div>
                        {/* Quick status advance */}
                        {status !== 'published' && status !== 'archived' && (
                          <Select
                            value={d.status}
                            onChange={e => handleStatusChange(post, e.target.value)}
                            className="text-xs py-1"
                          >
                            {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                          </Select>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
