import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { produtosService } from '../produtos.service'
import { inject } from '@angular/core'
@Component({
  selector: 'app-list-produtos',
  imports: [Produto, UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './list-produtos.html',
  styleUrl: './list-produtos.css',
})
export class ListProdutos {
  //! remover a lista de produtos, dados carregados via API Fakestoreapi
  produtos = signal <
  {nome: string ; preco: number } []> ([]);
//? criar estado de carregamento
// ** true: requisição em andamento, exibir dados no template
//! false: esconder indicador e exibir a lista de produtos 
  carregando = signal(true);
  //! cria método para a requisição dos produtos 
  carregarProdutos(){
    this.carregando.set(true);

    this.produtoService.buscarProduto().subscribe({
      next: (dados) => {
        const produtos = this.produtoService.transformarProdutos(dados);
        this.produtos.set(produtos);
        this.carregando.set(false);
      },
        error: (erro) => {
          console.error('Erro ao carregar os produtos: ', erro);
          this.carregando.set(false);
        
      },
    });
  }

  //? MEtodos existentes Ñ alterar

exibirProduto(nome:string){
  //console.log('Produto selecionado: ', nome);
  this.produtoSelecionado.set(nome);
}
 adicionarProduto(){
  this.produtos.update(listaAtual => [
    ...listaAtual,
     {nome:'Processador Core i5 14550FS', preco:2500},

  ]);

 }
totalProdutos = computed(() => this.produtos().length);

valorTotal = computed(() => { return this.produtos().reduce((total, item) => total + item.preco,0)});

substituirProdutos(){
  this.produtos.set([
    {nome:'Teclado', preco:40},
    {nome:'Mouse', preco:10},
    {nome:'Monitor', preco:100},
    {nome:'Desktop', preco:500},
    {nome:'Headset', preco:25}
  ]);
}
//! injetar httpCliente dentro de construct, reestruturar construct !!!
//? METODO HTTP (API) FOI MODIFICADO PARA (ProdutosService)
 constructor(){
  //!Carregar a API
  this.carregarProdutos();
  

  //! efects continuam iguais
  effect(() =>{
    console.log('Lista de produtos alterados: ', this.produtos());
  });
  effect(() =>{
     console.log('Valor total atualizado: ', this.valorTotal());
  });
  effect(() => {
    if (typeof document!== 'undefined') {
        document.title = `(${this.totalProdutos()}) Minha Loja`;
}
  });
 }
 produtoSelecionado = signal <string | null> (null);
 carrinho = signal <{ nome: string; preco: number}[]>([]);
 adicionarAoCarrinho(produto: {nome: string; preco: number}){
  this.carrinho.update(listaAtual => [
    ...listaAtual,produto
  ]);
  }

  private produtoService = inject(produtosService);

  quantidadeCarrinho = computed(() => this.carrinho().length);
  totalCarrinho = computed(() => { 
    return this.carrinho().reduce((total, item) =>
       total + item.preco,0);
  });
 }
