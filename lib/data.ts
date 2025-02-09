import { Properties } from '../types/property';
import mockData from './mock.json';

export const properties: Properties = mockData.map((property, index) => ({
  ...property,
  id: index.toString(),
  createdAt: new Date(Date.now() - Math.random() * 1000000000), 
}));