import { useState, useEffect } from 'react';

export interface LocationData {
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  ip: string;
}

export const useGeolocation = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocationByIP = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using ip-api.com free service (no API key required)
        const response = await fetch('http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,query');
        
        if (!response.ok) {
          throw new Error('Failed to fetch location data');
        }
        
        const data = await response.json();
        
        if (data.status === 'fail') {
          throw new Error(data.message || 'Failed to get location');
        }
        
        setLocation({
          country: data.country,
          countryCode: data.countryCode,
          region: data.region,
          regionName: data.regionName,
          city: data.city,
          zip: data.zip,
          lat: data.lat,
          lon: data.lon,
          timezone: data.timezone,
          ip: data.query
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to get location');
        console.error('Geolocation error:', err);
      } finally {
        setLoading(false);
      }
    };

    getLocationByIP();
  }, []);

  return { location, loading, error };
};