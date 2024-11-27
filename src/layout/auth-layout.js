import { LitElement, html, css } from 'lit';

import {Router}  from '@vaadin/router'
 import {AuthMixin} from '../mixin/auth-mixin'

export class AuthLayout extends AuthMixin(LitElement) {



    static get properties() {
        return {
            propName: { type: String },
        };
    }

    static styles = [
        css`
            :host {
                display:grid;
                grid-template-rows: auto 1fr auto;
                width:100%;
                min-height: 100vh;
            }

            header, footer{
                background-color: #ccc;
                

            }

            footer{
                text-align:center;
            }

            main{
                display:flex;
                flex-direction:column;
                background-color: #fff; 
                padding: 16px;
                justify-content:start;
                align-items:center
            }
        `
    ];

    connectedCallback() {
        super.connectedCallback();
        if (!this.isAuthenticated()) {
            // Redirigir al login si no está autenticado
            Router.go('/login');
        }
    }

    render() {
        return html`
            <header>
                <slot name='header'></slot>
            </header>
            <main>
                <slot name='main'></slot>
            </main>
            <footer>
                <slot name= 'footer'></slot>
            </footer>
        `;
    }
}
customElements.define('auth-layout', AuthLayout);
