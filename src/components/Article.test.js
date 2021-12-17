import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render } from 'express/lib/response';
// import axios
// const article = {
//     id: 'aMqwd', //unique article id
//     headline: "headline", //title of article
//     createdOn: '2021-08-09T18:02:38-04:00', 
//     summary: "summary", //short summary statement of article
//     author: 'Linus Torvalds',
//     body: "Lorem ipusm dolor sept."  //paragraph of article text
//  };

// const handleDelete = () => {
//     console.log('deleted');
// }
 
// const handleEditSelect = () => {
//      console.log('editSelected');
// }

// test('renders component without errors', ()=> {
//     render(<Article key={article.id} article={article} handleDelete={handleDelete} handleEditSelect={handleEditSelect} />)
// });

//  test('renders headline, author from the article when passed in through props', ()=> {

// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.