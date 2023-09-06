import { LogLevel } from "@azure/msal-browser";
export const msalConfig = {
    auth: {
        clientId: '04a3fb00-a972-438a-83c4-cd6c37afaba7', // Este es el ÚNICO campo obligatorio que debe proporcionar.
        authority: 'https://login.microsoftonline.com/davidpatarroyo458gmail.onmicrosoft.com', //El valor predeterminado es "https://login.microsoftonline.com/common"
        redirectUri: 'http://localhost:3000', // Apunta a ventana.ubicación.origen. Debe registrar este URI en el portal/registro de aplicaciones de Azure.
        postLogoutRedirectUri: '/', // Indica la página para navegar después de cerrar sesión.
        navigateToLoginRequestUrl: false, // Si es "verdadero", regresará a la ubicación de la solicitud original antes de procesar la respuesta del código de autenticación.
    },
    cache: {
        cacheLocation: 'sessionStorage', // Configura la ubicación de la caché. "sessionStorage" es más seguro, pero "localStorage" le brinda SSO entre pestañas.
        storeAuthStateInCookie: false, //Establezca esto en "verdadero" si tiene problemas en IE11 o Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

/**
 * A los ámbitos    (scopes) que agregue aquí se le solicitará el consentimiento del usuario durante el inicio de sesión.
  * De forma predeterminada, MSAL.js agregará ámbitos OIDC (openid, perfil, correo electrónico) a cualquier solicitud de inicio de sesión.
  * Para obtener más información sobre los alcances de OIDC, visite:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: []
};

/**
 * Se puede utilizar un objeto SilentRequest opcional para lograr un SSO silencioso.
  * entre aplicaciones proporcionando una propiedad "login_hint".
 */
export const silentRequest = {
    scopes: ["openid", "profile"],
    loginHint: "example@domain.net"
};