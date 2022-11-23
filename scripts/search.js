const showALLBook = (dataAllBook) => {
   

}
async function main() {
    const URL_BOOK = "https://us-central1-webservices-314bf.cloudfunctions.net/bookstore/api/v1/"

    const url = new URL(document.location).searchParams
    const search = url.get("search");
    const res = await fetch("URL",
        {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    const result = []
    const dataAllBook = await res.json()
    const data = dataAllBook
    for (let index = 0; index < data.length; index++) {
        
    }
    result.slice(0,20).forEach(e=>{
        // showALLBook(e)
    })
    
}
main()


// const dataBook = data[index];
        // let title = dataBook["title"].toLowerCase()
        // console.log(title);
        // if(title.includes(search.toLowerCase())){
        //     result.push(data[index])
        // }