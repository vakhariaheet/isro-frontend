To find and use map layers for Leaflet, you can use various APIs and data sources that provide the necessary data for each type of map. Below are some APIs and links where you can find these map layers:

### 1. **Vegetation Health Map**
- **Data Source**: MODIS NDVI
  - **API/Link**: [NASA Earthdata](https://earthdata.nasa.gov/), [USGS Earth Explorer](https://earthexplorer.usgs.gov/)

### 2. **Temperature Profile Map**
- **Data Source**: NOAA Climate Data
  - **API/Link**: [NOAA Climate Data Online](https://www.ncdc.noaa.gov/cdo-web/)

### 3. **Precipitation Map**
- **Data Source**: NOAA Weather Data
  - **API/Link**: [NOAA Weather API](https://www.ncdc.noaa.gov/cdo-web/webservices/v2), [OpenWeatherMap](https://openweathermap.org/api)

### 4. **Soil Moisture Map**
- **Data Source**: NASA Soil Moisture Active Passive (SMAP)
  - **API/Link**: [NASA Earthdata](https://earthdata.nasa.gov/)

### 5. **Air Quality Map**
- **Data Source**: EPA AirNow, OpenAQ
  - **API/Link**: [AirNow API](https://www.airnowapi.org/), [OpenAQ API](https://docs.openaq.org/)

### 6. **Land Use/Land Cover Map**
- **Data Source**: USGS National Land Cover Database (NLCD)
  - **API/Link**: [USGS National Map](https://www.usgs.gov/core-science-systems/national-geospatial-program/national-map)

### 7. **Topographic Map**
- **Data Source**: USGS Topo Maps
  - **API/Link**: [USGS Topo Maps](https://viewer.nationalmap.gov/advanced-viewer/)

### 8. **Hydrological Map**
- **Data Source**: USGS National Hydrography Dataset (NHD)
  - **API/Link**: [USGS NHD](https://www.usgs.gov/core-science-systems/ngp/national-hydrography)

### 9. **Satellite Imagery Map**
- **Data Source**: Sentinel Hub, Landsat
  - **API/Link**: [Sentinel Hub](https://www.sentinel-hub.com/), [USGS Earth Explorer](https://earthexplorer.usgs.gov/)

### 10. **Drought Risk Map**
- **Data Source**: US Drought Monitor
  - **API/Link**: [US Drought Monitor](https://droughtmonitor.unl.edu/)

### 11. **Wildfire Risk Map**
- **Data Source**: NASA FIRMS
  - **API/Link**: [NASA FIRMS](https://firms.modaps.eosdis.nasa.gov/)

### 12. **Flood Risk Map**
- **Data Source**: FEMA Flood Map Service
  - **API/Link**: [FEMA Flood Map Service](https://msc.fema.gov/portal/home)

### 13. **Wind Speed and Direction Map**
- **Data Source**: NOAA Wind Data
  - **API/Link**: [NOAA Climate Data Online](https://www.ncdc.noaa.gov/cdo-web/)

### 14. **Population Density Map**
- **Data Source**: WorldPop, Census Data
  - **API/Link**: [WorldPop](https://www.worldpop.org/), [Census Bureau API](https://www.census.gov/data/developers/data-sets.html)

### 15. **Road and Infrastructure Map**
- **Data Source**: OpenStreetMap
  - **API/Link**: [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API)

### Using Leaflet to Render These Layers
You can integrate these data sources into your Leaflet maps using plugins and libraries that support these formats. For example, for raster data (like satellite imagery), you can use the `L.tileLayer` function, and for vector data (like shapefiles), you can use the `L.geoJSON` function.

Here's a basic example of adding a tile layer from OpenStreetMap:

```javascript
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);
```

You can customize the URL and options based on the data source and layer type you are using.