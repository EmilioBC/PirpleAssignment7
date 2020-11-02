const wrapper = document.getElementById('rectangleWrapper');
const pTags = wrapper.getElementsByTagName('p');

console.log("Here are the rectangle ID's")
for(let i=0;i< pTags.length; i++){
    setTimeout(function () {
        console.log("Here are the rectangle ID's " + pTags[i].textContent);
    }, i * 1000)
}

