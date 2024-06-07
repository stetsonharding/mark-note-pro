export type Tag ={
    id: string;
    label: string
}


export type Note ={
    id: number
   title: string;
   tags: Tag[];
   markdown: string;
}