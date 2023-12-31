import React, { useState } from 'react'
import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'product',
            headerName: 'Product',
            width: 250,
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img className='productListImg' src={params.row.img} alt='' />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 250 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return(
                    <>
                    <Link to={'/product/' + params.row.id}>
                        <button className='productListEdit'>Edit</button>
                    </Link>
                        <DeleteOutline className='productListDelete' onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    ];

  return (
    <div className='productList'>
        <h1 className='productListTitle'>Product List</h1>
        <DataGrid
            rows={data}
            columns={columns}
            pageSize={9}
            checkboxSelection
            disableSelectionOnClick
        />
    </div>
  )
}
