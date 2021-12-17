import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from '@testing-library/react';
import Article from './Article';

const article = {
    author: "Lorem Ipsum",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home.",
    createdOn: "2021-12-13T13:45:28-08:00",
    headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    id: "E6Y9g",
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
 };

const mockHandleDelete = jest.fn();
 
const mockHandleEditSelect = jest.fn();


test('renders component without errors', ()=> {
    render(<Article key={article.id} article={article} handleDelete={mockHandleDelete} handleEditSelect={mockHandleEditSelect}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article key={article.id} article={article} handleDelete={mockHandleDelete} handleEditSelect={mockHandleEditSelect}/>);
    const headline = screen.queryByText(/Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it./i);
    const author = screen.queryByText(/Lorem Ipsum/i);
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
 });

test('renders "Associated Press" when no author is given', ()=> {
    const article1 = { 
        ...article,
        author: "",
     };
    render(<Article key={article.id} article={article1} handleDelete={mockHandleDelete} handleEditSelect={mockHandleEditSelect}/>);
    const author = screen.queryByText(/Associated Press/i);
    expect(author).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    render(<Article key={article.id} article={article} handleDelete={mockHandleDelete} handleEditSelect={mockHandleEditSelect}/>)
    const button = screen.queryByTestId("deleteButton");
    userEvent.click(button);
    expect(mockHandleDelete).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.