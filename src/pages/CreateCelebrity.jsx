import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkles, User, Brain, MessageSquare, Target, ChevronRight, ChevronLeft, Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const STEPS = [
  { id: 1, label: 'Identity', icon: User, description: 'Name, category & basic info' },
  { id: 2, label: 'Appearance', icon: Sparkles, description: 'Visual style & aesthetics' },
  { id: 3, label: 'Personality', icon: Brain, description: 'Traits, values & backstory' },
  { id: 4, label: 'Communication', icon: MessageSquare, description: 'Tone & language style' },
  { id: 5, label: 'Strategy', icon: Target, description: 'Platforms & content plan' },
]

const PERSONALITY_TRAITS = ['bubbly', 'mysterious', 'witty', 'bold', 'empathetic', 'rebellious', 'intellectual', 'playful', 'confident', 'humble', 'charismatic', 'authentic', 'edgy', 'wholesome', 'ambitious']
const CORE_VALUES = ['creativity', 'authenticity', 'empowerment', 'innovation', 'community', 'sustainability', 'diversity', 'excellence', 'fun', 'growth']
const CONTENT_THEMES = ['fashion & style', 'gaming', 'music', 'fitness', 'travel', 'food', 'tech reviews', 'comedy', 'education', 'mental health', 'beauty', 'art', 'sports', 'finance']
const PLATFORMS = ['instagram', 'tiktok', 'youtube', 'twitter', 'twitch', 'spotify', 'discord', 'linkedin']
const MONETIZATION = ['brand-deals', 'merchandise', 'subscriptions', 'nft', 'live-events', 'courses', 'affiliate']

const avatarGradients = [
  { label: 'Violet Dream', value: 'from-violet-600 to-pink-500' },
  { label: 'Cyber Blue', value: 'from-cyan-500 to-blue-600' },
  { label: 'Neon Green', value: 'from-emerald-500 to-teal-600' },
  { label: 'Solar Flare', value: 'from-amber-500 to-orange-600' },
  { label: 'Rose Gold', value: 'from-rose-500 to-pink-600' },
  { label: 'Deep Space', value: 'from-indigo-500 to-violet-600' },
]

function ToggleChip({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer',
        selected
          ? 'bg-violet-600/20 text-violet-300 border-violet-500/50'
          : 'bg-[#12121a] text-slate-400 border-[#2a2a3e] hover:border-violet-500/30 hover:text-slate-300'
      )}
    >
      {selected && <Check className="w-3 h-3 inline mr-1" />}
      {label}
    </button>
  )
}

function FormField({ label, children, hint }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {hint && <p className="text-xs text-slate-600">{hint}</p>}
    </div>
  )
}

