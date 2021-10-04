import React from 'react';
import { RoomContext } from '../context';
import { useContext } from 'react';
import Title from "./Title"

const getUnique = (item, value) => {
    return [...new Set(item.map(item => item[value]))]
}

const Roomfilter = ({ rooms }) => {
    const context = useContext(RoomContext)
    const { handleChange, type, capacity, price, maxSize, minSize, breakfast, pets, minPrice, maxPrice } = context
    let types = getUnique(rooms, 'type')
    // get types rooms
    types = ["all", ...types]
    types = types.map((type, index) => {
        return <option value={type} key={index}>{type}</option>
    })

    // get people size rooms


    let people = getUnique(rooms, "capacity")
    people = people.map((item, index) => <option key={index} value={item}>{item}</option>)

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* Select Type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="search-form-control" onChange={handleChange}>
                        {
                            types
                        }
                    </select>
                </div>
                {/* end selecet */}

                {/* Guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Capacity</label>
                    <select name="capacity" id="capacity" value={capacity} className="search-form-control" onChange={handleChange}>
                        {
                            people

                        }
                    </select>
                </div>
                {/* Guest end*/}

                {/* price */}

                <div className="form-group">
                    <label htmlFor="price">Room price : $ {price}</label>
                    <input type="range" name="price" min={minPrice} step="1" max={maxPrice} value={price} className="search-form-control" id="price" onChange={handleChange} />
                </div>
                {/* price end */}


                <div className="form-group">
                    <label htmlFor="size">Room Size {minSize} - {maxSize}</label>
                    <div className="size-inputs">
                        <input type="text" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="text" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>

                </div>

                <div className="form-group">
                    <div className="single-extras">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />

                        <label htmlFor="breakfast">breakfast</label>

                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">Pets</label>
                    </div>

                </div>



            </form>
        </section>
    );
}

export default Roomfilter;
