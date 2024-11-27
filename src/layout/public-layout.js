import { LitElement, html, css } from 'lit';

import {Router}  from '@vaadin/router'
import {AuthMixin} from '../mixin/auth-mixin'

export class PublicLayout extends AuthMixin(LitElement) {
    static get properties() {
        return {
            propName: { type: String },
        };
    }
    static styles = [
        css`
            :host {
                display: block;
                width:100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 16px;
                height: 100vh;
            }
        `
    ];

    connectedCallback() {
        super.connectedCallback();
        if (this.isAuthenticated()) {
            // Redirigir al login si no está autenticado
            Router.go('/home');
        }
    }

    render() {
        return html`
            <div>
                <slot> </slot>
            </div>
        `;
    }
}
customElements.define('public-layout', PublicLayout);
