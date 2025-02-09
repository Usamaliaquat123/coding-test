import { Property } from '../types/property';
import mockData from './mock.json';

export const properties: Property[] = mockData.map((property, index) => ({
  ...property,
  id: index.toString(),
  createdAt: new Date(Date.now() - Math.random() * 1000000000), 
}));