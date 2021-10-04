import React, { Component } from 'react';

import Client from "./components/Contentfull"

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 0,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    getData = async () => {
        try {
            let responce = await Client.getEntries({
                content_type: "beachResort",
                // order: "sys.createdAt"
                order: "-fields.price"
            });
            console.log(responce.items)
            let rooms = this.formatData(responce.items)
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxSize = Math.max(...rooms.map(item => item.size))
            let maxPrice = Math.max(...rooms.map(item => item.price))
            this.setState({
                rooms, featuredRooms, sortedRooms: rooms, loading: false, maxPrice, maxSize
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    componentDidMount() {

        this.getData()

    }

    formatData = items => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(img => img.fields.file.url)
            let room = { ...item.fields, images, id }
            return room;
        })
        return tempItems
    }

    getRoom = slug => {
        let tempRoom = [...this.state.rooms];

        let room = tempRoom.find(room => room.slug == slug);
        return room;
    }

    handleChange = event => {
        let target = event.target
        const value = target.type === "checkbox" ? target.checked : target.value
        let name = target.name

        this.setState({
            [name]: value
        }, this.filterRooms)


    }
    filterRooms = () => {

        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets, minPrice, maxPrice } = this.state
        // get all valie
        let tempRooms = [...rooms]
        // Transfomr vale

        capacity = parseInt(capacity)

        // filter by type
        if (type !== "all") {
            tempRooms = rooms.filter(room => room.type === type)

        }
        // filter by capacity

        if (capacity !== 1) {
            tempRooms = rooms.filter(room => room.capacity === capacity)

        }
        // filter by price
        price = parseInt(price)
        if (price >= 1) {
            tempRooms = rooms.filter(room => room.price >= price)

        }


        // filter by minSize and maxSize
        minSize = parseInt(minSize)
        maxSize = parseInt(maxSize)

        if (minSize >= 1 && maxSize <= 1000) {
            tempRooms = rooms.filter(room => room.size >= minSize && room.size <= maxSize)

        }


        if (breakfast) {
            tempRooms = rooms.filter(room => room.breakfast === true)
        }
        if (pets) {
            tempRooms = rooms.filter(room => room.pets === true)
        }






        this.setState({
            sortedRooms: tempRooms,

        })
    }

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {(value) => {
                return <Component {...props} context={value} />
            }}
        </RoomConsumer>
    }
}
export { RoomProvider, RoomConsumer, RoomContext }


