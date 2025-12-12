# Weather — Secure, Real-Time Weather Dashboard

A beautiful, climate-aware weather application with animated backgrounds, 5-day forecast, and professional glassmorphism UI — **with your API key safely hidden**.

- **API key protected** via backend proxy
- **Real-time data** from OpenWeatherMap
- **Dynamic animated background** (sun, moon, rain, snow, haze)
- **5-day + 24-hour forecast**
- **Hosted on GitHub Pages + Render**

---

## Live Demo

> **[Click here to view the live demo](https://vrana-prathap.github.io/Expense-tracker/)** 

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (vanilla)
- **Backend**: Node.js, Express, Axios
- **Hosting**: 
  - Frontend → GitHub Pages
  - Backend → Render
- **API**: OpenWeatherMap


---

## How to Deploy

### 1. **Set up Render Backend**
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Create **New Web Service**
3. Connect to your github repo:
4. Set:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variable**:
     ```
     Key: OPENWEATHER_API_KEY
     Value: your_openweathermap_api_key
     ```

### 2. **Enable GitHub Pages**
1. Go to your repo → **Settings → Pages**
2. Set **Source**: `Deploy from branch` → `main` → `/ (root)`
3. Save

---

## Features

- **Sun visible only during daylight**
- **Moon visible only at true night**
- **Realistic haze/mist animation**
- **Wind-driven rain & snow**
- **12-hour local time (AM/PM)**
- **Country flags & accurate timezone**
- **Dew point, heat index, indoor humidity**

---

## Security

- **No API key in frontend code**
- **CORS restricted** to your domain
- **All requests proxied** through Render

---

> Built with ❤️ for accuracy, beauty, and performance.
