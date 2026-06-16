# Sleep Dashboard (Interview Assessment)

## Overview

This assessment has two parts:

1. **Python** — write a script that processes sleep data and produces a JSON file
2. **React** — load that JSON and build charts to visualize the data

---

## Part 1: Python

A sandbox dataset is provided at `data/sandbox_sleep.json`. Write a Python script that reads it, processes it, and writes a JSON file to the `public/` folder.

The dashboard expects the file at:

```
public/sleep_data.json
```

### JSON shape

You decide the structure! Design it to make your charts easy to build. A simple starting point:

```json
[
  {
    "date": "2024-01-01",
    "sleep_duration_hours": 7.5,
    "hrv_ms": 62,
    "spo2_percent": 97
  },
  {
    "date": "2024-01-02",
    "sleep_duration_hours": 6.1,
    "hrv_ms": 48,
    "spo2_percent": 95
  }
]
```


### Example script structure

```python
import json

with open("data/sandbox_sleep.json") as f:
    raw = json.load(f)

# Process raw into records
records = []

with open("public/sleep_data.json", "w") as f:
    json.dump(records, f, indent=2)
```

Run it from the project root:

```bash
python3 your_script.py
```

---

## Part 2: React — build the dashboard

Once your JSON is in `public/`, update `src/components/SleepDashboard.tsx` to fetch it and render at least 2 charts. The fetch path should match your filename:

```ts
fetch("/sleep_data.json")
```

See the instructions card in the dashboard for chart ideas.

---

### Install and start

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.


## Submission

1. Fork this repository to your own GitHub account
2. Complete the assessment on your fork
3. Share the link to your fork when you're done
