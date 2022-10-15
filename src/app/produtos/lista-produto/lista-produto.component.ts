import { ProdutoService } from "./../produtos.service";
import { Component, OnInit } from "@angular/core";
import { Produto } from "../produto";

@Component({
  selector: "app-lista-produto",
  templateUrl: "./lista-produto.component.html",
})
export class ListaProdutoComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}
  public produtos: Produto[];
  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error: (error) => console.log(error),
    });
  }
}
