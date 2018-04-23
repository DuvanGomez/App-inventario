import { Component } from '@angular/core';
import { Producto } from './models/producto';
@Component({
  selector: 'ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
productos: Producto[];
  constructor(){
  this.productos = [
    {'name': 'leche', description: ' yogur, mantequilla y otros derivados.', cantidad:100 , precio: '$2.500'},
    {'name': 'huevos', description: ' homelets  y otros derivados.', cantidad:50 , precio: '$500'},
    {'name': 'pan', description: ' harina de trigo derivados.', cantidad:500 , precio: '$200'}
  ];
}

  model:any = {};
  model2: any ={};
  msg:string = '';
  hideUpdate:boolean = true;
  value;

  addProducto(): void{
    this.productos.push(this.model);
    this.model="";
    this.msg = 'Se adherio correctamente el producto';
  }
  deleteProducto(i): void{
    var answer = confirm('esta seguro de eliminar este producto?');
    if(answer)
    {
      this.productos.splice(i, 1);
      this.msg = 'Se elimino correctamente el producto';
      this.hideUpdate = true;
    }
  }
  editProducto(i): void{
    this.hideUpdate = false;
    this.model2.name = this.productos[i].name;
    this.model2.description = this.productos[i].description;
    this.model2.precio = this.productos[i].precio;
    this.model2.cantidad = this.productos[i].cantidad;
    this.value = i;
  }
  updateProducto(): void{
    let i = this.value;
  }
  closeAlert(): void{
    this.msg='';
  }

  addCantidad(i): void{
    this.model2.cantidad = this.model2.cantidad + 1;
  }
  removeCantidad(i): void{
    this.model2.cantidad = this.model2.cantidad - 1;
  }

}
