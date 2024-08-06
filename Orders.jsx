import React from "react";

const RecentOrders = () => {
  const orders = [
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",

          
    },
  
    {
      customer: "Guy Hawkins",
      orderNo: "78958215",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
    },
    {
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
    },
 
  ];

  return (
    <div className="orders">
    <div className="bg-gray-900 rounded-md p-4 w-[48rem] h-[22rem] absolute left-60 bottom-61 ">
      <h2 className="text-white text-lg font-bold mb-4">Recent Orders</h2>
      
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-white uppercase bg-gray-900  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Customer
            </th>
            <th scope="col" className="px-6 py-3">
              Order No.
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.orderNo}
              className="bg-gray-900 border-b "
            >
              
              <td className="px-6 py-3 text-white">{order.customer}</td>
              <td className="px-6 py-2 text-white">{order.orderNo}</td>
              <td className="px-6 py-3 text-white">{order.amount}</td>
              <td className="px-6 py-3 text-white ">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-500 text-white"
                      : order.status === "Pending"
                      ? "bg-yellow-500 text-white"
                      : order.status === "Cancelled"
                      ? "bg-red-500 text-white"
                      : ""
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default RecentOrders;
