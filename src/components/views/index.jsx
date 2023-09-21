import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Msteams from '../../assets/img/microsoft-teams-logo-0.png';
import Sharepoint from '../../assets/img/Microsoft_Office_SharePoint_(2019–present).svg.png'
import { useState } from "react";
import { CardGroup } from 'react-bootstrap';
import '../../assets/css/index.css'
import axios from 'axios';
//import styled from "styled-components";

export const BasicExample = () => {

    const [archivos, setArchivos] = useState(null);

    const subirArchivos = e => {
        setArchivos(e);
    }

    const CargarArchivos = async () => {
        const f = new FormData();

        for (let index = 0; index < array.length; index++) {
            f.append("files", archivos[index]);
            
        }
        await axios.post("", f) //aqui poner la api    
        .then(response=>{
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })

  };
    
  return (
    <CardGroup className='cardTeams'> 
        <Card className='cardTeams'>
        <Card.Img variant="top" src={Msteams}/>
        <Card.Body>
            <Card.Title>Microsoft Teams</Card.Title>
            <Card.Text>
            Realiza llamadas al instante con Microsoft Teams.
            </Card.Text>
            <Button variant="primary">Conectar a videollamada</Button>
        </Card.Body>
        </Card>

        <Card className='cardTeams'>
        <Card.Img variant="top" src={Sharepoint}/>
        <br />
        <div className="image-upload-wrap">
          <div className="text-information">   
          <Card.Title>SharePoint</Card.Title>
            <Card.Text>
            Sube, mira y edita archivos a tu servicio.
            </Card.Text>
            <input type="file"
            name='files'
            multiple
            onChange={(e)=>subirArchivos(e.target.files)}/>
            <button className="btn btn-primary" onClick={()=>insertarArchivos()} >Cargar archivo</button>
        </div>
          </div>
        </Card>
    </CardGroup>
  );
}
