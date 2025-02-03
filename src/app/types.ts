// Property type - "rent" or "sale"
export type PropertyType = "rent" | "sale";

// Developer names as a union type for type safety
export type Developer = "Damac" | "Emaar" | "Nakheel" | "Dubai Properties" | "Meraas" | "DMCC";

// Community names as a union type
export type Community = 
  | "Damac Hills 2"
  | "Dubai Marina"
  | "Palm Jumeirah"
  | "Dubai Creek Harbour"
  | "Bluewaters Island"
  | "Downtown Dubai"
  | "Arabian Ranches"
  | "Jumeirah Lake Towers"
  | "Business Bay"
  | "Dubai Hills Estate";

// Main property interface
export interface DubaiProperty {
  property: string;
  developer: Developer;
  community: Community;
  bedroom: number;
  washroom: number;
  price: number;
  type: PropertyType;
  address: string;
  image: string;
}

// Type for the array of properties
export type DubaiProperties = DubaiProperty[];
