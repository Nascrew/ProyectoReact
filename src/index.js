import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { msalConfig } from './authConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/login.css';
import axios from 'axios';

/**
 * Se debe crear una instancia de MSAL fuera del árbol de componentes para evitar que 
 * se vuelva a crear una instancia al volver a renderizar.
 */
const msalInstance = new PublicClientApplication(msalConfig);

//De forma predeterminada se utiliza la primera cuenta si no hay ninguna cuenta activa al cargar la página.
if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    // La lógica de selección de cuentas depende de la aplicación. Ajuste según sea necesario para 
    //diferentes casos de uso.
    msalInstance.setActiveAccount(msalInstance.getActiveAccount()[0]);
}

// Escuche el evento de inicio de sesión y configure la cuenta activa
msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
        const account = event.payload.account;
        msalInstance.setActiveAccount(account);
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App instance={msalInstance} />);
