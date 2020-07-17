function sharepage() {
    if (navigator.share) {
      navigator.share({
        title: 'installa 1bcremonablog app',
        text: 'installa l applicazione di 1bcremonablog.com',
        url: 'https://app.1bcremonablog.com/installa/',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
    
  }