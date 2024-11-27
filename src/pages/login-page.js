import { LitElement, html, css , nothing} from 'lit';
import '../components/login-component'
import '../components/alert-component'
import '../layout/public-layout'

export class LoginPage extends LitElement {
    constructor(){
        super();
        this.alertMessage = '';
        this.alertType = '';
    }

    static get properties() {
        return {
            alertType: { type: String },
            alertMessage: {type: String}
        };
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                text-align:center;
                width:100%;
            }
            
        `
    ];

    handleLoginSucess(){
        this.alertType = 'sucess'
        this.alertMessage= 'Inicio de sesin exitoso!';
    }

    handleErrorSucess(){
        this.alertType = 'error';
        this.alertMessage = 'Usuario / Contraseña Incorrectos'
    }


    connectedCallback(){
        super.connectedCallback();
        this.addEventListener('login-sucess', this.handleLoginSucess.bind(this));
        this.addEventListener('login-error', this.handleErrorSucess.bind(this));
    }

    disconnectedCallback(){
        this.removeEventListener('login-sucess', this.handleLoginSucess.bind(this));
        this.removeEventListener('login-error', this.handleErrorSucess.bind(this));
        super.disconnectedCallback();
    }
    render() {
        return html`
            <public-layout>
                <login-component> </login-component>
                ${
                    this.alertType === 'error' 
                    ? html` <alert-component .type=${this.alertType} .message=${this.alertMessage}></alert-component>` 
                    : nothing
                }
            </public-layout>
        `;
    }
}
customElements.define('login-page', LoginPage);
