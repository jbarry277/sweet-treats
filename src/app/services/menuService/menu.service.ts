import { Injectable } from '@angular/core';
import { FoodType } from 'src/app/model/FoodTypeEnum';
import { MenuItem } from 'src/app/model/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  CreateMenu() : MenuItem[] {
    return [
      {
        name : 'Chocolate cupcake',
        description : 'this is a cupcake made of chocolate, 400 cal 120g',
        price : 4.60,
        imageUrl : '/assets/chocolate-cupcake.jpg',
        shouldDisplay : true,
        type : FoodType.CupCake
      },
      {
        name : 'Banana cupcake',
        description : 'this is a cupcake made with bananas, 340 cal 110g',
        price : 4.90,
        imageUrl : '/assets/banana-cupcake.jpg',
        shouldDisplay : true,
        type : FoodType.CupCake
      },
      {
        name : 'Strawberry cupcake',
        description : 'this is a cupcake made with strawberries, 280 cal 100g',
        price : 5.20,
        imageUrl : '/assets/strawberry-cupcake.jpg',
        shouldDisplay : true,
        type : FoodType.CupCake
      },
      {
        name : 'Chocolate cupcake',
        description : 'this is a cupcake made of chocolate, 400 cal 120g',
        price : 4.60,
        imageUrl : '/assets/chocolate-cupcake.jpg',
        shouldDisplay : true,
        type : FoodType.CupCake
      },
      {
        name : 'Chocolate cupcake',
        description : 'this is a cupcake made of chocolate, 400 cal 120g',
        price : 4.60,
        imageUrl : '/assets/chocolate-cupcake.jpg',
        shouldDisplay : true,
        type : FoodType.CupCake
      } ,
      {
        name : 'Chocolate cupcake',
        description : 'this is a cupcake made of chocolate, 400 cal 120g',
        price : 4.60,
        imageUrl : '/assets/chocolate-cupcake.jpg',
        shouldDisplay : true,
        type : FoodType.CupCake
      }
    ]
  }
}
