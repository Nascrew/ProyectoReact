import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { NavigationBar } from './NavigationBar.jsx';
import { CollapsibleExample } from './Navbar.jsx';
import { BasicExample } from './views/index.jsx';

import '../assets/css/login.css';
import Image from '../assets/img/Fondo.jpg';



export const PageLayout = (props) => {
    /**
     *La mayoría de las aplicaciones necesitarán representar condicionalmente ciertos componentes en función de si un usuario ha iniciado sesión o no.
      * msal-react proporciona 2 formas sencillas de hacer esto. Los componentes AuthenticatedTemplate y UnauthenticatedTemplate
      * solo representa a sus hijos si un usuario está autenticado o no autenticado, respectivamente.
     */
    return (
        <>
            <UnauthenticatedTemplate>
            <section class="vh-100"> 
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="card">
                                <div class="row g-0">
                                    <div class="col-md-5 col-lg-6 d-none d-md-block" style={{background:"rgba(159, 88, 244)"}}>
                                        <div class="LoginBienvenido">
                                            <span class="h3 fw-bold mb-1">Bienvenido</span> <br/>
                                            <span class="h7 fw-bold mb-0">A una asistencia Remota</span>
                                        </div>
                                            <img class="fondo" src={Image}
                                                alt="login form"/>
                                    </div>
                                    <div class="col-md-6 col-lg-6 d-flex align-items-center">
                                        <div class="card-body p-4 p-lg-5 text-black">
                                            <form>
                                                <div class="pt-1 mb-4">
                                                    <button class="buttonW" type="button"> <span  class="creatSpan">Welcome back </span> </button>
                                                </div>
                                
                                                <div class="LoginA">
                                                    <span class="h5 fw-bold mb-0">Login your account</span>
                                                </div>
                                              
                                            
                                                <div class="LoginA" >
                                                    <button class="button" type="button">Login</button>
                                                </div>
                                                <div class="LoginA" >
                                                    <NavigationBar>
                                                        
                                                    </NavigationBar>
                                                </div>
                                               
                                                <div class="LoginA" >
                                                    <a class="creat" href="#!"> <span class="creatSpan" > <b> Create Account </b></span></a>
                                                </div>
                                                <br/> <br/> 
                                                
                                                <div class="LoginA" >
                                                    <a class="forgot" href="#!"> <b> Forgot password? </b></a>
                                                </div>  
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {props.children}
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
            <CollapsibleExample> </CollapsibleExample>
            <BasicExample> </BasicExample>
           

                <footer>
                    <center>
                        Inicio de sesion exitoso
                    </center>
                </footer>
            </AuthenticatedTemplate>
        </>
    );
}