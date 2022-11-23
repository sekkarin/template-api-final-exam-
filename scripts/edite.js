console.log("scripts run");

async function main() {
    console.log("UPDATE");
   
    const data = {
        title: title,
        isbn: isbn,
        pageCount: pageCount,
        thumbnailUrl: thumbnailUrl,
        shortDescription: shortDescription,
        longDescription: longDescription,
        status: status,
        authors: authors,
        categories: categories,
        publishedDate: "2009-04-01T00:00:00.000-0700"

    }
    await fetch(`hURL`,
        {
            method: "++++",
            mode: 'cors', cache: 'no-cache',
            credentials: 'same-origin', headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            alert("เพิ่มข้อมูล สำเร็จ")
        }).catch(
            err => {
                console.log(err);
            }
        )
}








   // const url = new URL(document.location).searchParams
    // const isbn = url.get("isbn");
    // const title = document.getElementById("title").value
    // const pageCount = document.getElementById("pageCount").value
    // const thumbnailUrl = document.getElementById("thumbnailUrl").value
    // const shortDescription = document.getElementById("shortDescription").value
    // const longDescription = document.getElementById("longDescription").value
    // const status = document.getElementById("status").value
    // const authors = document.getElementById("authors").value
    // const categories = document.getElementById("categories").value