import { useGeolocation } from '@/hooks/useGeolocation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Globe } from 'lucide-react';

interface LocationInfoProps {
  showDetailed?: boolean;
  className?: string;
}

const LocationInfo = ({ showDetailed = false, className = "" }: LocationInfoProps) => {
  const { location, loading, error } = useGeolocation();

  if (loading) {
    return (
      <Card className={`p-4 ${className}`}>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 animate-pulse" />
          <span className="text-sm text-muted-foreground">Detectando localização...</span>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={`p-4 ${className}`}>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-destructive" />
          <span className="text-sm text-destructive">Erro ao detectar localização</span>
        </div>
      </Card>
    );
  }

  if (!location) return null;

  return (
    <Card className={`p-4 ${className}`}>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-medium">
            {location.city}, {location.regionName}
          </span>
          <Badge variant="secondary" className="text-xs">
            {location.countryCode}
          </Badge>
        </div>

        {showDetailed && (
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3" />
              <span>País: {location.country}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              <span>Timezone: {location.timezone}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              <span>Coordenadas: {location.lat.toFixed(4)}, {location.lon.toFixed(4)}</span>
            </div>
            
            {location.zip && (
              <div className="text-xs">
                CEP: {location.zip}
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default LocationInfo;