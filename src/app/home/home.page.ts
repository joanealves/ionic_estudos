import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // public pesquisa: String = '';
  public titulo: String = 'Meu primeiro App';
  public imagemRandomica: string = 'https://source.unsplash.com/random/200x200';

  public atualiza(): void {
    this.titulo = 'Texto alterado';
  }

  public acao(): void {
    this.titulo = 'Texto modificado';
  }

  public resultado: String = '';

  constructor(private navegacao: NavController) {}

  ngOnInit() {}

  abrirBotoes() {
    this.navegacao.navigateForward('botoes');
  }

  abrirLista() {
    this.navegacao.navigateForward('lista');
  }

  // recuperar() {
  //   this.resultado = this.pesquisa;
  // }
}
