# React - Router

Concepts includes ( ) = {

- RouterProvider
- createBrowserRouter
- first : Router using array object
- second : Router using createRoutesFromElements
- loader () in 'Route'
- Outlet (React-Router-Dom)
- Link, NavLink({isActive}), to=" " of react-router-dom

}

# Installation

```
npm install react-router-dom
```

## API Used == GitHub

- [API Link](https://api.github.com/users/dev7083)

### Router using Array of Objects

```
createBrowserRouter([
   {
     path: '/',
     element: <Layout />,
     children: [
       {
         path: "",
         element: <Home />
       },
       {
         path: "about",
         element: <About />
       },
       {
         path: "contact",
         element: <Contact />
       }
     ]
   }
 ])
```

### Modern Router Syntax

```
createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github' element={<Github />} />
    </Route>
  )
)
```

### Rendering Components

- RouterProvider router accepts the router value either created using array of objects or using more modern approach.

```
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
```
