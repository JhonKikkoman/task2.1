export default function ListView(props) {
    const shopItem = props.item
    return (
        <div className="container_list">
            {shopItem.map((item, indx) => <div key={indx} className="list_view_card">
                <img src={item.img} alt="" className="card_images_list_view" />
                <span className="category_info_list_view">{item.name}</span>
                <span className="color_list_view">{item.color}</span>
                <span className="price_list_view">${item.price}</span>
                <span className="cart_btn_list_view" onClick={() => console.log('Hello')}>ADD TO CART</span>
            </div>)}
        </div>
    );
}