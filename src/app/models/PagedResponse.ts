export interface PagedResponse<T> {
  _embedded: Embedded<T>;
  links: {
    first: string,
        self: string,
        next?: string,
        prev?: string,
        last: string,
        profile: string,
        search: string
  };
  page: {
    size: number,
        totalElements: number,
        totalPages: number,
        _number: number
  };
}

  interface Embedded<T> {
    [key: string]: T[];
  }
