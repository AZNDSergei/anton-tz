import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs/operators';
import { UsersService } from './services/users.service';
import { Params, TestUser } from './models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users$: Observable<TestUser[]>;
  filters: FormGroup;
  limits: number[] = [5, 10, 15];

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initFilters();
    this.subscribeToQueryParams();
    this.initUsersStream();
  }

  initFilters(): void {
    this.filters = this.formBuilder.group({
      searchText: [''],
      limit: [5]
    });
  }

  subscribeToQueryParams(): void {
    this.route.queryParams.subscribe(({ q, limit }) => {
      this.filters.patchValue({
        searchText: q || '',
        limit: +limit || 5
      });
    });
  }

  initUsersStream(): void {
    this.users$ = this.filters.valueChanges.pipe(
      startWith(this.filters.value),
      debounceTime(500),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      switchMap((filters: Params) => this.getUsers(filters)),
      tap(() => {
        this.updateUrlWithFilters(this.filters.value);
      })
    );
  }

  getUsers(filters: Params): Observable<TestUser[]> {
    return this.userService.getUsers(filters).pipe(
      map((users) =>
        users.map((user) => ({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }))
      )
    );
  }

  updateUrlWithFilters(filters: Params): void {
    const queryParams = {
      q: filters.searchText || '',
      limit: filters.limit || null
    };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams
    });
  }
}
