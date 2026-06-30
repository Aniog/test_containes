import { useState, useEffect, useCallback } from 'react';
import { fetchWeatherRecords } from '@/api/weather';

export const useWeatherData = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherRecords();
      setRecords(data);
    } catch (err) {
      console.error('Failed to fetch weather records:', err);
      setError(err.message || 'Failed to load weather data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Derived: most recent record = "today"
  const todayData = records.length > 0 ? records[records.length - 1] : null;

  // Derived: monthly stats computed from all records
  const monthlyStats = records.length > 0
    ? {
        avgHigh: Math.round(records.reduce((s, r) => s + r.tempHigh, 0) / records.length),
        avgLow: Math.round(records.reduce((s, r) => s + r.tempLow, 0) / records.length),
        avgHumidity: Math.round(records.reduce((s, r) => s + r.humidity, 0) / records.length),
        totalPrecipitation: records.reduce((s, r) => s + r.precipitation, 0).toFixed(1),
        rainyDays: records.filter((r) => r.precipitation > 0).length,
        sunnyDays: records.filter((r) => r.condition === 'Sunny').length,
      }
    : null;

  return { records, todayData, monthlyStats, loading, error, refetch: load };
};
