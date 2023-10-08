export default function CardsView(props) {
    const shopCard = props.cards;
    return (
        <div className="container_cards">
            {shopCard.map((item, indx) => <div key={indx} className="card">
                <div className="card_info">
                    <span className="category_info">{item.name}</span>
                    <span className="color">{item.color}</span>
                    <img src={item.img} alt="" className="card_images" />
                </div>
                <div className="card_price">
                    <span className="price">${item.price}</span>
                    <span className="cart_btn" onClick={() => console.log('Hello')}>ADD TO CART</span>
                </div>
            </div>)}
        </div>
    );
}