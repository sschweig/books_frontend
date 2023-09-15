//Data types
type BookType = {
    uid: number,
    book_id: string;
    title: string;
    authors?: Array<string>;
    description?: string; 
    imagePreview?: string; 
    averageRating?:number;
    ratingsCount?: number; 
    publishedDate?: string; 
}
