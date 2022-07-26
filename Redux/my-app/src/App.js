import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddArticleForm from './articles/AddArticleForm';
import ArticlesList from './articles/ArticlesList';
import Navbar from './components/Navbar';
// 1. import: 
import { SingleArticlePage } from './articles/SingleArticlePage';
import EditArticleForm from './articles/EditArticleForm';

export default function App() {

  return (
    <div className='container'>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* Home page */}
        <Route path='/' element={
          <React.Fragment>
            <AddArticleForm/>
            <ArticlesList/>
          </React.Fragment>
        }/>

        {/* New route for specific article */}
        <Route path='/articles/:articleId' element={<SingleArticlePage/>}/>


        {/* New route for editing an article */}
        <Route path='/editArticle/:articleId' element={<EditArticleForm/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  )
}