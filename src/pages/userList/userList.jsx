import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'user', headerName: 'User', width: 250, renderCell: (params) => {
            return (    
                <div className='userListUser'>
                    <img className='userListImg' src={params.row.avatar} alt='' />
                    {params.row.userName}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'transaction', headerName: 'Transaction', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={'/user/' + params.row.id}>
                        <button className='userListEdit'>Edit</button>
                    </Link>
                        <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    ];

    
return (
    <div className='userList'>
        <h1 className='userListTitle'>User List</h1>
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
