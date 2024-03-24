import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';
const posts = [
  {
    id: 1,
    title: 'Sustainability in Clothing',
    href: '#',
    description:
      'Sustainable clothing aims to minimize environmental impact throughtout its lifecycle,from production to disposal.This includes using eco-friendly materials like silk,hemp,cotton,wool,jute etc...',
    date: 'Mar 1, 2024',
    datetime: '2024-03-01',
    category: { title: 'Clothing', href: '#' },
    author: {
      name: 'Tarun Kumar',
      role: 'Avanthi student',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Sustainability in Home Appliances',
    href: '#',
    description:
    //Many sustainable appliances are made from recycled materials and are built to last, reducing waste.Choosing sustainable home appliances not only saves money on utility bills but also contributes to a greener future for our planet.
      'Many sustainable home appliances are constructed from recycled materials and designed to be durable, thereby reducing waste. Choosing sustainable home appliances such as wooden, steel, and clay utensils, not only saves money on utility bills but also contributes to a greener future for our planet.',
    date: 'Mar 1, 2024',
    datetime: '2024-03-01',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }, 
  {
    id: 4,
    title: 'Sustainability in Beauty Products',
    href: '#',
    description:
      'Sustainable beauty products prioritize natural and organic ingredients, minimizing harmful chemicals.Eco-friendly beauty products are made without harmful chemicals,benefiting both the environment and ourselves.',
    date: 'Mar 1, 2024',
    datetime: '2024-03-01',
    category: { title: 'Beauty', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Sustainability in Food Groceries',
    href: '#',
    description:
      'Sustainable food or grocery shopping is the conscious purchase of food products that have little or no negative environmental impact. It entails purchasing environmentally friendly food such as chemical free vegetables and fruits to prioritize quality over quantity.',
    date: 'Mar 1, 2024',
    datetime: '2024-03-01',
    category: { title: 'Food and Groceries', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

const Blog = () => {
  const {loading } = useContext(AuthContext);

  if(loading) {
    return <div className='text-center mt-28'>
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
  }


  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the Sustainable GUide</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Save our Mother Earth by Learning which product is sustainable and which is not!
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog