import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
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
    });
  }
  search(term: string): void {
    if (term) {
      this.router.navigateByUrl('/search/' + term)
    } else if (term.trim() === '') {
      
      this.router.navigateByUrl('/');

    }
  }
}

