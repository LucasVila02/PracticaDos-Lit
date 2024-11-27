import { LitElement, html, css, nothing } from 'lit';

export class AlertComponent extends LitElement {

    static get properties() {
        return {
            type: { type: String },
            message: {type: String}
        };
    }

    static styles = [
        css`
            :host {
                display: block;
                color: white;
            }

            .alert{
                background-color:red;
                color:white;
                padding: 4px;
                border-radius: 4px
            }

        `
    ];

    render() {
        return html`

           <div class= 'alert'>
                 ${this.message}
            </div>
            
        `;
    }
}
customElements.define('alert-component', AlertComponent);
