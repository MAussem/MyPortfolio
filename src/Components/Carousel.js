import React from 'react';

import Card from '../Components/Card';
import Row from 'react-bootstrap/Row';

import BrownsLogo from '../Assets/Images/BrownsLogo.jpg';
import MaxProfile from '../Assets/Images/MaxProfile.png';
import flooringDepot from '../Assets/Images/flooringDepot.png';
import Container from 'react-bootstrap/Container';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Browns Colours Plus',
                    subTitle: 'Eddie Browns Image Gallery',
                    imgSrc: BrownsLogo,
                    link: 'https://www.brownscoloursplus.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Max Aussem Profile',
                    subTitle: 'LinkedIn',
                    imgSrc: MaxProfile,
                    link: 'https://www.linkedin.com/in/max-aussem-623050173/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Flooring Depot',
                    subTitle: 'Professional Service Since 1999',
                    imgSrc: flooringDepot,
                    link: 'https://www.flooringdepot.org/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {
        console.log(id);
        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

       this.setState({
           items
       });
    } 


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );        
    }

}

export default Carousel;