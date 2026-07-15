import { Component } from '@angular/core';
import { Produto } from '../produto/produto'
@Component({
  selector: 'app-list-produtos',
  imports: [Produto],
  templateUrl: './list-produtos.html',
  styleUrl: './list-produtos.css',
})
export class ListProdutos {
  produtos = [
    {nome: 'Teclado', preco:89.98},
    {nome: 'Mouse Gamer', preco:78.90},
    {nome: 'Monitor', preco:849.99},
    {nome: 'Mesa', preco:450.59},
    {nome: 'Headset', preco:99.59}
  ];
}
