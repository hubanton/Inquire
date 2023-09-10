import { Component } from '@angular/core';
import { Card, Tag } from '../../../shared/interfaces';
import { MatChipSelectionChange } from '@angular/material/chips';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  cards: Array<Card> = [];
  filteredCards: BehaviorSubject<Card[]> = new BehaviorSubject<Array<Card>>([]);
  tags: Array<Tag> = [];
  cardsToShow = 5; // Number of cards to display initially
  cardsIncrement = 5; // Number of additional cards to load on button click
  selectedTags: BehaviorSubject<Tag[]> = new BehaviorSubject<Array<Tag>>([]);

  constructor() {
    for (let i = 1; i <= 20; i++) {
      this.cards.push({
        id: i,
        title: `Card ${i}`,
        summary: `This is the summary of Card ${i}`,
        tags: [
          `Tag ${Math.round(Math.random() * 10)}`,
          `Tag ${Math.round(Math.random() * 10)}`,
        ],
      });
      this.filteredCards.next([...this.cards]);
    }

    for (let j = 1; j <= 10; j++) {
      this.tags.push(`Tag ${j}`);
    }
  }

  selectionChanged(event: MatChipSelectionChange, keyword: string): void {
    if (event.selected) {
      this.selectedTags.next([...this.selectedTags.getValue(), keyword]);
      this.filterCards();

      return;
    }
    this.removeKeyword(keyword);
  }

  removeKeyword(keyword: string) {
    const value = this.selectedTags.getValue();
    const index = value.indexOf(keyword);
    if (index >= 0) {
      value.splice(index, 1);
      this.selectedTags.next([...value]);
      this.filterCards();
    }
  }

  loadMoreCards() {
    this.cardsToShow += this.cardsIncrement;
  }

  filterCards() {
    const selectedTags = this.selectedTags.getValue();

    if (selectedTags.length === 0) {
      this.filteredCards.next([...this.cards]);

      return;
    }

    const filtered = this.cards.filter((card) => {
      return selectedTags.every((tag) => card.tags.includes(tag));
    });
    this.filteredCards.next([...filtered]);
  }
}
