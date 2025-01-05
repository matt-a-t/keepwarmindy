type JSONCenter = {
  Name: string;
  Address: string;
  City: string;
  State: string;
  Zip: string;
  Phone: string;
  Hours: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
  lat: number,
  lng: number,
  Notes: string;
  url: string;
}

export type Center = {
  id: number;
  name: string;
  options: {
    position: {
      lat: number;
      lng: number;
    };
    title: string;
  };
  pinOptions: {
    glyph: string;
  };
  notes: string;
  address: string;
  zip: string;
  hours: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
  phone: string;
  url: string;
}
export function transformCenters(centers: JSONCenter[]): Center[] {
  return centers.map((center, index) => ({
    id: index,
    name: center.Name,
    options: {
      position: {
        lat: center.lat,
        lng: center.lng,
      },
      title: center.Name,
    },
    pinOptions: {
      glyph: (index + 1).toString(),
    },
    notes: center.Notes,
    address: center.Address,
    zip: center.Zip,
    hours: center.Hours,
    phone: center.Phone,
    url: center.url,
  }));
}
