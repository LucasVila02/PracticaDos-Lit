import { LitElement, html, css } from 'lit';

import '@dile/ui/components/nav/nav.js';
import '@dile/ui/components/menu-hamburger/menu-hamburger.js';

import '../layout/auth-layout.js'
import { AuthMixin } from '../mixin/auth-mixin.js';

export class HomePage extends AuthMixin(LitElement) {



    static styles = [
        css`
            :host {
                width:100%;
                --dile-primary-color: #464444;
                --dile-on-primary-color:white;
            }
            .nav{
                display: flex;
                flex-direction:row;
                justify-content:space-between
            }
            h1, p{
                color: black;
            }
        `
    ];
    handleLogout(){
        this.logout()
    }

    render() {
        return html`
        <auth-layout>

            <dile-nav class='nav' slot='header' >
                <h2 slot="title">Home Page</h2>
                <dile-menu-hamburger slot='menu'>
                    <nav slot="menu">
                        <p><a href="one.html">Link one</a></p>
                        <p><a href="two.html">Link two</a></p>
                    </nav>
                </dile-menu-hamburger>
                <button @click=${this.handleLogout} slot="actions">X</button>
            </dile-nav>

           
            <p slot='footer'>Todo los derechos reservados @2024</p>
        </auth-layout>
        `;
    }
}
customElements.define('home-page', HomePage);
