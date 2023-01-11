let httpRequest;    // a global variable

function makeRequest(){
    let url = 'https://reqres.in/api/users?page=1'; 
    httpRequest = new XMLHttpRequest();     // make an HTTP request object

    if(!httpRequest){
        alert('Cannot create an XMLHTTP instance');
          return false;
    }
    // register a request listener
    httpRequest.onreadystatechange = showContents;

    // make the HTTP request 
    httpRequest.open('get', url, true);
    httpRequest.send();
}

// the function that handles the serve response
function showContents(){
    // check for response state
    if(httpRequest.readyState === 4){
        // check the response code
        if(httpRequest.status === 200){
            let jsObj = JSON.parse(httpRequest.responseText);
            console.log("jsObj: ", jsObj); //for debugging
            loadData(jsObj);
        }
    }
}
window.onload = makeRequest; // entry point for JS code

//Load jsObj data and create cards group
function loadData(jsObj){
    let cards = document.querySelector('.cards');   //select by class

    for(i = 0; i < jsObj.data.length; i++){
        //create article
        let article = document.createElement('article');
        article.class = 'card';                 //article.setAttribute('class', 'card');

        //create header & h2
        let header = document.createElement('div');
        let h2 = document.createElement('h2');
        h2.innerHTML = jsObj.data[i].first_name + ' ' +jsObj.data[i].last_name;
        header.appendChild(h2);
        article.appendChild(header);

        //create img
        let img = document.createElement('img');
        img.src = jsObj.data[i].avatar;     //img.setAttribute('src', jsObj.data[i].avatar);
        img.alt = h2;
        article.appendChild(img);

        //create div -> content
        let div = document.createElement('div');
        div.class = 'content';

        //create heading "Email"
        let h3 = document.createElement('h3');
        h3.innerHTML = 'Email:';
        div.appendChild(h3);

        // create email address
        let p = document.createElement('p');
        p.innerHTML = jsObj.data[i].email;
        div.appendChild(p);
        article.appendChild(div);

        cards.appendChild(article);
    }
}