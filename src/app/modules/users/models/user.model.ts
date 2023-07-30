// Затестил расширение JSON to TS для VScode. Очень удобная штука.

export interface UserData {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: EyeColor;
  hair: Hair;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
}

export type TestUser = Pick<User, 'firstName' | 'lastName' | 'email'>;

export interface Address {
  address: string;
  city?: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}

export enum EyeColor {
  Amber = 'Amber',
  Blue = 'Blue',
  Brown = 'Brown',
  Gray = 'Gray',
  Green = 'Green'
}

export enum Gender {
  Female = 'female',
  Male = 'male'
}

export interface Hair {
  color: Color;
  type: Type;
}

export enum Color {
  Auburn = 'Auburn',
  Black = 'Black',
  Blond = 'Blond',
  Brown = 'Brown',
  Chestnut = 'Chestnut'
}

export enum Type {
  Curly = 'Curly',
  Straight = 'Straight',
  Strands = 'Strands',
  VeryCurly = 'Very curly',
  Wavy = 'Wavy'
}

export interface Params {
  searchText: string;
  limit: number;
}
