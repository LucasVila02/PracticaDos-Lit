import { LitElement, html, css } from 'lit';

import {AuthMixin} from '../mixin/auth-mixin'


export class LoginComponent extends AuthMixin(LitElement) {

    //Inicializo variables
    constructor(){
        super();
        this.initProperties();
    }

    //declaro el tipo de las variables
    static get properties() {
        return {
            email:{type: String},
            password: {type: String},
        };
    }
    static styles = [
        css`
            form {
                display: flex;
                flex-direction:column;
                gap: 8px;
                width: 400px;
                max-width: 100%;
                border: 1px solid #ccc;
                border-radius: 8px;
                box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
                padding: 16px;
            }
        `
    ];

    handleSubmit(event){
        event.preventDefault();

        //Validacion simulada
        if(this.email === 'admin@admin.com' && this.password === '1234'){
            

            //disparo evento
            this.dispatchCustomEvent('login-success', {
                email: this.email, 
            } )
            //reinicio variables
            this.initProperties();
            //iniciar sesion y redirigir al home
            this.login();
        }else{
            this.dispatchCustomEvent('login-error', {
                email: this.email,
            } )
        }
    }


    dispatchCustomEvent(eventName, detail){
        //creamos el elemento custom
        const event = new CustomEvent(eventName, {
            detail,
            bubbles: true,
            composed: true
        })

        //disparo el evento
        this.dispatchEvent(event)
    }

    handleChange(event){
        const {name, value} = event.target;
        this[name] = value;
    }

    initProperties(){
        this.email = '';
        this.password= '';
    }



    render() {
        return html`
            <form @submit=${this.handleSubmit}>
                <label for='email'>Usuario:</label>
                <input id='email' type='email' name='email' required .value=${this.email} @input=${this.handleChange}>

                <label for='password'>Password:</label>
                <input id='password' type='password' name='password' required .value=${this.password} @input=${this.handleChange}>

                <button type='submit' >Enviar</button>
            </form>        
        `;
    }
}
customElements.define('login-component', LoginComponent);
