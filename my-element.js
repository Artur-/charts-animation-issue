import '@vaadin/charts';
import { html, LitElement } from 'lit';

export class TheView extends LitElement {

  static get properties() {
    return {
      'viewEventsSeries': {

      },'responseTimesSeries':{}
    }
  }
  constructor() {
    super();
    this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  
  }
  render() {
    return html`
                  ${this.viewEventsSeries &&
      html`
                <vaadin-chart
                  .additionalOptions=${{
          xAxis: { crosshair: true },
        }}
                  .categories=${this.monthNames}
                  type="area"
                >
                  ${this.viewEventsSeries.map(
          (viewEventSeries) =>
            html`<vaadin-chart-series
                        .title=${viewEventSeries.name}
                        .values=${viewEventSeries.data}
                      ></vaadin-chart-series>`
        )}
                </vaadin-chart>
              `}

${this.responseTimesSeries &&
      html`
                <vaadin-chart type="pie">
                  <vaadin-chart-series title="Response times" .values=${this.responseTimesSeries}></vaadin-chart-series>
                </vaadin-chart>
              `}

    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    const data1 = [
      {
        "name": "Berlin",
        "data": [
          189,
          191,
          191,
          196,
          201,
          203,
          209,
          212,
          229,
          242,
          244,
          247
        ]
      },
      {
        "name": "London",
        "data": [
          138,
          146,
          148,
          148,
          152,
          153,
          163,
          173,
          178,
          179,
          185,
          187
        ]
      },
      {
        "name": "New York",
        "data": [
          65,
          65,
          66,
          71,
          93,
          102,
          108,
          117,
          127,
          129,
          135,
          136
        ]
      },
      {
        "name": "Tokyo",
        "data": [
          0,
          11,
          17,
          23,
          30,
          42,
          48,
          49,
          52,
          54,
          58,
          62
        ]
      }
    ];
    const data2 = [
      {
        "name": "System 1",
        "y": 12.5
      },
      {
        "name": "System 2",
        "y": 12.5
      },
      {
        "name": "System 3",
        "y": 12.5
      },
      {
        "name": "System 4",
        "y": 12.5
      },
      {
        "name": "System 5",
        "y": 12.5
      },
      {
        "name": "System 6",
        "y": 12.5
      }
    ];

    const delay = new URLSearchParams(window.location.search).get("delay") || 0;
    setTimeout(() =>
      this.viewEventsSeries = data1, 0);
    setTimeout(() =>
      this.responseTimesSeries = data2, delay);
  }
}

customElements.define("the-view", TheView);
