
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

Agent 专用说明见：`docs/ENTITIES_AGENT_GUIDE.md`。

`client.from('<table>')` maps to `PostgrestClient#from('<table>')` from **`@supabase/postgrest-js`**. Chain **`.select()` / `.insert()` / `.update()` / `.delete()`**, filters, and modifiers [as documented for that library](https://github.com/supabase/supabase-js/tree/master/packages/core/postgrest-js); **`await` yields `{ data, error, … }`** (or use **`.throwOnError()`** if you prefer exceptions).

Full API details (operators, embeds, `single()`, `maybeSingle()`, etc.) follow **PostgREST** + **postgrest-js** — not duplicated here.

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
  .or('posts', 'status.eq.published,featured.eq.true')
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

const { data: one } = await client.from('users')
  .select('*')
  .eq('email', 'user@example.com')
  .single()
```

#### Insert / update / delete
```typescript
const { data, error } = await client.from('contacts')
  .insert({ full_name: 'John Chai', email: 'john@example.com' })
  .select()
  .single()

const { data: updated } = await client.from('users')
  .update({ full_name: 'Bob Smith', status: 'active' })
  .eq('id', 'user_123')
  .select()
  .single()

const { data: removed } = await client.from('users')
  .delete()
  .eq('id', 'user_123')
  .select()
  .maybeSingle()

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

## Browser Usage (CDN)

Use directly in HTML without build tools:
```html
<script src="https://unpkg.com/@strikingly_vibe_coder/sdk@latest/dist/index.umd.js"></script>
<script>
  const { DataClient } = VibeCoderSDK;

  const client = new DataClient(
    'your-project-url',
    'your-anon-key'
  );

  window.addEventListener('load', async () => {
    try {
      const { data: posts, error } = await client.from('posts')
        .select('*')
        .eq('published', true)
        .limit(10);

      if (error) console.error(error);
      else console.log('Posts:', posts);
    } catch (error) {
      console.error('Error:', error);
    }
  });
</script>
```

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
| `fts(col, query)` | Full-text search | `fts('content', 'javascript')` |

### List & Null Operators

| Method | Description | Example |
|--------|-------------|---------|
| `in(col, values)` | Value in list | `in('status', ['active', 'pending'])` |
| `is(col, value)` | Check null/boolean | `is('deleted_at', 'null')` |
| `not(col, op, val)` | Negation | `not('category', 'eq', 'archived')` |

### Logical Operators

| Method | Description | Example |
|--------|-------------|---------|
| `or(col, conditions)` | OR conditions | `or('', 'age.gte.18,status.eq.active')` |
| `and(col, conditions)` | AND conditions | `and('profile', 'verified.eq.true,age.gte.18')` |

### Ordering & Pagination

| Method | Description | Example |
|--------|-------------|---------|
| `order(col, opts)` | Sort results | `order('created_at', { ascending: false, nullsFirst: true })` |
| `limit(count)` | Limit results | `limit(10)` |
| `range(from, to)` | Pagination (inclusive) | `range(0, 9)` — sets offset/limit in query |
| `single()` | Return single result | `single()` |

---

## Error handling

**Entities (postgrest-js)** — prefer checking `error` or throwing on the builder:

```typescript
const { data, error } = await client.from('posts')
  .insert({ title: '' })
  .select()
  .single()

if (error) {
  console.error(error.message, error.code, error.details)
}

// Or:
try {
  await client.from('posts').insert({ title: '' }).select().single().throwOnError()
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

MIT © 2025 [Strikingly, Inc.](https://www.strikingly.com)

<div align="center">
  Made with ❤️ by the Strikingly Team
</div>
