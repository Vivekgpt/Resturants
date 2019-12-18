import React from 'react';
import './App.css';



class Restaurant extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      RestaurantDetails :
      [
        {
          name:"Tiamo",
          food:["Italian, Mediterranean, North Indian"], 
          votes: "358 votes", 
          reviews: "87 reviews", 
          ratings: 4.2,
          Min: "Min ₹150", 
          cost:"500 for one", 
          deliverytime:"Up to 30 min", 
          payments:["cash ", "cards ","& online"],
          img : 'https://secure.i.telegraph.co.uk/multimedia/archive/02999/restaurant_2999753b.jpg'
        },
        {
          name:"Absolute Barbecue",
          food:["Barbeque, North Indian, Grill"], 
          votes: "4142 votes", 
          reviews: "873 reviews", 
          ratings:3.5,
          Min: "Min ₹100", 
          cost:"800 for two", 
          deliverytime:"Up to 35 min", 
          payments:["cash ", "cards ","& online"],
          img : 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/a/g/p4039-15429707835bf7dd9f21ed9.jpg?tr=tr:n-xlarge'
        },
        {
          name:"Hyderabad Biryani",
          food:["Chinese ,Biryani ,North Indian"], 
          votes: "3116 votes", 
          reviews: "887 reviews", 
          ratings:2.1, 
          Min: "Min ₹120", 
          cost:"600 for two", 
          deliverytime:"Up to 30 min", 
          payments:["cash ", "cards ","& online"],
          img : 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw'
        },
        {
          name:"Biryani and More",
          food:["Biryani ,North Indian"], 
          votes: "23795 votes", 
          reviews: "4587 reviews", 
          ratings:4.5, 
          Min: "Min ₹200", 
          cost:"750 for two", 
          deliverytime:"Up to 45 min", 
          payments:["cash ", "cards ","& online"],
          img : 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/d27wimi2h1nz7abbaypo'
        },
        {
          name:"Delight Food",
          food:["Italian, North Indian, South Indian"], 
          votes: "549 votes", 
          reviews: "87 reviews", 
          ratings:1.9, 
          Min: "Min ₹100", 
          cost:"300 for one", 
          deliverytime:"Up to 30 min", 
          payments:["cash ", "cards ","& online"],
          img : 'https://content.jdmagicbox.com/comp/bangalore/q5/080pxx80.xx80.160525191016.z7q5/catalogue/delight-food-n-s-palya-btm-layout-2nd-stage-bangalore-home-delivery-restaurants-28553fq.jpg'
        },
        {
          name:"Meghana Foods",
          food:["Biryani, North Indian"], 
          votes: "16556 votes", 
          reviews: "3037 reviews", 
          ratings:4.3, 
          Min: "Min ₹250", 
          cost:"800 for two", 
          deliverytime:"Up to 40 min", 
          payments:["cash ", "cards ","& online"],
          img : 'https://b.zmtcdn.com/data/pictures/chains/1/50691/abcf03bc1f08f132aa49d3da91ab42b8_featured_v2.jpg'
        },
        {
          name:"New Prashanth Hotel ",
          food:["North Indian ,Biryani ,South Indian"], 
          votes: "507 votes", 
          reviews: "67 reviews", 
          ratings:2.1, 
          Min : "Min ₹100", 
          cost:"300 for one", 
          deliverytime:"Up to 35 min", 
          payments:["cash ", "cards ","& online"],
          img : 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/z/q/p2041-1484208622587739ee79c78.jpg?tr=tr:n-xlarge'
        },
        {
          name:"Sea Rock ",
          food:["North Indian, Indian ,Mediterranean"], 
          votes: "1716 votes", 
          reviews: "198 reviews", 
          ratings:1.2, 
          Min: "Min ₹200", 
          cost:"500 for one", 
          deliverytime:"Up to 45 min", 
          payments:["cash ", "cards ","& online"],
          img : 'http://images.jdmagicbox.com/comp/bangalore/l7/080pxx80.xx80.140605170158.g5l7/catalogue/sea-rock-kumara-park-east-bangalore-mangalorean-restaurants-xgfvpr3ryg.jpg'
        },
        {
          name:"Bamboo Restaurant",
          food:["Biryani, North Indian"], 
          votes: "3869 votes", 
          reviews: "687 reviews", 
          ratings:3.3, 
          Min: "Min ₹200", 
          cost:"400 for one", 
          deliverytime:"Up to 30 min", 
          payments:["cash ", "cards ","& online"],
          img : 'http://www.onroadbike.com/wp-content/uploads/2019/03/Bamboo-Biryani-Bangalore-735x413.jpg'
        },
        {
          name:"Truffles",
          food:["Burgers, Cocktails, Peri Fries"], 
          votes: "2515 votes", 
          reviews: "687 reviews", 
          ratings:3.9, 
          Min: "Min ₹200", 
          cost:"900 for two", 
          deliverytime:"Up to 35 min", 
          payments:["cash ", "cards ","& online"],
          img : 'http://www.dineout.co.in/blog/wp-content/uploads/2017/01/Truffles-2-700x467.jpg'
        }
      ], ratings: 0
    }
  }
  sortRating = (rating) => {
    this.setState({
      rating : rating.sort((a, b) => (a.ratings - b.ratings))
    });
  }

  showRating = (ratings) => {
    this.setState({
      ratings:ratings
    });
  }

  render(){
    return(
      <div>
        <div className="button">
          <h3>Search Filter By:</h3>
          <button class="btn-outline-success" onClick={() => this.showRating(0)}>Sort</button>
          <button class="btn-outline-success" onClick={() => this.showRating(1)}>1 Star &#9733;</button>
          <button class="btn-outline-success" onClick={() => this.showRating(2)}>2 Star &#9733;</button>
          <button class="btn-outline-success" onClick={() => this.showRating(3)}>3 Star &#9733;</button>
          <button class="btn-outline-success" onClick={() => this.showRating(4)}>4 Star &#9733;</button>
        </div>
        <div className="flex container">
        {this.state.RestaurantDetails.filter(items => items.ratings > this.state.ratings).map((item) => {
          return(
            <div class="card mb-4" style={{"max-width": "600px"}}>
              <div class="row">
                <div class="col-md-4">
                  <img src= {item.img} class="card-img" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">{item.name}<span className="ratings">{item.ratings}&#9733;</span></h3>
                    <p style={{"color":"grey"}}>{item.food}<span style={{"float":"right"}}>{item.votes}</span></p>
                    <p style={{"color":"grey"}}>{item.cost}<span style={{"float":"right"}}>{item.reviews}</span></p>
                    <p>{item.Min} <span>&#8226; {item.deliverytime}</span></p>
                    <p>Accepts {item.payments} mode of payments</p>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <p class="text-success text-right">Order Online &#62;</p>
              </div>
            </div>
          );
        })
        }
        </div>
      </div>
    );
  }
}

export default Restaurant;