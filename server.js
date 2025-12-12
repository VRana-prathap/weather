const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({
  origin: ['https://vrana-prathap.github.io']
}));

const API_KEY = process.env.OPENWEATHER_API_KEY;

app.get('/api/weather', async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json({ error: 'City parameter is required' });
    }

    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`;
    const geoRes = await axios.get(geoUrl);
    const locations = geoRes.data;
    if (!locations || locations.length === 0) {
      return res.status(404).json({ error: 'City not found' });
    }
    const { lat, lon, name, country } = locations[0];

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const weatherRes = await axios.get(weatherUrl);
    const current = weatherRes.data;

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const forecastRes = await axios.get(forecastUrl);
    const forecast = forecastRes.data;

    res.json({
      current,
      forecast,
      location: { name, country, lat, lon }
    });
  } catch (err) {
    console.error('Server error:', err.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Weather proxy running on port ${PORT}`);

});
