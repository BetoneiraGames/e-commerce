import { Routes } from '@angular/router';
import { ListProdutos } from './features/produtos/list-produtos/list-produtos';
import { Carrinho } from './features/carrinho/carrinho/carrinho';
export const routes: Routes = [
  { 
    path: '', component: ListProdutos 
},
  { 
    path: 'carrinho', component: Carrinho 
}
];
