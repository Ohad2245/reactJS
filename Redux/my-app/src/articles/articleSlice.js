import { createSlice, nanoid } from "@reduxjs/toolkit";

// first state for the articles:
const initialState = [
    {id: nanoid(), title:'about dolphins', content:'They are very smart'},
    {id: nanoid(), title:'about tigers', content:'They are predators'},
];

// Make reducer function with initial data
const articlesSlice = createSlice({
    name:'articles',
    initialState,
    // Add a function to add a new article
    reducers: {
        articleAdded(state, action){
            state.push(action.payload)
        },
        // Add reducer function 
        articleUpdated(state, action){
            // destructuing
            const { id, title, content } = action.payload; 
            // find which article to update by id
            const exisitingArticle = state.find(article => article.id === id);
            if(exisitingArticle){
                exisitingArticle.title = title;
                exisitingArticle.content = content;
            }
        }
    }
})

// export the 2 functions so we can use them anywhere in our app:
export const { articleAdded, articleUpdated } = articlesSlice.actions;

export default articlesSlice.reducer;