export default function CreateCelebrity() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [selectedGradient, setSelectedGradient] = useState(avatarGradients[0].value)

  const [form, setForm] = useState({
    name: '',
    tagline: '',
    category: '',
    bio: '',
    avatar_style: '',
    gender_presentation: '',
    age_range: '',
    primary_color: '#7c3aed',
    secondary_color: '#06b6d4',
    personality_traits: [],
    core_values: [],
    backstory: '',
    communication_tone: '',
    language_style: '',
    target_audience: '',
    primary_platforms: [],
    content_themes: [],
    posting_frequency: '',
    monetization_strategy: [],
    avatar_prompt: '',
  })

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const toggleArray = (key, val) => {
    setForm(f => ({
      ...f,
      [key]: f[key].includes(val) ? f[key].filter(v => v !== val) : [...f[key], val],
    }))
  }

  const canProceed = () => {
    if (step === 1) return form.name.trim() && form.category
    return true
  }

  const handleSubmit = async () => {
    setSaving(true)
    setError(null)
    try {
      const { data: response, error: err } = await client
        .from('Virtual Celebrities')
        .insert({ data: { ...form, status: 'draft', follower_count: 0, engagement_rate: 0, total_posts: 0 } })
        .select()
        .single()

      if (err || response?.success === false) {
        setError(response?.errors?.join(', ') || err?.message || 'Failed to create celebrity')
        return
      }
      navigate('/celebrities')
    } catch (e) {
      setError(e.message)
    } finally {
      setSaving(false)
    }
  }

  const progress = ((step - 1) / (STEPS.length - 1)) * 100

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Step Indicator */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">Step {step} of {STEPS.length}</span>
          <span className="text-sm text-violet-400 font-medium">{STEPS[step - 1].label}</span>
        </div>
        <Progress value={progress} />
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {STEPS.map(s => (
            <button
              key={s.id}
              type="button"
              onClick={() => s.id < step && setStep(s.id)}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex-shrink-0',
                s.id === step ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30' :
                s.id < step ? 'text-emerald-400 cursor-pointer hover:bg-emerald-500/10' :
                'text-slate-600 cursor-default'
              )}
            >
              {s.id < step ? <Check className="w-3 h-3" /> : <s.icon className="w-3 h-3" />}
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <Card>
        <CardContent className="p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              {(() => { const S = STEPS[step-1]; return <S.icon className="w-5 h-5 text-violet-400" /> })()}
              {STEPS[step - 1].label}
            </h2>
            <p className="text-slate-500 text-sm mt-1">{STEPS[step - 1].description}</p>
          </div>

          {/* Step 1: Identity */}
          {step === 1 && (
            <div className="space-y-5">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedGradient} flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                  {form.name ? form.name[0].toUpperCase() : '?'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {avatarGradients.map(g => (
                    <button
                      key={g.value}
                      type="button"
                      onClick={() => setSelectedGradient(g.value)}
                      className={cn('w-8 h-8 rounded-lg bg-gradient-to-br transition-all', g.value, selectedGradient === g.value ? 'ring-2 ring-violet-400 ring-offset-2 ring-offset-[#1a1a2e]' : 'opacity-60 hover:opacity-100')}
                      title={g.label}
                    />
                  ))}
                </div>
              </div>
              <FormField label="Celebrity Name *">
                <Input value={form.name} onChange={e => set('name', e.target.value)} placeholder="e.g. Luna Vex, Kai Storm..." />
              </FormField>
              <FormField label="Tagline" hint="A short, memorable phrase that defines them">
                <Input value={form.tagline} onChange={e => set('tagline', e.target.value)} placeholder="e.g. 'Breaking reality, one post at a time'" />
              </FormField>
              <FormField label="Category *">
                <Select value={form.category} onChange={e => set('category', e.target.value)}>
                  <option value="">Select a category...</option>
                  {['influencer','musician','gamer','fitness','fashion','tech','lifestyle','comedian','educator','other'].map(c => (
                    <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Short Bio" hint="Public-facing bio (max 500 characters)">
                <Textarea value={form.bio} onChange={e => set('bio', e.target.value)} placeholder="Write a compelling bio for your celebrity..." rows={3} maxLength={500} />
              </FormField>
            </div>
          )}

          {/* Step 2: Appearance */}
          {step === 2 && (
            <div className="space-y-5">
              <FormField label="Avatar Style">
                <div className="grid grid-cols-3 gap-3">
                  {['anime','realistic','cartoon','cyberpunk','fantasy','minimalist'].map(style => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => set('avatar_style', style)}
                      className={cn(
                        'p-3 rounded-xl border text-sm font-medium transition-all capitalize',
                        form.avatar_style === style
                          ? 'bg-violet-600/20 border-violet-500/50 text-violet-300'
                          : 'bg-[#12121a] border-[#2a2a3e] text-slate-400 hover:border-violet-500/30'
                      )}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </FormField>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Gender Presentation">
                  <Select value={form.gender_presentation} onChange={e => set('gender_presentation', e.target.value)}>
                    <option value="">Select...</option>
                    {['feminine','masculine','androgynous','non-binary','undefined'].map(g => (
                      <option key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</option>
                    ))}
                  </Select>
                </FormField>
                <FormField label="Age Range">
                  <Select value={form.age_range} onChange={e => set('age_range', e.target.value)}>
                    <option value="">Select...</option>
                    {['teen','young-adult','adult','mature','ageless'].map(a => (
                      <option key={a} value={a}>{a.charAt(0).toUpperCase() + a.slice(1)}</option>
                    ))}
                  </Select>
                </FormField>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Primary Brand Color">
                  <div className="flex items-center gap-3">
                    <input type="color" value={form.primary_color} onChange={e => set('primary_color', e.target.value)} className="w-10 h-10 rounded-lg border border-[#2a2a3e] bg-transparent cursor-pointer" />
                    <Input value={form.primary_color} onChange={e => set('primary_color', e.target.value)} className="font-mono" />
                  </div>
                </FormField>
                <FormField label="Secondary Brand Color">
                  <div className="flex items-center gap-3">
                    <input type="color" value={form.secondary_color} onChange={e => set('secondary_color', e.target.value)} className="w-10 h-10 rounded-lg border border-[#2a2a3e] bg-transparent cursor-pointer" />
                    <Input value={form.secondary_color} onChange={e => set('secondary_color', e.target.value)} className="font-mono" />
                  </div>
                </FormField>
              </div>
              <FormField label="AI Avatar Prompt" hint="Describe the visual appearance for AI image generation">
                <Textarea value={form.avatar_prompt} onChange={e => set('avatar_prompt', e.target.value)} placeholder="e.g. Futuristic anime girl with silver hair, glowing cyan eyes, wearing a holographic jacket..." rows={3} />
              </FormField>
            </div>
          )}

          {/* Step 3: Personality */}
          {step === 3 && (
            <div className="space-y-5">
              <FormField label="Personality Traits" hint="Select up to 10 traits that define this celebrity">
                <div className="flex flex-wrap gap-2 mt-2">
                  {PERSONALITY_TRAITS.map(t => (
                    <ToggleChip key={t} label={t} selected={form.personality_traits.includes(t)} onClick={() => toggleArray('personality_traits', t)} />
                  ))}
                </div>
              </FormField>
              <FormField label="Core Values" hint="Select up to 6 values they stand for">
                <div className="flex flex-wrap gap-2 mt-2">
                  {CORE_VALUES.map(v => (
                    <ToggleChip key={v} label={v} selected={form.core_values.includes(v)} onClick={() => toggleArray('core_values', v)} />
                  ))}
                </div>
              </FormField>
              <FormField label="Backstory" hint="The origin story and narrative background (max 2000 chars)">
                <Textarea value={form.backstory} onChange={e => set('backstory', e.target.value)} placeholder="Where did they come from? What drives them? What's their story..." rows={5} maxLength={2000} />
              </FormField>
            </div>
          )}

          {/* Step 4: Communication */}
          {step === 4 && (
            <div className="space-y-5">
              <FormField label="Communication Tone">
                <div className="grid grid-cols-2 gap-3">
                  {['casual','professional','playful','inspirational','edgy','intellectual','empathetic'].map(tone => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => set('communication_tone', tone)}
                      className={cn(
                        'p-3 rounded-xl border text-sm font-medium transition-all capitalize text-left',
                        form.communication_tone === tone
                          ? 'bg-violet-600/20 border-violet-500/50 text-violet-300'
                          : 'bg-[#12121a] border-[#2a2a3e] text-slate-400 hover:border-violet-500/30'
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </FormField>
              <FormField label="Language Style">
                <Select value={form.language_style} onChange={e => set('language_style', e.target.value)}>
                  <option value="">Select a style...</option>
                  {['formal','informal','slang-heavy','poetic','technical','conversational'].map(s => (
                    <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Target Audience" hint="Describe who this celebrity is designed to appeal to">
                <Textarea value={form.target_audience} onChange={e => set('target_audience', e.target.value)} placeholder="e.g. Gen Z gamers aged 16-24 who love anime and competitive esports..." rows={3} />
              </FormField>
            </div>
          )}

          {/* Step 5: Strategy */}
          {step === 5 && (
            <div className="space-y-5">
              <FormField label="Primary Platforms" hint="Where will this celebrity be active?">
                <div className="flex flex-wrap gap-2 mt-2">
                  {PLATFORMS.map(p => (
                    <ToggleChip key={p} label={p} selected={form.primary_platforms.includes(p)} onClick={() => toggleArray('primary_platforms', p)} />
                  ))}
                </div>
              </FormField>
              <FormField label="Content Themes" hint="Main topics and themes for content">
                <div className="flex flex-wrap gap-2 mt-2">
                  {CONTENT_THEMES.map(t => (
                    <ToggleChip key={t} label={t} selected={form.content_themes.includes(t)} onClick={() => toggleArray('content_themes', t)} />
                  ))}
                </div>
              </FormField>
              <FormField label="Posting Frequency">
                <Select value={form.posting_frequency} onChange={e => set('posting_frequency', e.target.value)}>
                  <option value="">Select frequency...</option>
                  {[['multiple-daily','Multiple times daily'],['daily','Once daily'],['3-4x-week','3-4 times per week'],['weekly','Weekly'],['bi-weekly','Bi-weekly']].map(([v, l]) => (
                    <option key={v} value={v}>{l}</option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Monetization Strategy" hint="How will this celebrity generate revenue?">
                <div className="flex flex-wrap gap-2 mt-2">
                  {MONETIZATION.map(m => (
                    <ToggleChip key={m} label={m} selected={form.monetization_strategy.includes(m)} onClick={() => toggleArray('monetization_strategy', m)} />
                  ))}
                </div>
              </FormField>
            </div>
          )}

          {error && (
            <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
              <X className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="secondary" onClick={() => step > 1 ? setStep(s => s - 1) : navigate('/celebrities')} disabled={saving}>
          <ChevronLeft className="w-4 h-4" />
          {step === 1 ? 'Cancel' : 'Back'}
        </Button>
        {step < STEPS.length ? (
          <Button variant="gradient" onClick={() => setStep(s => s + 1)} disabled={!canProceed()}>
            Continue
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button variant="gradient" onClick={handleSubmit} disabled={saving || !form.name.trim()}>
            {saving ? 'Creating...' : 'Create Celebrity'}
            <Sparkles className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
