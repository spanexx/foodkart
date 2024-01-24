import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchTerm = "";
  private activatedRoute: ActivatedRoute;
  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.searchTerm) this.searchTerm = params.searchTerm;
      else {
        // If no search term in URL, navigate to home page
        this.router.navigateByUrl('/');
      }
    });
  }
  search(term: string): void {
    if (term.trim() === '') {
      // If search term is empty, navigate to home page
      this.router.navigateByUrl('/');
    } else {
      // If search term is not empty, navigate to search results
      this.router.navigateByUrl('/search/' + term);
    }
  }

  onSearchTermChange(): void {
    // Listen to changes in the input field
    if (this.searchTerm.trim() === '') {
      // If search term becomes empty, navigate to home page
      this.router.navigateByUrl('/');
    }
  }
}

