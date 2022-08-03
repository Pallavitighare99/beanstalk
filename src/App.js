import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Header from './components/Header';
import Footer from './components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';
import moment from "moment";
import { Container, Card } from "react-bootstrap";

const fileTypes = ["JPG", "PNG", "GIF"];
let response = [{
  "responseCode": 200,
  "responseMsg": "success",
  "fileName": "",
  "date": moment().format()

}]
function App() {
  const [name, setName] = useState("")
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    setName(file[0].name)
    setData(response);
    setIsUploaded(true);
  };
  return (
    <div className="App">
      <Header />
      {
        isUploaded ?
          <Container style={{marginLeft: 400}}>
            <Card className="card">
              <Card.Body>
                <Card.Title style={{textAlign:"center", fontWeight: "bold"}}>Response</Card.Title>
                {
                  data.map((item) =>
                    <div key={item.date} style={{textAlign:"center"}}>
                      <Card.Text>Response Code: {item.responseCode}</Card.Text>
                      <Card.Text>Response Msg : {item.responseMsg}</Card.Text>
                      <Card.Text>Filename : {name}</Card.Text>
                      <Card.Text>Date : {item.date}</Card.Text>
                    </div>
                  )
                }
                <Button variant="primary"   href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(data)
            )}`}
            download="filename.json" style={{marginLeft:110, width:400}}>Download</Button>
              </Card.Body>
            </Card>
          </Container>
          :
          <Form className="dragBox"  >
            <h1 >Upload or drop a file right here</h1>
            <FileUploader className="box" multiple={true} handleChange={handleChange} name="file" types={fileTypes} />
            <p>{file ? `File name: ${file[0].name}` : "No files uploaded yet"}</p>

          </Form>
      }


      <Footer />
    </div>
  );
}

export default App;
