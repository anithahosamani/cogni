import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product =[
    {
      id: 0,
      name: 'Aria',
      sex: 'girl'
    }, {
      id: 1,
      name: 'Logan',
      sex: 'boy'
    }, {
      id: 2,
      name: 'Quinn',
      sex: 'girl'
    }, {
      id: 3,
      name: 'Kai',
      sex: 'boy'
    }, {
      id: 4,
      name: 'Dashiell',
      sex: 'boy'
    }, {
      id: 5,
      name: 'John',
      sex: 'boy'
    }, {
      id: 6,
      name: 'Jaa',
      sex: 'girl'
    }
  ]

  a = [{ b:"always" }];
  

  name = ['abc', 'def', 'rds','john','seraphin','jgahha','mann']
  product_name = '';

  new_array = this.name;
  selected_array = [];

  constructor() {
    console.log(this.a[0].b);
  }
  
  search() {
    if (!this.product_name) {
      this.new_array = this.name;
      return;
    }
    console.log("ppppp::: ", this.product_name);
      this.new_array = this.name.filter(x => x.includes(this.product_name));
      //this.new_array = this.name.map(x => x.includes(this.product_name) ? x : );
    console.log("ARRAY::: ", this.new_array);
    
    
  }
 

  select(element,ind) {
    console.log("sssss", element);
    console.log("bnb", this.selected_array.includes(element));
    if (!this.selected_array.includes(element)) {
      this.selected_array.push(element);

      this.new_array.splice(ind, 1);
    }


   
    
  }

  remove(index) {
    console.log("nbnnc", index);
    console.log("before remove", this.selected_array);
    this.new_array.push(this.selected_array[index]);
    this.selected_array.splice(index,1);
    console.log("afrer remove", this.selected_array[index]);
  
    
  }

  ngOnInit() {
    
  }
  
 
}
