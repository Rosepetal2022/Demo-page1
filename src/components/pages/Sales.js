import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    CardTitle,
    CardText,
    Card,
    CardBody,
    CardImg,
  } from 'reactstrap';

const Sales = () => {
    const saleHorses = [
        {
            name: 'Showname',
            description: 'This is a fancy horse you shoud buy.',
            link: 'https://youtube.com',
           
        },
        {
            name: 'Showname',
            description: 'This is another fancy horse you should buy.',
            link: 'https://youtube.com',
        },
        {
            name: 'Showname',
            description: 'Here is a third fancy horse you should buy.',
            link: 'https://youtube.com',
        },
    ]
    return (
        <>
        <h1>Sale Horses</h1>
        <div>Looking for your next partner? Let Some Farm help you find your next dream horse.</div>
      <div className="container">
        <div className="row justify-content-center card-div">
        {saleHorses.map((sale, i) => (
            <Card className="custom-card">
                <div className="d-flex justify-content-around">
                <div className="custom-card-image">
                    <CardImg className="sale-img" 
                    style={{width: '25rem'}}
                    src={require(`../../assets/sale_horse/${i}.png`)}></CardImg>
                </div>
                <div>
                <CardBody className="text-center">
                    <CardTitle className="font-second">{sale.name}</CardTitle>
                    <CardText className="font">
                        {sale.description}
                    </CardText>
                </CardBody>
                </div>
                </div>
              
            </Card>
        ))}
    </div>
    </div>
</>
    );
}

export default Sales;