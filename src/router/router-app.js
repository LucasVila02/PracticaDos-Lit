import { LitElement, html, css } from 'lit';
import {Router} from '@vaadin/router';

import '../pages/login-page'
import '../pages/home-page'

class RouterApp extends LitElement {

    firstUpdated(){
        const router = new Router(this.shadowRoot.querySelector('#outlet'));
        router.setRoutes([
          {path: '/home', component: 'home-page'},
          {path: '/login', component: 'login-page'}
        ]);

    }

    static styles = [
        css`
            :host {
                width:100%;
            }
        `
    ];

    render() {
        return html`
            <div id='outlet' ></div>   
        `;
    }
}
customElements.define('router-app', RouterApp);
