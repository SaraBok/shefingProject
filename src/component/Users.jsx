export default function Users(){
    const users=[
       { firstNeme:'Sara',LastName:'Levi',email:'444@gmail.com' ,company:'rrrrrr'},
       { firstNeme:'Sara',LastName:'Levi',email:'444@gmail.com' ,company:'rrrrrr'},
       { firstNeme:'Sara',LastName:'Levi',email:'444@gmail.com' ,company:'rrrrrr'},
       { firstNeme:'Sara',LastName:'Levi',email:'444@gmail.com' ,company:'rrrrrr'}
    ]

    return<table>
            <thead>
                <tr>
                    <td>firstNeme</td>
                    <td>LastName</td>
                    <td>email</td>
                    <td>company</td>

                      
                </tr>
            </thead>
            <tbody>
                {users.map((user)=><User firstNeme={user.firstNeme} LastName={user.LastName}email={user.email}company={user.company}/>)}
            </tbody>
    </table>
}
const User =(props) =>{
    const{firstNeme,LastName,email,company}=props

    return <tr>
        <td>{firstNeme}</td>
        <td>{LastName}</td>
        <td>{email}</td>
        <td>{company}</td>
    </tr>
}