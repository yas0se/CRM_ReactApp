const articles = [
    { id: 1, description: 'Article 1', price: 100, discount: 10 },
    { id: 2, description: 'Article 2', price: 200, discount: 15 },
    { id: 3, description: 'Article 3', price: 300, discount: 20 },
    { id: 4, description: 'Article 4', price: 400, discount: 25 },
    { id: 5, description: 'Article 5', price: 500, discount: 30 },
  ];
  
  localStorage.setItem('articles', JSON.stringify(articles));