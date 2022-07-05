import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import './TabelUsers.css';
import { useState } from 'react';




const TabelUsers = () => {

    const users = [
        { firstNeme: 'Sara', LastName: 'Levi', email: '444@gmail.com', company: 'rrrrrr',post:"I work in progmaing" },
        { firstNeme: 'Chana', LastName: 'Cohen', email: '1111@gmail.com', company: 'dddd',post:"I work in progmaing"  },
        { firstNeme: 'Mair', LastName: 'Sfrasn', email: '3333@gmail.com', company: 'yyyyyy',post:"I work in progmaing"  },
        { firstNeme: 'chava', LastName: 'Saron', email: '2224@gmail.com', company: 'hhhhhh',post:"I work in progmaing"  }
    ];

    const [filteredUsers, setFilteredUsers] = useState(users);

    const header = (
        <div className="table-header">
            Products
        </div>
    );

    const footer = `In total there are ${users ? users.length : 0} users.`;

    const [searchUserByName, setSearchUserByName] = useState("");

    const onChangeSearchByName = event => setSearchUserByName(event.target.value);
 
    const filterUsers = () => {
        setFilteredUsers(users.filter(user => (user.firstNeme +" "+ user.LastName).includes(searchUserByName)));
        
    };
 
 


 
    return (
        <>
            <p>{searchUserByName}</p>
            <input type="text" onChange={onChangeSearchByName} />
            <button onClick={filterUsers}>Filter</button>          
            <div className="datatable-templating-demo">
                <div className="card">
                    <DataTable value={filteredUsers} header={header} footer={footer} responsiveLayout="scroll" >
                        <Column field="firstNeme" header="First Name" />
                        <Column field="LastName" header="Last Name" />
                        <Column field="email" header="E-mail" />
                        <Column field="company" header="Company" />                                               
                    </DataTable>
                </div>
            </div>
        </>
    );

};

export default TabelUsers;