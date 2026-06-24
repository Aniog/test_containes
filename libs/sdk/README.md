
<div align="center">
  <img src="https://cd.i.strikingly.com/strikingly/Bobcat/uploads/f79cbee0c2abfeb4c8eb5a5887a0452d/vide-coder-sdk.png" alt="Strikingly Logo" width="600" />
</div>

# Vibe Coder SDK
**Official database access layer for Strikingly Vibe Coder Platform**

🎮 [Vibe Coder Platform](https://openhands.strikingly.com)

📖 [Spec Documentation](https://strikingly.atlassian.net/wiki/x/D4Bk6Q)

📌 [PostgREST Style Queries](https://docs.postgrest.org/en/v10/api.html)

## Overview
Vibe Coder SDK is the official database access layer for Strikingly Vibe Coder Platform. **Table access** is powered by [`@supabase/postgrest-js`](https://github.com/supabase/supabase-js/tree/master/packages/core/postgrest-js) (`PostgrestClient`): you chain filters and modifiers exactly like the PostgREST JS client. **Auth** and related routes still use the bundled HTTP layer.

## How it Works

- **DataClient**: `new DataClient(projectUrl, anonKey)` creates a client for database operations. Call `client.from('tableName')` to access tables.
- **Requests**: Entity calls use `fetch` via `@supabase/postgrest-js` with the `anonKey` set as `apikey` and `Authorization` headers.
- **Auth**: `createClient(config)` returns `{ auth, setToken, … }` for login, session, and user profile via REST paths.

### Key Features

- 🔐 **Zero-Config Authentication** — Automatic token management via `localStorage` (browser)
- 📦 **PostgREST-Compatible Table API** — Same chaining as `@supabase/postgrest-js` (select, filters, insert, update, delete, RPC-style usage per library docs)
- 🔍 **PostgREST Semantics** — Filtering, sorting, pagination, embeds — see [PostgREST docs](https://docs.postgrest.org/en/v10/api.html)
- 🛡️ **Auto-Redirect Protection** — Optional `requiresAuth` login guard
- 📘 **TypeScript** — Types for the SDK surface; optional app-level DB typings via `postgrest-js` patterns
- 🌐 **Framework Agnostic** — React, Vue, Svelte, Next.js, etc.
- 🚀 **CDN Ready** — Use the built bundle in HTML when applicable
- 🖼️ **ImageHelper** — Runtime placeholder-to-image swapping (`<img>` and CSS background) driven by a build-time config


## Installation

```json
{
  "dependencies": {
    "@strikingly/sdk": "git+https://[deployTokenUserName]:[deployTokenPassword]@cd.i.strikingly.com/strikingly/vibe-coder-sdk.git"
  }
}
```

Published name on npm (if applicable): **`@strikingly/sdk`** — align the import path with how you install the package.

## Quick Start
```typescript
import { DataClient } from '@strikingly/sdk'

const projectUrl = import.meta.env.STRK_PROJECT_URL
const projectAnonKey = import.meta.env.STRK_PROJECT_ANON_KEY
const client = new DataClient(projectUrl, projectAnonKey)

const { data, error } = await client
  .from('contactFormResponse')
  .insert([{
    name: values.name,
    email: values.email,
    message: values.message,
  }])
  .select('id') // return minimal data
```

## API Reference

### Entity operations (`DataClient`)

`client.from('<table>')` maps to `PostgrestClient#from('<table>')` from **`@supabase/postgrest-js`**. Chain **`.select()` / `.insert()` / `.update()` / `.delete()`**, filters, and modifiers [as documented for that library](https://github.com/supabase/supabase-js/tree/master/packages/core/postgrest-js); **`await` yields `{ data, error, … }`** (or use **`.throwOnError()`** if you prefer exceptions).

Full API details (operators, embeds, etc.) follow **PostgREST** + **postgrest-js** — not duplicated here.

#### Basic selection
```typescript
const { data, error } = await client.from('users').select('*')

const { data: rows, error: err2 } = await client.from('users')
  .select('id,name,email')
```

#### Filtering (examples)
```typescript
const { data, error } = await client.from('products')
  .select('*')
  .eq('status', 'active')

const { data: d2 } = await client.from('users')
  .select('*')
  .neq('role', 'guest')
  .gte('age', 18)

const { data: d3 } = await client.from('users')
  .select('name,email')
  .ilike('name', '%john%')

const { data: d4 } = await client.from('users')
  .select('*')
  .in('status', ['active', 'pending'])

const { data: d5 } = await client.from('posts')
  .select('*')
  .is('published_at', null)
```

#### Relational / complex selects
```typescript
const { data, error } = await client.from('posts')
  .select('id,title,author(name,email),comments(content,user(name))')

const { data: users } = await client.from('users')
  .select('*,posts(*)')
  .or('status.eq.published,featured.eq.true', { referencedTable: 'posts' })
```

#### Sorting and pagination

Use **`order`**, **`limit`**, and **`range`** as in `postgrest-js` (pagination is typically **`range(from, to)`** — inclusive indices).

```typescript
const { data } = await client.from('posts')
  .select('*')
  .order('created_at', { ascending: false })

const { data: page } = await client.from('users')
  .select('*')
  .order('last_login', { ascending: false, nullsFirst: true })
  .range(0, 9) // first 10 rows

const { data } = await client.from('users')
  .select('*')
  .eq('email', 'user@example.com')
```

#### Insert / update / delete
```typescript
const { data } = await client.from('contacts')
  .insert({ full_name: 'John Chai', email: 'john@example.com' })
  .select()

const { data: updated } = await client.from('users')
  .update({ full_name: 'Bob Smith', status: 'active' })
  .eq('id', 'user_123')
  .select()

const { data: removed } = await client.from('users')
  .delete()
  .eq('id', 'user_123')
  .select()

const { data: bulkDeleted } = await client.from('users')
  .delete()
  .in('id', ['id-1', 'id-2'])
  .select()
```

---

### Authentication

Auth is accessed via `createClient(config)`:

```typescript
import { createClient } from '@strikingly/sdk'

const vibeCoder = createClient({
  appId: 'your-conversation-id',
  serverUrl: 'https://openhands.strikingly.com',
  requiresAuth: false,
})
```

#### Get Current User
```typescript
const user = await vibeCoder.auth.user()
```

#### Update Current User
```typescript
await vibeCoder.auth.updateUser({
  full_name: 'John Doe',
  profile: {
    bio: 'Software developer'
  }
})
```

#### Email & Password Login
```typescript
const { access_token, user } = await vibeCoder.auth.loginViaEmailPassword(
  'user@example.com',
  'password123',
  'turnstile-token'  // Optional: Cloudflare Turnstile token
)
```

#### Registration
```typescript
await vibeCoder.auth.register({
  email: 'newuser@example.com',
  password: 'securePassword123',
  full_name: 'New User'
})
```

#### OTP Verification
```typescript
// Verify OTP code
await vibeCoder.auth.verifyOtp({
  email: 'user@example.com',
  otpCode: '123456'
})

// Resend OTP
await vibeCoder.auth.resendOtp('user@example.com')
```

#### Password Reset
```typescript
// Request password reset
await vibeCoder.auth.resetPasswordRequest('user@example.com')

// Reset password with token
await vibeCoder.auth.resetPassword({
  resetToken: 'reset_token_from_email',
  newPassword: 'newSecurePassword123'
})

// Change password (authenticated user)
await vibeCoder.auth.changePassword({
  userId: 'user_123',
  currentPassword: 'oldPassword',
  newPassword: 'newPassword123'
})
```

#### Session Management
```typescript
// Check if authenticated
const isAuth = await vibeCoder.auth.isAuthenticated()

// Manually set token
vibeCoder.auth.setToken('eyJhbGciOiJIUzI1NiIs...', true)  // Second param: save to localStorage

// Redirect to login
vibeCoder.auth.redirectToLogin('/dashboard')  // Optional: next URL after login

// Logout
vibeCoder.auth.logout()  // Clear token and reload
vibeCoder.auth.logout('/home')  // Redirect to specific URL after logout
```

#### User Invitation
```typescript
await vibeCoder.auth.inviteUser('newuser@example.com', 'admin')
```

---

### Utils

Utility functions for cookie management:

```typescript
import { Utils } from '@strikingly/sdk'

// Read cookies
const projectUrl = Utils.getCookieItem('__strk_project_url')
const projectAnonKey = Utils.getCookieItem('__strk_project_anon_key')

// Set cookies
Utils.setCookieItem('my_key', 'my_value', {
  expires: 7,          // days (or pass a Date object)
  path: '/',
  domain: '.example.com',
  secure: true,
  sameSite: 'Lax',     // 'Strict' | 'Lax' | 'None'
})
```

| Method | Signature | Description |
|--------|-----------|-------------|
| `getCookieItem` | `(name: string) => string \| null` | Read a cookie value by name |
| `setCookieItem` | `(key: string, value: string, options?: CookieOptions) => string` | Set a cookie with optional expiry, path, domain, secure, and SameSite |

---

### API

Higher-level HTTP helpers for Strikingly platform endpoints. Currently provides **image / file uploads** backed by S3 **PresignedPost**.

```typescript
import { API } from '@strikingly/sdk'

// Upload an image (adds x-amz-meta-width / x-amz-meta-height)
const imageMeta = await API.uploadImage(siteId, domain, imageFile)
// { storageKey, storage: 's', mime_type, size, width, height }

// Upload a generic file (adds Content-Disposition: attachment)
const fileMeta = await API.uploadFile(siteId, domain, file)
// { storageKey, storage: 's', mime_type, size }
```

Both methods perform a two-step upload:

1. `GET <domain>/api/v1/sites/<siteId>/uploads/presign?storage=s3&type=images|files` to get a presigned POST payload.
2. `POST <presign.url>` with a multipart `FormData` body containing the presigned fields + the file.

On success, they resolve to **storage metadata** derived from the S3 POST response: the `<Key>` in the XML body (or `Key` on a JSON body) is normalized into `storageKey` (see below). On failure, they throw (see below).

#### Methods

| Method | Signature | `type` sent to presign | FormData specifics |
|--------|-----------|------------------------|--------------------|
| `API.uploadImage` | `(siteId: string, domain: string, file: File) => Promise<ImageUploadResult>` | `images` | Adds `x-amz-meta-width: 380`, `x-amz-meta-height: 380` |
| `API.uploadFile`  | `(siteId: string, domain: string, file: File) => Promise<BinaryUploadResult>` | `files`  | Adds `Content-Disposition: attachment` |

#### Parameters

| Param | Type | Description |
|-------|------|-------------|
| `siteId` | `string` | Target site ID — used in the presign URL path |
| `domain` | `string` | Origin to hit for the presign endpoint (trailing slashes are normalized). Must not be empty |
| `file`   | `File`   | Browser [`File`](https://developer.mozilla.org/docs/Web/API/File) object; `file.type` is sent as `Content-Type` |

#### Returns

- **`API.uploadImage`** → `Promise<ImageUploadResult>`:

  ```typescript
  {
    storageKey: string   // derived from S3 Key (see below)
    storage: 's'
    mime_type: string     // file.type
    size: number          // file.size
    width: number         // naturalWidth (browser: loads file via object URL)
    height: number        // naturalHeight
  }
  ```

- **`API.uploadFile`** → `Promise<BinaryUploadResult>`:

  ```typescript
  {
    storageKey: string
    storage: 's'
    mime_type: string
    size: number
  }
  ```

**`storageKey` from S3 `Key`:** if the full key contains a `.`, take the substring before the last `.`, split by `/`, take the last two path segments, and join with `/`; otherwise `storageKey` is the full key (trimmed). This matches the legacy jQuery behavior.

#### Exported types

```typescript
import type {
  UploadFileType,
  PresignData,
  PresignFields,
  ImageUploadResult,
  BinaryUploadResult,
} from '@strikingly/sdk'

// 'images' | 'files'
type UploadFileType

interface PresignFields { [key: string]: string }
interface PresignData   { fields: PresignFields; url: string }

interface ImageUploadResult {
  storageKey: string
  storage: 's'
  mime_type: string
  size: number
  width: number
  height: number
}

interface BinaryUploadResult {
  storageKey: string
  storage: 's'
  mime_type: string
  size: number
}
```

#### Errors

| When | Error message |
|------|---------------|
| `domain` is empty | `domain is required` |
| Presign response missing `fields` / `url` | `Invalid presign response: missing fields or url` |
| S3 returns non-201 (XML) | S3 `<Message>` text (falls back to raw body) |
| S3 returns non-201 (JSON) | `response.data.Message` (falls back to `Upload failed`) |
| S3 returned 201 but no usable `Key` | `S3 response missing Key` |
| Image upload: cannot read dimensions (e.g. non-browser) | `Image dimensions require a browser environment` / `Failed to read image dimensions` |

```typescript
try {
  const meta = await API.uploadImage(siteId, domain, file)
  console.log('Uploaded:', meta.storageKey, meta)
} catch (err) {
  console.error('Upload failed:', (err as Error).message)
}
```

> **Note:** `File`, `FormData`, `DOMParser`, and `Image` (for width/height on image uploads) are browser APIs — these helpers are intended for client-side (browser) usage. They will not work in plain Node environments without polyfills.

---

### ImageHelper

Runtime image loader that mirrors the Strikingly SDK's `ImageHelper.loadImages()` contract. It scans a container DOM tree for placeholder slots marked with `data-strk-img-id` / `data-strk-bg-id`, fills them with real images from a config object (typically `strk-img-config.json` produced by the Vite plugin at build/dev time), and observes later inserted slots or changed slot IDs such as modal and tab content.

```typescript
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'

useEffect(() => {
  return ImageHelper.loadImages(strkImgConfig, containerRef.current)
}, [])
```

#### How slots are matched

| Attribute | Behavior |
|-----------|----------|
| `data-strk-img-id="<slotId>"` | Element treated as `<img>`; sets `src` (and `alt` if missing) with a fade-in transition |
| `data-strk-bg-id="<slotId>"`  | Element treated as background; preloads a sharpened URL, then sets `background-image` / `cover` / `center` with a fade-in |

`<slotId>` is looked up in the `config` map. When `data-strk-img-id` and `data-strk-bg-id` both exist on one element, `data-strk-img-id` wins.

#### Photo selection

Each entry can carry a `picked` field (a photo `id`) chosen by the Vite plugin at **build / dev time** and persisted into `strk-img-config.json`. At runtime, `ImageHelper` simply looks up the picked photo inside `entry.results`:

1. If `entry.picked` is set and matches a `result.id`, that photo is used.
2. Otherwise — including entries written by older plugin versions that didn't track `picked` — it falls back to `results[0]`.

The runtime is intentionally dumb: it does **not** do cross-slot dedup. Pushing that decision to build time avoids the "edit one item's description and watch its neighbours shuffle" problem that a runtime-only dedup pass would cause — i.e. when one entry's chosen photo changes, every later slot's pick stays stable.

#### Background URL sharpening

For background slots, the picked URL is rewritten with Unsplash-style query params before preloading:

- `w` = `max(800, round(entry.width * dpr))` (`dpr = 2`)
- `q = 90`, `fit = max`, `fm = jpg`

Non-URL strings (or any value where `new URL(...)` throws) are returned as-is.

#### Signature

```typescript
ImageHelper.loadImages(config: ImageConfig, container: HTMLElement | null): () => void
ImageHelper.disconnect(container: HTMLElement | null): void
```

| Param | Type | Description |
|-------|------|-------------|
| `config` | `ImageConfig` | Map of `slotId → { query, ratio, width, results, picked? }` |
| `container` | `HTMLElement \| null` | Root element to scan and observe for `[data-strk-img-id]` / `[data-strk-bg-id]` |

`loadImages()` returns a cleanup function that disconnects the observer. `disconnect()` is available for imperative cleanup. If `config` or `container` is falsy, `loadImages()` returns a no-op cleanup function.

#### Exported types

```typescript
import type {
  ImageResult,
  ImageConfigEntry,
  ImageConfig,
} from '@strikingly/sdk'

interface ImageResult {
  id?: string | number
  url: string
  alt?: string
}

interface ImageConfigEntry {
  query: string
  ratio: string
  width: string | number
  results: ImageResult[]
  picked?: string | null   // photo id chosen by the Vite plugin at build/dev time
}

type ImageConfig = Record<string, ImageConfigEntry>
```

#### Example markup

```html
<div ref="containerRef">
  <img data-strk-img-id="hero-1" alt="" />
  <section data-strk-bg-id="cover-1"></section>
</div>
```

```jsonc
// strk-img-config.json
{
  "hero-1": {
    "query": "mountain sunrise",
    "ratio": "16:9",
    "width": "1600",
    "picked": "abc123",   // chosen by the Vite plugin; runtime just looks this up
    "results": [
      { "id": "abc123", "url": "https://images.unsplash.com/photo-abc", "alt": "Sunrise" },
      { "id": "abc456", "url": "https://images.unsplash.com/photo-abc2", "alt": "Sunrise alt" }
    ]
  },
  "cover-1": {
    "query": "ocean",
    "ratio": "21:9",
    "width": "1920",
    "picked": "def456",
    "results": [
      { "id": "def456", "url": "https://images.unsplash.com/photo-def" }
    ]
  }
}
```

> **Note:** `ImageHelper` manipulates DOM and uses the browser `Image` constructor — call it on the client only (e.g. in `useEffect` for React).

---

## Browser usage

This package’s build outputs **`dist/index.mjs`** (ESM) and **`dist/index.js`** (CommonJS) only — there is **no UMD** bundle (`index.umd.js` is not produced).

Use **`@strikingly/sdk`** from npm inside a bundler-backed app (Vite, Webpack, Next.js, etc.) so `DataClient` / `createClient` resolve like any other dependency. For a plain HTML page without a bundler, add a build step or load the SDK through your framework’s supported module path rather than a non-existent CDN UMD file.

---

## Configuration

### DataClient

| Parameter     | Type     | Required | Description |
|---------------|----------|----------|-------------|
| `projectUrl`  | `string` | ✅ | PostgREST endpoint URL (from `STRK_PROJECT_URL`) |
| `anonKey`     | `string` | ✅ | Anonymous API key (from `STRK_PROJECT_ANON_KEY`) |

### createClient Options (Auth)

| Option             | Type      | Required | Default | Description |
|--------------------|-----------|----------|---------|-------------|
| `appId`            | `string`  | ✅ | - | Project or conversation ID |
| `serverUrl`        | `string`  | ❌ | `https://openhands.strikingly.com` | Custom instance URL |
| `token`            | `string`  | ❌ | - | Pre-set JWT token |
| `requiresAuth`     | `boolean` | ❌ | `false` | Auto-redirect when unauthenticated |
| `appBaseUrl`       | `string`  | ❌ | Auto-detected | OAuth redirect base URL |
| `headers`          | `object`  | ❌ | `{}` | Custom headers for all requests |
| `options.onError`  | `function`| ❌ | - | Called for **Axios** errors (e.g. `auth` routes) |

---

## Query Operators Reference

### Comparison Operators

| Method | Description | Example |
|--------|-------------|---------|
| `eq(col, val)` | Equal to | `eq('status', 'active')` |
| `neq(col, val)` | Not equal to | `neq('role', 'guest')` |
| `gt(col, val)` | Greater than | `gt('age', 18)` |
| `gte(col, val)` | Greater than or equal | `gte('price', 100)` |
| `lt(col, val)` | Less than | `lt('stock', 10)` |
| `lte(col, val)` | Less than or equal | `lte('discount', 50)` |

### Pattern Matching

| Method | Description | Example |
|--------|-------------|---------|
| `like(col, pattern)` | Case-sensitive pattern | `like('name', 'John%')` |
| `ilike(col, pattern)` | Case-insensitive pattern | `ilike('email', '%@gmail.com')` |
| `textSearch(col, query, opts?)` | Full-text search (`plain` / `phrase` / `websearch` via `opts.type`) | `textSearch('content', 'javascript', { type: 'websearch' })` |

### List & Null Operators

| Method | Description | Example |
|--------|-------------|---------|
| `in(col, values)` | Value in list | `in('status', ['active', 'pending'])` |
| `is(col, value)` | Check null/boolean (`value` is `null` or boolean) | `is('deleted_at', null)` |
| `not(col, op, val)` | Negation | `not('category', 'eq', 'archived')` |

### Logical Operators

| Method | Description | Example |
|--------|-------------|---------|
| `or(filters, opts?)` | Raw PostgREST OR filter string; optional `referencedTable` / `foreignTable` for an embedded resource | `or('age.gte.18,status.eq.active')` — on embed: `or('status.eq.published', { referencedTable: 'posts' })` |

There is no separate `.and()` chain method: combine filters by chaining `.eq()` / `.gte()` / …, or use nested `and(...)` inside the string passed to `or()` (e.g. `or('id.gt.3,and(id.eq.1,name.eq.Luke)')`). See [postgrest-js](https://github.com/supabase/supabase-js/tree/master/packages/core/postgrest-js).

### Ordering & Pagination

| Method | Description | Example |
|--------|-------------|---------|
| `order(col, opts)` | Sort results | `order('created_at', { ascending: false, nullsFirst: true })` |
| `limit(count)` | Limit results | `limit(10)` |
| `range(from, to)` | Pagination (inclusive) | `range(0, 9)` — sets offset/limit in query |

---

## Error handling

**Entities (postgrest-js)** — prefer checking `error` or throwing on the builder:

```typescript
const { data, error } = await client.from('posts')
  .insert({ title: '' })
  .select()

if (error) {
  console.error(error.message, error.code, error.details)
}

// Or:
try {
  await client.from('posts').insert({ title: '' }).select().throwOnError()
} catch (e) {
  // PostgrestError when using throwOnError()
}
```

**Auth / Axios routes** — failures are often wrapped as **`VibeCoderError`** (and `options.onError` may run):

```typescript
import { VibeCoderError } from '@strikingly/sdk'

try {
  await vibeCoder.auth.user()
} catch (error) {
  if (error instanceof VibeCoderError) {
    console.error(error.message, error.statusCode, error.response)
  }
}
```

## Development

### Setup
```bash
git clone https://cd.i.strikingly.com/strikingly/vibe-coder-sdk.git
cd vibe-coder-sdk
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

## License

ISC © 2026 [Strikingly, Inc.](https://www.strikingly.com)

<div align="center">
  Made with ❤️ by the Strikingly Team
</div>
