import { Component, signal } from '@angular/core';
import { Produto } from '../produto/produto';
@Component({
  selector: 'app-list-produtos',
  imports: [Produto],
  templateUrl: './list-produtos.html',
  styleUrl: './list-produtos.css',
})
export class ListProdutos {
  produtos = signal([
    {nome: 'Teclado', preco:89.98},
    {nome: 'Mouse Gamer', preco:78.90},
    {nome: 'Monitor', preco:849.99},
    {nome: 'Mesa', preco:450.59},
    {nome: 'Headset', preco:99.59}
  ]);
exibirProduto(nome:string){
  console.log('Produto selecionado: ', nome);
}
 adicionarProduto(){
  this.produtos.update(listaAtual => [
    ...listaAtual,
     {nome:'Polystation', preco:1099.99},
     {nome:'Playstation', preco:599.90}

  ]);

 }

}
