import React from "react";

interface TableBodyProps {
  data: any[];
}

const TableBody: React.FC<TableBodyProps> = ({ data }) => {
  return (
    <tbody>
      {data.map((item: any) => {
        console.log(item); // Logging each item
        return (
          <tr key={item.id}>
            <td className="border border-gray-300 px-4 py-2">{item.Sno}</td>
            <td className="border border-gray-300 px-4 py-2">{item.Product}</td>
            <td className="border border-gray-300 px-4 py-2">
              {item.SerialCode}
            </td>
            <td className="border border-gray-300 px-4 py-2">{item.Stock}</td>
            <td className="border border-gray-300 px-4 py-2">
              {item.Category}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
