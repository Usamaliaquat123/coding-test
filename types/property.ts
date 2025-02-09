
//  property interface
export interface Property {
  id: string;
  property: string;
  developer: string;
  community: string;
  bedroom: number;
  washroom: number;
  price: number;
  type: string;
  address: string;
  image: string;
  createdAt: Date;
  agent : Agent,
  description: string;
  premium : boolean
}

interface Agent {
    image: string;
    name: string;
    verified: boolean;
    superAgent: boolean
  }

// Type for the array of properties
export type Properties = Property[];
