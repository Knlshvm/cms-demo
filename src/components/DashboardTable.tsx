import React, { useState, useEffect } from "react";
import { useFirebase } from "../context/firebase";
import TableBody from "./Temp";

const DashboardTable: React.FC = () => {
  const { listAllElem } = useFirebase() || {};
  const [searchTerm, setSearchTerm] = useState("");
  const [searchColumn, setSearchColumn] = useState("product");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectColumn = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchColumn(e.target.value);
  };

  const fetchProductsData = async () => {
    try {
      const productsSnapshot: any = await listAllElem?.();
      const productsData: any[] = productsSnapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(productsData);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center my-4 mx-8">
        <h2 className="font-semibold text-gray-200 text-lg">
          Dashboard Overview
        </h2>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          className="border border-gray-300 p-2 rounded-md"
          value={searchColumn}
          onChange={handleSelectColumn}
        >
          <option value="sno">Sno</option>
          <option value="product">Product</option>
          <option value="serialCode">Serial Code</option>
          <option value="stock">Stock</option>
          <option value="category">Category</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Sno</th>
              <th className="border border-gray-300 px-4 py-2">Product</th>
              <th className="border border-gray-300 px-4 py-2">Serial Code</th>
              <th className="border border-gray-300 px-4 py-2">Stock</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td colSpan={5} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            </tbody>
          ) : (
            <TableBody data={data} />
          )}
          {/* <tbody>
            {data.map((item: any) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.sno}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.product}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.serialCode}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.stock}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.category}
                </td>
              </tr>
            ))}
          </tbody> */}

          {/* <TableBody data={data} /> */}
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
