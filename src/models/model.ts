export type Tag ={
    id: string;
    label: string
}


export type Note ={
    id: string
   title: string;
   tags: Tag[];
   markdown: string;
}