

const categoriesAll = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesAll.length);

for (let i = 0; i < categoriesAll.length; i+=1) {
    const titleElCategory = categoriesAll[i].querySelector('h2');
    console.log("Category:", titleElCategory.textContent);
    const amountElCategory = categoriesAll[i].querySelectorAll('li');
    console.log('Elements:', amountElCategory.length);
    
};
