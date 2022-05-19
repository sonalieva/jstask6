let leftList = document.getElementById("list1");
let rightList = document.getElementById("list2");
let listItems = document.querySelectorAll("li");
let box = document.querySelector('.box');

listItems.forEach(el => {
    el.addEventListener('dragstart', function(e){
        e.dataTransfer.setData('dataId', el.getAttribute('data-id'))
    })
});


leftList.addEventListener('dragover',function(e){
    e.preventDefault();
})
rightList.addEventListener('dragover',function(e){
    e.preventDefault();
})
leftList.addEventListener('drop', function(e){
    dataId = e.dataTransfer.getData('dataId');
    li = document.querySelector('[data-id="'+dataId+'"]');
    leftList.appendChild(li);
})



rightList.addEventListener('drop', function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    rightList.appendChild(li);
})


box.addEventListener('dragover', function(e){
    e.preventDefault()
})

box.addEventListener('drop', function(e){
    dataId = e.dataTransfer.getData('dataId');
    li = document.querySelector('[data-id="'+dataId+'"]');
    newp = document.createElement('p');
    newp.style.color = 'white'; 
    newp.innerText = li.innerText;
    box.appendChild(newp);
    li.remove();

})
