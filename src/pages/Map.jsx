import { useEffect, useRef, useState } from "react";
import { Map as OlMap, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import 'ol/ol.css';

const Map = () => {
    
    const [map, setMap] = useState(null);
    const mapElement = useRef(null);
    const mapRef = useRef(null);
    const openStreetLayer = new TileLayer({
        source: new XYZ({
            url: `http://maps.openweathermap.org/maps/2.0/weather/PAC0/{z}/{x}/{y}?appid=${import.meta.env.VITE_OPEN_WHEATHER_API_KEY}`,
        })
    })
    useEffect(() => {
        
        const osmLayer = new TileLayer({
            preload: Infinity,
            source: new OSM(),
        });
        const initialMap = new OlMap({
            target: mapElement.current,
            layers: [osmLayer],
            view: new View({
                center: [0, 0],
                zoom: 0,
              }),
        });
        setMap(initialMap);
        mapRef.current = map;
    },[])


    return (
        <div>
            <h1>Map</h1>
            <button onClick={() => {
                if(!mapRef.current) return;
                mapRef.current.getLayers().setAt(0, openStreetLayer);
            }}>
                Change Map to Open Street Map
            </button>
            <div style={{height:'100vh',width:'100%'}} ref={mapElement} className="map-container"></div>
        </div>
    )
 };


export default Map;