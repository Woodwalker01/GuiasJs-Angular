import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lista } from "../../../models/lista";

//  Service 
import { ProductService } from '../../../services/product.service';
// Class
import { Product } from '../../../models/product';
// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  Listas: Lista[]=[
    {idprod: 1,descprod: 'Platano',precio: 5},
    {idprod: 2,descprod: 'Melon',precio: 3},
    {idprod: 3,descprod: 'Aguacate',precio: 1},
    {idprod: 4,descprod: 'Tomate',precio: 2},
    {idprod: 5,descprod: 'Lechuga',precio: 4}
  ];
  constructor(
    public productService: ProductService,
    public toastr: ToastrService
  ) { }

// Cuando se levanta la aplicacion, llama al metodo del servicio firebase para traer los productos
  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  onSubmit(productForm: NgForm) {
    if (productForm.value.$key == null)
      this.productService.insertProduct(productForm.value);
    else
      this.productService.updateProduct(productForm.value);

    this.resetForm(productForm);
    this.toastr.success('Sucessful Operation', 'Product Registered');
  }

  // Para limpiar el formulario
  resetForm(productForm?: NgForm) {
    if (productForm != null)
      productForm.reset();
    this.productService.selectedProduct = new Product();
  }

}