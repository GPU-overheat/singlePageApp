import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("404");
  }

  async getHtml() {
    return `
	<h1>Error 404: Page not found</h1>
	`;
  }
}
