import { Component } from '@angular/core';
import { Card } from '../../../shared/interfaces';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  cards: Array<Card> = [];
  cardsToShow = 5; // Number of cards to display initially
  cardsIncrement = 5; // Number of additional cards to load on button click

  constructor() {
    for (let i = 1; i <= 20; i++) {
      this.cards.push({
        id: i,
        title: `Card ${i}`,
        summary: `This is the summary of Card ${i}`,
        tags: [`Tag ${i * 2 - 1}`, `Tag ${i * 2}`],
      });
    }
  }

  loadMoreCards() {
    this.cardsToShow += this.cardsIncrement;
  }
}
