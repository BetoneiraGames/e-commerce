import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
@Component({
  selector: 'app-list-produtos',
  imports: [Produto, PrecoFormatadoPipe],
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
     {nome:'Polystation', preco:1000},
     {nome:'Playstation', preco:599}

  ]);

 }
totalProdutos = computed(() => this.produtos().length);

valorTotal = computed(() => { return this.produtos().reduce((total, item) => total + item.preco,0)});

substituirProdutos(){
  this.produtos.set([
    {nome:'Arroz Fazenda', preco:400},
  ]);
}
}
