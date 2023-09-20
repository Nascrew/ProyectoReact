import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Msteams from '../../assets/img/microsoft-teams-logo-0.png';
import Sharepoint from '../../assets/img/Microsoft_Office_SharePoint_(2019–present).svg.png'
import { useState } from "react";
import { CardGroup } from 'react-bootstrap';
import '../../assets/css/index.css'
//import styled from "styled-components";

export const BasicExample = () => {

    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Aquí puedes implementar la lógica para cargar el archivo al servidor o realizar otras acciones.
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
            
            <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Cargar archivo</button>
    </div>

          
         
          </div>
        

        
     
        </Card>
       
        

    </CardGroup>
  );
}
