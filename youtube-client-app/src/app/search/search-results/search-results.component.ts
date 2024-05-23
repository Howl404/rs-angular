import { Component, Input } from '@angular/core';
import SearchItem from '../search-item.model';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export default class SearchResultsComponent {
  @Input() private searchResults!: SearchItem[];
}
