import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from '@azure/msal-react';
import { Container } from 'react-bootstrap';
import { PageLayout } from './components/PageLayout';
import { IdTokenData } from './components/DataDisplay';

const MainContent = () => {

    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

    return (
        <div className="App">
            <AuthenticatedTemplate>
                {activeAccount ? (
                    <Container>
                        <IdTokenData idTokenClaims={activeAccount.idTokenClaims} />
                    </Container>
                ) : null}
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>

            </UnauthenticatedTemplate>
        </div>
    );
};
/*
linea 37:<h5 className="card-title"> Por favor iniciar sesion</h5> 
*/
const App = ({ instance }) => {
    return (
        <MsalProvider instance={instance}>
            <PageLayout>
                <MainContent />
            </PageLayout>
        </MsalProvider>
    );
};
export default App;


