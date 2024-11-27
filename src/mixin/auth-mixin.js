
import { Router } from "@vaadin/router";

export const AuthMixin = (SuperClass) => class extends SuperClass {

  // Método para verificar si el usuario está autenticado
  isAuthenticated() {
    return localStorage.getItem('token') === '1234';
  }

  // Método para hacer logout (limpiar el estado de autenticación)
  logout() {
    localStorage.removeItem('token');
    // Redirigimos explícitamente a la página de login
    Router.go('/login');
  }

  // Método para hacer login (establecer el estado de autenticación)
  login() {
    localStorage.setItem('token', '1234');
    // Redirigimos a la página principal
    Router.go('/home');  // O '/home' dependiendo de tu configuración de rutas
  }
};