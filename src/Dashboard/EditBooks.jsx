import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';
import.meta.env.VITE_BACKEND_URL

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();
  // console.log(bookTitle)

  const bookCategories = [
  "Clothing",
    "Food and groceries",
    "Home appliances",
    "Beauty-care",
    "Travel leisure",
    "Stationary",
   ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };


  const  handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    // console.log(bookObj)

    // update the book object
 
    fetch(`https://sustainable-backend.vercel.app/book/${id}`, {
 
 
      method: "PATCH",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Product has been updated successfully");
      });
  };
  
    return (
      <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Upload A Product!</h2>
        <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleUpdate}>

          {/* first row */}
          <div className='flex gap-8'>

            {/* book name */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="bookTitle"
                  value="Product Title"
                />
              </div>
              <TextInput
                id="bookTitle"
                placeholder="Product Name"
                required
                type="text"
                name='bookTitle'
                className='w-full'
                defaultValue={bookTitle}
              />
            </div>

            {/* author name */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="authorName"
                  value="Product Company"
                />
              </div>
              <TextInput
                id="authorName"
                placeholder="Author Name"
                required
                type="text"
                name='authorName'
                className='w-full'
                defaultValue={authorName}
              />
            </div>

          </div>

          {/* 2nd Row */}
          <div className='flex gap-8'>
            {/* book url */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="imageURL"
                  value="Product image URL"
                />
              </div>
              <TextInput
                id="imageURL"
                placeholder="Image URL"
                required
                type="text"
                name='imageURL'
                className='w-full'
                defaultValue={imageURL}
              />
            </div>

            {/* book category */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="inputState"
                  value="Product Category"
                />
              </div>
              <Select
                id="inputState"
                name="categoryName"
                className="w-full rounded"
                value={selectedBookCategory}
                onChange={handleChangeSelectedValue}
              >
                {bookCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>

          </div>

          {/* full width div for book description */}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="bookDescription"
                value="Product Description"
              />
            </div>
            <Textarea
              id="bookDescription"
              placeholder="Book Description"
              required
              type="text"
              name='bookDescription'
              className='w-full'
              rows={4}
              defaultValue={bookDescription}
            />
          </div>


          {/* book pdf url */}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="bookPDFURL"
                value="product Link"
              />
            </div>
            <TextInput
              id="bookPDFURL"
              placeholder="Paste Book PDF URL here"
              required
              type="text"
              name='bookPDFURL'
              className='w-full'
              defaultValue={bookPDFURL}
            />
          </div>


          {/* Submit btn */}
          <Button type="submit" className='mt-5'>
            Upload Product
          </Button>

        </form>
      </div>
    )
  }

export default EditBooks
