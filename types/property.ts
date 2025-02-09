
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
  agent: Agent,
  description: string;
  premium : boolean;
}

interface propertyAgent {
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
    description: string;
    premium : boolean;
}

interface AgentStats {
        propertiesSold: number,
        propertiesRented: number,
        totalDeals: number,
        experience: number,
        rating: number,
        reviews: number
}

export interface Agent {
    id:string;
    image: string;
    name: string;
    verified: boolean;
    superAgent: boolean;
    phone: string;
    email : string;
    languages: Array<string>,
    specialization: Array<string>
    stats: AgentStats,
    description: string;
    // recentProperties: Array<propertyAgent>
  }

// Type for the array of properties
export type Properties = Property[];
