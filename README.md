# Wind Turbine Fault Dashboard

## Project Setup

### Install Dependencies And Run It
```bash
npm install
npm run dev
```

🧩 Project Summary: Wind Turbine Fault Dashboard
🎯 Goal

We are building a frontend dashboard to visualize and analyze wind turbine fault and alarm data. The UI will display system faults, durations, and categories through cards, charts, and summary metrics, using data fetched from two JSON files (or APIs).

📁 Data Sources

We have two JSON files (or endpoints):

faults.json

{
  "time_stamp": "2017-06-12 14:03:27+00",
  "resolution_time_stamp": "2017-06-12 14:04:52+00",
  "code": 1222,
  "duration_seconds": 1.416666667,
  "device_id": 135,
  "asset_id": 9,
  "category": "Azimuth",
  "description": "Yaw runaway",
  "fault_type": "Alarm"
}


device.json

{
  "id": 145,
  "device_name": "WT-11",
  "asset": "Colorado",
  "asset_id": 9
}


The idea is to combine these two by matching asset_id (and possibly device_id) to show related data in the UI.

🧠 Architecture Plan

Frontend Framework: React + Redux (for state management)

Styling: Tailwind CSS (with a clean, white background UI)

Charting Library: Recharts (for visualizing trends)

Optional UI Library: ShadCN or Material UI (for polished cards & dropdowns)

🏗️ Redux Store Structure
{
  windfarm: {
    id: null,
    name: "",
    location: ""
  },
  faults: [],
  devices: [],
  status: "idle", // "loading", "succeeded", "failed"
  error: null
}


API (or local JSON) data is fetched in Redux slices using createAsyncThunk.

Components subscribe via useSelector and dispatch fetchData() from useEffect.

💡 Core UI Components

Summary Cards

Total Faults

Average Duration

Most Frequent Category

Total Devices / Assets

Bar / Pie / Line Chart

Faults by Category

Faults per Month or per Device

Fault Table (Optional)

Paginated table with fault description, category, and duration.

Filters

Filter by Date Range, Category, or Device.

🎨 Color Palette (White Background)

Use minimal, modern colors:

Purpose	Color
Primary Accent	#2563eb (blue-600)
Secondary	#10b981 (green-500)
Warning	#f59e0b (amber-500)
Danger	#ef4444 (red-500)
Text	#1f2937 (gray-800)
Subtext	#6b7280 (gray-500)
Border	#e5e7eb (gray-200)
Background	#ffffff
⚙️ Features Summary

✅ Load JSON data (later from APIs)
✅ Merge fault + device data
✅ Store globally via Redux
✅ Show key insights in cards
✅ Display category trends via charts
✅ Keep UI clean, minimal, and responsive


src/
 └── redux/
      ├── slices/
      │    ├── dataSlice.js
      │    ├── pageLevelSlice.js
      │    ├── graphSlice.js
      │    └── tableSlice.js
      ├── selectors/
      │    ├── faultsSelectors.js
      │    ├── graphSelectors.js
      │    ├── tableSelectors.js
      │    └── tilesSelectors.js
      └── store.js   👈 here’s where we combine everything
