import React, { useState } from 'react';
import './userlist.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { rows } from '../../data';
import { Link } from 'react-router-dom';
const UserList = () => {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((x) => x.id !== id));
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },

    {
      field: 'user',
      headerName: 'User',
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} alt='' className='userListImage' />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 120,
    },
    {
      field: 'transcation',
      headerName: 'Transcation',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <Link to={`/user/${params.row.id}`}>
              <button className='UserListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='UserListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
