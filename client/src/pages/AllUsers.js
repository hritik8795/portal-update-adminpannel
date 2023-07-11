import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../redux/actions/userActions";
import { Table } from "antd";
import moment from "moment";
function AllUsers() {
  const { users } = useSelector((state) => state.usersReducer);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <h1>All the verified user details </h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Ser.No</th>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">MobileNumber</th>
          </tr>
        </thead>
        {users.map((user) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{users.length}</th>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.mobileNumber}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default AllUsers;
