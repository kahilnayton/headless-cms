import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'
import Product from './Product'

const SPACE_ID = 'gt3de4od2pp2'
const ACCESS_TOKEN = 'ALrmj1srryV5xQ9o7BOmI2T5jZoc07hbFox_zlHOobo'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN

})

        // getSingleProduct = () => {
            client.getEntry('<entry_id>')
        .then(function (entry) {
        // logs the entry metadata
        console.log(entry.sys, 'hello')

        // logs the field with ID title
        console.log(entry.fields.productName)
        })
    // }
        

export default class ProductList extends React.Component {

    state = {
        products: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getProducts()
    }

    getProducts = () => {
        client.getEntries({
            content_type: 'product',
            query: this.state.searchString
        })
        .then((res) => {
            this.setState({products: res.items})
            console.log(this.products, 'res items')
        })
        .catch((err) => {
            console.error(err)
        })
    }


    onSeachInputChange = (event) => {
        console.log("Search changed..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value })
        } else {
            this.setState({searchString: ''})
        }
        this.getProducts()
    }

    render() {
        return (
            <div>
                {this.state.products ? (
                    <div>  
                        <TextField 
                        style={{padding: 24}}
                        id="seachInput"
                        placeholder="search"
                        marghin="normal"
                        onChange={this.onSeachInputChange}
                        />
                        <Grid 
                        container 
                        spacing={24} 
                        style={{padding: 24}}>
                            {this.state.products.map(currentProduct => (<Grid 
                            item xs={12} 
                            sm={6} 
                            lg={4} 
                            xl={3}>
                            <Product 
                                product={currentProduct} />
                                </Grid>))}
                            </Grid>
                            </div> 
                ) : "no products found" }
            </div>
        )
    }

}