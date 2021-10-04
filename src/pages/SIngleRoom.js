import React, { Component } from 'react';
import { useParams } from 'react-router';
import defaultBcg from "../images/room-1.jpeg"
import { RoomContext } from '../context';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Styledhero from '../components/StyledHero';

class Singleroom extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        }
    }

    static contextType = RoomContext


    render() {

        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        console.log(room)

        if (!room) {
            return <div className="error">
                <h3>No such room could be found</h3>
                <Link to="/rooms" className="button-primary">Back to rooms</Link>
            </div>
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        return (
            <>

                <Styledhero img={images[0] || defaultBcg} >
                    <Banner title={`${name} room`} >
                        <Link to="/rooms" className="button-primary">Back to rooms</Link>
                    </Banner>
                </Styledhero>

                <section className="single-room">
                    <div className="single-room-images">
                        {
                            images.map((item, index) => {
                                return <img key={index} src={item} alt={name} />
                            })
                        }
                    </div>

                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info ">
                            <h3>info</h3>
                            <h6>Price : $ {price}</h6>
                            <h6>Size : {size} SQFT</h6>
                            <h6>
                                Max Capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                            </h6>
                            <h6>
                                {pets ? "Pets Allowed" : "no pets not allowed"}
                            </h6>
                            <h6>
                                {
                                    breakfast && "free breakfast inlcluded"
                                }
                            </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </section>
            </>

        )
    }
}

export default Singleroom;
