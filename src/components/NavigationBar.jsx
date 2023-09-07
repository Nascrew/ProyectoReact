import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import { loginRequest } from '../authConfig';

export const NavigationBar = () => {
    const { instance } = useMsal();

    let activeAccount;

    if (instance) {
        activeAccount = instance.getActiveAccount();
    }

    const handleLoginPopup = () => {
        /**
         * Cuando se utilizan las API emergentes y silenciosas, se recomienda establecer la redirectUri a una página en blanco o a una página
         * que no implemente MSAL. Tenga en cuenta que todas las rutas de redirección deben estar registradas en la aplicación.
         * Para más información, siga este enlace: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/li
         * b/msal-browser/docs/login-user.md#redirecturi-considerations
         */
        instance
            .loginPopup({
                ...loginRequest,
                redirectUri: '/redirect',
            })
            .catch((error) => console.log(error));
    };

    const handleLoginRedirect = () => {
        instance.loginRedirect(loginRequest).catch((error) => console.log(error));
    };

    const handleLogoutPopup = () => {
        instance
            .logoutPopup({
                mainWindowRedirectUri: '/', // redirige la aplicación de nivel superior después de cerrar sesión
                account: instance.getActiveAccount(),
            })
            .catch((error) => console.log(error));
    };

    const handleLogoutRedirect = () => {
        instance.logoutRedirect().catch((error) => console.log(error));
    };

    /**
     * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
     * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
     * only render their children if a user is authenticated or unauthenticated, respectively.
     */
    return (
        <>
            <Navbar>
                <AuthenticatedTemplate>
                    <div className="collapse navbar-collapse justify-content-end">
                        <DropdownButton
                            variant="warning"
                            drop="start"
                            title={activeAccount ? activeAccount.name : 'Unknown'}
                        >
                            <Dropdown.Item as="button" onClick={handleLogoutPopup}>
                                Sign out using Popup
                            </Dropdown.Item>
                            <Dropdown.Item as="button" onClick={handleLogoutRedirect}>
                                Sign out using Redirect
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <div className="row1">
                        <DropdownButton style={{textAlign:"center"}}
                            variant="button"
                            className="button"
                            title="Login Microsoft"
                            drop="start"
                        >
                            <Dropdown.Item  as="button" onClick={handleLoginPopup}>
                                iniciar session 
                            </Dropdown.Item>
                            <Dropdown.Item as="button" onClick={handleLoginRedirect}>
                                Iniciar sesion directa
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </UnauthenticatedTemplate>
            </Navbar>
        </>
    );
};