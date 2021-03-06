import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from "./Title"
class Featuredrooms extends Component {
    static contextType = RoomContext
    render() {
        let { featuredRooms: rooms, loading } = this.context
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>

            </section>
        );
    }
}

export default Featuredrooms;
