import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
	<h1>Hola mundo</h1>
	<p>
	Lorem my ducking fuck ipsum
	</p>
	<p> 
		<a href="/posts" data-link>View recent posts</a>
	</p>
	`;
  }
}
