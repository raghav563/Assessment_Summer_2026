import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type SleepRecord = {
  date: string;
  sleep_duration_hours: number;
  hrv_ms?: number;
  spo2_percent?: number;
};

export default function SleepDashboard() {
  const [data, setData] = useState<SleepRecord[] | null>(null);

  useEffect(() => {
    fetch("/sleep_data.json")
      .then((res) => res.json())
      .then(setData)
      .catch(() => null);
  }, []);

  return (
    <div style={{ padding: "48px 40px", textAlign: "left", maxWidth: 720 }}>
      <h1 style={{ marginTop: 0 }}>Sleep Dashboard</h1>

      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: "28px 32px",
        }}
      >
        <h2>Your task</h2>
        <p style={{ marginBottom: 24 }}>
          Load your analyzed sleep JSON from <code>public/</code> and build at
          least 2 charts. Some ideas:
        </p>

        <p
          style={{
            marginTop: 24,
            paddingTop: 20,
            borderTop: "1px solid var(--border)",
            fontSize: 14,
          }}
        >
          Feel free to add helper functions, extra components, or new
          dependencies — just keep the data loading intact.
        </p>
      </div>

      {data && (
        <div
          style={{
            marginTop: 32,
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "24px 32px",
          }}
        >
          <p style={{ margin: "0 0 20px", fontWeight: 600, fontSize: 14 }}>
            Sample — Sleep Duration (hours)
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11 }}
                tickFormatter={(v) => v.slice(5)}
              />
              <YAxis
                tick={{ fontSize: 11 }}
                domain={["auto", "auto"]}
                unit="h"
              />
              <Tooltip
                formatter={(v) => [`${v}h`, "Sleep"]}
                labelFormatter={(l) => `Date: ${l}`}
              />
              <Line
                type="monotone"
                dataKey="sleep_duration_hours"
                stroke="#aa3bff"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
