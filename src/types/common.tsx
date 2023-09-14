//Data types
type BookType = {
    uid: number,
    book_id: string;
    title: string;
    authors?: Array<string>;
    description?: string; 
    imagePreview?: string; 
}

type BookListType = Array<BookType>

// ContextAPI types
type StateType = {
    query: string
    booklist: BookListType;
  };

type DataActionType = {
    type: "UPDATE_BOOK_LIST";
    booklist: BookListType;
};
type QueryUpdateActionType = {
    type: "UPDATE_QUERY";
    query: string;
};
  
type ActionType = DataActionType | QueryUpdateActionType;