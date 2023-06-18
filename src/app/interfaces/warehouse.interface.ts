export interface Warehouse {
  uuid: string;
  name: string;
  addressLine: string[];
  town: string;
  region: string;
  city: string;
  zipCode: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
}
