export class UriBuilder {
  constructor(baseUrl, path) {
    (this.baseUrl = baseUrl), (this.path = path);
  }
  setQueryString(queryString) {
    this.queryString = queryString;
    return this;
  }

  build() {
    const url = new URL(`${this.baseUrl}/${this.path}`);
    if (this.queryString) {
      url.search = this.queryString;
    }
    return url;
  }
}
