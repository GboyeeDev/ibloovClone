import search from "../images/search.png"




const Find = (props) => {

    const images = 
        [
            "https://res.cloudinary.com/hoshistech/image/upload/v1671525572/v3-landing-page/HERO__ygspvd.png",
            "./images/Yellow-IbloovArtboard-_kreypz.png",
            "./images/abuja_food_fest_vdew6n.png",
            "./images/bmf_p5gbrb.png",
            "./images/play_zone_fest_ts1evm.png",
            "./images/silent-disco_udneab.png"
        ];
    


    return(
        <div className="find"
        style={{ 'backgroundImage': `url(${images[0]})` }}
        >
            <div className="ops">
            <div className="featured-bar">
                <h2 className="featured-event">Featured Event</h2>
                <h1 className="owambe">{props.title}</h1>
                <h2 className="address">{props.address}</h2>
                <button className="register-now" target="_blank">Register Now</button>
            </div>

            <div className="find-box">
                <div className="inside-box">
                    <div className="search--input">
                        <i>
                            <img src={search} alt=""/>
                        </i>
                        <input className="input--text"
                            placeholder="Find artists, locations, events, places and much more..."
                        />
                    </div>
                    <div>
                        <select className="ticket" name="tickets">
                            <option value="" disabled selected hidden>$ FREE</option>
                            <option>$ FREE</option>
                            <option>$ PAID</option>
                        </select>
                    </div>
                    <div className="date">
                        <input className="date--input" type="date" value="2022/10/19"/>
                    </div>
                    <button className="explore--button">
                        Explore
                    </button>
                </div>
            </div>

            </div>
        </div>
    );
};
export default Find;