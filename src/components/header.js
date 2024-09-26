const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  let div = document.createElement('div');
  let date_span = document.createElement('span');
  let h1 = document.createElement('h1');
  let temp_span = document.createElement('span');
  
  div.classList.add('header');
  date_span.classList.add('date');
  temp_span.classList.add('temp');
  
  date_span.textContent = `${date}`;
  h1.textContent = `${title}`;
  temp_span.textContent = `${temp}`;

  div.appendChild(date_span);
  div.appendChild(h1);
  div.appendChild(temp_span);
  return div;
  
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector).appendChild(Header('Hello','04/16/2021',6));
}

export { Header, headerAppender }
