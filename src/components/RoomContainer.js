import React from 'react';
// import { RoomConsumer } from '../context';
import { withRoomConsumer } from '../context';
import Roomfilter from './RoomFilter';
import Roomlist from './RoomList';
import Loading from "./Loading"


function RoomContainer({ context }) {
    const { loading, rooms, sortedRooms, maxPrice } = context
    if (loading) {
        return <Loading />
    }
    else {
        return (
            <>

                <Roomfilter rooms={rooms} />
                <Roomlist rooms={sortedRooms} maxPrice={maxPrice} />

            </>
        )
    }
}
export default withRoomConsumer(RoomContainer)
// export default (RoomContainer)




// const Roomcontainer = () => {
//     return (
//         <RoomConsumer>
//             {(value) => {
//                 const { loading, rooms, sortedRooms } = value
//                 if (loading) {
//                     return <Loading />
//                 }
//                 else {
//                     return <>
//                         <Roomfilter rooms={rooms} />
//                         <Roomlist rooms={sortedRooms} />

//                     </>
//                 }
//             }}
//         </RoomConsumer>
//     );
// }

// export default Roomcontainer;
