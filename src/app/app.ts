import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router'; Removendo esse RouterOutlet pois não precisarei agora
import { Produto } from './features/produtos/produto/produto';
import { ListProdutos } from './features/produtos/list-produtos/list-produtos';
@Component({
  selector: 'app-root',
  imports: [ListProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
