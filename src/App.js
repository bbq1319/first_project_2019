import React from 'react';
import Frog from './Frog';
import PropTypes from 'prop-types';

const mobilOs = [
  {
    id: 1,
    name : 'Android',
    image : 'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwiRmKD7oY3mAhWbF4gKHeBoD8AQjRx6BAgBEAQ&url=http%3A%2F%2Fm.blog.naver.com%2Ffastcampus%2F220981548442&psig=AOvVaw0lfD0kk2aUNN4P4-mLucZN&ust=1575042843886625',
    rating : 5.0
  },
  {
    id: 2,
    name : 'IOS',
    image : 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiDh7Htno3mAhUkJaYKHV-LC48QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.theverge.com%2F2019%2F10%2F8%2F20905166%2Fios-13-1-review-apple-iphone-update-software-app-bug-fixes-patches&psig=AOvVaw1IM1bJ_Ir6wf7JmIoxjBN5&ust=1575042005620518',
    rating : 4.0
  }
];

function List(props) {
  return <h1>I like {props.os} from {props.name}</h1>;
}

function OS({name, img, rating}) {
  return (
    <div>
      <h3>name: {name}</h3>
      <h2>{rating} / 5.0</h2>
      <img src={img} alt={name}/>
    </div>
  );
}
OS.prototype = {
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Frog />
      <List 
        os="Android"
        name='msKim'
      />
      {mobilOs.map(args => 
        <OS key={args.id} name={args.name} img={args.image} rating={args.rating} />
      )}
    </div>
  );
}

export default App;
