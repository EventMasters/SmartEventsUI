import React, {Component} from 'react';
import {withStyles, Button, Tab, Tabs, TextField, InputAdornment, Icon, Typography} from '@material-ui/core';
import {FuseAnimate, FusePageCarded, FuseChipSelect} from '@fuse';
import {orange} from '@material-ui/core/colors';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import classNames from 'classnames';
import _ from '@lodash';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

const styles = theme => ({
    productImageFeaturedStar: {
        position: 'absolute',
        top     : 0,
        right   : 0,
        color   : orange[400],
        opacity : 0
    },
    productImageItem        : {
        transitionProperty      : 'box-shadow',
        transitionDuration      : theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
        '&:hover'               : {
            boxShadow                    : theme.shadows[5],
            '& $productImageFeaturedStar': {
                opacity: .8
            }
        },
        '&.featured'            : {
            pointerEvents                      : 'none',
            boxShadow                          : theme.shadows[3],
            '& $productImageFeaturedStar'      : {
                opacity: 1
            },
            '&:hover $productImageFeaturedStar': {
                opacity: 1
            }
        }
    }
});

class Product extends Component {

    state = {
        tabValue: 0,
        form    : null
    };

    componentDidMount()
    {
        this.updateProductState();
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        if ( !_.isEqual(this.props.location, prevProps.location) )
        {
            this.updateProductState();
        }

        if (
            (this.props.product.data && !this.state.form) ||
            (this.props.product.data && this.state.form && this.props.product.data.id !== this.state.form.id)
        )
        {
            this.updateFormState();
        }
    }

    updateFormState = () => {
        this.setState({form: this.props.product.data})
    };

    updateProductState = () => {
        const params = this.props.match.params;
        const {productId} = params;

        if ( productId === 'new' )
        {
            this.props.newProduct();
        }
        else
        {
            this.props.getProduct(this.props.match.params);
        }
    };

    handleChangeTab = (event, tabValue) => {
        this.setState({tabValue});
    };

    handleChange = (event) => {
        this.setState({form: _.set({...this.state.form}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)});
    };

    handleChipChange = (value, name) => {
        this.setState({form: _.set({...this.state.form}, name, value.map(item => item.value))});
    };

    setFeaturedImage = (id) => {
        this.setState({form: _.set({...this.state.form}, 'featuredImageId', id)});
    };

    canBeSubmitted()
    {
        const {name} = this.state.form;
        return (
            name.length > 0 &&
            !_.isEqual(this.props.product.data, this.state.form)
        );
    }

    render()
    {
        const {classes, saveProduct,images} = this.props;
        const {tabValue, form} = this.state;

        return (
            <FusePageCarded
                classes={{
                    toolbar: "p-0",
                    header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
                }}
                header={

                 
                
                      <div className="flex flex-1 w-full items-center justify-between">
                         <div className="flex flex-col items-start max-w-full">
                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                    <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to="/smartevents/event/events">
                                        <Icon className="mr-4 text-20">arrow_back</Icon>
                                        Past Events
                                    </Typography>
                                </FuseAnimate>
                                <div className="flex items-center max-w-full">
                                    <FuseAnimate animation="transition.expandIn" delay={300}>
                                        {/* {
                                            form.images.length > 0 ? (
                                            <img className="w-32 sm:w-48 mr-8 sm:mr-16 rounded" src={_.find(form.images, {id: form.featuredImageId}).url} alt={form.name}/>
                                        ) : ( */}
                                            <img className="w-32 sm:w-48 mr-8 sm:mr-16 rounded" src="assets/images/ecommerce/product-image-placeholder.png" />
                                        {/* )}  */}
                                    </FuseAnimate>
                                    <div className="flex flex-col min-w-0">
                                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                            <Typography className="text-16 sm:text-20 truncate">
                                                {'New Event'}
                                            </Typography>
                                        </FuseAnimate>
                                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                            <Typography variant="caption">Event Detail</Typography>
                                        </FuseAnimate>
                                    </div>
                                </div>
                                
                                </div>
                                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Button>
                                    Save 
                                </Button>
                                
                            </FuseAnimate>
                            
                                
                           
                      
                                        </div>  
                }
                contentToolbar={
                    <Tabs
                        value={tabValue}
                        onChange={this.handleChangeTab}
                        indicatorColor="secondary"
                        textColor="secondary"
                        variant="scrollable"
                        scrollButtons="auto"
                        classes={{root: "w-full h-64"}}
                    >
                        <Tab className="h-64 normal-case" label="Basic Info"/>
                        <Tab className="h-64 normal-case" label="Invite Images"/>
                        <Tab className="h-64 normal-case" label="Additional Details"/>
                        <Tab className="h-64 normal-case" label="CustomFields"/>
                        <Tab className="h-64 normal-case" label="Preview"/>
                    </Tabs>
                }
                content={
       
                    <div className="p-16 sm:p-24 max-w-2xl">
                    {tabValue === 0 &&
                            (
                                <div>

                                    <TextField
                                        className="mt-8 mb-16"
                                        name=""
                                        error={this.name === ''}
                                        required
                                        label="Event Name"
                                        autoFocus
                                        id="name"
                                        
                                        // value={form.name}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        fullWidth
                                    />
                                    
                                   <TextField 
                                   className="mt-8 mb-16"
                                   label = "Co-Host"
                                   autoFocus
                                   id="co-host"
                                   variant = "outlined"
                                   id = ""
                                   fullWidth/>
                                    <TextField 
                                   className="mt-8 mb-16"
                                   label = "Co-Host Email"
                                   autoFocus
                                   id="email"
                                   variant = "outlined"
                                   
                                   fullWidth/>
                                    <TextField 
                                   className="mt-8 mb-16"
                                   label = "Date"
                                   autoFocus
                                   id="date"
                                   variant = "outlined"
                                   
                                   fullWidth/>
                                   <TextField 
                                   className="mt-8 mb-16"
                                   label = "Venue"
                                   autoFocus
                                   id="venue"
                                   variant = "outlined"
                                   
                                   fullWidth/>
                                   <TextField 
                                   className="mt-8 mb-16"
                                   label = "Address"
                                   autoFocus
                                   id="address"
                                   variant = "outlined"
                                   
                                   fullWidth/>
                                   <TextField 
                                   className="mt-8 mb-16"
                                   label = "Message From Host"
                                   autoFocus
                                   id="msg"
                                   variant = "outlined"
                                   type = "text"
                                   multiline
                                   rows={10}
                                   
                                   fullWidth/>
                                    
                                       
                                </div>
                            )}
                    </div>
                }
                innerScroll
            />
        )
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getProduct : Actions.getProduct,
        newProduct : Actions.newProduct,
        saveProduct: Actions.saveProduct
    }, dispatch);
}

function mapStateToProps({eCommerceApp})
{
    return {
        product: eCommerceApp.product
    }
}

export default withReducer('eCommerceApp', reducer)(withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Product))));
