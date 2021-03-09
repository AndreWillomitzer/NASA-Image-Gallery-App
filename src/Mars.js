import {useState, useEffect} from 'react'
import './Mars.css';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row, Card, CardDeck } from 'react-bootstrap';

export default function Mars(){
    const [marsData, setMarsData] = useState();

    useEffect(()=>{
        fetch(`https://images-api.nasa.gov/search?q=mars%2020&keywords=perseverance&media_type=image`).then(response=> response.json()).then(data =>{
            if(data){
                setMarsData(data);
            }
        })
        /*https://images-api.nasa.gov/search?q=mars%2020&keywords=perseverance&media_type=image*/
    }, [])
    let itemsToRender;
    
    if(marsData){
        console.log(marsData);                   
            
                 itemsToRender = marsData.collection.items.map(item=>{
                    
                    return(
                        
                        <Row>
                        
{/*                         <Card style={{marginBottom:"12px", backgroundColor: "#465362", color: "#F4FFFD", width: "18rem"}} id="marsCards" >
                        

                        <h3 style={{marginTop: "6px", marginLeft: "2px", marginTop: "5px"}}>{item.data[0].title}</h3>
                        <hr style={{backgroundColor: "#F4FFFD"}} />
                        <img src={item.links[0].href} style={{marginBottom:"8px", marginLeft: "2px", marginTop: "5px"}}></img>
                        
                        <p style={{marginLeft: "2px", marginTop: "5px"}}>{item.data[0].description}</p>
                        <b><p style={{marginLeft: "2px", marginTop: "5px"}}>Photographer Credit: {item.data[0].photographer}</p></b>
                        
                        
                        </Card> */}
                        
                        <Card style={{marginBottom:"12px", backgroundColor: "#465362", color: "#F4FFFD", width: "18rem"}}>
                            <Card.Img variant="top" src={item.links[0].href} />
                            

                            <Card.Body id="cardText">
                                <Card.Title>{item.data[0].title}</Card.Title>
                                <hr />
                                    <Card.Text style={{marginBottom: "12px"}}>
                                    {item.data[0].description}
                                    </Card.Text>
                                    
{/*                                     <Card.Text>
                                    Photographer Credit: {item.data[0].photographer}
                                    </Card.Text> */}
                                
                            </Card.Body>
                            
                            </Card>
                        </Row>
                        
                    )
                })                                      
    }else{
        return(
            <p>No Data</p>
        )
    }
     return(
        
            
            <CardDeck>

            {itemsToRender}
            </CardDeck>
            
       
    ) 
}