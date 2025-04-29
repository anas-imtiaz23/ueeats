// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { 
// //   FiPlusCircle, 
// //   FiTrash2, 
// //   FiLogOut, 
// //   FiList, 
// //   FiMenu, 
// //   FiX,
// //   FiUser,
// //   FiChevronDown,
// //   FiChevronUp,
// //   FiEdit2,
// //   FiShoppingBag
// // } from "react-icons/fi";
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const AdminPanel = () => {
// //   const [items, setItems] = useState([]);
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState({
// //     delete: false,
// //     fetch: false,
// //     add: false,
// //     fetchOrders: false,
// //     update: false
// //   });
// //   const [error, setError] = useState(null);
// //   const [activeSection, setActiveSection] = useState("items-list");
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
// //   const [selectedItem, setSelectedItem] = useState(null);
// //   const [showDeleteModal, setShowDeleteModal] = useState(false);
// //   const [showEditModal, setShowEditModal] = useState(false);
// //   const [editFormData, setEditFormData] = useState({
// //     name: "",
// //     role: "",
// //     intro: "",
// //     Price: "",
// //     image: null
// //   });
// //   const navigate = useNavigate();

// //   const API_BASE_URL = "http://localhost:5000/api/auth";

// //   const fetchItems = async () => {
// //     try {
// //       setLoading(prev => ({...prev, fetch: true}));
// //       const response = await fetch(`${API_BASE_URL}/items`);
// //       const json = await response.json();
// //       if (json.Success) {
// //         setItems(json.items);
// //         toast.success("Items loaded successfully");
// //       } else {
// //         setError(json.message || "Failed to fetch items");
// //         toast.error(json.message || "Failed to fetch items");
// //       }
// //     } catch (err) {
// //       setError(err.message || "Error fetching items");
// //       toast.error(err.message || "Error fetching items");
// //     } finally {
// //       setLoading(prev => ({...prev, fetch: false}));
// //     }
// //   };

// //   const fetchOrders = async () => {
// //     try {
// //       setLoading(prev => ({...prev, fetchOrders: true}));
// //       const response = await fetch(`${API_BASE_URL}/orders`);
// //       const json = await response.json();
      
// //       if (response.ok) {
// //         setOrders(json.orders || []);
// //         toast.success("Orders loaded successfully");
// //       } else {
// //         setError(json.message || "Failed to fetch orders");
// //         toast.error(json.message || "Failed to fetch orders");
// //       }
// //     } catch (err) {
// //       setError(err.message || "Error fetching orders");
// //       toast.error(err.message || "Error fetching orders");
// //       setOrders([]);
// //     } finally {
// //       setLoading(prev => ({...prev, fetchOrders: false}));
// //     }
// //   };

// //   const openDeleteModal = (item) => {
// //     setSelectedItem(item);
// //     setShowDeleteModal(true);
// //   };

// //   const handleDeleteItem = async () => {
// //     try {
// //       setLoading(prev => ({...prev, delete: true}));
// //       const response = await fetch(`${API_BASE_URL}/item/${selectedItem._id}`, {
// //         method: 'DELETE',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         }
// //       });
      
// //       const data = await response.json();
      
// //       if (!response.ok) {
// //         throw new Error(data.message || 'Failed to delete item');
// //       }

// //       if (data.Success) {
// //         toast.success(data.message || "Item deleted successfully");
// //         fetchItems();
// //       } else {
// //         throw new Error(data.message || 'Failed to delete item');
// //       }
// //     } catch (err) {
// //       toast.error(err.message || "Error deleting item");
// //     } finally {
// //       setLoading(prev => ({...prev, delete: false}));
// //       setShowDeleteModal(false);
// //     }
// //   };

// //   const handleEditClick = (item) => {
// //     setSelectedItem(item);
// //     setEditFormData({
// //       name: item.name,
// //       role: item.role,
// //       intro: item.intro || "",
// //       Price: item.Price,
// //       image: null
// //     });
// //     setShowEditModal(true);
// //   };

// //   const handleEditFormChange = (e) => {
// //     const { name, value } = e.target;
// //     setEditFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleUpdateItem = async () => {
// //     try {
// //       setLoading(prev => ({...prev, update: true}));
// //       const response = await fetch(`${API_BASE_URL}/item/${selectedItem._id}`, {
// //         method: 'PUT',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(editFormData),
// //       });

// //       const data = await response.json();
      
// //       if (!response.ok) {
// //         throw new Error(data.message || 'Failed to update item');
// //       }

// //       if (data.Success) {
// //         toast.success("Item updated successfully");
// //         fetchItems();
// //         setShowEditModal(false);
// //       } else {
// //         throw new Error(data.message || 'Failed to update item');
// //       }
// //     } catch (err) {
// //       toast.error(err.message || "Error updating item");
// //     } finally {
// //       setLoading(prev => ({...prev, update: false}));
// //     }
// //   };

// //   useEffect(() => {
// //     fetchItems();
// //     fetchOrders();
// //   }, []);

// //   const handleLogout = () => {
// //     console.log("Admin logged out");
// //     navigate("/login");
// //   };

// //   const handleAddItemClick = () => {
// //     navigate("/add");
// //   };

// //   return (
// //     <div className="flex h-screen flex-col md:flex-row bg-cover bg-center"
// //       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
// //     >
// //       {/* Overlay and ToastContainer */}
// //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
// //       <ToastContainer position="top-right" autoClose={3000} />

// //       {/* Sidebar */}
// //       <div className={`fixed inset-y-0 left-0 z-40 bg-gray-800 text-white w-64 p-6 transform ${
// //           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
// //         } transition-transform md:relative md:translate-x-0 md:w-64`}
// //       >
// //         {/* Close Button (Visible on Mobile) */}
// //         <div className="md:hidden flex justify-end">
// //           <button
// //             className="text-white text-2xl"
// //             onClick={() => setIsSidebarOpen(false)}
// //           >
// //             <FiX />
// //           </button>
// //         </div>

// //         {/* Profile Section */}
// //         <div className="flex items-center mb-8 p-4 bg-gray-700 rounded-lg">
// //           <div className="relative">
// //             <div 
// //               className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center cursor-pointer"
// //               onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
// //             >
// //               <FiUser className="text-2xl" />
// //             </div>
// //             {isProfileDropdownOpen && (
// //               <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
// //                 <div className="py-1">
// //                   <button
// //                     onClick={() => {
// //                       setActiveSection("items-list");
// //                       setIsProfileDropdownOpen(false);
// //                       setIsSidebarOpen(false);
// //                     }}
// //                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
// //                   >
// //                     <FiList className="inline mr-2" />
// //                     Items List
// //                   </button>
// //                   <button
// //                     onClick={() => {
// //                       setActiveSection("orders-list");
// //                       setIsProfileDropdownOpen(false);
// //                       setIsSidebarOpen(false);
// //                     }}
// //                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
// //                   >
// //                     <FiShoppingBag className="inline mr-2" />
// //                     Orders List
// //                   </button>
// //                   <button
// //                     onClick={handleAddItemClick}
// //                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
// //                   >
// //                     <FiPlusCircle className="inline mr-2" />
// //                     Add Item
// //                   </button>
// //                   <button
// //                     onClick={handleLogout}
// //                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
// //                   >
// //                     <FiLogOut className="inline mr-2" />
// //                     Logout
// //                   </button>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //           <div className="ml-4">
// //             <p className="font-semibold">Admin User</p>
// //             <p className="text-gray-300 text-sm">Administrator</p>
// //           </div>
// //           <button 
// //             className="ml-auto text-gray-300"
// //             onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
// //           >
// //             {isProfileDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
// //           </button>
// //         </div>

// //         <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
// //         <ul>
// //           <li className="mb-4">
// //             <button
// //               onClick={() => {
// //                 setActiveSection("items-list");
// //                 setIsSidebarOpen(false);
// //               }}
// //               className={`flex items-center text-gray-200 hover:text-white ${
// //                 activeSection === "items-list" ? "font-bold text-white" : ""
// //               }`}
// //             >
// //               <FiList className="mr-2" />
// //               Items List
// //             </button>
// //           </li>
// //           <li className="mb-4">
// //             <button
// //               onClick={() => {
// //                 setActiveSection("orders-list");
// //                 setIsSidebarOpen(false);
// //               }}
// //               className={`flex items-center text-gray-200 hover:text-white ${
// //                 activeSection === "orders-list" ? "font-bold text-white" : ""
// //               }`}
// //             >
// //               <FiShoppingBag className="mr-2" />
// //               Orders List
// //             </button>
// //           </li>
// //           <li className="mb-4">
// //             <button
// //               onClick={handleAddItemClick}
// //               className={`flex items-center text-gray-200 hover:text-white ${
// //                 activeSection === "add-item" ? "font-bold text-white" : ""
// //               }`}
// //             >
// //               <FiPlusCircle className="mr-2" />
// //               Add Item
// //             </button>
// //           </li>
// //           <li className="mt-auto">
// //             <button
// //               onClick={handleLogout}
// //               className="flex items-center text-gray-200 hover:text-white"
// //             >
// //               <FiLogOut className="mr-2" />
// //               Logout
// //             </button>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Mobile Sidebar Toggle */}
// //       <button
// //         className="fixed top-4 left-4 md:hidden bg-gray-800 text-white p-2 rounded-md z-40"
// //         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// //       >
// //         <FiMenu />
// //       </button>

// //       {/* Main Content */}
// //       <div className={`flex-1 p-6 transition-all duration-300 relative z-10 ${
// //           isSidebarOpen ? "mt-20 md:mt-0" : "mt-4 md:mt-0"
// //         }`}
// //       >
// //         <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-6">
// //           <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

// //           {/* Orders List Section */}
// //           {activeSection === "orders-list" && (
// //             <div>
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-xl font-semibold text-gray-800">Orders List</h2>
// //               </div>
              
// //               {loading.fetchOrders ? (
// //                 <div className="flex justify-center items-center h-64">
// //                   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
// //                 </div>
// //               ) : (
// //                 <div className="overflow-x-auto">
// //                   {orders && orders.length > 0 ? (
// //                     <table className="w-full border-collapse">
// //                       <thead className="bg-gray-100">
// //                         <tr>
// //                           <th className="p-3 text-left text-gray-700 font-medium">User Name</th>
// //                           <th className="p-3 text-left text-gray-700 font-medium">Item Name</th>
// //                           <th className="p-3 text-left text-gray-700 font-medium">Department</th>
// //                           <th className="p-3 text-left text-gray-700 font-medium">Semester</th>
// //                           <th className="p-3 text-left text-gray-700 font-medium">Room Number</th>
// //                           <th className="p-3 text-left text-gray-700 font-medium">Date</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody className="divide-y divide-gray-200">
// //                         {orders.map((order) => (
// //                           <tr key={order._id} className="hover:bg-gray-50 transition-colors">
// //                             <td className="p-3 text-gray-800">{order.UserName}</td>
// //                             <td className="p-3 text-gray-800">{order.ItemName}</td>
// //                             <td className="p-3 text-gray-800">{order.DepartmentName}</td>
// //                             <td className="p-3 text-gray-800">{order.CurrentSemester}</td>
// //                             <td className="p-3 text-gray-800">{order.RoomNumber}</td>
// //                             <td className="p-3 text-gray-800">
// //                               {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}
// //                             </td>
// //                           </tr>
// //                         ))}
// //                       </tbody>
// //                     </table>
// //                   ) : (
// //                     <div className="text-center py-8">
// //                       <p className="text-gray-500">No orders found</p>
// //                     </div>
// //                   )}
// //                 </div>
// //               )}
// //             </div>
// //           )}

// //           {/* Items List Section */}
// //           {activeSection === "items-list" && (
// //             <div>
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-xl font-semibold text-gray-800">Items List</h2>
// //                 <button
// //                   onClick={handleAddItemClick}
// //                   className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center transition-colors"
// //                 >
// //                   <FiPlusCircle className="mr-2" />
// //                   Add New Item
// //                 </button>
// //               </div>
              
// //               {loading.fetch ? (
// //                 <div className="flex justify-center items-center h-64">
// //                   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
// //                 </div>
// //               ) : (
// //                 <div className="overflow-x-auto">
// //                   <table className="w-full border-collapse">
// //                     <thead className="bg-gray-100">
// //                       <tr>
// //                         <th className="p-3 text-left text-gray-700 font-medium">Name</th>
// //                         <th className="p-3 text-left text-gray-700 font-medium">Role</th>
// //                         <th className="p-3 text-left text-gray-700 font-medium">Price</th>
// //                         <th className="p-3 text-left text-gray-700 font-medium">Actions</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="divide-y divide-gray-200">
// //                       {items.map((item) => (
// //                         <tr key={item._id} className="hover:bg-gray-50 transition-colors">
// //                           <td className="p-3 text-gray-800">{item.name}</td>
// //                           <td className="p-3 text-gray-800">{item.role}</td>
// //                           <td className="p-3 text-gray-800">Rs.{item.Price}</td>
// //                           <td className="p-3 flex space-x-2">
// //                             <button 
// //                               className="p-2 text-indigo-600 hover:text-indigo-800 transition-colors"
// //                               onClick={() => handleEditClick(item)}
// //                             >
// //                               <FiEdit2 />
// //                             </button>
// //                             <button 
// //                               className="p-2 text-red-600 hover:text-red-800 transition-colors"
// //                               onClick={() => openDeleteModal(item)}
// //                             >
// //                               <FiTrash2 />
// //                             </button>
// //                           </td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               )}
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Delete Confirmation Modal */}
// //       {showDeleteModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-lg p-6 max-w-md w-full">
// //             <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
// //             <p className="mb-6">Are you sure you want to delete {selectedItem?.name}?</p>
// //             <div className="flex justify-end space-x-4">
// //               <button
// //                 onClick={() => setShowDeleteModal(false)}
// //                 className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleDeleteItem}
// //                 className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
// //                 disabled={loading.delete}
// //               >
// //                 {loading.delete ? 'Deleting...' : 'Delete'}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Edit Item Modal */}
// //       {showEditModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-lg p-6 max-w-md w-full">
// //             <h3 className="text-lg font-semibold mb-4">Edit Item</h3>
// //             <div className="space-y-4">
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={editFormData.name}
// //                   onChange={handleEditFormChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
// //                 <input
// //                   type="text"
// //                   name="role"
// //                   value={editFormData.role}
// //                   onChange={handleEditFormChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
// //                 <textarea
// //                   name="intro"
// //                   value={editFormData.intro}
// //                   onChange={handleEditFormChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
// //                   rows="3"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
// //                 <input
// //                   type="text"
// //                   name="Price"
// //                   value={editFormData.Price}
// //                   onChange={handleEditFormChange}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
// //                 />
// //               </div>
// //             </div>
// //             <div className="flex justify-end space-x-4 mt-6">
// //               <button
// //                 onClick={() => setShowEditModal(false)}
// //                 className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleUpdateItem}
// //                 className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
// //                 disabled={loading.update}
// //               >
// //                 {loading.update ? 'Updating...' : 'Update'}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AdminPanel;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   FiPlusCircle, 
//   FiTrash2, 
//   FiLogOut, 
//   FiList, 
//   FiMenu, 
//   FiX,
//   FiUser,
//   FiChevronDown,
//   FiChevronUp,
//   FiEdit2,
//   FiShoppingBag,
//   FiDollarSign,
//   FiTag,
//   FiInfo,
//   FiCheckCircle,
//   FiClock
// } from "react-icons/fi";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AdminPanel = () => {
//   const [items, setItems] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState({
//     delete: false,
//     fetch: false,
//     add: false,
//     fetchOrders: false,
//     update: false
//   });
//   const [error, setError] = useState(null);
//   const [activeSection, setActiveSection] = useState("items-list");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editFormData, setEditFormData] = useState({
//     name: "",
//     role: "",
//     intro: "",
//     Price: "",
//     image: null
//   });
//   const navigate = useNavigate();

//   const API_BASE_URL = "http://localhost:5000/api/auth";

//   const fetchItems = async () => {
//     try {
//       setLoading(prev => ({...prev, fetch: true}));
//       const response = await fetch(`${API_BASE_URL}/items`);
//       const json = await response.json();
//       if (json.Success) {
//         setItems(json.items);
//         toast.success("Items loaded successfully");
//       } else {
//         setError(json.message || "Failed to fetch items");
//         toast.error(json.message || "Failed to fetch items");
//       }
//     } catch (err) {
//       setError(err.message || "Error fetching items");
//       toast.error(err.message || "Error fetching items");
//     } finally {
//       setLoading(prev => ({...prev, fetch: false}));
//     }
//   };

//   const fetchOrders = async () => {
//     try {
//       setLoading(prev => ({...prev, fetchOrders: true}));
//       const response = await fetch(`${API_BASE_URL}/orders`);
//       const json = await response.json();
      
//       if (response.ok) {
//         setOrders(json.orders || []);
//         toast.success("Orders loaded successfully");
//       } else {
//         setError(json.message || "Failed to fetch orders");
//         toast.error(json.message || "Failed to fetch orders");
//       }
//     } catch (err) {
//       setError(err.message || "Error fetching orders");
//       toast.error(err.message || "Error fetching orders");
//       setOrders([]);
//     } finally {
//       setLoading(prev => ({...prev, fetchOrders: false}));
//     }
//   };

//   const openDeleteModal = (item) => {
//     setSelectedItem(item);
//     setShowDeleteModal(true);
//   };

//   const handleDeleteItem = async () => {
//     try {
//       setLoading(prev => ({...prev, delete: true}));
//       const response = await fetch(`${API_BASE_URL}/item/${selectedItem._id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
      
//       const data = await response.json();
      
//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to delete item');
//       }

//       if (data.Success) {
//         toast.success(data.message || "Item deleted successfully");
//         fetchItems();
//       } else {
//         throw new Error(data.message || 'Failed to delete item');
//       }
//     } catch (err) {
//       toast.error(err.message || "Error deleting item");
//     } finally {
//       setLoading(prev => ({...prev, delete: false}));
//       setShowDeleteModal(false);
//     }
//   };

//   const handleEditClick = (item) => {
//     setSelectedItem(item);
//     setEditFormData({
//       name: item.name,
//       role: item.role,
//       intro: item.intro || "",
//       Price: item.Price,
//       image: null
//     });
//     setShowEditModal(true);
//   };

//   const handleEditFormChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleUpdateItem = async () => {
//     try {
//       setLoading(prev => ({...prev, update: true}));
//       const response = await fetch(`${API_BASE_URL}/item/${selectedItem._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editFormData),
//       });

//       const data = await response.json();
      
//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to update item');
//       }

//       if (data.Success) {
//         toast.success("Item updated successfully");
//         fetchItems();
//         setShowEditModal(false);
//       } else {
//         throw new Error(data.message || 'Failed to update item');
//       }
//     } catch (err) {
//       toast.error(err.message || "Error updating item");
//     } finally {
//       setLoading(prev => ({...prev, update: false}));
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//     fetchOrders();
//   }, []);

//   const handleLogout = () => {
//     console.log("Admin logged out");
//     navigate("/login");
//   };

//   const handleAddItemClick = () => {
//     navigate("/add");
//   };

//   // Stats calculation
//   const totalItems = items.length;
//   const totalOrders = orders.length;
//   const recentOrders = orders.slice(0, 3);
//   const totalRevenue = items.reduce((sum, item) => sum + (parseFloat(item.Price) || 0), 0);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Toast Container */}
//       <ToastContainer 
//         position="top-right" 
//         autoClose={3000}
//         toastClassName="shadow-lg"
//         progressClassName="bg-gradient-to-r from-indigo-500 to-purple-500"
//       />

//       {/* Sidebar */}
//       <div className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-gradient-to-b from-indigo-700 to-purple-800 text-white shadow-xl transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:relative md:translate-x-0`}
//       >
//         {/* Close Button (Mobile) */}
//         <div className="md:hidden flex justify-end p-4">
//           <button
//             className="text-white hover:text-gray-200 transition-colors"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             <FiX size={24} />
//           </button>
//         </div>

//         {/* Profile Section */}
//         <div className="flex items-center p-6 border-b border-indigo-600">
//           <div className="relative">
//             <div 
//               className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all"
//               onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
//             >
//               <FiUser className="text-xl" />
//             </div>
//           </div>
//           <div className="ml-4">
//             <p className="font-semibold">Admin User</p>
//             <p className="text-indigo-200 text-sm">Administrator</p>
//           </div>
//           <button 
//             className="ml-auto text-indigo-200 hover:text-white transition-colors"
//             onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
//           >
//             {isProfileDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
//           </button>
//         </div>

//         {/* Profile Dropdown */}
//         {isProfileDropdownOpen && (
//           <div className="mx-4 mt-2 mb-4 bg-white rounded-lg shadow-lg overflow-hidden">
//             <button
//               onClick={() => {
//                 setActiveSection("items-list");
//                 setIsProfileDropdownOpen(false);
//                 setIsSidebarOpen(false);
//               }}
//               className={`flex items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors ${
//                 activeSection === "items-list" ? "bg-gray-100 font-medium" : ""
//               }`}
//             >
//               <FiList className="mr-3 text-indigo-600" />
//               Items List
//             </button>
//             <button
//               onClick={() => {
//                 setActiveSection("orders-list");
//                 setIsProfileDropdownOpen(false);
//                 setIsSidebarOpen(false);
//               }}
//               className={`flex items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors ${
//                 activeSection === "orders-list" ? "bg-gray-100 font-medium" : ""
//               }`}
//             >
//               <FiShoppingBag className="mr-3 text-indigo-600" />
//               Orders List
//             </button>
//             <button
//               onClick={handleAddItemClick}
//               className="flex items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors"
//             >
//               <FiPlusCircle className="mr-3 text-indigo-600" />
//               Add Item
//             </button>
//             <button
//               onClick={handleLogout}
//               className="flex items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors"
//             >
//               <FiLogOut className="mr-3 text-indigo-600" />
//               Logout
//             </button>
//           </div>
//         )}

//         {/* Navigation */}
//         <div className="p-4">
//           <h2 className="text-xl font-bold mb-6 flex items-center">
//             <span className="bg-white text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">A</span>
//             Admin Panel
//           </h2>
          
//           <nav className="space-y-2">
//             <button
//               onClick={() => {
//                 setActiveSection("items-list");
//                 setIsSidebarOpen(false);
//               }}
//               className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${
//                 activeSection === "items-list" 
//                   ? "bg-white text-indigo-700 shadow-md" 
//                   : "text-indigo-100 hover:bg-indigo-600"
//               }`}
//             >
//               <FiList className="mr-3" />
//               Items List
//               {activeSection === "items-list" && (
//                 <span className="ml-auto bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-full">
//                   {totalItems}
//                 </span>
//               )}
//             </button>
            
//             <button
//               onClick={() => {
//                 setActiveSection("orders-list");
//                 setIsSidebarOpen(false);
//               }}
//               className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${
//                 activeSection === "orders-list" 
//                   ? "bg-white text-indigo-700 shadow-md" 
//                   : "text-indigo-100 hover:bg-indigo-600"
//               }`}
//             >
//               <FiShoppingBag className="mr-3" />
//               Orders List
//               {activeSection === "orders-list" && (
//                 <span className="ml-auto bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-full">
//                   {totalOrders}
//                 </span>
//               )}
//             </button>
            
//             <button
//               onClick={handleAddItemClick}
//               className="flex items-center w-full px-4 py-3 rounded-lg text-indigo-100 hover:bg-indigo-600 transition-all"
//             >
//               <FiPlusCircle className="mr-3" />
//               Add Item
//             </button>
//           </nav>
//         </div>

//         {/* Footer */}
//         <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-indigo-600">
//           <button
//             onClick={handleLogout}
//             className="flex items-center justify-center w-full px-4 py-2 rounded-lg text-indigo-100 hover:bg-indigo-600 transition-all"
//           >
//             <FiLogOut className="mr-2" />
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Mobile Sidebar Toggle */}
//       <button
//         className="fixed top-4 left-4 z-50 md:hidden bg-indigo-600 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         <FiMenu size={24} />
//       </button>

//       {/* Main Content */}
//       <div className="md:ml-64 transition-all duration-300">
//         {/* Header */}
//         <header className="bg-white shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
//             <h1 className="text-2xl font-bold text-gray-800">
//               {activeSection === "items-list" ? "Items Management" : 
//                activeSection === "orders-list" ? "Orders Management" : "Admin Dashboard"}
//             </h1>
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
//                   <FiUser className="text-gray-600" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Overview (Only shown on items-list) */}
//         {activeSection === "items-list" && (
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//               {/* Total Items Card */}
//               <div className="bg-white overflow-hidden shadow rounded-lg">
//                 <div className="p-5">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
//                       <FiTag className="h-6 w-6 text-white" />
//                     </div>
//                     <div className="ml-5 w-0 flex-1">
//                       <dl>
//                         <dt className="text-sm font-medium text-gray-500 truncate">Total Items</dt>
//                         <dd className="flex items-baseline">
//                           <div className="text-2xl font-semibold text-gray-900">{totalItems}</div>
//                         </dd>
//                       </dl>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Total Orders Card */}
//               <div className="bg-white overflow-hidden shadow rounded-lg">
//                 <div className="p-5">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
//                       <FiShoppingBag className="h-6 w-6 text-white" />
//                     </div>
//                     <div className="ml-5 w-0 flex-1">
//                       <dl>
//                         <dt className="text-sm font-medium text-gray-500 truncate">Total Orders</dt>
//                         <dd className="flex items-baseline">
//                           <div className="text-2xl font-semibold text-gray-900">{totalOrders}</div>
//                         </dd>
//                       </dl>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Revenue Card */}
//               <div className="bg-white overflow-hidden shadow rounded-lg">
//                 <div className="p-5">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
//                       <FiDollarSign className="h-6 w-6 text-white" />
//                     </div>
//                     <div className="ml-5 w-0 flex-1">
//                       <dl>
//                         <dt className="text-sm font-medium text-gray-500 truncate">Total Revenue</dt>
//                         <dd className="flex items-baseline">
//                           <div className="text-2xl font-semibold text-gray-900">Rs.{totalRevenue.toFixed(2)}</div>
//                         </dd>
//                       </dl>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Recent Activity Card */}
//               <div className="bg-white overflow-hidden shadow rounded-lg">
//                 <div className="p-5">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
//                       <FiClock className="h-6 w-6 text-white" />
//                     </div>
//                     <div className="ml-5 w-0 flex-1">
//                       <dl>
//                         <dt className="text-sm font-medium text-gray-500 truncate">Recent Orders</dt>
//                         <dd className="flex items-baseline">
//                           <div className="text-2xl font-semibold text-gray-900">{recentOrders.length}</div>
//                         </dd>
//                       </dl>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Main Content Area */}
//         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           {/* Orders List Section */}
//           {activeSection === "orders-list" && (
//             <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//               <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
//                 <div>
//                   <h3 className="text-lg leading-6 font-medium text-gray-900">Orders Management</h3>
//                   <p className="mt-1 max-w-2xl text-sm text-gray-500">
//                     All customer orders and their details
//                   </p>
//                 </div>
//                 <div>
//                   <button
//                     onClick={() => fetchOrders()}
//                     className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Refresh Orders
//                   </button>
//                 </div>
//               </div>
              
//               {loading.fetchOrders ? (
//                 <div className="flex justify-center items-center h-64">
//                   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   {orders && orders.length > 0 ? (
//                     <table className="min-w-full divide-y divide-gray-200">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             User Name
//                           </th>
//                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Item Name
//                           </th>
//                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Department
//                           </th>
//                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Semester
//                           </th>
//                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Room Number
//                           </th>
//                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Date
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {orders.map((order) => (
//                           <tr key={order._id} className="hover:bg-gray-50 transition-colors">
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div className="flex items-center">
//                                 <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
//                                   <FiUser className="text-indigo-600" />
//                                 </div>
//                                 <div className="ml-4">
//                                   <div className="text-sm font-medium text-gray-900">{order.UserName}</div>
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div className="text-sm text-gray-900">{order.ItemName}</div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                                 {order.DepartmentName}
//                               </span>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                               {order.CurrentSemester}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                               {order.RoomNumber}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                               <div className="flex items-center">
//                                 <FiClock className="mr-1 text-gray-400" />
//                                 {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   ) : (
//                     <div className="text-center py-12">
//                       <FiInfo className="mx-auto h-12 w-12 text-gray-400" />
//                       <h3 className="mt-2 text-sm font-medium text-gray-900">No orders</h3>
//                       <p className="mt-1 text-sm text-gray-500">
//                         There are currently no orders in the system.
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Items List Section */}
//           {activeSection === "items-list" && (
//             <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//               <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
//                 <div>
//                   <h3 className="text-lg leading-6 font-medium text-gray-900">Items Management</h3>
//                   <p className="mt-1 max-w-2xl text-sm text-gray-500">
//                     Manage all available items in the system
//                   </p>
//                 </div>
//                 <div className="flex space-x-3">
//                   <button
//                     onClick={() => fetchItems()}
//                     className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Refresh Items
//                   </button>
//                   <button
//                     onClick={handleAddItemClick}
//                     className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     <FiPlusCircle className="-ml-1 mr-2 h-5 w-5" />
//                     Add New Item
//                   </button>
//                 </div>
//               </div>
              
//               {loading.fetch ? (
//                 <div className="flex justify-center items-center h-64">
//                   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Name
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Role
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Price
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Actions
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {items.map((item) => (
//                         <tr key={item._id} className="hover:bg-gray-50 transition-colors">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
//                                 <FiTag className="text-purple-600" />
//                               </div>
//                               <div className="ml-4">
//                                 <div className="text-sm font-medium text-gray-900">{item.name}</div>
//                                 <div className="text-sm text-gray-500 truncate max-w-xs">{item.intro}</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
//                               {item.role}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                             Rs.{item.Price}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             <div className="flex space-x-2">
//                               <button
//                                 onClick={() => handleEditClick(item)}
//                                 className="text-indigo-600 hover:text-indigo-900 p-1 rounded-md hover:bg-indigo-50 transition-colors"
//                                 title="Edit"
//                               >
//                                 <FiEdit2 />
//                               </button>
//                               <button
//                                 onClick={() => openDeleteModal(item)}
//                                 className="text-red-600 hover:text-red-900 p-1 rounded-md hover:bg-red-50 transition-colors"
//                                 title="Delete"
//                               >
//                                 <FiTrash2 />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           )}
//         </main>
//       </div>

//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && (
//         <div className="fixed z-50 inset-0 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>
//             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
//             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                     <FiTrash2 className="h-6 w-6 text-red-600" />
//                   </div>
//                   <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                     <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Item</h3>
//                     <div className="mt-2">
//                       <p className="text-sm text-gray-500">
//                         Are you sure you want to delete <span className="font-semibold">{selectedItem?.name}</span>? This action cannot be undone.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                 <button
//                   onClick={handleDeleteItem}
//                   disabled={loading.delete}
//                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
//                 >
//                   {loading.delete ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Deleting...
//                     </>
//                   ) : 'Delete'}
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteModal(false)}
//                   className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Item Modal */}
//       {showEditModal && (
//         <div className="fixed z-50 inset-0 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>
//             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
//             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
//                     <FiEdit2 className="h-6 w-6 text-indigo-600" />
//                   </div>
//                   <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
//                     <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Item</h3>
//                     <div className="mt-2">
//                       <div className="space-y-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                           <input
//                             type="text"
//                             name="name"
//                             value={editFormData.name}
//                             onChange={handleEditFormChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
//                           <input
//                             type="text"
//                             name="role"
//                             value={editFormData.role}
//                             onChange={handleEditFormChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                           <textarea
//                             name="intro"
//                             value={editFormData.intro}
//                             onChange={handleEditFormChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                             rows="3"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
//                           <div className="mt-1 relative rounded-md shadow-sm">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                               <span className="text-gray-500 sm:text-sm">Rs.</span>
//                             </div>
//                             <input
//                               type="text"
//                               name="Price"
//                               value={editFormData.Price}
//                               onChange={handleEditFormChange}
//                               className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 pr-12 sm:text-sm border-gray-300 rounded-md"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                 <button
//                   onClick={handleUpdateItem}
//                   disabled={loading.update}
//                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
//                 >
//                   {loading.update ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Updating...
//                     </>
//                   ) : 'Update'}
//                 </button>
//                 <button
//                   onClick={() => setShowEditModal(false)}
//                   className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiPlusCircle, 
  FiTrash2, 
  FiLogOut, 
  FiList, 
  FiMenu, 
  FiX,
  FiUser,
  FiChevronDown,
  FiChevronUp,
  FiEdit2,
  FiShoppingBag,
  FiDollarSign,
  FiTag,
  FiInfo,
  FiCheckCircle,
  FiClock,
  FiSun,
  FiMoon,
  FiBarChart2,
  FiPieChart,
  FiTrendingUp,
  FiActivity
} from "react-icons/fi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const AdminPanel = () => {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState({
    delete: false,
    fetch: false,
    add: false,
    fetchOrders: false,
    update: false
  });
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: "",
    role: "",
    intro: "",
    Price: "",
    image: null
  });
  const [darkMode, setDarkMode] = useState(false);
  const [stats, setStats] = useState({
    totalItems: 0,
    totalOrders: 0,
    totalRevenue: 0,
    recentOrders: []
  });
  const navigate = useNavigate();

  const API_BASE_URL = "http://localhost:5000/api/auth";

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const fetchItems = async () => {
    try {
      setLoading(prev => ({...prev, fetch: true}));
      const response = await fetch(`${API_BASE_URL}/items`);
      const json = await response.json();
      if (json.Success) {
        setItems(json.items);
        updateStats(json.items, orders);
        toast.success("Items loaded successfully");
      } else {
        setError(json.message || "Failed to fetch items");
        toast.error(json.message || "Failed to fetch items");
      }
    } catch (err) {
      setError(err.message || "Error fetching items");
      toast.error(err.message || "Error fetching items");
    } finally {
      setLoading(prev => ({...prev, fetch: false}));
    }
  };

  const fetchOrders = async () => {
    try {
      setLoading(prev => ({...prev, fetchOrders: true}));
      const response = await fetch(`${API_BASE_URL}/orders`);
      const json = await response.json();
      
      if (response.ok) {
        setOrders(json.orders || []);
        updateStats(items, json.orders || []);
        toast.success("Orders loaded successfully");
      } else {
        setError(json.message || "Failed to fetch orders");
        toast.error(json.message || "Failed to fetch orders");
      }
    } catch (err) {
      setError(err.message || "Error fetching orders");
      toast.error(err.message || "Error fetching orders");
      setOrders([]);
    } finally {
      setLoading(prev => ({...prev, fetchOrders: false}));
    }
  };

  // Update stats whenever items or orders change
  const updateStats = (items, orders) => {
    const totalItems = items.length;
    const totalOrders = orders.length;
    const recentOrders = orders.slice(0, 5);
    const totalRevenue = items.reduce((sum, item) => sum + (parseFloat(item.Price) || 0), 0);
    
    setStats({
      totalItems,
      totalOrders,
      totalRevenue,
      recentOrders
    });
  };

  const openDeleteModal = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleDeleteItem = async () => {
    try {
      setLoading(prev => ({...prev, delete: true}));
      const response = await fetch(`${API_BASE_URL}/item/${selectedItem._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete item');
      }

      if (data.Success) {
        toast.success(data.message || "Item deleted successfully");
        fetchItems();
      } else {
        throw new Error(data.message || 'Failed to delete item');
      }
    } catch (err) {
      toast.error(err.message || "Error deleting item");
    } finally {
      setLoading(prev => ({...prev, delete: false}));
      setShowDeleteModal(false);
    }
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditFormData({
      name: item.name,
      role: item.role,
      intro: item.intro || "",
      Price: item.Price || item.Price, // Handle both cases
      image: null
    });
    setShowEditModal(true);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdateItem = async () => {
    try {
      setLoading(prev => ({...prev, update: true}));
      const response = await fetch(`${API_BASE_URL}/item/${selectedItem._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editFormData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to update item');
      }

      if (data.Success) {
        toast.success("Item updated successfully");
        fetchItems();
        setShowEditModal(false);
      } else {
        throw new Error(data.message || 'Failed to update item');
      }
    } catch (err) {
      toast.error(err.message || "Error updating item");
    } finally {
      setLoading(prev => ({...prev, update: false}));
    }
  };

  useEffect(() => {
    fetchItems();
    fetchOrders();
  }, []);

  const handleLogout = () => {
    console.log("Admin logged out");
    navigate("/login");
  };

  const handleAddItemClick = () => {
    navigate("/add");
  };

  // Chart data for items by role
  const getItemsByRoleData = () => {
    const roleCounts = {};
    items.forEach(item => {
      roleCounts[item.role] = (roleCounts[item.role] || 0) + 1;
    });
    
    return {
      labels: Object.keys(roleCounts),
      datasets: [
        {
          label: 'Items by Role',
          data: Object.values(roleCounts),
          backgroundColor: [
            'rgba(99, 102, 241, 0.7)',
            'rgba(167, 139, 250, 0.7)',
            'rgba(236, 72, 153, 0.7)',
            'rgba(249, 168, 212, 0.7)',
            'rgba(16, 185, 129, 0.7)',
          ],
          borderColor: [
            'rgba(99, 102, 241, 1)',
            'rgba(167, 139, 250, 1)',
            'rgba(236, 72, 153, 1)',
            'rgba(249, 168, 212, 1)',
            'rgba(16, 185, 129, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  // Chart data for revenue by item
  const getRevenueByItemData = () => {
    const sortedItems = [...items].sort((a, b) => (parseFloat(b.Price) || 0) - (parseFloat(a.Price) || 0)).slice(0, 5);
    
    return {
      labels: sortedItems.map(item => item.name),
      datasets: [
        {
          label: 'Revenue (Rs.)',
          data: sortedItems.map(item => parseFloat(item.Price) || 0),
          backgroundColor: 'rgba(99, 102, 241, 0.7)',
          borderColor: 'rgba(99, 102, 241, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  // Chart data for orders over time (mock data)
  const getOrdersOverTimeData = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const mockData = days.map(day => Math.floor(Math.random() * 10) + 5);
    
    return {
      labels: days,
      datasets: [
        {
          label: 'Orders',
          data: mockData,
          fill: false,
          backgroundColor: 'rgba(16, 185, 129, 0.7)',
          borderColor: 'rgba(16, 185, 129, 1)',
          tension: 0.3,
        },
      ],
    };
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Toast Container */}
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        toastClassName="shadow-lg"
        progressClassName="bg-gradient-to-r from-indigo-500 to-purple-500"
        theme={darkMode ? 'dark' : 'light'}
      />

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 transform shadow-xl transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 ${
          darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gradient-to-b from-indigo-700 to-purple-800 text-white'
        }`}
      >
        {/* Close Button (Mobile) */}
        <div className="md:hidden flex justify-end p-4">
          <button
            className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-white hover:text-gray-200'}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Profile Section */}
        <div className={`flex items-center p-6 ${darkMode ? 'border-gray-700' : 'border-indigo-600'} border-b`}>
          <div className="relative">
            <div 
              className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white bg-opacity-20 hover:bg-opacity-30'
              }`}
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <FiUser className="text-xl" />
            </div>
          </div>
          <div className="ml-4">
            <p className="font-semibold">Admin User</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-indigo-200'}`}>Administrator</p>
          </div>
          <button 
            className={`ml-auto transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-indigo-200 hover:text-white'}`}
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          >
            {isProfileDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>

        {/* Profile Dropdown */}
        {isProfileDropdownOpen && (
          <div className={`mx-4 mt-2 mb-4 rounded-lg shadow-lg overflow-hidden ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          }`}>
            <button
              onClick={() => {
                setActiveSection("dashboard");
                setIsProfileDropdownOpen(false);
                setIsSidebarOpen(false);
              }}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${
                darkMode ? 'hover:bg-gray-600 text-gray-100' : 'hover:bg-gray-100 text-gray-700'
              } ${
                activeSection === "dashboard" ? (darkMode ? 'bg-gray-600 font-medium' : 'bg-gray-100 font-medium') : ''
              }`}
            >
              <FiBarChart2 className={`mr-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
              Dashboard
            </button>
            <button
              onClick={() => {
                setActiveSection("items-list");
                setIsProfileDropdownOpen(false);
                setIsSidebarOpen(false);
              }}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${
                darkMode ? 'hover:bg-gray-600 text-gray-100' : 'hover:bg-gray-100 text-gray-700'
              } ${
                activeSection === "items-list" ? (darkMode ? 'bg-gray-600 font-medium' : 'bg-gray-100 font-medium') : ''
              }`}
            >
              <FiList className={`mr-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
              Items List
            </button>
            <button
              onClick={() => {
                setActiveSection("orders-list");
                setIsProfileDropdownOpen(false);
                setIsSidebarOpen(false);
              }}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${
                darkMode ? 'hover:bg-gray-600 text-gray-100' : 'hover:bg-gray-100 text-gray-700'
              } ${
                activeSection === "orders-list" ? (darkMode ? 'bg-gray-600 font-medium' : 'bg-gray-100 font-medium') : ''
              }`}
            >
              <FiShoppingBag className={`mr-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
              Orders List
            </button>
            <button
              onClick={handleAddItemClick}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${
                darkMode ? 'hover:bg-gray-600 text-gray-100' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <FiPlusCircle className={`mr-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
              Add Item
            </button>
            <button
              onClick={handleLogout}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${
                darkMode ? 'hover:bg-gray-600 text-gray-100' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <FiLogOut className={`mr-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
              Logout
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <span className={`rounded-full w-8 h-8 flex items-center justify-center mr-3 ${
              darkMode ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-700'
            }`}>A</span>
            Admin Panel
          </h2>
          
          <nav className="space-y-2">
            <button
              onClick={() => {
                setActiveSection("dashboard");
                setIsSidebarOpen(false);
              }}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${
                activeSection === "dashboard" 
                  ? (darkMode ? 'bg-gray-700 text-white shadow-md' : 'bg-white text-indigo-700 shadow-md')
                  : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-indigo-100 hover:bg-indigo-600')
              }`}
            >
              <FiBarChart2 className="mr-3" />
              Dashboard
            </button>
            
            <button
              onClick={() => {
                setActiveSection("items-list");
                setIsSidebarOpen(false);
              }}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${
                activeSection === "items-list" 
                  ? (darkMode ? 'bg-gray-700 text-white shadow-md' : 'bg-white text-indigo-700 shadow-md')
                  : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-indigo-100 hover:bg-indigo-600')
              }`}
            >
              <FiList className="mr-3" />
              Items List
              {activeSection === "items-list" && (
                <span className={`ml-auto text-xs font-bold px-2 py-1 rounded-full ${
                  darkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {stats.totalItems}
                </span>
              )}
            </button>
            
            <button
              onClick={() => {
                setActiveSection("orders-list");
                setIsSidebarOpen(false);
              }}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${
                activeSection === "orders-list" 
                  ? (darkMode ? 'bg-gray-700 text-white shadow-md' : 'bg-white text-indigo-700 shadow-md')
                  : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-indigo-100 hover:bg-indigo-600')
              }`}
            >
              <FiShoppingBag className="mr-3" />
              Orders List
              {activeSection === "orders-list" && (
                <span className={`ml-auto text-xs font-bold px-2 py-1 rounded-full ${
                  darkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {stats.totalOrders}
                </span>
              )}
            </button>
            
            <button
              onClick={handleAddItemClick}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${
                darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-indigo-100 hover:bg-indigo-600'
              }`}
            >
              <FiPlusCircle className="mr-3" />
              Add Item
            </button>
          </nav>
        </div>

        {/* Footer */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 ${darkMode ? 'border-gray-700' : 'border-indigo-600'} border-t`}>
          <div className="flex items-center justify-between">
            <button
              onClick={toggleDarkMode}
              className={`flex items-center justify-center p-2 rounded-lg transition-all ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={handleLogout}
              className={`flex items-center justify-center px-4 py-2 rounded-lg transition-all ${
                darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-indigo-100 hover:bg-indigo-600'
              }`}
            >
              <FiLogOut className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button
        className={`fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg shadow-lg transition-colors ${
          darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FiMenu size={24} />
      </button>

      {/* Main Content */}
      <div className="md:ml-64 transition-all duration-300">
        {/* Header */}
        <header className={`shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {activeSection === "dashboard" ? "Dashboard Overview" : 
               activeSection === "items-list" ? "Items Management" : 
               activeSection === "orders-list" ? "Orders Management" : "Admin Panel"}
            </h1>
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>
              <div className="relative">
                <button className={`p-1 rounded-full transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}>
                  <FiUser className={darkMode ? 'text-gray-300' : 'text-gray-600'} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Section */}
        {activeSection === "dashboard" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Total Items Card */}
              <div className={`rounded-lg overflow-hidden shadow transition-all hover:shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <FiTag className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className={`text-sm font-medium truncate ${
                          darkMode ? 'text-gray-300' : 'text-gray-500'
                        }`}>Total Items</dt>
                        <dd className="flex items-baseline">
                          <div className={`text-2xl font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>{stats.totalItems}</div>
                          <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                            items.length > 0 ? 'text-green-600' : 'text-gray-500'
                          }`}>
                            {items.length > 0 ? (
                              <>
                                <FiTrendingUp className="self-center flex-shrink-0 h-4 w-4" />
                                <span className="sr-only">Increased by</span>
                                {Math.floor(Math.random() * 20) + 5}%
                              </>
                            ) : 'No change'}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Orders Card */}
              <div className={`rounded-lg overflow-hidden shadow transition-all hover:shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                      <FiShoppingBag className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className={`text-sm font-medium truncate ${
                          darkMode ? 'text-gray-300' : 'text-gray-500'
                        }`}>Total Orders</dt>
                        <dd className="flex items-baseline">
                          <div className={`text-2xl font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>{stats.totalOrders}</div>
                          <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                            orders.length > 0 ? 'text-green-600' : 'text-gray-500'
                          }`}>
                            {orders.length > 0 ? (
                              <>
                                <FiTrendingUp className="self-center flex-shrink-0 h-4 w-4" />
                                <span className="sr-only">Increased by</span>
                                {Math.floor(Math.random() * 30) + 10}%
                              </>
                            ) : 'No change'}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue Card */}
              <div className={`rounded-lg overflow-hidden shadow transition-all hover:shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                      <FiDollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className={`text-sm font-medium truncate ${
                          darkMode ? 'text-gray-300' : 'text-gray-500'
                        }`}>Total Revenue</dt>
                        <dd className="flex items-baseline">
                          <div className={`text-2xl font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>Rs.{stats.totalRevenue.toFixed(2)}</div>
                          <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                            stats.totalRevenue > 0 ? 'text-green-600' : 'text-gray-500'
                          }`}>
                            {stats.totalRevenue > 0 ? (
                              <>
                                <FiTrendingUp className="self-center flex-shrink-0 h-4 w-4" />
                                <span className="sr-only">Increased by</span>
                                {Math.floor(Math.random() * 25) + 8}%
                              </>
                            ) : 'No change'}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity Card */}
              <div className={`rounded-lg overflow-hidden shadow transition-all hover:shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <FiActivity className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className={`text-sm font-medium truncate ${
                          darkMode ? 'text-gray-300' : 'text-gray-500'
                        }`}>Recent Orders</dt>
                        <dd className="flex items-baseline">
                          <div className={`text-2xl font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>{stats.recentOrders.length}</div>
                          <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                            stats.recentOrders.length > 0 ? 'text-green-600' : 'text-gray-500'
                          }`}>
                            {stats.recentOrders.length > 0 ? (
                              <>
                                <FiCheckCircle className="self-center flex-shrink-0 h-4 w-4" />
                                <span className="sr-only">Active</span>
                                Today
                              </>
                            ) : 'None'}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Items by Role Pie Chart */}
              <div className={`rounded-lg shadow p-6 transition-all hover:shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <h3 className={`text-lg font-medium mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Items by Role</h3>
                <div className="h-64">
                  <Pie 
                    data={getItemsByRoleData()} 
                    options={{
                      plugins: {
                        legend: {
                          position: 'right',
                          labels: {
                            color: darkMode ? '#fff' : '#000'
                          }
                        }
                      },
                      maintainAspectRatio: false
                    }} 
                  />
                </div>
              </div>

              {/* Revenue by Item Bar Chart */}
              <div className={`rounded-lg shadow p-6 transition-all hover:shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <h3 className={`text-lg font-medium mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Top Revenue Items</h3>
                <div className="h-64">
                  <Bar 
                    data={getRevenueByItemData()} 
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: 'top',
                          labels: {
                            color: darkMode ? '#fff' : '#000'
                          }
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          ticks: {
                            color: darkMode ? '#fff' : '#000'
                          },
                          grid: {
                            color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                          }
                        },
                        x: {
                          ticks: {
                            color: darkMode ? '#fff' : '#000'
                          },
                          grid: {
                            color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                          }
                        }
                      },
                      maintainAspectRatio: false
                    }} 
                  />
                </div>
              </div>

              {/* Orders Over Time Line Chart */}
              <div className={`rounded-lg shadow p-6 transition-all hover:shadow-lg lg:col-span-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <h3 className={`text-lg font-medium mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Orders This Week</h3>
                <div className="h-80">
                  <Line 
                    data={getOrdersOverTimeData()} 
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: 'top',
                          labels: {
                            color: darkMode ? '#fff' : '#000'
                          }
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          ticks: {
                            color: darkMode ? '#fff' : '#000'
                          },
                          grid: {
                            color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                          }
                        },
                        x: {
                          ticks: {
                            color: darkMode ? '#fff' : '#000'
                          },
                          grid: {
                            color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                          }
                        }
                      },
                      maintainAspectRatio: false
                    }} 
                  />
                </div>
              </div>
            </div>

            {/* Recent Orders Table */}
            <div className={`mt-8 rounded-lg shadow overflow-hidden transition-all hover:shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className={`px-4 py-5 sm:px-6 border-b ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              } flex justify-between items-center`}>
                <div>
                  <h3 className={`text-lg leading-6 font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>Recent Orders</h3>
                  <p className={`mt-1 max-w-2xl text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Latest customer orders
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => fetchOrders()}
                    className={`inline-flex items-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      darkMode 
                        ? 'border-gray-600 text-white bg-gray-700 hover:bg-gray-600 focus:ring-indigo-500' 
                        : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500'
                    }`}
                  >
                    Refresh Orders
                  </button>
                </div>
              </div>
              
              {loading.fetchOrders ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  {stats.recentOrders && stats.recentOrders.length > 0 ? (
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>User Name</span>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Item Name</span>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Department</span>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Semester</span>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Room Number</span>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Date</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${
                        darkMode ? 'divide-gray-700 bg-gray-800' : 'divide-gray-200 bg-white'
                      }`}>
                        {stats.recentOrders.map((order) => (
                          <tr key={order._id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                                  darkMode ? 'bg-indigo-900' : 'bg-indigo-100'
                                }`}>
                                  <FiUser className={darkMode ? 'text-indigo-300' : 'text-indigo-600'} />
                                </div>
                                <div className="ml-4">
                                  <div className={`text-sm font-medium ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                  }`}>{order.UserName}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm ${
                                darkMode ? 'text-gray-200' : 'text-gray-900'
                              }`}>{order.ItemName}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                              }`}>
                                {order.DepartmentName}
                              </span>
                            </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                              darkMode ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              {order.CurrentSemester}
                            </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                              darkMode ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              {order.RoomNumber}
                            </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                              darkMode ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              <div className="flex items-center">
                                <FiClock className={`mr-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                                {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center py-12">
                      <FiInfo className={`mx-auto h-12 w-12 ${
                        darkMode ? 'text-gray-500' : 'text-gray-400'
                      }`} />
                      <h3 className={`mt-2 text-sm font-medium ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>No recent orders</h3>
                      <p className={`mt-1 text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        There are currently no recent orders to display.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Orders List Section */}
        {activeSection === "orders-list" && (
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            <div className={`rounded-lg shadow overflow-hidden transition-all hover:shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className={`px-4 py-5 sm:px-6 border-b ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              } flex justify-between items-center`}>
                <div>
                  <h3 className={`text-lg leading-6 font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>Orders Management</h3>
                  <p className={`mt-1 max-w-2xl text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    All customer orders and their details
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => fetchOrders()}
                    className={`inline-flex items-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      darkMode 
                        ? 'border-gray-600 text-white bg-gray-700 hover:bg-gray-600 focus:ring-indigo-500' 
                        : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500'
                    }`}
                  >
                    Refresh Orders
                  </button>
                </div>
              </div>
              
              {loading.fetchOrders ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  {orders && orders.length > 0 ? (
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>User Name</span>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Item Name</span>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Department</span>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Semester</span>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Room Number</span>
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Date</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${
                        darkMode ? 'divide-gray-700 bg-gray-800' : 'divide-gray-200 bg-white'
                      }`}>
                        {orders.map((order) => (
                          <tr key={order._id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                                  darkMode ? 'bg-indigo-900' : 'bg-indigo-100'
                                }`}>
                                  <FiUser className={darkMode ? 'text-indigo-300' : 'text-indigo-600'} />
                                </div>
                                <div className="ml-4">
                                  <div className={`text-sm font-medium ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                  }`}>{order.UserName}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm ${
                                darkMode ? 'text-gray-200' : 'text-gray-900'
                              }`}>{order.ItemName}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                              }`}>
                                {order.DepartmentName}
                              </span>
                            </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                              darkMode ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              {order.CurrentSemester}
                            </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                              darkMode ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              {order.RoomNumber}
                            </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                              darkMode ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              <div className="flex items-center">
                                <FiClock className={`mr-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                                {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center py-12">
                      <FiInfo className={`mx-auto h-12 w-12 ${
                        darkMode ? 'text-gray-500' : 'text-gray-400'
                      }`} />
                      <h3 className={`mt-2 text-sm font-medium ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>No orders</h3>
                      <p className={`mt-1 text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        There are currently no orders in the system.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Items List Section */}
        {activeSection === "items-list" && (
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            <div className={`rounded-lg shadow overflow-hidden transition-all hover:shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className={`px-4 py-5 sm:px-6 border-b ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              } flex justify-between items-center`}>
                <div>
                  <h3 className={`text-lg leading-6 font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>Items Management</h3>
                  <p className={`mt-1 max-w-2xl text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Manage all available items in the system
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => fetchItems()}
                    className={`inline-flex items-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      darkMode 
                        ? 'border-gray-600 text-white bg-gray-700 hover:bg-gray-600 focus:ring-indigo-500' 
                        : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500'
                    }`}
                  >
                    Refresh Items
                  </button>
                  <button
                    onClick={handleAddItemClick}
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      darkMode 
                        ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500' 
                        : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white'
                    }`}
                  >
                    <FiPlusCircle className="-ml-1 mr-2 h-5 w-5" />
                    Add New Item
                  </button>
                </div>
              </div>
              
              {loading.fetch ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Name</span>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Role</span>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Price</span>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-500'}>Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${
                      darkMode ? 'divide-gray-700 bg-gray-800' : 'divide-gray-200 bg-white'
                    }`}>
                      {items.map((item) => (
                        <tr key={item._id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                                darkMode ? 'bg-purple-900' : 'bg-purple-100'
                              }`}>
                                <FiTag className={darkMode ? 'text-purple-300' : 'text-purple-600'} />
                              </div>
                              <div className="ml-4">
                                <div className={`text-sm font-medium ${
                                  darkMode ? 'text-white' : 'text-gray-900'
                                }`}>{item.name}</div>
                                <div className={`text-sm truncate max-w-xs ${
                                  darkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>{item.intro}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {item.role}
                            </span>
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            Rs.{item.Price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleEditClick(item)}
                                className={`p-1 rounded-md transition-colors ${
                                  darkMode ? 'text-indigo-400 hover:bg-gray-600' : 'text-indigo-600 hover:bg-indigo-50'
                                }`}
                                title="Edit"
                              >
                                <FiEdit2 />
                              </button>
                              <button
                                onClick={() => openDeleteModal(item)}
                                className={`p-1 rounded-md transition-colors ${
                                  darkMode ? 'text-red-400 hover:bg-gray-600' : 'text-red-600 hover:bg-red-50'
                                }`}
                                title="Delete"
                              >
                                <FiTrash2 />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className={`inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className={`px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="sm:flex sm:items-start">
                  <div className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${
                    darkMode ? 'bg-red-900' : 'bg-red-100'
                  }`}>
                    <FiTrash2 className={`h-6 w-6 ${
                      darkMode ? 'text-red-300' : 'text-red-600'
                    }`} />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className={`text-lg leading-6 font-medium ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Delete Item</h3>
                    <div className="mt-2">
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        Are you sure you want to delete <span className="font-semibold">{selectedItem?.name}</span>? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <button
                  onClick={handleDeleteItem}
                  disabled={loading.delete}
                  className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ${
                    darkMode 
                      ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white' 
                      : 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white'
                  }`}
                >
                  {loading.delete ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Deleting...
                    </>
                  ) : 'Delete'}
                </button>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className={`mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm ${
                    darkMode 
                      ? 'border-gray-600 bg-gray-600 hover:bg-gray-500 focus:ring-indigo-500 text-white' 
                      : 'border-gray-300 bg-white hover:bg-gray-50 focus:ring-indigo-500 text-gray-700'
                  }`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Item Modal */}
      {showEditModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className={`inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className={`px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="sm:flex sm:items-start">
                  <div className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${
                    darkMode ? 'bg-indigo-900' : 'bg-indigo-100'
                  }`}>
                    <FiEdit2 className={`h-6 w-6 ${
                      darkMode ? 'text-indigo-300' : 'text-indigo-600'
                    }`} />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className={`text-lg leading-6 font-medium ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Edit Item</h3>
                    <div className="mt-2">
                      <div className="space-y-4">
                        <div>
                          <label className={`block text-sm font-medium mb-1 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>Name</label>
                          <input
                            type="text"
                            name="name"
                            value={editFormData.name}
                            onChange={handleEditFormChange}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white' 
                                : 'border-gray-300 text-gray-700'
                            }`}
                          />
                        </div>
                        <div>
                          <label className={`block text-sm font-medium mb-1 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>Role</label>
                          <input
                            type="text"
                            name="role"
                            value={editFormData.role}
                            onChange={handleEditFormChange}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white' 
                                : 'border-gray-300 text-gray-700'
                            }`}
                          />
                        </div>
                        <div>
                          <label className={`block text-sm font-medium mb-1 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>Description</label>
                          <textarea
                            name="intro"
                            value={editFormData.intro}
                            onChange={handleEditFormChange}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white' 
                                : 'border-gray-300 text-gray-700'
                            }`}
                            rows="3"
                          />
                        </div>
                        <div>
                          <label className={`block text-sm font-medium mb-1 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>Price</label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              <span className="sm:text-sm">Rs.</span>
                            </div>
                            <input
                              type="text"
                              name="Price"
                              value={editFormData.Price}
                              onChange={handleEditFormChange}
                              className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 pr-12 sm:text-sm rounded-md ${
                                darkMode 
                                  ? 'bg-gray-700 border-gray-600 text-white' 
                                  : 'border-gray-300 text-gray-700'
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <button
                  onClick={handleUpdateItem}
                  disabled={loading.update}
                  className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ${
                    darkMode 
                      ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white' 
                      : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white'
                  }`}
                >
                  {loading.update ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Updating...
                    </>
                  ) : 'Update'}
                </button>
                <button
                  onClick={() => setShowEditModal(false)}
                  className={`mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm ${
                    darkMode 
                      ? 'border-gray-600 bg-gray-600 hover:bg-gray-500 focus:ring-indigo-500 text-white' 
                      : 'border-gray-300 bg-white hover:bg-gray-50 focus:ring-indigo-500 text-gray-700'
                  }`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;