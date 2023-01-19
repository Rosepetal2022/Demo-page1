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
        <div className="main-sales-div">
        <h1 className="sales-title">Sale Horses</h1>
        <div className="sales-description">Looking for your next partner? Let Some Farm help you find your next dream horse.</div>
      <div className="container">
        <div className="row justify-content-center card-div">
        {saleHorses.map((sale, i) => (
            <Card className="custom-card">
                <div className="d-flex">
                <div className="custom-card-image col-sm-4">
                    <CardImg className="sale-img" 
                    style={{width: '80%'}}
                    src={require(`../../assets/sale_horse/${i}.png`)}></CardImg>
                </div>
                <div className='col-lg-8 col-md-6 col-sm-2 align-self-center'>
                <CardBody>
                    <CardTitle className="sales-card-title">{sale.name}</CardTitle>
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
    </div>
</>
    );
}

export default Sales;