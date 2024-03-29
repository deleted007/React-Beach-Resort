import React, { Component } from 'react';
import { RoomContext } from '../Context';

import Loading from './Loading';
import Room from './Room';
import Rooms from '../pages/Rooms';

import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms: rooms } = this.context;
        //console.log(rooms);

        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })

        return (
            <section className="featured-rooms">
                <Title title="fearured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}


//<h1>{greetings} {name} {age} from FeaturedRooms</h1>
