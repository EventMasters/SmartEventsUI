import React, {Component} from 'react';
import {Icon, Table, TableBody, TableCell, TablePagination, TableRow, Checkbox} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import classNames from 'classnames';
import _ from '@lodash';
import ProductsTableHead from './ProductsTableHead';
import * as Actions from '../store/actions';

class ProductsTable extends Component {

    state = {
        order      : 'asc',
        orderBy    : null,
        selected   : [],
        data       : this.props.products,
        page       : 0,
        rowsPerPage: 10
    };

    componentDidMount()
    {
        this.props.getProducts();
    }

    componentDidUpdate(prevProps, prevState)
    {
        if ( !_.isEqual(this.props.products, prevProps.products) || !_.isEqual(this.props.searchText, prevProps.searchText) )
        {
            const data = this.getFilteredArray(this.props.products, this.props.searchText);
            this.setState({data})
        }
    }

    getFilteredArray = (data, searchText) => {
        if ( searchText.length === 0 )
        {
            return data;
        }
        return _.filter(data, item => item.name.toLowerCase().includes(searchText.toLowerCase()));
    };

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if ( this.state.orderBy === property && this.state.order === 'desc' )
        {
            order = 'asc';
        }

        this.setState({
            order,
            orderBy
        });
    };

    handleSelectAllClick = event => {
        if ( event.target.checked )
        {
            this.setState(state => ({selected: this.state.data.map(n => n.id)}));
            return;
        }
        this.setState({selected: []});
    };

    handleClick = (item) => {
        this.props.history.push('/smartevents/event/events' + item.id + '/' + item.handle);
    };

    handleCheck = (event, id) => {
        const {selected} = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if ( selectedIndex === -1 )
        {
            newSelected = newSelected.concat(selected, id);
        }
        else if ( selectedIndex === 0 )
        {
            newSelected = newSelected.concat(selected.slice(1));
        }
        else if ( selectedIndex === selected.length - 1 )
        {
            newSelected = newSelected.concat(selected.slice(0, -1));
        }
        else if ( selectedIndex > 0 )
        {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        this.setState({selected: newSelected});
    };

    handleChangePage = (event, page) => {
        this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };

    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render()
    {
        const {order, orderBy, selected, rowsPerPage, page, data} = this.state;
        // const isSelected = this.isSelected(n.id);

        return (
            <div className="w-full flex flex-col">

                <FuseScrollbars className="flex-grow overflow-x-auto">

                    <Table className="min-w-xl" aria-labelledby="tableTitle">

                        <ProductsTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={this.handleSelectAllClick}
                            onRequestSort={this.handleRequestSort}
                            rowCount={data.length}
                        />

                        <TableBody>
                            
                        <TableRow
                                            className="h-64 cursor-pointer"
                                            hover
                                            role="checkbox"
                                            
                                        >
                                        <TableCell className="w-48 pl-4 sm:pl-12" padding="checkbox">
                                                <Checkbox
                                                   // checked={isSelected}
                                                    onClick={event => event.stopPropagation()}
                                                    //onChange={event => this.handleCheck(event, n.id)}
                                                />
                                            </TableCell>
                                            <TableCell className="w-52" component="th" scope="row" padding="none">
                                            <img className="w-full block rounded" src="assets/images/ecommerce/product-image-placeholder.png" />
                                            </TableCell>
                                            <TableCell>
                                             Get Together
                                            </TableCell>
                                            <TableCell>
                                             Dec-31-2018
                                            </TableCell>
                                            <TableCell>
                                             Replied YES
                                            </TableCell>
                                            
                                            

                        </TableRow>
                        <TableRow
                                            className="h-64 cursor-pointer"
                                            hover
                                            role="checkbox"
                                            
                                        >
                                        <TableCell className="w-48 pl-4 sm:pl-12" padding="checkbox">
                                                <Checkbox
                                                   // checked={isSelected}
                                                    onClick={event => event.stopPropagation()}
                                                    //onChange={event => this.handleCheck(event, n.id)}
                                                />
                                            </TableCell>
                                            <TableCell className="w-52" component="th" scope="row" padding="none">
                                            <img className="w-full block rounded" src="assets/images/ecommerce/product-image-placeholder.png" />
                                            </TableCell>
                                            <TableCell>
                                             Get Together
                                            </TableCell>
                                            <TableCell>
                                             Dec-31-2018
                                            </TableCell>
                                            <TableCell>
                                             Replied YES
                                            </TableCell>
                                            
                                            

                        </TableRow>
                        </TableBody>
                    </Table>
                </FuseScrollbars>

                <TablePagination
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page'
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page'
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getProducts: Actions.getProducts
    }, dispatch);
}

function mapStateToProps({eCommerceApp})
{
    return {
        products  : eCommerceApp.products.data,
        searchText: eCommerceApp.products.searchText
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsTable));
