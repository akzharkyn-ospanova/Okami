import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Items from "./components/items";
import Category from "./components/category";
import ShowFullItem from "./components/showfullitem";
import ContactPage from "./components/contactpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Стул',
                    img: "https://cdn.inmyroom.ru/uploads/photo/file/14/1430/1430d620-702f-40c3-8416-7838ece09607.jpg",
                    desc: 'Lorem ipsum dolor sit amet',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: "Стул",
                    img: "https://vmp59.com/uploadedFiles/eshopimages/big/sc-026-belyj_1.1600x1200w-800x800.jpg" ,
                    desc: 'Lorem ipsum dolor sit amet',
                    category: 'chairs',
                    price: '40.15'
                },
                {
                    id: 3,
                    title: "Стул",
                    img: "https://velesmebel.ru/image/catalog/stol60/1a3ag2hq5wwp4l2119dfpnraj57j0uyu-min.jpg" ,
                    desc: 'Lorem ipsum dolor sit amet',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 4,
                    title: "Стол",
                    img: "https://mebel.ru/upload/iblock/d91/ycpwo0qg7sfvg4iscd2ujq9e20pq7cxe.jpg" ,
                    desc: 'Lorem ipsum dolor sit amet',
                    category: 'tables',
                    price: '49.99'
                },
                {
                    id: 5,
                    title: "Стoл",
                    img: "https://i.pinimg.com/736x/7a/dc/34/7adc349e3a5708ffafd5718279befbfa--sticker-wall-decal.jpg" ,
                    desc: 'Lorem ipsum dolor sit amet',
                    category: 'tables',
                    price: '79.99'
                },
                {
                    id: 6,
                    title: "Стол",
                    img: "https://nsfurniture.ru/wa-data/public/shop/products/26/62/1126226/images/27559/27559.750.jpg" ,
                    desc: 'Lorem ipsum dolor sit amet',
                    category: 'tables',
                    price: '49.99'
                }
            ],
            showFullItems: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteToOrder = this.deleteToOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
        this.onShowItem = this.onShowItem.bind(this);
    }
    render() {
        return (
            <BrowserRouter>
                <div className='wrapper'>
                    <Header orders={this.state.orders} onDelete={this.deleteToOrder}/>
                    <Routes>
                        <Route path="/items" element={<Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>} />
                        <Route path="/contactpage" element={<ContactPage />} />
                        <Route path="/category" element={
                            <React.Fragment>
                                <Category chooseCategory={this.chooseCategory} />
                                <Items
                                    onShowItem={this.onShowItem}
                                    items={this.state.currentItems}
                                    onAdd={this.addToOrder}
                                />
                            </React.Fragment>
                        } />
                        <Route path="/about" element={<About/>} />
                    </Routes>
                    {this.state.showFullItems && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }


    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItems: !this.state.showFullItems});
    }

    chooseCategory(category) {
        if(category === "all"){
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteToOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;