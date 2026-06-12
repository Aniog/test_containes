import express from 'express'
import Database from 'better-sqlite3'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = 8081

app.use(cors())
app.use(express.json())

// ── Database setup ────────────────────────────────────────────────────────────
const db = new Database(path.join(__dirname, 'weather.db'))

db.exec(`
  CREATE TABLE IF NOT EXISTS weather_data (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    date        TEXT    NOT NULL UNIQUE,
    city        TEXT    NOT NULL,
    condition   TEXT    NOT NULL,
    temp_high   REAL    NOT NULL,
    temp_low    REAL    NOT NULL,
    humidity    REAL    NOT NULL,
    wind_speed  REAL    NOT NULL,
    precipitation REAL  NOT NULL
  )
`)

// ── Seed sample data ──────────────────────────────────────────────────────────
const SAMPLE_DATA = [
  { date: '2026-05-27', city: 'San Francisco', condition: 'Sunny',         temp_high: 78, temp_low: 58, humidity: 42, wind_speed: 8,  precipitation: 0    },
  { date: '2026-05-28', city: 'San Francisco', condition: 'Partly Cloudy', temp_high: 74, temp_low: 55, humidity: 51, wind_speed: 12, precipitation: 0    },
  { date: '2026-05-29', city: 'San Francisco', condition: 'Cloudy',        temp_high: 68, temp_low: 54, humidity: 63, wind_speed: 14, precipitation: 0.05 },
  { date: '2026-05-30', city: 'San Francisco', condition: 'Rainy',         temp_high: 62, temp_low: 50, humidity: 82, wind_speed: 18, precipitation: 0.72 },
  { date: '2026-05-31', city: 'San Francisco', condition: 'Rainy',         temp_high: 60, temp_low: 48, humidity: 88, wind_speed: 22, precipitation: 1.10 },
  { date: '2026-06-01', city: 'San Francisco', condition: 'Stormy',        temp_high: 57, temp_low: 46, humidity: 91, wind_speed: 31, precipitation: 1.85 },
  { date: '2026-06-02', city: 'San Francisco', condition: 'Cloudy',        temp_high: 63, temp_low: 49, humidity: 74, wind_speed: 16, precipitation: 0.20 },
  { date: '2026-06-03', city: 'San Francisco', condition: 'Partly Cloudy', temp_high: 69, temp_low: 52, humidity: 60, wind_speed: 10, precipitation: 0    },
  { date: '2026-06-04', city: 'San Francisco', condition: 'Sunny',         temp_high: 75, temp_low: 56, humidity: 48, wind_speed: 7,  precipitation: 0    },
  { date: '2026-06-05', city: 'San Francisco', condition: 'Sunny',         temp_high: 80, temp_low: 59, humidity: 40, wind_speed: 6,  precipitation: 0    },
  { date: '2026-06-06', city: 'San Francisco', condition: 'Partly Cloudy', temp_high: 77, temp_low: 57, humidity: 52, wind_speed: 9,  precipitation: 0    },
  { date: '2026-06-07', city: 'San Francisco', condition: 'Foggy',         temp_high: 65, temp_low: 53, humidity: 78, wind_speed: 5,  precipitation: 0.10 },
  { date: '2026-06-08', city: 'San Francisco', condition: 'Sunny',         temp_high: 72, temp_low: 55, humidity: 45, wind_speed: 8,  precipitation: 0    },
  { date: '2026-06-09', city: 'San Francisco', condition: 'Windy',         temp_high: 70, temp_low: 54, humidity: 50, wind_speed: 28, precipitation: 0    },
  { date: '2026-06-10', city: 'San Francisco', condition: 'Partly Cloudy', temp_high: 73, temp_low: 56, humidity: 55, wind_speed: 11, precipitation: 0    },
  { date: '2026-06-11', city: 'San Francisco', condition: 'Rainy',         temp_high: 64, temp_low: 51, humidity: 80, wind_speed: 15, precipitation: 0.45 },
  { date: '2026-06-12', city: 'San Francisco', condition: 'Cloudy',        temp_high: 66, temp_low: 52, humidity: 70, wind_speed: 13, precipitation: 0.15 },
]

const insertRow = db.prepare(`
  INSERT OR IGNORE INTO weather_data
    (date, city, condition, temp_high, temp_low, humidity, wind_speed, precipitation)
  VALUES
    (@date, @city, @condition, @temp_high, @temp_low, @humidity, @wind_speed, @precipitation)
`)

const seedAll = db.transaction(() => {
  for (const row of SAMPLE_DATA) insertRow.run(row)
})
seedAll()
console.log('Database seeded with sample weather data.')

// ── Routes ────────────────────────────────────────────────────────────────────

// GET /api/weather  — all rows, newest first
app.get('/api/weather', (req, res) => {
  const rows = db.prepare('SELECT * FROM weather_data ORDER BY date DESC').all()
  res.json(rows)
})

// GET /api/weather/:date  — single day
app.get('/api/weather/:date', (req, res) => {
  const row = db.prepare('SELECT * FROM weather_data WHERE date = ?').get(req.params.date)
  if (!row) return res.status(404).json({ error: 'Date not found' })
  res.json(row)
})

// GET /heartbeat
app.get('/heartbeat', (_req, res) => res.json({ status: 'ok' }))

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Weather API server running on http://0.0.0.0:${PORT}`)
})
