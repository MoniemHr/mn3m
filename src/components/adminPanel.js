import React from 'react'
const data = [
    { ProductName: "Anom", ProductSize: 19, ProductPrice: "Male", ProductDescreption: "helloooo" ,ProductImage:"image" },
    { ProductName: "Anom", ProductSize: 19, ProductPrice: "Male", ProductDescreption: "helloooo" ,ProductImage:"image" },
    { ProductName: "Anom", ProductSize: 19, ProductPrice: "Male", ProductDescreption: "helloooo" ,ProductImage:"image" },
  
  ]
const AdminPanel = () => {
  return (
    <>
    <div className="row m-5">
        <div className="col-md-4 UploadContainer">
            <h1 className='HeadTitle text-center mb-5'>Add Your Product</h1>
            <div>
            <h3>Product Name </h3>
            <input className='InputFirst' type="text" name="name" />
            </div>
            <div>
            <h3>Product Size </h3>
            <input className='InputFirst' type="text" name="name" />
            </div>
            <div>
            <h3>Product Price </h3>
            <input className='InputFirst' type="text" name="name" />
            </div>
            <div>
            <h3>Product Descreption </h3>
            <textarea class="form-control" className='TextArea' aria-label="With textarea"></textarea>
            </div>
            <div>
            <h3>Product Image </h3>
            <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupFile01">Upload</label>
            <input type="file" class="form-control" id="inputGroupFile01"/>
            </div>
            <button type="button" class="btn btn-success">Add Product</button>
            </div>
            
        </div>
        <div className="col-md-8 tableContainer">
        <table>
        <tr>
          <th>ProductName</th>
          <th>ProductSize</th>
          <th>ProductPrice</th>
          <th>ProductDescreption</th>
          <th>ProductImage</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.ProductName}</td>
              <td>{val.ProductSize}</td>
              <td>{val.ProductPrice}</td>
              <td>{val.ProductDescreption}</td>
              <td>{val.ProductImage}</td>
            </tr>
          )
        })}
      </table>
        </div>
    </div>
    </>
  )
}


export default AdminPanel;