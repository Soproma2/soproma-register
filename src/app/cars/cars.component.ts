import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  description?: string;
}

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  cars: Car[] = [
    {
      id: 1,
      brand: 'BMW',
      model: 'M5',
      year: 2020,
      price: 80000,
      description: 'სპორტული სედანი'
    },
    {
      id: 2,
      brand: 'Mercedes',
      model: 'S-Class',
      year: 2021,
      price: 95000,
      description: 'პრემიუმ კლასის სედანი'
    },
    {
      id: 3,
      brand: 'Audi',
      model: 'RS7',
      year: 2022,
      price: 120000,
      description: 'მაღალი მწარმოებლურობის სპორტბეკი'
    },
    {
      id: 4,
      brand: 'Porsche',
      model: 'Cayenne',
      year: 2021,
      price: 110000,
      description: 'სპორტული კროსოვერი'
    },
    {
      id: 5,
      brand: 'Tesla',
      model: 'Model S',
      year: 2023,
      price: 105000,
      description: 'ელექტრო სედანი'
    },
    {
      id: 6,
      brand: 'Lexus',
      model: 'LC 500',
      year: 2022,
      price: 93000,
      description: 'ლუქს კუპე'
    },
    {
      id: 7,
      brand: 'Range Rover',
      model: 'Sport',
      year: 2023,
      price: 125000,
      description: 'პრემიუმ SUV'
    },
    {
      id: 8,
      brand: 'Maserati',
      model: 'Ghibli',
      year: 2021,
      price: 88000,
      description: 'იტალიური სპორტული სედანი'
    },
    {
      id: 9,
      brand: 'Bentley',
      model: 'Continental GT',
      year: 2022,
      price: 220000,
      description: 'ულტრა-ლუქს კუპე'
    },
    {
      id: 10,
      brand: 'Mercedes',
      model: 'G63 AMG',
      year: 2023,
      price: 185000,
      description: 'მაღალი მწარმოებლურობის SUV'
    },
    {
      id: 11,
      brand: 'Rolls-Royce',
      model: 'Ghost',
      year: 2023,
      price: 350000,
      description: 'ულტრა-ლუქს სედანი'
    },
    {
      id: 12,
      brand: 'Lamborghini',
      model: 'Urus',
      year: 2023,
      price: 250000,
      description: 'სუპერ-სპორტული SUV'
    }
  ];

  ngOnInit(): void {}
}
