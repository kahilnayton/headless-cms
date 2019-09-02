import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Product = (props) => {
    console.log(props.product.fields.url, 'props?')
    

    // add e structuring
    return(
        <div>
            { props.product ? (
                <Card >
                    <CardMedia 
                    style={{height:50, paddingTop: '56.25%'}}
                    image={props.product.fields.image[0].fields.file.url}
                    title={props.product.fields.title}
                    
                    />
                    <CardContent>
                        <Typography 
                        gutterBottom variant="headline"
                        component="h2">
                            {props.product.fields.title}
                        </Typography>

                        <Typography 
                        component="p">
                            {props.product.fields.description}
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button 
                        size="small" 
                        color="primary" 
                        href="{props.product.fields.url}"
                        target="_blank">
                            I want it!
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

export default Product

