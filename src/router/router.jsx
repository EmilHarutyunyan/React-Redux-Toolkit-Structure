import React from 'react'
import {Navigate, Route,createBrowserRouter,createRoutesFromElements} from "react-router-dom"
// import PrivateRouter from './PrivateRouter'

import Layout from '../layout/Layout'
import { ABOUT, BLOG, HOME, NOT_FOUND_PAGE } from './route-path'
import TokenService from '../services/token.service'
// Pages
import { About, Blog, ErrorPage, Home, Login, NotFoundPage } from "../pages";
import PrivateRouter from './PrivateRouter'



  const user = TokenService.getUser() || null
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path={ABOUT}
          element={<About />}
          handle={{ scrollMode: "pathname" }}
        />
        <Route
          path={BLOG}
          element={
            <PrivateRouter>
              <Blog />
            </PrivateRouter>
          }
          errorElement={<ErrorPage/>}
        />
        {user ? (
          <Route path="/login" element={<Navigate to={"/"} />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        {/* <Route
          path="/profile"
          element={
            <PrivateRouter>
              <Profile />
            </PrivateRouter>
          }
  
        />
        
  
        {user ? (
          <Route path="/register" element={<Navigate to="/" />} />
        ) : (
          <Route path="/register" element={<Register />} />
        )} */}
        <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Route>
    )
  );

export default router

