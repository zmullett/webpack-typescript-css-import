import {css, customElement, html, LitElement, query, unsafeCSS} from "lit-element";
import * as L from "leaflet";
import leafletCss from "leaflet/dist/leaflet.css";

@customElement("my-element")
export class MyElement extends LitElement {
  @query("#container") container?: HTMLDivElement;

  static get styles() {
    return [
      unsafeCSS(leafletCss),
      css`
        #container {
          height: 500px;
          width: 500px;
        }
      `
    ]
  }

  firstUpdated() {
    L.map(this.container)
      .setView([51.505, -0.09], 13)
      .addLayer(new L.TileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { attribution: "© OpenStreetMap contributors" }
      ));
  }

  render() {
    return html`
      <div id="container"></div>
    `;
  }
}