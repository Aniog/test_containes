import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { weatherRecords as localRecords } from "@/data/weatherData";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const TABLE = "Weather Records";

function getRows(response) {
  return response?.data?.list ?? [];
}

function getEntity(response) {
  return response?.data ?? null;
}

export async function fetchWeatherRecords() {
  try {
    const { data: response, error } = await client
      .from(TABLE)
      .select("*")
      .order("date", { ascending: true })
      .range(0, 99);

    if (error) throw error;
    const rows = getRows(response);
    if (rows.length === 0) throw new Error("No records in database");
    return rows.map((r) => ({ id: r.id, ...r.data }));
  } catch (err) {
    console.warn("[WeatherAPI] Falling back to local data:", err.message);
    return localRecords;
  }
}

export async function createWeatherRecord(record) {
  const { data: response, error } = await client
    .from(TABLE)
    .insert({ data: record })
    .select()
    .single();

  if (error) throw error;
  const entity = getEntity(response);
  return { id: entity.id, ...entity.data };
}

export async function seedWeatherRecords(records) {
  const results = [];
  for (const record of records) {
    const { city, state, country, date, condition, high, low, humidity,
      precipitation, wind_speed, wind_dir, uv_index, visibility, pressure } = record;
    const { data: response, error } = await client
      .from(TABLE)
      .insert({
        data: { city, state, country, date, condition, high, low, humidity,
          precipitation, wind_speed, wind_dir, uv_index, visibility, pressure },
      })
      .select()
      .single();
    if (!error && response?.data) {
      results.push({ id: response.data.id, ...response.data.data });
    }
  }
  return results;
}
